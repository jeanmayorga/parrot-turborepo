import { useEffect, useState } from "react";
import { parrotApi } from "@parrot/services";
import { IUser } from "@parrot/types";

export function useMe() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function request() {
      try {
        setIsLoading(true);
        const { data } = await parrotApi.get("v1/users/me");
        setUser(data.result);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    request();
  }, []);

  return { isLoading, error, user };
}
