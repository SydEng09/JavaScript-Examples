import { BASE_URL } from "./base";

const getAuthor = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data
        })
}


const getBooks = (authorKey) => {
    console.log(`${BASE_URL}/authors/${authorKey}/works.json`)
    return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data
        })
}

export { getAuthor, getBooks }