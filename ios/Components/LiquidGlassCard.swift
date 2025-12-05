//
//  LiquidGlassCard.swift
//  Atom
//
//  Reusable Liquid Glass effect card component
//

import SwiftUI

struct LiquidGlassCard<Content: View>: View {
    @ViewBuilder let content: Content
    
    var body: some View {
        content
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(.ultraThinMaterial)
                    .shadow(color: .black.opacity(0.05), radius: 20, x: 0, y: 10)
            )
            .overlay(
                RoundedRectangle(cornerRadius: 20)
                    .stroke(
                        LinearGradient(
                            colors: [
                                Color.white.opacity(0.3),
                                Color.white.opacity(0.1)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 1
                    )
            )
    }
}

// MARK: - Preview

#Preview {
    LiquidGlassCard {
        VStack {
            Text("Liquid Glass Card")
                .font(.headline)
            Text("Modern iOS design")
                .font(.subheadline)
                .foregroundColor(.secondary)
        }
        .padding(20)
    }
    .padding()
    .background(Color.gray.opacity(0.1))
}

