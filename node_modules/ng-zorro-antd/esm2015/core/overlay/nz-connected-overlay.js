/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Directive } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
export class NzConnectedOverlayDirective {
    constructor(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
}
NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkConnectedOverlay)); };
NzConnectedOverlayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
NzConnectedOverlayDirective.ctorParameters = () => [
    { type: CdkConnectedOverlay }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzConnectedOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: ɵngcc1.CdkConnectedOverlay }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29ubmVjdGVkLW92ZXJsYXkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29yZS9vdmVybGF5L256LWNvbm5lY3RlZC1vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNMUMsTUFBTSxPQUFPLDJCQUEyQjtBQUN4QyxJQUFFLFlBQW9CLG1CQUF3QztBQUM5RCxRQURzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0FBQUMsUUFDM0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxpQ0FBaUMsQ0FBQztBQUMvRSxJQUFFLENBQUM7QUFDSDt1REFSQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDJDQUEyQyxrQkFDckQsUUFBUSxFQUFFO0dBQW9CLGNBQy9CLDRMQUNJO0FBQUM7QUFDVSxZQVJQLG1CQUFtQjtBQUFHOzs7Ozs7O29GQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtDb25uZWN0ZWRPdmVybGF5XVtuekNvbm5lY3RlZE92ZXJsYXldJyxcbiAgZXhwb3J0QXM6ICduekNvbm5lY3RlZE92ZXJsYXknXG59KVxuZXhwb3J0IGNsYXNzIE56Q29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheSkge1xuICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5iYWNrZHJvcENsYXNzID0gJ256LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnO1xuICB9XG59XG4iXX0=