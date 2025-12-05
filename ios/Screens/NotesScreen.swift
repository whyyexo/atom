//
//  NotesScreen.swift
//  Atom
//
//  Notes management screen
//

import SwiftUI

struct NotesScreen: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    Text("Notes")
                        .font(.largeTitle)
                        .bold()
                }
                .padding()
            }
            .navigationTitle("Notes")
        }
    }
}

