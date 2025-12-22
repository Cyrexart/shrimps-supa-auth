"use client";

import { GoogleLogo } from "@/components/logos/google";
import { GithubLogo } from "@/components/logos/github";
import { Provider } from "@supabase/supabase-js";

export interface socialProvidersProps {
  id: Provider;
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
