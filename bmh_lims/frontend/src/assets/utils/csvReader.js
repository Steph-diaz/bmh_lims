import XLSX from 'xlsx'
import Papa from 'papaparse'

export const csvReader = (csvFile, toDo) => {
    Papa.parse(csvFile, {skipEmptyLines: true, complete: res => toDo(res.data)})
}

export const xlsxReader = (xlsxFile, toDo) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
        const bstr = evt.target.result
        const wb = XLSX.read(bstr, {type:'binary', cellDates: true})
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws, {header: 1, blankrows: false, skipUndefined: false})
        const stringifiedData = data.map(row => {
            return data[0].map((header, idx) => {
                if(!row[idx]) {
                    return null
                }
                if (header === 'culture_date' || header === 'dna_extraction_date') {
                    if ((/^\d{8}$/).test(row[idx])) {
                        const date = row[idx].toString()
                        return date.slice(0, 4) + '-' + date.slice(5, 7) + '-' + date.slice(6)
                    }
                    try {
                        return (new Date(row[idx])).toISOString().split('T')[0]
                    } catch (error) {
                        return row[idx]
                    }
                }
                return row[idx]
            })
        })
        toDo(stringifiedData)
    };
    reader.readAsBinaryString(xlsxFile);
}
