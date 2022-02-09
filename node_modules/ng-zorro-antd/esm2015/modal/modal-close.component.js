/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalOptions } from './modal-types';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './modal-types';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc3 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

const _c0 = ["nz-modal-close", ""];
function NzModalCloseComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const closeIcon_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", closeIcon_r1);
} }
export class NzModalCloseComponent {
    constructor(config) {
        this.config = config;
    }
}
NzModalCloseComponent.ɵfac = function NzModalCloseComponent_Factory(t) { return new (t || NzModalCloseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ModalOptions)); };
NzModalCloseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalCloseComponent, selectors: [["button", "nz-modal-close", ""]], hostAttrs: ["aria-label", "Close", 1, "ant-modal-close"], exportAs: ["NzModalCloseBuiltin"], attrs: _c0, decls: 2, vars: 1, consts: [[1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"]], template: function NzModalCloseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtemplate(1, NzModalCloseComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzCloseIcon);
    } }, directives: [ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.ɵNzTransitionPatchDirective, ɵngcc4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzModalCloseComponent.ctorParameters = () => [
    { type: ModalOptions }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalCloseComponent, [{
        type: Component,
        args: [{
                selector: 'button[nz-modal-close]',
                exportAs: 'NzModalCloseBuiltin',
                template: `
    <span class="ant-modal-close-x">
      <ng-container *nzStringTemplateOutlet="config.nzCloseIcon; let closeIcon">
        <i nz-icon [nzType]="closeIcon" class="ant-modal-close-icon"></i>
      </ng-container>
    </span>
  `,
                host: {
                    class: 'ant-modal-close',
                    'aria-label': 'Close'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc1.ModalOptions }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLWNsb3NlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0MsTUFBTSxPQUFPLHFCQUFxQjtBQUNsQyxJQUFFLFlBQW1CLE1BQW9CO0FBQUksUUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztBQUFDLElBQUUsQ0FBQztBQUM3QztpREFsQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx3QkFBd0Isa0JBQ2xDLFFBQVEsRUFBRTtJQUFxQixrQkFDL0IsUUFBUSxFQUFFLHVPQU1ULGtCQUNELElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsaUJBQWlCLHNCQUN4QixZQUFZLEVBQUUsT0FBTyxrQkFDdEIsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDO0lBQU0sY0FDaEQ7Ozs7OzttS0FDSTtBQUFDO0FBQ1UsWUFuQlAsWUFBWTtBQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbnotbW9kYWwtY2xvc2VdJyxcbiAgZXhwb3J0QXM6ICdOek1vZGFsQ2xvc2VCdWlsdGluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC1tb2RhbC1jbG9zZS14XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLm56Q2xvc2VJY29uOyBsZXQgY2xvc2VJY29uXCI+XG4gICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJjbG9zZUljb25cIiBjbGFzcz1cImFudC1tb2RhbC1jbG9zZS1pY29uXCI+PC9pPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbW9kYWwtY2xvc2UnLFxuICAgICdhcmlhLWxhYmVsJzogJ0Nsb3NlJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ2xvc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBNb2RhbE9wdGlvbnMpIHt9XG59XG4iXX0=