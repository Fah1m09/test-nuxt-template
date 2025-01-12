import type { iUser } from "./user";

export interface iAuthState {
  user: iUser | null;
  isLoading: boolean;
  token: string | null;
  refreshToken: string | null;
  error: string | null;
}
