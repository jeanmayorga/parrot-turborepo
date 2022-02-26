import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert, Button, Input, Label, Logo } from "@parrot/components";
import { parrotApi } from "@parrot/services";
import { useAuthStore } from "@parrot/store";
import { IFormData, IResponse } from "../types";
import { schemaValidation } from "../schemas";

export default function AuthSignInScreen() {
  const router = useRouter();
  const { setIsAuthenticated } = useAuthStore();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const resolver = yupResolver(schemaValidation);
  const form = useForm<IFormData>({ resolver });
  const { register, formState, handleSubmit } = form;

  const onSubmit = async (formData: IFormData) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const { data } = await parrotApi.post<IResponse>("/auth/token", formData);

      localStorage.setItem("access_token", data.access);

      setIsAuthenticated(true);
      router.push("/menu");
    } catch (error) {
      const data = error.response.data;
      const message = data.errors ? data.errors[0].message : "";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full md:w-[500px]">
        <Logo className="mb-2 ml-4" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white md:rounded-md px-4 py-6"
        >
          <p className="text-sm text-gray-400 mb-4">
            The best software for restaurants today.
          </p>

          <div className="mb-4">
            <Alert message={errorMessage} />
          </div>

          <div className="mb-4">
            <Label htmlFor="email" error={formState.errors.email}>
              Email:
            </Label>
            <Input
              {...register("email")}
              type="text"
              placeholder="Enter your email"
              disabled={isLoading}
              error={formState.errors.email}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" error={formState.errors.password}>
              Password:
            </Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              disabled={isLoading}
              error={formState.errors.password}
            />
          </div>
          <Button type="submit" variant="black" isFull isLoading={isLoading}>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
