import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dallastjames.ionic.androidwebviewerror',
  appName: 'angular-webview-error',
  webDir: 'dist/angular-webview-error',
  server: {
    androidScheme: 'angularwebview',
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;
