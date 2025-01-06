import { LocalStorage } from "./localStorage";

export type AppStorageSchema = {
  token?: string;
  businessId?: string;
  language?: string;
  shouldShowTopBanner?: boolean;
};

class AppStorage extends LocalStorage<AppStorageSchema> {
  getToken(): string {
    return this.get("token") || "";
  }

  setToken(apiKey: string) {
    return this.set("token", apiKey);
  }

  removeToken() {
    return this.remove("token");
  }
}

export const appStorage = new AppStorage();
