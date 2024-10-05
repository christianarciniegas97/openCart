import {expect, Locator, Page} from '@playwright/test'


export class PurchasePage {
    readonly page : Page;

    readonly recipientNameImput : Locator;
    readonly recipientEmailImput : Locator;
    readonly yourNameText : Locator;
    readonly yourEmailText : Locator;
    readonly birthdayRadioButton : Locator;
    readonly christmasRadioButton : Locator;
    readonly generalRadioBUtton : Locator;
    readonly understandCheckbox : Locator;
    readonly continuePurchase : Locator;
    readonly congratsPurchaseMessage : Locator;
    readonly warningPurchaseMessage : Locator;
    readonly recipientNameImputWarning : Locator;
    readonly recipientEmailInputWarning : Locator;
    readonly yourEmailWarning : Locator;
    readonly yourNameWarning : Locator;
    readonly gitfCertificateWarning : Locator;


    constructor(page:Page){
        this.page = page;
        this.recipientNameImput = page.locator('.form-control#input-to-name');
        this.recipientEmailImput = page.locator('.form-control#input-to-email');
        this.yourNameText = page.locator('.form-control#input-from-name');
        this.yourEmailText = page.locator('.form-control#input-from-email');
        this.birthdayRadioButton = page.locator('[value="7"]');
        this.christmasRadioButton = page.locator('[value="6"]');
        this.generalRadioBUtton = page.locator('[value="8"]');
        this.understandCheckbox = page.getByRole('checkbox');
        this.continuePurchase = page.locator('.btn-primary');
        this.congratsPurchaseMessage = page.getByText('Thank you for purchasing a gift certificate!');
        this.warningPurchaseMessage = page.getByText(' Warning');
        this.recipientNameImputWarning = page.getByText("Recipient's Name must be between 1 and 64 characters!");
        this.recipientEmailInputWarning = page.locator('div.form-group:nth-of-type(2) div.text-danger');
        this.yourNameWarning = page.getByText("Your Name must be between 1 and 64 characters!");
        this.yourEmailWarning = page.locator('div.form-group:nth-of-type(4) div.text-danger');
        this.gitfCertificateWarning = page.getByText("You must select a theme!");
          
    };

    async goToPurchase(){
        await this.page.goto('/index.php?route=account/voucher');
    }

    async fillPurchase(name, email, urName,urEmail){
        
        await this.recipientNameImput.fill(name);
        await this.recipientEmailImput.fill(email);
        await this.yourNameText.fill(urName);
        await this.yourEmailText.fill(urEmail);
        const birthdayRadio = this.page.locator('[value="6"]');
        await birthdayRadio.waitFor({ state: 'visible' });
        await birthdayRadio.click({ force: true }); 
        await this.understandCheckbox.check();
        await this.page.waitForTimeout(2000);
    }

    async sendPurchaseForm(){
        await this.continuePurchase.click();
        await this.page.waitForTimeout(2000);
    }

    async validatePageUrl(pageUrl){
       await expect(this.page).toHaveURL(pageUrl);
    }

    //irregular expression method
    async validateSucessPurchaseUrl(){
        await expect(this.page).toHaveURL(/.*success/);
    }

    //irregular expression method
    async validatePurchaseUrl(){
        await expect(this.page).toHaveURL(/.*voucher/);
    }

    async validateSucessfullyPurchaseMessage(){
        await expect(this.congratsPurchaseMessage).toContainText('Thank you for purchasing a gift certificate! Once you have completed your order your gift certificate recipient will be sent an e-mail with details how to redeem their gift certificate.');        
    }

    async waitForTimeOut(timeToWait){
        await this.page.waitForTimeout(timeToWait);
    }

    async validateWarningMessagePurchasePage(){
        await expect(this.warningPurchaseMessage).toContainText('Warning: You must agree that the gift certificates are non-refundable!');
        await expect(this.recipientNameImputWarning).toContainText("Recipient's Name must be between 1 and 64 characters!");
        await expect(this.recipientNameImput).toHaveCSS('border-color', 'rgb(169, 68, 66)');
        await expect(this.recipientEmailInputWarning).toContainText("E-Mail Address does not appear to be valid!");
        await expect(this.recipientEmailImput).toHaveCSS('border-color', 'rgb(169, 68, 66)');
        await expect(this.yourNameWarning).toContainText("Your Name must be between 1 and 64 characters!");
        await expect(this.recipientNameImput).toHaveCSS('border-color', 'rgb(169, 68, 66)');
        await expect(this.yourEmailWarning).toContainText('E-Mail Address does not appear to be valid!');
        await expect(this.recipientEmailImput).toHaveCSS('border-color', 'rgb(169, 68, 66)');
        await expect(this.gitfCertificateWarning).toContainText("You must select a theme!");
    }
}