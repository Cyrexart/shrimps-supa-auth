"use client";

import * as React from "react";
import { useUser } from "@/components/auth/layout/authProvider";

interface AuthGuardProps {
  loading?: React.ReactNode;
  authenticated?: React.ReactNode;
  unauthenticated?: React.ReactNode;
  error?: (error: Error) => React.ReactNode;
}

export function AuthGuard({
  authenticated: authenticatedComponent = null,
  unauthenticated: unauthenticatedComponent = null,
  loading: loadingComponent = null,
  error,
}: AuthGuardProps) {
  const { user, loading: isLoading, error: authError } = useUser();

  if (authError && error) return <>{error(authError)}</>;
  if (isLoading) return <>{loadingComponent}</>;

  return (
    <>
      {user ? <>{authenticatedComponent}</> : <>{unauthenticatedComponent}</>}
    </>
  );
}
