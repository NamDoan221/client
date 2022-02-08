import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCanActive } from 'src/app/shared/services/auth.service';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      {
        path: 'list',
        loadChildren: () =>
        import('./product-list/product-list.module').then((m) => m.ProductListModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
        import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'order',
        canActivate: [UserCanActive],
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
