/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime, finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
const NOOP = () => { };
const ɵ0 = NOOP;
export class NzResizeService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource$ = new Subject();
        this.listeners = 0;
        this.disposeHandle = NOOP;
        this.handler = () => {
            this.ngZone.run(() => {
                this.resizeSource$.next();
            });
        };
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    subscribe() {
        this.registerListener();
        return this.resizeSource$.pipe(auditTime(16), finalize(() => this.unregisterListener()));
    }
    unsubscribe() {
        this.unregisterListener();
    }
    registerListener() {
        if (this.listeners === 0) {
            this.ngZone.runOutsideAngular(() => {
                this.disposeHandle = this.renderer.listen('window', 'resize', this.handler);
            });
        }
        this.listeners += 1;
    }
    unregisterListener() {
        this.listeners -= 1;
        if (this.listeners === 0) {
            this.disposeHandle();
            this.disposeHandle = NOOP;
        }
    }
}
NzResizeService.ɵfac = function NzResizeService_Factory(t) { return new (t || NzResizeService)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2)); };
NzResizeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeService_Factory() { return new NzResizeService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzResizeService, providedIn: "root" });
NzResizeService.ctorParameters = () => [
    { type: NgZone },
    { type: RendererFactory2 }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.RendererFactory2 }]; }, null); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvc2VydmljZXMvcmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQ7O0FBQ0EsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQzVCO0FBSUEsTUFBTSxPQUFPLGVBQWU7QUFDNUIsSUFjRSxZQUFvQixNQUFjLEVBQVUsZ0JBQWtDO0FBQ2hGLFFBRHNCLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQWQ5RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDdkQsUUFDVSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLFFBR1Usa0JBQWEsR0FBRyxJQUFJLENBQUM7QUFDL0IsUUFDVSxZQUFPLEdBQUcsR0FBUyxFQUFFO0FBQy9CLFlBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ3pCLGdCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEMsWUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUUsQ0FBQyxDQUFDO0FBQ0osUUFFSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JFLElBQUUsQ0FBQztBQUNILElBQ0UsU0FBUztBQUFLLFFBQ1osSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDNUIsUUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQzFDLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQ1UsZ0JBQWdCO0FBQUssUUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRTtBQUM5QixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO0FBQ3pDLGdCQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEYsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBQ1Usa0JBQWtCO0FBQUssUUFDN0IsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7QUFDeEIsUUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO0FBQzlCLFlBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzNCLFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDaEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOzRLQUFDO0FBQ0QscU9BbkRLO0FBQUM7RUFITCxVQUFVLFNBQUMsckJBSUksWUFWSyxNQUFNO2lCQU96QixVQUFVLEVBQUUsN0JBUGlCLFlBQVMsZ0JBQWdCO0FBQUc7Q0FPdkMsY0FDbkI7Ozs7OzBHQVI0RDtBQUFDO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTk9PUCA9ICgpOiB2b2lkID0+IHt9O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVNvdXJjZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgbGlzdGVuZXJzID0gMDtcblxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgcHJpdmF0ZSBkaXNwb3NlSGFuZGxlID0gTk9PUDtcblxuICBwcml2YXRlIGhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzaXplU291cmNlJC5uZXh0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHN1YnNjcmliZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXIoKTtcblxuICAgIHJldHVybiB0aGlzLnJlc2l6ZVNvdXJjZSQucGlwZShcbiAgICAgIGF1ZGl0VGltZSgxNiksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLnVucmVnaXN0ZXJMaXN0ZW5lcigpKVxuICAgICk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJMaXN0ZW5lcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3Bvc2VIYW5kbGUgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RlbmVycyArPSAxO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMgLT0gMTtcblxuICAgIGlmICh0aGlzLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgdGhpcy5kaXNwb3NlSGFuZGxlKCk7XG4gICAgICB0aGlzLmRpc3Bvc2VIYW5kbGUgPSBOT09QO1xuICAgIH1cbiAgfVxufVxuIl19