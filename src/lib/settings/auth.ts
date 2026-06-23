"use client";

import { Provider } from "@supabase/supabase-js";

export interface socialProvidersProps {
  id: Provider;
  name: string;
  icon: { alt: string; image: string; imageDark?: string } | null;
}

export const socialProviders: socialProvidersProps[] = [
  {
    id: "google",
    name: "Google",
    icon: {
      image: "/google-logo-icon.svg",
      alt: "Github logo",
    },
  },
  {
    id: "github",
    name: "GitHub",
    icon: {
      image: "/github-logo-icon--light.svg",
      imageDark: "/github-logo-icon--dark.svg",
      alt: "Github logo",
    },
  },
];

// ------------ Forms Settings ------------

export const showAnonymousLogin = true;
export const showSocialLogin = true;
