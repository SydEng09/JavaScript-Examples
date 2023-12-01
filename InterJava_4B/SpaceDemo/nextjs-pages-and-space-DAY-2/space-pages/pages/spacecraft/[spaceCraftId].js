import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import NavBar from '@components/NavBar';
import LoadingCircle from '@components/LoadingCircle';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

import { getSpaceCraft } from '@utils/api/spaceCraft';

export default function SpaceCraft() {
  const [spaceCraftDetails, setSpaceCraftDetails] = useState()

  const router = useRouter()
  const { spaceCraftId } = router.query

  useEffect(() => {
    if (!spaceCraftId) { return } // you might find useful.

    getSpaceCraft(spaceCraftId).then((data) => { // fetch the data from the backend.
      // the first way.
      // if (data.detail === "Not found.") {
      //   router.push("/404")
      // }
      console.log(data)
      // set the fetched data to the frontend state
      setSpaceCraftDetails(data)
    }).catch((error) => {
      router.push("/404")
    })
  }, [spaceCraftId]) //when the components' spaceCraftId changes (when the page loads)

  // we are going to make a loading state
  if (!spaceCraftDetails) {
    return <>
      <NavBar />
      <Container sx={{ paddingTop: 2 }} component="main">
        <LoadingCircle />
      </Container>
    </>
  }

  return <>
    <NavBar />
    <Container sx={{ paddingTop: 2 }} component="main">
      <Grid container>
        <Grid item xs={4}>
          <img
            style={{ width: '220px' }}
            src={spaceCraftDetails.image_url}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">
            {spaceCraftDetails.name}
          </Typography>
          <SimpleDetailsCard
            title="history"
            subDescription={spaceCraftDetails.history}
          />
          <SimpleDetailsCard
            title="details"
            subDescription={spaceCraftDetails.details}
          />
          {spaceCraftDetails.flight_life &&
            <SimpleDetailsCard
              title="flight life"
              subDescription={spaceCraftDetails.flight_life}
            />
          }

        </Grid>
      </Grid>

    </Container>
  </>
}