// require("dotenv").config();

export const env = {
  isServer: typeof window === "undefined",
  isClient: typeof window !== "undefined",
  X_PARROT_API_URL: process.env.X_PARROT_API_URL,
};
