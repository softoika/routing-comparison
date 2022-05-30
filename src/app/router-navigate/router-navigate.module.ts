import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterNavigateComponent } from './router-navigate.component';

@NgModule({
  declarations: [RouterNavigateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RouterNavigateComponent }]),
  ],
})
export class RouterNavigateModule {}
