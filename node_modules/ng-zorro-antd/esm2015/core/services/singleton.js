/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { environment } from 'ng-zorro-antd/core/environments';
import * as i0 from "@angular/core";
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 */
import * as ɵngcc0 from '@angular/core';
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    registerSingletonWithKey(key, target) {
        const alreadyHave = this.singletonRegistry.has(key);
        const item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
    }
    withNewTarget(target) {
        return {
            target
        };
    }
}
NzSingletonService.ɵfac = function NzSingletonService_Factory(t) { return new (t || NzSingletonService)(); };
NzSingletonService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSingletonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvc2VydmljZXMvc2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RDtBQU1BO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0gsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztBQUVwRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtBQUMvQixJQUpBO0FBQ0UsUUFPQTtBQUNGO0FBQ007QUFFQztBQUFXO0FBRUEsV0FEYjtBQUNMLFFBQVUsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7QUFDeEUsS0FtQkM7QUFDRCxJQS9CRSxJQUFZLGlCQUFpQjtBQUFLLFFBQ2hDLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUNqRixJQUFFLENBQUM7QUFDSCxJQVNFLHdCQUF3QixDQUFDLEdBQVcsRUFBRSxNQUFpQjtBQUFJLFFBQ3pELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEQsUUFBSSxNQUFNLElBQUksR0FBMEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BILFFBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUN0QixZQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLG1CQUFtQixDQUFJLEdBQVc7QUFBSSxRQUNwQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUMsTUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbkcsSUFBRSxDQUFDO0FBQ0gsSUFDVSxhQUFhLENBQUMsTUFBaUI7QUFBSSxRQUN6QyxPQUFPO0FBQ1gsWUFBTSxNQUFNO0FBQ1osU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0g7NkdBQUM7QUFDRDs4Q0FuQ0MsVUFBVSxTQUFDO01BQ1YsVUFBVSxFQUFFLE1BQU07WUFDbkI7OztnREFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9lbnZpcm9ubWVudHMnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW50ZXJmYWNlIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XG4gIHRhcmdldDogTnpTYWZlQW55O1xufVxuXG4vKipcbiAqIFdoZW4gcnVubmluZyBpbiB0ZXN0LCBzaW5nbGV0b25zIHNob3VsZCBub3QgYmUgZGVzdHJveWVkLiBTbyB3ZSBrZWVwIHJlZmVyZW5jZXMgb2Ygc2luZ2xldG9uc1xuICogaW4gdGhpcyBnbG9iYWwgdmFyaWFibGUuXG4gKi9cbmNvbnN0IHRlc3RTaW5nbGVSZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+KCk7XG5cbi8qKlxuICogU29tZSBzaW5nbGV0b25zIHNob3VsZCBoYXZlIGxpZmUgY3ljbGUgdGhhdCBpcyBzYW1lIHRvIEFuZ3VsYXIncy4gVGhpcyBzZXJ2aWNlIG1ha2Ugc3VyZSB0aGF0XG4gKiB0aG9zZSBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgaW4gSE1SLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOelNpbmdsZXRvblNlcnZpY2Uge1xuICBwcml2YXRlIGdldCBzaW5nbGV0b25SZWdpc3RyeSgpOiBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+IHtcbiAgICByZXR1cm4gZW52aXJvbm1lbnQuaXNUZXN0TW9kZSA/IHRlc3RTaW5nbGVSZWdpc3RyeSA6IHRoaXMuX3NpbmdsZXRvblJlZ2lzdHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmVnaXN0cnkgaXMgdXNlZCB0byByZWdpc3RlciBzaW5nbGV0b24gaW4gZGV2IG1vZGUuXG4gICAqIFNvIHRoYXQgc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIHdoZW4gaG90IG1vZHVsZSByZWxvYWQgaGFwcGVucy5cbiAgICpcbiAgICogVGhpcyB3b3JrcyBpbiBwcm9kIG1vZGUgdG9vIGJ1dCB3aXRoIG5vIHNwZWNpZmljIGVmZmVjdC5cbiAgICovXG4gIHByaXZhdGUgX3NpbmdsZXRvblJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4oKTtcblxuICByZWdpc3RlclNpbmdsZXRvbldpdGhLZXkoa2V5OiBzdHJpbmcsIHRhcmdldDogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgY29uc3QgYWxyZWFkeUhhdmUgPSB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpO1xuICAgIGNvbnN0IGl0ZW06IFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSA9IGFscmVhZHlIYXZlID8gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5nZXQoa2V5KSEgOiB0aGlzLndpdGhOZXdUYXJnZXQodGFyZ2V0KTtcblxuICAgIGlmICghYWxyZWFkeUhhdmUpIHtcbiAgICAgIHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuc2V0KGtleSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2luZ2xldG9uV2l0aEtleTxUPihrZXk6IHN0cmluZyk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5oYXMoa2V5KSA/ICh0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmdldChrZXkpIS50YXJnZXQgYXMgVCkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoTmV3VGFyZ2V0KHRhcmdldDogTnpTYWZlQW55KTogU2luZ2xldG9uUmVnaXN0cnlJdGVtIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0XG4gICAgfTtcbiAgfVxufVxuIl19