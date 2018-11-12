// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBXvqJVwOCCT0ICYF3t_FpjIh0E0Rm-qQE',
    authDomain: 'ng5-notes-app.firebaseapp.com',
    databaseURL: 'https://ng5-notes-app.firebaseio.com',
    projectId: 'ng5-notes-app',
    storageBucket: 'ng5-notes-app.appspot.com',
    messagingSenderId: '356091735265'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
