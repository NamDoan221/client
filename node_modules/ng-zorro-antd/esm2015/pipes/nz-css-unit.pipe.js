/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzToCssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const absoluteLengthUnit = ['cm', 'mm', 'Q', 'in', 'pc', 'pt', 'px'];
        const relativeLengthUnit = ['em', 'ex', 'ch', 'rem', '1h', 'vw', 'vh', 'vmin', 'vmax'];
        const percentagesUnit = ['%'];
        const listOfUnit = [...absoluteLengthUnit, ...relativeLengthUnit, ...percentagesUnit];
        let unit = 'px';
        if (listOfUnit.some(u => u === defaultUnit)) {
            unit = defaultUnit;
        }
        return typeof value === 'number' ? `${value}${unit}` : `${value}`;
    }
}
NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); };
NzToCssUnitPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzToCssUnitPipe, [{
        type: Pipe,
        args: [{
                name: 'nzToCssUnit'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9waXBlcy9uei1jc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQUM3QixTQUFTLENBQUMsS0FBc0IsRUFBRSxjQUFzQixJQUFJO0FBQUksUUFDOUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pFLFFBQUksTUFBTSxrQkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0YsUUFBSSxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLFFBQUksTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUMxRixRQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNwQixRQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsRUFBRTtBQUNqRCxZQUFNLElBQUksR0FBRyxXQUFXLENBQUM7QUFDekIsU0FBSztBQUNMLFFBQUksT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ3RFLElBQUUsQ0FBQztBQUNIOzJDQWZDLElBQUksU0FBQyxrQkFDSixJQUFJLEVBQUUsYUFBYTtNQUNwQjs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ256VG9Dc3NVbml0J1xufSlcbmV4cG9ydCBjbGFzcyBOelRvQ3NzVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGRlZmF1bHRVbml0OiBzdHJpbmcgPSAncHgnKTogc3RyaW5nIHtcbiAgICBjb25zdCBhYnNvbHV0ZUxlbmd0aFVuaXQgPSBbJ2NtJywgJ21tJywgJ1EnLCAnaW4nLCAncGMnLCAncHQnLCAncHgnXTtcbiAgICBjb25zdCByZWxhdGl2ZUxlbmd0aFVuaXQgPSBbJ2VtJywgJ2V4JywgJ2NoJywgJ3JlbScsICcxaCcsICd2dycsICd2aCcsICd2bWluJywgJ3ZtYXgnXTtcbiAgICBjb25zdCBwZXJjZW50YWdlc1VuaXQgPSBbJyUnXTtcbiAgICBjb25zdCBsaXN0T2ZVbml0ID0gWy4uLmFic29sdXRlTGVuZ3RoVW5pdCwgLi4ucmVsYXRpdmVMZW5ndGhVbml0LCAuLi5wZXJjZW50YWdlc1VuaXRdO1xuICAgIGxldCB1bml0ID0gJ3B4JztcbiAgICBpZiAobGlzdE9mVW5pdC5zb21lKHUgPT4gdSA9PT0gZGVmYXVsdFVuaXQpKSB7XG4gICAgICB1bml0ID0gZGVmYXVsdFVuaXQ7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYCR7dmFsdWV9JHt1bml0fWAgOiBgJHt2YWx1ZX1gO1xuICB9XG59XG4iXX0=