import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { AuthProvider } from "@/components/auth/layout/authProvider";

import { getUser } from "@/lib/actions/auth";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({ subsets: ["latin"], });
const geistMono = Geist_Mono({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Complete Supabase auth template",
  description: "Using Next.js, Supabase, Shadcn",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider initialUser={user}>
            <Header />

            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
