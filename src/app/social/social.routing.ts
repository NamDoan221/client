import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HnSocialComponent } from './social.component';

export const routes: Routes = [
  {
    path: '',
    component: HnSocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HnSocialRoutingModule {
}
