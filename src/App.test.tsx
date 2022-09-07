import {chromium} from "playwright";
import {toMatchImageSnapshot} from "jest-image-snapshot";

expect.extend({toMatchImageSnapshot});

describe("screenshots", () => {
    test("colored-form page", async () => {
        const browser = await chromium.launch({headless: true, args: ["--disable-web-security"]});
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://localhost:3000/colored-form");

        await page.locator("footer").waitFor();

        const image = await page.screenshot({fullPage: true});
        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: "percent",
        });

        await browser.close();
    });

    test("awesome page", async () => {
        const browser = await chromium.launch({headless: true, args: ["--disable-web-security"]});
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://localhost:3000/awesome");

        await page.locator("footer").waitFor();

        const image = await page.screenshot({fullPage: true});
        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: "percent",
        });

        await browser.close();
    });
});
