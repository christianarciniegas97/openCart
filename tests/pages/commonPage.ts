import {Locator, Page} from '@playwright/test'


export class CommonPage {
    readonly page : Page;

    readonly recipientNameImput : Locator;
    readonly recipientEmailImput : Locator;
    readonly yourNameText : Locator;
    readonly yourEmailText : Locator;
    readonly birthdayRadioButton : Locator;
    readonly christmasRadioButton : Locator;
    readonly generalRadioBUtton : Locator;



    constructor(page:Page){
        this.page = page;
        this.recipientNameImput = page.locator('#input-to-name');
        this.recipientEmailImput = page.locator('.form-control#input-to-email');
        this.yourNameText = page.locator('.form-control#input-from-name');
        this.yourEmailText = page.locator('.form-control#input-from-email');
        this.birthdayRadioButton = page.locator('[value="7"]');
        this.christmasRadioButton = page.locator('[value="6"]');
        this.generalRadioBUtton = page.locator('[value="8"]');
          
    };

    async goToHomePage()
    {
        await this.page.goto('/');
        await this.page.waitForTimeout(2000);
    }
}