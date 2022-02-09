(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/trans-button', ['@angular/core','@angular/common','exports', '@angular/common', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core['trans-button'] = {}), global.ng.common, global.ng.core));
}(this, (function (ɵngcc0,ɵngcc1,exports, common, core) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTransButtonDirective = /** @class */ (function () {
        function NzTransButtonDirective() {
        }
NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) { return new (t || NzTransButtonDirective)(); };
NzTransButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTransButtonDirective, selectors: [["button", "nz-trans-button", ""]], hostVars: 8, hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransButtonDirective, [{
        type: core.Directive,
        args: [{
                selector: 'button[nz-trans-button]',
                host: {
                    '[style.border]': '"0"',
                    '[style.background]': '"transparent"',
                    '[style.padding]': '"0"',
                    '[style.line-height]': '"inherit"'
                }
            }]
    }], function () { return []; }, null); })();
        return NzTransButtonDirective;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTransButtonModule = /** @class */ (function () {
        function NzTransButtonModule() {
        }
NzTransButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTransButtonModule });
NzTransButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTransButtonModule_Factory(t) { return new (t || NzTransButtonModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTransButtonModule, { declarations: [NzTransButtonDirective], imports: [ɵngcc1.CommonModule], exports: [NzTransButtonDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransButtonModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzTransButtonDirective],
                exports: [NzTransButtonDirective],
                imports: [common.CommonModule]
            }]
    }], function () { return []; }, null); })();
        return NzTransButtonModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzTransButtonDirective = NzTransButtonDirective;
    exports.NzTransButtonModule = NzTransButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-core-trans-button.umd.js.map