//
//  AtomApp.swift
//  Atom
//
//  App entry point with navigation and lifecycle management
//

import SwiftUI

@main
struct AtomApp: App {
    @StateObject private var navigationModel = NavigationModel()
    @StateObject private var authService = AuthService()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(navigationModel)
                .environmentObject(authService)
                .preferredColorScheme(.light)
        }
    }
}

