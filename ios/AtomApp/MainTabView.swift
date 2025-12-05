//
//  MainTabView.swift
//  Atom
//
//  Main tab bar navigation with Liquid Glass styling
//

import SwiftUI

struct MainTabView: View {
    @EnvironmentObject var navigationModel: NavigationModel
    
    var body: some View {
        TabView(selection: $navigationModel.selectedTab) {
            HomeScreen()
                .tabItem {
                    Label("Home", systemImage: "house.fill")
                }
                .tag(NavigationModel.TabItem.home)
            
            TasksScreen()
                .tabItem {
                    Label("Tasks", systemImage: "checkmark.circle.fill")
                }
                .tag(NavigationModel.TabItem.tasks)
            
            NotesScreen()
                .tabItem {
                    Label("Notes", systemImage: "note.text")
                }
                .tag(NavigationModel.TabItem.notes)
            
            WorkspaceScreen()
                .tabItem {
                    Label("Workspace", systemImage: "square.grid.2x2.fill")
                }
                .tag(NavigationModel.TabItem.workspace)
            
            ProfileScreen()
                .tabItem {
                    Label("Profile", systemImage: "person.fill")
                }
                .tag(NavigationModel.TabItem.profile)
        }
        .tint(.blue)
    }
}

