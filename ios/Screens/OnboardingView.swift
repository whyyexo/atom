//
//  OnboardingView.swift
//  Atom
//
//  Onboarding and authentication screens
//

import SwiftUI

struct OnboardingView: View {
    @EnvironmentObject var authService: AuthService
    @State private var showSignIn = false
    
    var body: some View {
        NavigationStack {
            ZStack {
                // Background gradient
                LinearGradient(
                    colors: [
                        Color(red: 0.98, green: 0.98, blue: 0.99),
                        Color(red: 0.95, green: 0.96, blue: 0.98)
                    ],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
                .ignoresSafeArea()
                
                if showSignIn {
                    SignInView()
                } else {
                    WelcomeView(showSignIn: $showSignIn)
                }
            }
        }
    }
}

// MARK: - Welcome View

struct WelcomeView: View {
    @Binding var showSignIn: Bool
    
    var body: some View {
        VStack(spacing: 32) {
            Spacer()
            
            // Logo/Icon
            Image(systemName: "atom")
                .font(.system(size: 80, weight: .thin))
                .foregroundColor(.blue)
                .padding(.bottom, 20)
            
            VStack(spacing: 12) {
                Text("Welcome to Atom")
                    .font(.system(size: 32, weight: .bold))
                    .foregroundColor(.primary)
                
                Text("Your AI-powered workspace")
                    .font(.system(size: 18, weight: .regular))
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            VStack(spacing: 16) {
                Button(action: { showSignIn = true }) {
                    Text("Get Started")
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 56)
                        .background(
                            RoundedRectangle(cornerRadius: 16)
                                .fill(
                                    LinearGradient(
                                        colors: [Color.blue, Color.purple],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        )
                }
                .buttonStyle(PlainButtonStyle())
            }
            .padding(.horizontal, 24)
            .padding(.bottom, 40)
        }
    }
}

// MARK: - Sign In View

struct SignInView: View {
    @EnvironmentObject var authService: AuthService
    @State private var email = ""
    @State private var password = ""
    @State private var showSignUp = false
    
    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                VStack(alignment: .leading, spacing: 8) {
                    Text(showSignUp ? "Create Account" : "Sign In")
                        .font(.system(size: 32, weight: .bold))
                        .foregroundColor(.primary)
                    
                    Text("Continue to Atom")
                        .font(.system(size: 16, weight: .regular))
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 24)
                .padding(.top, 60)
                
                VStack(spacing: 16) {
                    TextField("Email", text: $email)
                        .textFieldStyle(LiquidGlassTextFieldStyle())
                        .keyboardType(.emailAddress)
                        .autocapitalization(.none)
                    
                    SecureField("Password", text: $password)
                        .textFieldStyle(LiquidGlassTextFieldStyle())
                    
                    Button(action: {
                        Task {
                            if showSignUp {
                                try? await authService.signUp(email: email, password: password, name: "")
                            } else {
                                try? await authService.signIn(email: email, password: password)
                            }
                        }
                    }) {
                        HStack {
                            if authService.isLoading {
                                ProgressView()
                                    .progressViewStyle(CircularProgressViewStyle(tint: .white))
                            } else {
                                Text(showSignUp ? "Sign Up" : "Sign In")
                                    .font(.system(size: 17, weight: .semibold))
                            }
                        }
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 56)
                        .background(
                            RoundedRectangle(cornerRadius: 16)
                                .fill(
                                    LinearGradient(
                                        colors: [Color.blue, Color.purple],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        )
                    }
                    .buttonStyle(PlainButtonStyle())
                    .disabled(authService.isLoading)
                    
                    Button(action: { showSignUp.toggle() }) {
                        Text(showSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up")
                            .font(.system(size: 15, weight: .regular))
                            .foregroundColor(.blue)
                    }
                    .buttonStyle(PlainButtonStyle())
                }
                .padding(.horizontal, 24)
            }
        }
    }
}

// MARK: - Text Field Style

struct LiquidGlassTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .padding(16)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(.ultraThinMaterial)
            )
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .stroke(Color.gray.opacity(0.2), lineWidth: 1)
            )
    }
}

