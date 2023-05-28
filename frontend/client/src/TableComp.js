function TableComp(props) {
    ///Map each col to its corresponding HTML
    function TableCols(props){ 
        const cols = props.tr.map(
            (col) => 
            <td>
                {col} 
            </td>
        )
        return cols;
    }
//Map each row to its corresponding HTML
function TableRows(props){ 
    const rows = props.td.map(
        (row) => 
        <tr>
            <TableCols tr = {row}/> 
        </tr>
    )
    return rows;
}
    
    return (
        <div className="TableComp">
            <table>
                <TableRows td={props.td}/>
            </table>
        </div>
    );
}
export default TableComp;