
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar() {
  return <AppBar position="relative" sx={{ mb: '1rem' }}>
    <Toolbar>
      <Link href="/">
        <Typography
          variant="h6"
          color="white"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Our Library
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
}