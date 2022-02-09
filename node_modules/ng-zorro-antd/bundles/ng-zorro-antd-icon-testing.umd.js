(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/icon'),exports, require('@angular/core'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/icon/testing', ['@angular/core','ng-zorro-antd/icon','exports', '@angular/core', '@ant-design/icons-angular/icons', 'ng-zorro-antd/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].icon = global['ng-zorro-antd'].icon || {}, global['ng-zorro-antd'].icon.testing = {}), global.ng.core, global.AllIcons, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, AllIcons, icon) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var AllIcons__namespace = /*#__PURE__*/_interopNamespace(AllIcons);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var antDesignIcons = AllIcons__namespace;
    var ɵ0 = function (key) {
        var i = antDesignIcons[key];
        return i;
    };
    var icons = Object.keys(antDesignIcons).map(ɵ0);
    var ɵ1 = icons;
    /**
     * Include this module in every testing spec, except `icon.spec.ts`.
     */
    // @dynamic
    var NzIconTestModule = /** @class */ (function () {
        function NzIconTestModule() {
        }
NzIconTestModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzIconTestModule });
NzIconTestModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: icon.NZ_ICONS,
            useValue: ɵ1
        }
    ], imports: [ɵngcc1.NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: [ɵngcc1.NzIconModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconTestModule, [{
        type: core.NgModule,
        args: [{
                exports: [icon.NzIconModule],
                providers: [
                    {
                        provide: icon.NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            }]
    }], function () { return []; }, null); })();
        return NzIconTestModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzIconTestModule = NzIconTestModule;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-icon-testing.umd.js.map