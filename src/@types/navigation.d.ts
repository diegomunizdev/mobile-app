export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // private routes
      entry?: string;
      signin?: string;
      "forgot-password"?: string;
      // public routes
      home?: string;
      account?: {
        accountId?: string;
      };
    }
  }
}
