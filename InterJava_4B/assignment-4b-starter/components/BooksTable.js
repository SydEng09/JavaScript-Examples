import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

export default function BooksTable(props) {
  const router = useRouter()
  let id;

  const navigateToBookPage = (key) => {
    console.log(`/books/${key}`)
    let idstring = key;
    let id = idstring.substring(7)
    console.log(`The id from substring ${id}`);
    // i'm "push" the route
    router.push(`/books/${id}`)
  }

  return <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Books in all Languages</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.books.map((book, index) => {
          return <TableRow
            key={index}
          >
            <TableCell>
              {book.title}
            </TableCell>
            <Button
              onClick={() => navigateToBookPage(book.key)}
              size="small"
            >
              Details
            </Button>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </TableContainer>
}