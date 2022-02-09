
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'MsCheckOrderPipe' })
export class MsCheckOrderPipe implements PipeTransform {
  transform(status: number, data: Array<any>) {
    if (!data ||!data.length) {
      return false;
    }
    const dataFound = data.find(item => item.status === status);
    if (dataFound) {
      return true;
    }
    return false
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [MsCheckOrderPipe],
  exports: [MsCheckOrderPipe]
})

export class MsCheckOrderPipeModule { }


