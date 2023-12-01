import { BASE_URL } from './base.js'

const getAuthor = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data
        })
}

const getAuthorWorks = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data.entries
        })
}

const getBookData = (bookId) => {
    console.log(`${BASE_URL}/works/${bookId}.json`)
    return fetch(`${BASE_URL}/works/${bookId}.json`)
        .then((response) => {
            return response.json()

        }).then((data) => {
            console.log(data)
            return data

        })
}

export { getAuthor, getAuthorWorks, getBookData }
