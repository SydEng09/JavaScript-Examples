import { useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function Navbar(props) {
  const [authors, setAuthors] = useState([])
  const [search, setSearch] = useState("")

  /* Bonus Add useEffect here listen to search changes
    and fetch from the "searchAuthor" api documented here
  */



  const changeAuthorKey = (newAuthorKey) => {

    /* Call your function with passed in via props here */


  }


  return <AppBar position="relative" sx={{ mb: '1rem' }}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Our Library
      </Typography>
      <Autocomplete
        freeSolo
        sx={{ minWidth: '320px' }}
        onChange={(event, newValue) => {
          changeAuthorKey(newValue.key)
        }}
        getOptionLabel={(option) => `${option.name} (${option.key})`}
        options={authors}
        renderOption={(props, option) => {
          return <Box key={option.key} component="li" {...props}>
            {option.name} - {option.key}
          </Box>
        }}
        renderInput={(params) => {
          return <TextField {...params}
            sx={{
              label: {
                color: "white"
              },
              input: {
                color: "white"
              }
            }}

            variant="outlined"
            value={search}
            onChange={(event) => { setSearch(event.target.value) }}
            label="search"
          />
        }}
      />
    </Toolbar>
  </AppBar>
}