import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '../table/table.tamplate'
import { resizeHeader } from '../table/table.resize'
import { shouldResize } from '../table/table.function'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHeader(this.$root, event)
    }
  }
}
