(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/platform'),exports, require('@angular/cdk/platform'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/transition-patch', ['@angular/core','@angular/cdk/platform','exports', '@angular/cdk/platform', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.cdk.platform,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core['transition-patch'] = {}), global.ng.cdk.platform, global.ng.core));
}(this, (function (ɵngcc0,ɵngcc1,exports, platform, core) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * hack the bug
     * angular router change with unexpected transition trigger after calling applicationRef.attachView
     * https://github.com/angular/angular/issues/34718
     */
    var NzTransitionPatchDirective = /** @class */ (function () {
        function NzTransitionPatchDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.hidden = null;
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
        }
        NzTransitionPatchDirective.prototype.setHiddenAttribute = function () {
            if (this.hidden === true) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
            }
            else if (this.hidden === false || this.hidden === null) {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
            }
            else if (typeof this.hidden === 'string') {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', this.hidden);
            }
        };
        NzTransitionPatchDirective.prototype.ngOnChanges = function () {
            this.setHiddenAttribute();
        };
        NzTransitionPatchDirective.prototype.ngAfterViewInit = function () {
            this.setHiddenAttribute();
        };
NzTransitionPatchDirective.ɵfac = function NzTransitionPatchDirective_Factory(t) { return new (t || NzTransitionPatchDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTransitionPatchDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTransitionPatchDirective, selectors: [["", "nz-button", ""], ["nz-button-group"], ["", "nz-icon", ""], ["", "nz-menu-item", ""], ["", "nz-submenu", ""], ["nz-select-top-control"], ["nz-select-placeholder"], ["nz-input-group"]], inputs: { hidden: "hidden" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransitionPatchDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { hidden: [{
            type: core.Input
        }] }); })();
        return NzTransitionPatchDirective;
    }());
    NzTransitionPatchDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NzTransitionPatchDirective.propDecorators = {
        hidden: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTransitionPatchModule = /** @class */ (function () {
        function NzTransitionPatchModule() {
        }
NzTransitionPatchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTransitionPatchModule });
NzTransitionPatchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTransitionPatchModule_Factory(t) { return new (t || NzTransitionPatchModule)(); }, imports: [[platform.PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTransitionPatchModule, { declarations: [NzTransitionPatchDirective], imports: [ɵngcc1.PlatformModule], exports: [NzTransitionPatchDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransitionPatchModule, [{
        type: core.NgModule,
        args: [{
                imports: [platform.PlatformModule],
                exports: [NzTransitionPatchDirective],
                declarations: [NzTransitionPatchDirective]
            }]
    }], function () { return []; }, null); })();
        return NzTransitionPatchModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵNzTransitionPatchDirective = NzTransitionPatchDirective;
    exports.ɵNzTransitionPatchModule = NzTransitionPatchModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-core-transition-patch.umd.js.map