"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  useMemo,
} from "react";
import { createClient } from "@/lib/supabase/client";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: false,
  error: null,
});

export const useUser = () => useContext(AuthContext);

export function AuthProvider({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser: User | null;
}) {
  const [supabase] = useState(() => createClient());
  const router = useRouter()

  const [user, setUser] = useState<User | null>(initialUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const [prevInitialUserID, setPrevInitialUserID] = useState<string | undefined>(initialUser?.id)

  if (initialUser?.id !== prevInitialUserID) {
    setUser(initialUser);
    setPrevInitialUserID(initialUser?.id)
  }


  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false);
      setError(null);
      router.refresh();
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth, router]);

  return (
    <AuthContext.Provider
      value={useMemo(() => ({ user, loading, error }), [user, loading, error])}
    >
      {children}
    </AuthContext.Provider >
  );
}
