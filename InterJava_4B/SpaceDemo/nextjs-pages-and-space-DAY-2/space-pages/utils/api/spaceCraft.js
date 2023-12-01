import {BASE_URL} from './base'

const getSpaceCraft = (id) => {
    return fetch(`${BASE_URL}/config/spacecraft/${id}/`)
        .then((response)=> {
            if (response.status === 404) {
                throw Error("data not found")
            }
            return response.json()
        }).then((data)=> {
            return data
        })
}

export { getSpaceCraft }
