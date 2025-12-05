//
//  NavigationModel.swift
//  Atom
//
//  Navigation state management using MVVM pattern
//

import SwiftUI

class NavigationModel: ObservableObject {
    @Published var selectedTab: TabItem = .home
    @Published var navigationPath = NavigationPath()
    
    enum TabItem: String, CaseIterable {
        case home = "Home"
        case tasks = "Tasks"
        case notes = "Notes"
        case workspace = "Workspace"
        case profile = "Profile"
        
        var icon: String {
            switch self {
            case .home: return "house.fill"
            case .tasks: return "checkmark.circle.fill"
            case .notes: return "note.text"
            case .workspace: return "square.grid.2x2.fill"
            case .profile: return "person.fill"
            }
        }
    }
}

