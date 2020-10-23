const CODES = {
    A: 65,
    Z: 90
}

function createCell() {
    return `
        <div class="cell" contenteditable></div>
        `
}
function toColumn(col) {
    return `
        <div class="column">${col}</div>
        `
}

function createRow(content, number = '') {
    return `
        <div class="row">
        <div class="row-info">${number}</div>
        <div class="row-data">${content}</div>
        </div>
        `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 30) {
    const colCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    const cell = new Array(colCount)
        .fill('')
        .map(createCell)
        .join('')

    rows.push(createRow(cols))
    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cell, i + 1))
    }
    return rows.join('')

}