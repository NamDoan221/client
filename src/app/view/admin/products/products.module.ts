import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconsProviderModule } from 'src/app/shared/icon-ant/icons-provider.module';
import { MsFormatNumberPipeModule } from 'src/app/shared/pipes/format-number.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzButtonModule,
    MsFormatNumberPipeModule,
    NzTableModule,
    NzModalModule
  ]
})
export class ProductsModule { }