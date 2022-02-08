
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'MsFormatNumberPipe' })
export class MsFormatNumberPipe implements PipeTransform {
  transform(value: number, acceptNegativeValue: boolean, parseFixed: number = 1) {
    return this.formatNumberValue(value, acceptNegativeValue, parseFixed);
  }

  formatNumberValue(value: number, acceptNegativeValue: boolean, parseFixed: number = 1): any {
    if (value === undefined || typeof value !== 'number' || (!acceptNegativeValue && value <= 0)) {
      return 0;
    }
    value = parseFloat(value.toFixed(parseFixed));
    const valueString = value.toString();
    const index = valueString.indexOf('.');
    if (index !== -1 && parseFixed > 3) {
      const decimalPart = valueString.substring(index + 1, valueString.length);
      let int = valueString.substring(0, index + 1);
      int = int.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `${int}${decimalPart}`;
    }
    if (index === -1 || parseFixed <= 3) {
      return value.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [MsFormatNumberPipe],
  exports: [MsFormatNumberPipe]
})

export class MsFormatNumberPipeModule { }


