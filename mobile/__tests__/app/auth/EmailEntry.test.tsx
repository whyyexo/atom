import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import EmailEntryScreen from '../../../app/(auth)/EmailEntry';

// Mock navigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Mock Supabase
jest.mock('../../../lib/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn(),
    },
  },
}));

describe('EmailEntryScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders email input and continue button', () => {
    const { getByPlaceholderText, getByText } = render(<EmailEntryScreen />);
    
    expect(getByPlaceholderText('your@email.com')).toBeTruthy();
    expect(getByText('Continue')).toBeTruthy();
  });

  it('shows error for invalid email', async () => {
    const { getByPlaceholderText, getByText } = render(<EmailEntryScreen />);
    
    const input = getByPlaceholderText('your@email.com');
    const button = getByText('Continue');

    fireEvent.changeText(input, 'invalid-email');
    fireEvent.press(button);

    await waitFor(() => {
      expect(getByText('Please enter a valid email address')).toBeTruthy();
    });
  });

  it('navigates to password entry for existing user', async () => {
    const { supabase } = require('../../../lib/supabase');
    supabase.auth.signInWithPassword.mockResolvedValue({
      error: { message: 'Invalid login credentials' },
    });

    const { getByPlaceholderText, getByText } = render(<EmailEntryScreen />);
    
    const input = getByPlaceholderText('your@email.com');
    const button = getByText('Continue');

    fireEvent.changeText(input, 'existing@example.com');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('PasswordEntry', {
        email: 'existing@example.com',
      });
    });
  });

  it('navigates to signup for new user', async () => {
    const { supabase } = require('../../../lib/supabase');
    supabase.auth.signInWithPassword.mockResolvedValue({
      error: { message: 'User not found' },
    });

    const { getByPlaceholderText, getByText } = render(<EmailEntryScreen />);
    
    const input = getByPlaceholderText('your@email.com');
    const button = getByText('Continue');

    fireEvent.changeText(input, 'new@example.com');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('SignupNames', {
        email: 'new@example.com',
      });
    });
  });
});

