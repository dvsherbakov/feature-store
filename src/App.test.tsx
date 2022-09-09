import {toMatchImageSnapshot} from 'jest-image-snapshot'

expect.extend({toMatchImageSnapshot});

describe('App', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:3000')
    })

    it('should match a link with a "Learn React" text inside', async () => {
        const href = await page.$eval<string, HTMLLinkElement>('.App-link', e => e.innerText)
        expect(href).toMatch('Learn React')
    })

})