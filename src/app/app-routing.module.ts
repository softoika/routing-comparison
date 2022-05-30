import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'router-navigate',
    loadChildren: () =>
      import('./router-navigate/router-navigate.module').then(
        (m) => m.RouterNavigateModule
      ),
  },
  {
    path: 'router-link',
    loadChildren: () =>
      import('./router-link/router-link.module').then(
        (m) => m.RouterLinkModule
      ),
  },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
