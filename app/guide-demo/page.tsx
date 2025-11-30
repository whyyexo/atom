"use client";

import {
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  AppleSignButton,
  TextInput,
  EmailInput,
  PasswordInput,
  TitleXL,
  TitleL,
  TitleM,
  Body,
  Caption,
  Card,
  GlassPanel,
  PageContainer,
  Section,
  BreathingGlow,
  SmoothFadeSlide,
  AuroraGradient,
} from "@/guide";
import { useState } from "react";

export default function GuideDemoPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  return (
    <PageContainer>
      <Section spacing="lg">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <TitleXL>iOS 26 Design System</TitleXL>
            <Body className="max-w-2xl mx-auto">
              Complete Apple-inspired component library with glassmorphism, smooth animations, and premium aesthetics.
            </Body>
          </div>

          {/* Buttons Section */}
          <Section spacing="md">
            <TitleL>Buttons</TitleL>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <div className="space-y-4">
                  <TitleM>Primary</TitleM>
                  <PrimaryButton text="Primary Button" onClick={() => {}} fullWidth />
                  <PrimaryButton text="Small" size="sm" onClick={() => {}} fullWidth />
                  <PrimaryButton text="Large" size="lg" onClick={() => {}} fullWidth />
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <TitleM>Secondary</TitleM>
                  <SecondaryButton text="Secondary Button" onClick={() => {}} fullWidth />
                  <SecondaryButton text="Small" size="sm" onClick={() => {}} fullWidth />
                  <SecondaryButton text="Large" size="lg" onClick={() => {}} fullWidth />
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <TitleM>Ghost</TitleM>
                  <GhostButton text="Ghost Button" onClick={() => {}} fullWidth />
                  <GhostButton text="Small" size="sm" onClick={() => {}} fullWidth />
                  <GhostButton text="Large" size="lg" onClick={() => {}} fullWidth />
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <TitleM>Social Sign In</TitleM>
                  <AppleSignButton provider="apple" onClick={() => {}} fullWidth />
                  <AppleSignButton provider="google" onClick={() => {}} fullWidth />
                  <AppleSignButton provider="github" onClick={() => {}} fullWidth />
                </div>
              </Card>
            </div>
          </Section>

          {/* Inputs Section */}
          <Section spacing="md">
            <TitleL>Inputs</TitleL>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="space-y-4">
                  <TitleM>Text Input</TitleM>
                  <TextInput
                    label="Name"
                    placeholder="Enter your name"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                  />
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <TitleM>Email Input</TitleM>
                  <EmailInput
                    label="Email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <TitleM>Password Input</TitleM>
                  <PasswordInput
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    showStrengthIndicator
                  />
                </div>
              </Card>
            </div>
          </Section>

          {/* Typography Section */}
          <Section spacing="md">
            <TitleL>Typography</TitleL>
            <Card>
              <div className="space-y-6">
                <div>
                  <TitleXL>Title XL</TitleXL>
                  <Caption>Extra large heading for hero sections</Caption>
                </div>
                <div>
                  <TitleL>Title L</TitleL>
                  <Caption>Large heading for page titles</Caption>
                </div>
                <div>
                  <TitleM>Title M</TitleM>
                  <Caption>Medium heading for section titles</Caption>
                </div>
                <div>
                  <Body>
                    Body text for paragraphs and descriptions. This is the standard text size used throughout the application.
                  </Body>
                </div>
                <div>
                  <Caption>Caption text for helper text and metadata</Caption>
                </div>
              </div>
            </Card>
          </Section>

          {/* Cards Section */}
          <Section spacing="md">
            <TitleL>Cards & Panels</TitleL>
            <div className="grid gap-6 md:grid-cols-2">
              <Card hoverable>
                <TitleM>Card</TitleM>
                <Body className="mt-2">
                  Standard card component with glassmorphism effect. Hover to see the interaction.
                </Body>
              </Card>

              <GlassPanel className="p-6">
                <TitleM>Glass Panel</TitleM>
                <Body className="mt-2">
                  Elevated glass panel with enhanced translucency for important content.
                </Body>
              </GlassPanel>
            </div>
          </Section>

          {/* Animations Section */}
          <Section spacing="md">
            <TitleL>Animations</TitleL>
            <div className="grid gap-6 md:grid-cols-3">
              <BreathingGlow gradient="blue">
                <Card>
                  <TitleM>Breathing Glow</TitleM>
                  <Body className="mt-2">Blue gradient with breathing animation</Body>
                </Card>
              </BreathingGlow>

              <BreathingGlow gradient="purple">
                <Card>
                  <TitleM>Purple Glow</TitleM>
                  <Body className="mt-2">Purple gradient with breathing animation</Body>
                </Card>
              </BreathingGlow>

              <AuroraGradient>
                <Card className="p-6">
                  <TitleM>Aurora Gradient</TitleM>
                  <Body className="mt-2">Animated aurora gradient background</Body>
                </Card>
              </AuroraGradient>
            </div>

            <div className="mt-6 space-y-4">
              <SmoothFadeSlide direction="up" delay={0}>
                <Card>
                  <TitleM>Fade Slide Up</TitleM>
                  <Body className="mt-2">Smooth fade and slide animation from bottom</Body>
                </Card>
              </SmoothFadeSlide>

              <SmoothFadeSlide direction="down" delay={0.1}>
                <Card>
                  <TitleM>Fade Slide Down</TitleM>
                  <Body className="mt-2">Smooth fade and slide animation from top</Body>
                </Card>
              </SmoothFadeSlide>
            </div>
          </Section>

          {/* Layout Section */}
          <Section spacing="md">
            <TitleL>Layout Components</TitleL>
            <Card>
              <div className="space-y-4">
                <TitleM>Page Container</TitleM>
                <Body>
                  This entire page is wrapped in a PageContainer component that provides consistent spacing, max-width, and background colors.
                </Body>
                <TitleM className="mt-6">Sections</TitleM>
                <Body>
                  Sections provide consistent vertical spacing between content blocks. You can control the spacing with the spacing prop.
                </Body>
              </div>
            </Card>
          </Section>
        </div>
      </Section>
    </PageContainer>
  );
}

