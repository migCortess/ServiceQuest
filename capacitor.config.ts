import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.seiscincocerocincodesarollos.servicequestapp",
  appName: "servicequestapp",
  webDir: "dist",
  server: {
    cleartext: true,
    androidScheme: "https",
  },
};

export default config;
