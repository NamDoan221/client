/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberComponent } from './input-number.component';
import * as ɵngcc0 from '@angular/core';
export class NzInputNumberModule {
}
NzInputNumberModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzInputNumberModule });
NzInputNumberModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzInputNumberModule_Factory(t) { return new (t || NzInputNumberModule)(); }, imports: [[BidiModule, CommonModule, FormsModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzInputNumberModule, { declarations: function () { return [NzInputNumberComponent]; }, imports: function () { return [BidiModule, CommonModule, FormsModule, NzIconModule]; }, exports: function () { return [NzInputNumberComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputNumberModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, FormsModule, NzIconModule],
                declarations: [NzInputNumberComponent],
                exports: [NzInputNumberComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBT2xFLE1BQU0sT0FBTyxtQkFBbUI7QUFBRzsrQ0FMbEMsUUFBUSxTQUFDLGtCQUNSO01BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxrQkFDOUQsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUMsa0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDLGNBQ2xDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBOeklucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1udW1iZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56SWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056SW5wdXROdW1iZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpJbnB1dE51bWJlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbnB1dE51bWJlck1vZHVsZSB7fVxuIl19