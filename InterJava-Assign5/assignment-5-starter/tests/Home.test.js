import 'isomorphic-fetch'

import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { BASE_URL } from '../utils/api/base.js';
import Home from '../pages/index.js'


const server = setupServer(
    rest.get(`${BASE_URL}/api/breeds/image/random`, (req, res, ctx) => {

        return res(ctx.json(
            {
                "status": "success",
                "message": BASE_URL
            }
        ))
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

test("test home that title exists", async () => {
    await act(() => {
        render(<Home />)
    })
    let title = screen.getByText("Welcome to Dinder")


    expect(title).toBeInTheDocument()

})

test("test home that buttons are rendered", async () => {
    await act(() => {
        render(<Home />)
    })
    let nopebutton = screen.getByText("Nope")
    let likebutton = screen.getByText("Like")

    expect(nopebutton).toBeInTheDocument()
    expect(likebutton).toBeInTheDocument()

})

test("test home that image is rendered", async () => {
    await act(() => {
        render(<Home />)
    })
    let image = screen.getByTestId("dog-image")


    expect(image).toBeInTheDocument()
    expect(image.src).toContain(BASE_URL)

})

