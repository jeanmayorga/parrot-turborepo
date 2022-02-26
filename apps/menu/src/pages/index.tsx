import { useRouter } from "next/router";

import { useMe } from "@parrot/hooks";
import { Button, Logo, Spinner, Store } from "@parrot/components";
import { useAuthStore } from "@parrot/store";

export default function Menu() {
  const router = useRouter();
  const { setIsAuthenticated } = useAuthStore();
  const { isLoading, user } = useMe();

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
    router.push("/signin");
  };

  return (
    <div className="m-auto md:w-[500px] mt-8">
      <Logo className="mb-2 ml-4" />
      <div className="bg-white rounded overflow-hidden">
        {isLoading || !user ? (
          <div className="flex justify-center py-4">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="bg-black text-white p-4 py-2 flex justify-between items-center">
              <div>{user.email}</div>

              <Button variant="outlined" size="sm" onClick={handleLogOut}>
                Sign Out
              </Button>
            </div>
            {user.stores.map((store) => (
              <Store key={store.uuid} store={store} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
