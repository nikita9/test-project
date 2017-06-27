import { browser } from 'protractor'

export abstract class BasePage {
    protected url: string = 'https://google.com/'; // Will be same as baseUrl by default.

    async open() {
        return await browser.get(this.url)
    }
}