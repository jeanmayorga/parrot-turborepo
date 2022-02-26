import type { AppProps } from "next/app";
import { useEffect } from "react";

import { useAuthStore } from "@parrot/store";
import { AuthSignInScreen } from "@parrot/auth-signin";

import "@parrot/config/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    setIsAuthenticated(Boolean(access_token));
  }, [setIsAuthenticated]);

  if (!isAuthenticated) {
    return <AuthSignInScreen {...pageProps} />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
