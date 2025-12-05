//
//  AuthService.swift
//  Atom
//
//  Authentication service for Supabase integration
//

import Foundation
import SwiftUI

@MainActor
class AuthService: ObservableObject {
    @Published var isAuthenticated: Bool = false
    @Published var currentUser: User?
    @Published var isLoading: Bool = false
    
    struct User {
        let id: String
        let email: String
        let name: String?
    }
    
    init() {
        // Check for existing session
        checkAuthStatus()
    }
    
    func checkAuthStatus() {
        // TODO: Implement Supabase session check
        // For now, default to false
        isAuthenticated = false
    }
    
    func signIn(email: String, password: String) async throws {
        isLoading = true
        defer { isLoading = false }
        
        // TODO: Implement Supabase sign in
        // Placeholder for now
        try await Task.sleep(nanoseconds: 1_000_000_000)
        isAuthenticated = true
    }
    
    func signUp(email: String, password: String, name: String) async throws {
        isLoading = true
        defer { isLoading = false }
        
        // TODO: Implement Supabase sign up
        // Placeholder for now
        try await Task.sleep(nanoseconds: 1_000_000_000)
        isAuthenticated = true
    }
    
    func signOut() {
        isAuthenticated = false
        currentUser = nil
        // TODO: Clear Supabase session
    }
}

