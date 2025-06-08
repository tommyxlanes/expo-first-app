// components/InitLayout.tsx
import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthScreen = segments[0] === "(auth)";

    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)/login");
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn, segments]);

  // ❗ Block rendering during redirect logic
  const inAuthScreen = segments[0] === "(auth)";
  if (!isLoaded) return null;
  if (!isSignedIn && !inAuthScreen) return null;
  if (isSignedIn && inAuthScreen) return null;

  return <>{children}</>;
}
