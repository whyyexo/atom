//
//  ProfileScreen.swift
//  Atom
//
//  User profile screen
//

import SwiftUI

struct ProfileScreen: View {
    @EnvironmentObject var authService: AuthService
    
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    Text("Profile")
                        .font(.largeTitle)
                        .bold()
                    
                    Button("Sign Out") {
                        authService.signOut()
                    }
                    .buttonStyle(.borderedProminent)
                }
                .padding()
            }
            .navigationTitle("Profile")
        }
    }
}

