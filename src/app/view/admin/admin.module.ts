import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconsProviderModule } from 'src/app/shared/icon-ant/icons-provider.module';
import { MsFormatNumberPipeModule } from 'src/app/shared/pipes/format-number.pipe';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzButtonModule,
    MsFormatNumberPipeModule
  ]
})
export class AdminModule { }