import {ICoreEnvironment} from '@h21/h21.core.ui/models';

export interface IEnvironment {
  production: boolean;
  core: ICoreEnvironment;
}
