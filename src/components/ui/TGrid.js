import React from 'react'

const Header = ({ headers }) => {
    const tableHeaders = headers || {}
    return (
        <thead>
            <tr>
                {headers.map(header => <th key={header.index}>{header.title}</th>)}
            </tr>
        </thead>
    )
}

const RowData = ({ row }) => {
    const keys = Object.keys(row)
    return (
        <tr>
            {
                keys.map(key => (<td key={key}>{row[key]}</td>))
            }
        </tr>
    )
}
const TGrid = ({ dataSet, headers}) => {
    const headersTable = headers || Object.keys(dataSet[0]).map((key,idx) => ({index:idx,title:key}))
    return (
        <table>
            <Header headers={headersTable} />
            <tbody>
                {dataSet.map(row => <RowData key={row.id} row={row} />)}
            </tbody>
        </table>
    )
}

export default TGrid