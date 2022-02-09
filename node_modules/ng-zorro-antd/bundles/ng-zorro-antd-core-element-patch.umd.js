(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/element-patch', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core['element-patch'] = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * A patch directive to select the element of a component.
     */
    var NzElementPatchDirective = /** @class */ (function () {
        function NzElementPatchDirective(elementRef) {
            this.elementRef = elementRef;
        }
        Object.defineProperty(NzElementPatchDirective.prototype, "nativeElement", {
            get: function () {
                return this.elementRef.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
NzElementPatchDirective.ɵfac = function NzElementPatchDirective_Factory(t) { return new (t || NzElementPatchDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzElementPatchDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzElementPatchDirective, selectors: [["", "nzElement", ""], ["", "nz-element", ""]], exportAs: ["nzElement"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzElementPatchDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzElement], [nz-element]',
                exportAs: 'nzElement'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return NzElementPatchDirective;
    }());
    NzElementPatchDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzElementPatchModule = /** @class */ (function () {
        function NzElementPatchModule() {
        }
NzElementPatchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzElementPatchModule });
NzElementPatchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzElementPatchModule_Factory(t) { return new (t || NzElementPatchModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzElementPatchModule, { declarations: [NzElementPatchDirective], imports: [ɵngcc1.CommonModule], exports: [NzElementPatchDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzElementPatchModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                declarations: [NzElementPatchDirective],
                exports: [NzElementPatchDirective]
            }]
    }], function () { return []; }, null); })();
        return NzElementPatchModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzElementPatchDirective = NzElementPatchDirective;
    exports.NzElementPatchModule = NzElementPatchModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-core-element-patch.umd.js.map