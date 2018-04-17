// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {IEnvironment} from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  core: {
    target: 'dev',
    apiRootUrl: 'http://localhost:5010/api/',
    clientRootUrl: 'http://localhost:4200/',
    identityUrl: 'http://localhost:5000/',
    referencesUrl: 'http://localhost:5001/api/',
    fileStorageUrl: 'http://localhost:5004/api/',
    authClientId: "travelport.ui",
    authScope: "openid profile identityserver filestorage travelport"
  }
};
