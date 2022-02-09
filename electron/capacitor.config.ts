import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'electronapp',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    allowNavigation: [
      'https://maps.googleapis.com'
    ]
  }
};

export default config;
