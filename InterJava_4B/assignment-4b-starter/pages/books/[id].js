import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import Navbar from '../../components/Navbar';
import LoadingCircle from '../../components/LoadingCircle';


import { getBookData } from '../../utils/api/authors';

export default function Books() {
    const [bookDetails, setbookDetails] = useState()

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (!id) { return }
        getBookData(id).then((data) => {
            console.log(data)

            setbookDetails(data)

        })
    }, [id])
    console.log(`The book details${bookDetails}`)
    //var covers = bookDetails.covers
    //console.log(covers)
    //const covers[] = bookDetails.covers
    // if (!bookDetails.covers) {
    //     return <>
    //         <Navbar />
    //         <Container sx={{ paddingTop: 2 }} component="main">
    //             <Typography variant='h1'>
    //                 {bookDetails.title}
    //             </Typography>
    //             <Typography variant='p'>
    //                 There are no book covers for this title
    //             </Typography>
    //         </Container>
    //     </>
    // }

    return <>

        {!bookDetails ?
            <LoadingCircle />

            :
            !bookDetails.covers ?
                <div>
                    <Head>
                        <title>Library App</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Navbar />
                    <Container sx={{ paddingTop: 2 }} component="main">
                        <Typography variant='h1'>
                            {bookDetails.title}
                        </Typography>
                        <Typography variant='p'>
                            There are no book covers for this title
                        </Typography>
                    </Container>
                </div> :
                <div>
                    <Head>
                        <title>Library App</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Navbar />
                    <Container sx={{ paddingTop: 2 }} component="main">
                        <Typography variant='h1'>
                            {bookDetails.title}
                        </Typography>

                        <ImageList sx={{ width: 700, height: 450 }} cols={3} rowHeight={200}>
                            {

                                bookDetails.covers.map((item, index) => (
                                    <ImageListItem key={index}>
                                        <img
                                            src={`https://covers.openlibrary.org/b/id/${item}-M.jpg`}
                                            srcSet={`https://covers.openlibrary.org/b/id/${item}-M.jpg`}
                                            alt={"Book couldnt load"}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                        </ImageList>

                    </Container>
                </div>
        }
    </>
}