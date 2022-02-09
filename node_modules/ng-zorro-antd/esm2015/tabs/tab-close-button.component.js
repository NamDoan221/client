/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc2 from 'ng-zorro-antd/icon';

function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r1);
} }
export class NzTabCloseButtonComponent {
    constructor() {
        this.closeIcon = 'close';
    }
}
NzTabCloseButtonComponent.ɵfac = function NzTabCloseButtonComponent_Factory(t) { return new (t || NzTabCloseButtonComponent)(); };
NzTabCloseButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabCloseButtonComponent, selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function NzTabCloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.closeIcon);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective, ɵngcc2.NzIconDirective], encapsulation: 2 });
NzTabCloseButtonComponent.ctorParameters = () => [];
NzTabCloseButtonComponent.propDecorators = {
    closeIcon: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabCloseButtonComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tab-close-button, button[nz-tab-close-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tab-remove',
                    'aria-label': 'Close tab',
                    type: 'button'
                }
            }]
    }], function () { return []; }, { closeIcon: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNsb3NlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFicy90YWItY2xvc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBaUI5RCxNQUFNLE9BQU8seUJBQXlCO0FBQ3RDLElBRUU7QUFBZ0IsUUFGUCxjQUFTLEdBQW9DLE9BQU8sQ0FBQztBQUNoRSxJQUNpQixDQUFDO0FBQ2xCO3FEQWpCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO2tCQUFrRCxrQkFDNUQsUUFBUSxFQUFFLGtKQUlULGtCQUNELElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUscUJBQXFCLHNCQUM1QixZQUFZLEVBQUUsV0FBVyxzQkFDekIsSUFBSSxFQUFFLFFBQVEsa0JBQ2YsY0FDRjs7OzsyR0FDSTtBQUFDO0FBQ1k7QUFBNkMsd0JBQTVELEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWItY2xvc2UtYnV0dG9uLCBidXR0b25bbnotdGFiLWNsb3NlLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbG9zZUljb247IGxldCBpY29uXCI+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicy10YWItcmVtb3ZlJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdDbG9zZSB0YWInLFxuICAgIHR5cGU6ICdidXR0b24nXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJDbG9zZUJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9zZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19