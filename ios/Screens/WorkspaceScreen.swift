//
//  WorkspaceScreen.swift
//  Atom
//
//  Workspace management screen
//

import SwiftUI

struct WorkspaceScreen: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    Text("Workspace")
                        .font(.largeTitle)
                        .bold()
                }
                .padding()
            }
            .navigationTitle("Workspace")
        }
    }
}

