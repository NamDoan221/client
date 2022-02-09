/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzRowExpandButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.expand = false;
        this.spaceMode = false;
        this.expandChange = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-row-expand-icon');
    }
    onHostClick() {
        if (!this.spaceMode) {
            this.expand = !this.expand;
            this.expandChange.next(this.expand);
        }
    }
}
NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) { return new (t || NzRowExpandButtonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzRowExpandButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzRowExpandButtonDirective, selectors: [["button", "nz-row-expand-button", ""]], hostVars: 7, hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzRowExpandButtonDirective_click_HostBindingHandler() { return ctx.onHostClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", "button");
        ɵngcc0.ɵɵclassProp("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
    } }, inputs: { expand: "expand", spaceMode: "spaceMode" }, outputs: { expandChange: "expandChange" } });
NzRowExpandButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzRowExpandButtonDirective.propDecorators = {
    expand: [{ type: Input }],
    spaceMode: [{ type: Input }],
    expandChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRowExpandButtonDirective, [{
        type: Directive,
        args: [{
                selector: 'button[nz-row-expand-button]',
                host: {
                    '[type]': `'button'`,
                    '[class.ant-table-row-expand-icon-expanded]': `!spaceMode && expand === true`,
                    '[class.ant-table-row-expand-icon-collapsed]': `!spaceMode && expand === false`,
                    '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
                    '(click)': 'onHostClick()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { expand: [{
            type: Input
        }], spaceMode: [{
            type: Input
        }], expandChange: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWV4cGFuZC1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9hZGRvbi9yb3ctZXhwYW5kLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVluRixNQUFNLE9BQU8sMEJBQTBCO0FBQ3ZDLElBSUUsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBSmxDLFdBQU0sR0FBRyxLQUFLLENBQUM7QUFDMUIsUUFBVyxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQXFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN2RCxRQUVJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUM3RSxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDakMsWUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO3NEQTFCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDhCQUE4QixrQkFDeEMsSUFBSSxFQUFFLHNCQUNKO09BQVEsRUFBRSxVQUFVLHNCQUNwQiw0Q0FBNEMsRUFBRSwrQkFBK0Isc0JBQzdFLDZDQUE2QyxFQUFFLGdDQUFnQyxzQkFDL0U7a0NBQTBDLEVBQUUsV0FBVyxzQkFDdkQsU0FBUyxFQUFFLGVBQWUsa0JBQzNCLGNBQ0Y7Ozs7NEdBQ0k7QUFBQztBQUNVLFlBYkksVUFBVTtBQUFHO0FBQUc7QUFBOEMscUJBYS9FLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssMkJBQ1YsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbnotcm93LWV4cGFuZC1idXR0b25dJyxcbiAgaG9zdDoge1xuICAgICdbdHlwZV0nOiBgJ2J1dHRvbidgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1leHBhbmRlZF0nOiBgIXNwYWNlTW9kZSAmJiBleHBhbmQgPT09IHRydWVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jb2xsYXBzZWRdJzogYCFzcGFjZU1vZGUgJiYgZXhwYW5kID09PSBmYWxzZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLXNwYWNlZF0nOiAnc3BhY2VNb2RlJyxcbiAgICAnKGNsaWNrKSc6ICdvbkhvc3RDbGljaygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Um93RXhwYW5kQnV0dG9uRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZXhwYW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNwYWNlTW9kZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24nKTtcbiAgfVxuXG4gIG9uSG9zdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zcGFjZU1vZGUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgICAgdGhpcy5leHBhbmRDaGFuZ2UubmV4dCh0aGlzLmV4cGFuZCk7XG4gICAgfVxuICB9XG59XG4iXX0=