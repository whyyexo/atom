//
//  TasksScreen.swift
//  Atom
//
//  Tasks management screen
//

import SwiftUI

struct TasksScreen: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    Text("Tasks")
                        .font(.largeTitle)
                        .bold()
                }
                .padding()
            }
            .navigationTitle("Tasks")
        }
    }
}

