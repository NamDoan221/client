/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './nz-i18n.service';
export class NzI18nPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    transform(path, keyValue) {
        return this._locale.translate(path, keyValue);
    }
}
NzI18nPipe.ɵfac = function NzI18nPipe_Factory(t) { return new (t || NzI18nPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService)); };
NzI18nPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzI18n", type: NzI18nPipe, pure: true });
NzI18nPipe.ctorParameters = () => [
    { type: NzI18nService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzI18nPipe, [{
        type: Pipe,
        args: [{
                name: 'nzI18n'
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2kxOG4vbnotaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUtsRCxNQUFNLE9BQU8sVUFBVTtBQUFHLElBQ3hCLFlBQW9CLE9BQXNCO0FBQUksUUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtBQUFDLElBQUUsQ0FBQztBQUNoRCxJQUNFLFNBQVMsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7QUFBSSxRQUMzQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNsRCxJQUFFLENBQUM7QUFDSDtzQ0FUQyxJQUFJLFNBQUMsa0JBQ0osSUFBSSxFQUFFLFFBQVEsY0FDZjt5RkFDSTtBQUFDO0FBQW9DLFlBTGpDLGFBQWE7QUFBRzs7Ozs7OzhFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuL256LWkxOG4uc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ256STE4bidcbn0pXG5leHBvcnQgY2xhc3MgTnpJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGU6IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHBhdGg6IHN0cmluZywga2V5VmFsdWU/OiBvYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUudHJhbnNsYXRlKHBhdGgsIGtleVZhbHVlKTtcbiAgfVxufVxuIl19