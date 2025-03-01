import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.LoginComponent),
  },
];
