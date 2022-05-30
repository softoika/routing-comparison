import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLinkComponent } from './router-link.component';

@NgModule({
  declarations: [RouterLinkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RouterLinkComponent }]),
  ],
})
export class RouterLinkModule {}
