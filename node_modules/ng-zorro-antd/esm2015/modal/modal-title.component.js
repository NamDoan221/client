/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalOptions } from './modal-types';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './modal-types';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';

const _c0 = ["nz-modal-title", ""];
function NzModalTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.config.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
export class NzModalTitleComponent {
    constructor(config) {
        this.config = config;
    }
}
NzModalTitleComponent.ɵfac = function NzModalTitleComponent_Factory(t) { return new (t || NzModalTitleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ModalOptions)); };
NzModalTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalTitleComponent, selectors: [["div", "nz-modal-title", ""]], hostAttrs: [1, "ant-modal-header"], exportAs: ["NzModalTitleBuiltin"], attrs: _c0, decls: 2, vars: 1, consts: [[1, "ant-modal-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"]], template: function NzModalTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzModalTitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzTitle);
    } }, directives: [ɵngcc2.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzModalTitleComponent.ctorParameters = () => [
    { type: ModalOptions }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalTitleComponent, [{
        type: Component,
        args: [{
                selector: 'div[nz-modal-title]',
                exportAs: 'NzModalTitleBuiltin',
                template: `
    <div class="ant-modal-title">
      <ng-container *nzStringTemplateOutlet="config.nzTitle">
        <div [innerHTML]="config.nzTitle"></div>
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-modal-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc1.ModalOptions }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFpQjdDLE1BQU0sT0FBTyxxQkFBcUI7QUFDbEMsSUFBRSxZQUFtQixNQUFvQjtBQUFJLFFBQXhCLFdBQU0sR0FBTixNQUFNLENBQWM7QUFBQyxJQUFFLENBQUM7QUFDN0M7aURBakJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUscUJBQXFCLGtCQUMvQixRQUFRLEVBQUU7Q0FBcUIsa0JBQy9CLFFBQVEsRUFBRSx1TEFNVCxrQkFDRCxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLGtCQUFrQixrQkFDMUIsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sY0FDaEQ7Ozs7Ozs7dUdBQ0k7QUFBQztBQUNVLFlBbEJQLFlBQVk7QUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaXZbbnotbW9kYWwtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdOek1vZGFsVGl0bGVCdWlsdGluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLm56VGl0bGVcIj5cbiAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbmZpZy5uelRpdGxlXCI+PC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LW1vZGFsLWhlYWRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbFRpdGxlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zKSB7fVxufVxuIl19