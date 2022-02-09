/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class NzMentionService {
    constructor() {
        this.triggerChange$ = new Subject();
    }
    triggerChanged() {
        return this.triggerChange$.asObservable();
    }
    registerTrigger(trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    }
    ngOnDestroy() {
        this.triggerChange$.complete();
    }
}
NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
NzMentionService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMentionService, factory: NzMentionService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21lbnRpb24vbWVudGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7QUFBRyxJQURoQztBQUNFLFFBRVEsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBNkIsQ0FBQztBQUNwRSxJQWVBLENBQUM7QUFDRCxJQWZFLGNBQWM7QUFBSyxRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlLENBQUMsT0FBa0M7QUFBSSxRQUNwRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO0FBQ2xDLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNIOzRDQW5CQyxVQUFVOzs7O2dEQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWVudGlvbi10cmlnZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56TWVudGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRyaWdnZXI/OiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlO1xuICBwcml2YXRlIHRyaWdnZXJDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZT4oKTtcblxuICB0cmlnZ2VyQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU+IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyQ2hhbmdlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyVHJpZ2dlcih0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciAhPT0gdHJpZ2dlcikge1xuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZSQubmV4dCh0cmlnZ2VyKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2UkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==