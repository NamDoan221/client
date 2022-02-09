/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["builtin", ""];
export class NzTreeNodeBuiltinCheckboxComponent {
    constructor() {
        this.nzSelectMode = false;
    }
}
NzTreeNodeBuiltinCheckboxComponent.ɵfac = function NzTreeNodeBuiltinCheckboxComponent_Factory(t) { return new (t || NzTreeNodeBuiltinCheckboxComponent)(); };
NzTreeNodeBuiltinCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeBuiltinCheckboxComponent, selectors: [["nz-tree-node-checkbox", "builtin", ""]], hostVars: 16, hostBindings: function NzTreeNodeBuiltinCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-tree-checkbox", ctx.nzSelectMode)("ant-select-tree-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-checkbox-disabled", ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox))("ant-tree-checkbox", !ctx.nzSelectMode)("ant-tree-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-checkbox-disabled", !ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox));
    } }, inputs: { nzSelectMode: "nzSelectMode", isChecked: "isChecked", isHalfChecked: "isHalfChecked", isDisabled: "isDisabled", isDisableCheckbox: "isDisableCheckbox" }, attrs: _c0, decls: 1, vars: 4, template: function NzTreeNodeBuiltinCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span");
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-checkbox-inner", !ctx.nzSelectMode)("ant-select-tree-checkbox-inner", ctx.nzSelectMode);
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeBuiltinCheckboxComponent.propDecorators = {
    nzSelectMode: [{ type: Input }],
    isChecked: [{ type: Input }],
    isHalfChecked: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isDisableCheckbox: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeBuiltinCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-checkbox[builtin]',
                template: `
    <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-checkbox]': `nzSelectMode`,
                    '[class.ant-select-tree-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-checkbox-disabled]': `nzSelectMode && (isDisabled || isDisableCheckbox)`,
                    '[class.ant-tree-checkbox]': `!nzSelectMode`,
                    '[class.ant-tree-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-checkbox-disabled]': `!nzSelectMode && (isDisabled || isDisableCheckbox)`
                }
            }]
    }], function () { return []; }, { nzSelectMode: [{
            type: Input
        }], isChecked: [{
            type: Input
        }], isHalfChecked: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isDisableCheckbox: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlL3RyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBb0IxRSxNQUFNLE9BQU8sa0NBQWtDO0FBQy9DLElBbkJBO0FBQ0csUUFrQlEsaUJBQVksR0FBRyxLQUFLLENBQUM7QUFDaEMsSUFJQSxDQUFDO0FBQ0Q7OERBekJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO0FBQzFDLFFBQVEsRUFBRSw2SEFFVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsSUFBSSxFQUFFO2NBQ0osa0NBQWtDLEVBQUUsY0FBYyxzQkFDbEQsMENBQTBDLEVBQUUsMkJBQTJCLHNCQUN2RSxnREFBZ0QsRUFBRSwrQkFBK0Isc0JBQ2pGLDJDQUEyQyxFQUFFLG1EQUFtRCxzQkFDaEcsMkJBQTJCLEVBQUUsZUFBZSxzQkFDNUMsbUNBQW1DLEVBQUUsNEJBQTRCLHNCQUNqRSx5Q0FBeUMsRUFBRTs0QkFBZ0Msc0JBQzNFLG9DQUFvQyxFQUFFLG9EQUFvRCxrQkFDM0YsY0FDRjs7OztpREFDSTtBQUFDO0FBQ0ksMkJBQVAsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1ub2RlLWNoZWNrYm94W2J1aWx0aW5dJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBbY2xhc3MuYW50LXRyZWUtY2hlY2tib3gtaW5uZXJdPVwiIW56U2VsZWN0TW9kZVwiIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5uZXJdPVwibnpTZWxlY3RNb2RlXCI+PC9zcGFuPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveF0nOiBgbnpTZWxlY3RNb2RlYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveC1jaGVja2VkXSc6IGBuelNlbGVjdE1vZGUgJiYgaXNDaGVja2VkYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveC1pbmRldGVybWluYXRlXSc6IGBuelNlbGVjdE1vZGUgJiYgaXNIYWxmQ2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtY2hlY2tib3gtZGlzYWJsZWRdJzogYG56U2VsZWN0TW9kZSAmJiAoaXNEaXNhYmxlZCB8fCBpc0Rpc2FibGVDaGVja2JveClgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtY2hlY2tib3hdJzogYCFuelNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtY2hlY2tib3gtY2hlY2tlZF0nOiBgIW56U2VsZWN0TW9kZSAmJiBpc0NoZWNrZWRgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV0nOiBgIW56U2VsZWN0TW9kZSAmJiBpc0hhbGZDaGVja2VkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLWNoZWNrYm94LWRpc2FibGVkXSc6IGAhbnpTZWxlY3RNb2RlICYmIChpc0Rpc2FibGVkIHx8IGlzRGlzYWJsZUNoZWNrYm94KWBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlQnVpbHRpbkNoZWNrYm94Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpTZWxlY3RNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQ2hlY2tlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNEaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuO1xufVxuIl19