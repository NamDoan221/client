/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
} }
export class NzTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
}
NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
NzTabBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostAttrs: [1, "ant-tabs-tabpane"], hostVars: 12, hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
        ɵngcc0.ɵɵstyleProp("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
        ɵngcc0.ɵɵclassProp("ant-tabs-tabpane-active", ctx.active);
    } }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzTabBodyComponent.propDecorators = {
    content: [{ type: Input }],
    active: [{ type: Input }],
    tabPaneAnimated: [{ type: Input }],
    forceRender: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabBodyComponent, [{
        type: Component,
        args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tabpane',
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[attr.tabindex]': 'active ? 0 : -1',
                    '[attr.aria-hidden]': '!active',
                    '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                    '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                    '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                    '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                }
            }]
    }], function () { return []; }, { content: [{
            type: Input
        }], active: [{
            type: Input
        }], tabPaneAnimated: [{
            type: Input
        }], forceRender: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBd0IxRyxNQUFNLE9BQU8sa0JBQWtCO0FBQy9CLElBdkJBO0FBQ0csUUFzQlEsWUFBTyxHQUE2QixJQUFJLENBQUM7QUFDcEQsUUFBVyxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQVcsb0JBQWUsR0FBRyxJQUFJLENBQUM7QUFDbEMsUUFBVyxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUMvQixJQUFBLENBQUM7QUFDRDs4Q0E1QkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxlQUFlO2VBQ3pCLFFBQVEsRUFBRSxXQUFXLGtCQUNyQixtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFFBQVEsRUFBRTs7NkJBSVQsa0JBQ0QsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxrQkFBa0Isc0JBQ3pCLGlDQUFpQyxFQUFFLFFBQVEsc0JBQzNDLGlCQUFpQixFQUFFLGlCQUFpQixzQkFDcEMsb0JBQW9CLEVBQUUsU0FBUyxzQkFDL0I7ZUFBb0IsRUFBRTtDQUFtRCxzQkFDekUsZ0JBQWdCLEVBQUUsNENBQTRDLHNCQUM5RCxvQkFBb0IsRUFBRSxpREFBaUQsc0JBQ3ZFLGlCQUFpQixFQUFFLGtEQUFrRCxrQkFDdEU7RUFDRjs7O3FHQUNJO0FBQUM7QUFDSSxzQkFBUCxLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotdGFiLWJvZHldJyxcbiAgZXhwb3J0QXM6ICduelRhYkJvZHknLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZSB8fCBmb3JjZVJlbmRlclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicy10YWJwYW5lJyxcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYnBhbmUtYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnYWN0aXZlID8gMCA6IC0xJyxcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJyFhY3RpdmUnLFxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiAndGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwiaGlkZGVuXCIgOiBudWxsJyxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAndGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IDAgOiBudWxsJyxcbiAgICAnW3N0eWxlLm92ZXJmbG93LXldJzogJ3RhYlBhbmVBbmltYXRlZCA/IGFjdGl2ZSA/IG51bGwgOiBcIm5vbmVcIiA6IG51bGwnLFxuICAgICdbc3R5bGUuZGlzcGxheV0nOiAnIXRhYlBhbmVBbmltYXRlZCA/IGFjdGl2ZSA/IG51bGwgOiBcIm5vbmVcIiA6IG51bGwnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJCb2R5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhYlBhbmVBbmltYXRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGZvcmNlUmVuZGVyID0gZmFsc2U7XG59XG4iXX0=