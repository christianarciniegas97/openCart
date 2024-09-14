import {Page} from '@playwright/test'


export class CommonPage {
    readonly page : Page;


    constructor(page:Page){
        this.page = page;
    };

    async goToHomePage()
    {
        await this.page.goto('/');
        await this.page.waitForTimeout(2000);
    }
}