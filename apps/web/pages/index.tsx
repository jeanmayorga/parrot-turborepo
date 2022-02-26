import { useAuthStore } from "@parrot/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/menu");
    } else {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="text-white h-screen flex items-center justify-center">
      loading
    </div>
  );
}
