"use client";

import { GoogleLogo } from "@/components/logos/google";
import { GithubLogo } from "@/components/logos/github";

export interface socialProvidersProps {
  id: string;
  name: string;
  icon: React.ComponentType | null;
}

export const socialProviders = [
  { id: "google", name: "Google", icon: GoogleLogo },
  { id: "github", name: "GitHub", icon: GithubLogo },
];

// ------------ Forms Settings ------------

export const showAnonymousLogin = true;
export const showSocialLogin = true;
