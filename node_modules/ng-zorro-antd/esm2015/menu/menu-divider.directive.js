/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzMenuDividerDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
}
NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzMenuDividerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
NzMenuDividerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuDividerDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu-divider]',
                exportAs: 'nzMenuDivider'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1kaXZpZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tZW51L21lbnUtZGl2aWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNakUsTUFBTSxPQUFPLHNCQUFzQjtBQUNuQyxJQUFFLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7QUFDeEUsUUFEcUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztBQUN2RixJQUFFLENBQUM7QUFDSDtrREFSQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG1CQUFtQixrQkFDN0IsUUFBUSxFQUFFLGVBQWUsY0FDMUI7Z0tBQ0k7QUFBQztBQUNVLFlBUEksVUFBVTtBQUFJLFlBQUYsU0FBUztBQUFHOzs7Ozs7O3VHQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotbWVudS1kaXZpZGVyXScsXG4gIGV4cG9ydEFzOiAnbnpNZW51RGl2aWRlcidcbn0pXG5leHBvcnQgY2xhc3MgTnpNZW51RGl2aWRlckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tZGl2aWRlcicpO1xuICB9XG59XG4iXX0=