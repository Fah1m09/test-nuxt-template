import type { iUser } from "./user";

export interface iAuthState {
  user: iUser | null;
  isLoading: boolean;
  error: string | null;
}
