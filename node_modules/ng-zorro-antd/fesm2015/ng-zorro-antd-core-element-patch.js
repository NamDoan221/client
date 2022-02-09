import { Directive, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * A patch directive to select the element of a component.
 */
import * as ɵngcc0 from '@angular/core';
class NzElementPatchDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
}
NzElementPatchDirective.ɵfac = function NzElementPatchDirective_Factory(t) { return new (t || NzElementPatchDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzElementPatchDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzElementPatchDirective, selectors: [["", "nzElement", ""], ["", "nz-element", ""]], exportAs: ["nzElement"] });
NzElementPatchDirective.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzElementPatchDirective, [{
        type: Directive,
        args: [{
                selector: '[nzElement], [nz-element]',
                exportAs: 'nzElement'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzElementPatchModule {
}
NzElementPatchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzElementPatchModule });
NzElementPatchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzElementPatchModule_Factory(t) { return new (t || NzElementPatchModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzElementPatchModule, { declarations: function () { return [NzElementPatchDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NzElementPatchDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzElementPatchModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NzElementPatchDirective],
                exports: [NzElementPatchDirective]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzElementPatchDirective, NzElementPatchModule };

//# sourceMappingURL=ng-zorro-antd-core-element-patch.js.map