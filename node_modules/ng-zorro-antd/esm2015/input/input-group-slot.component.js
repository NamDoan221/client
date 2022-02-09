/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

const _c0 = ["nz-input-group-slot", ""];
function NzInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.template);
} }
export class NzInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
}
NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) { return new (t || NzInputGroupSlotComponent)(); };
NzInputGroupSlotComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzInputGroupSlotComponent, selectors: [["", "nz-input-group-slot", ""]], hostVars: 6, hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c0, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
        ɵngcc0.ɵɵtemplate(1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.template);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzInputGroupSlotComponent.propDecorators = {
    icon: [{ type: Input }],
    type: [{ type: Input }],
    template: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputGroupSlotComponent, [{
        type: Component,
        args: [{
                selector: '[nz-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], type: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUIxRyxNQUFNLE9BQU8seUJBQXlCO0FBQ3RDLElBaEJBO0FBQ0csUUFlUSxTQUFJLEdBQW1CLElBQUksQ0FBQztBQUN2QyxRQUFXLFNBQUksR0FBeUMsSUFBSSxDQUFDO0FBQzdELFFBQVcsYUFBUSxHQUF1QyxJQUFJLENBQUM7QUFDL0QsSUFBQSxDQUFDO0FBQ0Q7cURBcEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsdUJBQXVCO1NBQ2pDLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFO2lGQUdULGtCQUNELElBQUksRUFBRSxzQkFDSiwrQkFBK0IsRUFBRTtpQkFBa0Isc0JBQ25ELDBCQUEwQixFQUFFLG1CQUFtQixzQkFDL0MsMEJBQTBCLEVBQUUsbUJBQW1CLGtCQUNoRCxjQUNGOzs7Ozs7OzRJQUNJO0FBQUM7QUFDSSxtQkFBUCxLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1pbnB1dC1ncm91cC1zbG90XScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiICpuZ0lmPVwiaWNvblwiPjwvaT5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVcIj57eyB0ZW1wbGF0ZSB9fTwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtYWRkb25dJzogYHR5cGUgPT09ICdhZGRvbidgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXByZWZpeF0nOiBgdHlwZSA9PT0gJ3ByZWZpeCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXN1ZmZpeF0nOiBgdHlwZSA9PT0gJ3N1ZmZpeCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbnB1dEdyb3VwU2xvdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdHlwZTogJ2FkZG9uJyB8ICdwcmVmaXgnIHwgJ3N1ZmZpeCcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdGVtcGxhdGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xufVxuIl19