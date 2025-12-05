//
//  HomeScreen.swift
//  Atom
//
//  Main home screen with Liquid Glass effect and modern iOS design
//

import SwiftUI

struct HomeScreen: View {
    @State private var scrollOffset: CGFloat = 0
    @State private var showAIAssistant: Bool = false
    
    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                // Header with Liquid Glass effect
                headerView
                    .padding(.horizontal, 20)
                    .padding(.top, 20)
                
                // Main content
                contentView
                    .padding(.horizontal, 20)
                    .padding(.top, 24)
            }
        }
        .background(
            // Liquid Glass background
            LinearGradient(
                colors: [
                    Color(red: 0.98, green: 0.98, blue: 0.99),
                    Color(red: 0.95, green: 0.96, blue: 0.98)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
        )
        .scrollIndicators(.hidden)
    }
    
    // MARK: - Header View
    
    private var headerView: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text("Welcome back")
                        .font(.system(size: 16, weight: .regular))
                        .foregroundColor(.secondary)
                    
                    Text("Ready to focus?")
                        .font(.system(size: 28, weight: .semibold))
                        .foregroundColor(.primary)
                }
                
                Spacer()
                
                // AI Assistant button with Liquid Glass
                Button(action: { showAIAssistant.toggle() }) {
                    Image(systemName: "sparkles")
                        .font(.system(size: 20, weight: .medium))
                        .foregroundColor(.white)
                        .frame(width: 44, height: 44)
                        .background(
                            // Liquid Glass button
                            ZStack {
                                RoundedRectangle(cornerRadius: 22)
                                    .fill(.ultraThinMaterial)
                                
                                RoundedRectangle(cornerRadius: 22)
                                    .fill(
                                        LinearGradient(
                                            colors: [
                                                Color.blue.opacity(0.6),
                                                Color.purple.opacity(0.4)
                                            ],
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                        )
                                    )
                            }
                        )
                        .shadow(color: .black.opacity(0.1), radius: 10, x: 0, y: 4)
                }
            }
        }
        .padding(.vertical, 16)
    }
    
    // MARK: - Content View
    
    private var contentView: some View {
        VStack(spacing: 24) {
            // Quick Actions with Liquid Glass cards
            quickActionsSection
            
            // Today's Overview
            todaysOverviewSection
            
            // Recent Activity
            recentActivitySection
        }
        .padding(.bottom, 100)
    }
    
    // MARK: - Quick Actions
    
    private var quickActionsSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Quick Actions")
                .font(.system(size: 20, weight: .semibold))
                .foregroundColor(.primary)
            
            HStack(spacing: 12) {
                QuickActionCard(
                    icon: "plus.circle.fill",
                    title: "New Task",
                    color: .blue
                )
                
                QuickActionCard(
                    icon: "note.text",
                    title: "New Note",
                    color: .purple
                )
                
                QuickActionCard(
                    icon: "calendar",
                    title: "Schedule",
                    color: .orange
                )
            }
        }
    }
    
    // MARK: - Today's Overview
    
    private var todaysOverviewSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Today's Overview")
                .font(.system(size: 20, weight: .semibold))
                .foregroundColor(.primary)
            
            LiquidGlassCard {
                VStack(spacing: 16) {
                    HStack {
                        VStack(alignment: .leading, spacing: 4) {
                            Text("Focus Time")
                                .font(.system(size: 14, weight: .medium))
                                .foregroundColor(.secondary)
                            Text("2h 34m")
                                .font(.system(size: 24, weight: .bold))
                                .foregroundColor(.primary)
                        }
                        
                        Spacer()
                        
                        Image(systemName: "brain.head.profile")
                            .font(.system(size: 32))
                            .foregroundColor(.blue.opacity(0.6))
                    }
                    
                    ProgressView(value: 0.65)
                        .tint(.blue)
                }
                .padding(20)
            }
        }
    }
    
    // MARK: - Recent Activity
    
    private var recentActivitySection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Recent Activity")
                .font(.system(size: 20, weight: .semibold))
                .foregroundColor(.primary)
            
            VStack(spacing: 12) {
                ActivityItem(icon: "checkmark.circle.fill", title: "Completed task", time: "2h ago")
                ActivityItem(icon: "note.text", title: "Created note", time: "4h ago")
                ActivityItem(icon: "calendar", title: "Scheduled meeting", time: "1d ago")
            }
        }
    }
}

// MARK: - Quick Action Card

struct QuickActionCard: View {
    let icon: String
    let title: String
    let color: Color
    
    var body: some View {
        Button(action: {}) {
            VStack(spacing: 8) {
                Image(systemName: icon)
                    .font(.system(size: 24, weight: .medium))
                    .foregroundColor(color)
                    .frame(width: 50, height: 50)
                    .background(
                        Circle()
                            .fill(.ultraThinMaterial)
                    )
                
                Text(title)
                    .font(.system(size: 12, weight: .medium))
                    .foregroundColor(.primary)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 16)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(.ultraThinMaterial)
            )
        }
        .buttonStyle(PlainButtonStyle())
    }
}

// MARK: - Activity Item

struct ActivityItem: View {
    let icon: String
    let title: String
    let time: String
    
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 20))
                .foregroundColor(.blue)
                .frame(width: 40, height: 40)
                .background(
                    Circle()
                        .fill(.ultraThinMaterial)
                )
            
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundColor(.primary)
                
                Text(time)
                    .font(.system(size: 13, weight: .regular))
                    .foregroundColor(.secondary)
            }
            
            Spacer()
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(.ultraThinMaterial)
        )
    }
}

