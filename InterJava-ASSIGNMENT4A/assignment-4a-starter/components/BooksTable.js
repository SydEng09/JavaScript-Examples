import { TableBody, TableRow, Table, TableHead } from "@mui/material"
import { TableCell } from "@mui/material"


export default function BookTable(props) {
    console.log("enter BookTable");
    console.log(props)
    return <Table>
        <TableHead>
            <TableRow>
                <TableCell>Books in all Languages</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>{
            props.books.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>{row.title}</TableCell>
                </TableRow>


            ))}
        </TableBody>
    </Table>

}


export { BookTable }