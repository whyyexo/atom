//
//  ContentView.swift
//  Atom
//
//  Main content view with navigation handling
//

import SwiftUI

struct ContentView: View {
    @EnvironmentObject var navigationModel: NavigationModel
    @EnvironmentObject var authService: AuthService
    
    var body: some View {
        Group {
            if authService.isAuthenticated {
                MainTabView()
            } else {
                OnboardingView()
            }
        }
        .animation(.smooth, value: authService.isAuthenticated)
    }
}

