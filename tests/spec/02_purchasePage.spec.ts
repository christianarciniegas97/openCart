import { test } from "../base";

test('Validate Sucessfully Purchase',
        async({purchasePage}) =>
        {
            await purchasePage.goToPurchase();
            await purchasePage.validatePurchaseUrl();
            await purchasePage.fillPurchase(
                                         process.env.NAME,
                                         process.env.EMAIL,
                                         process.env.YOURNAME,
                                         process.env.YOUREMAIL);
            await purchasePage.sendPurchaseForm();                             
            await purchasePage.validatePageUrl(
                                         process.env.SUCESSFULLPURCHASEPAGE);
            await purchasePage.validateSucessPurchaseUrl();
            await purchasePage.validateSucessfullyPurchaseMessage();
        });   

test('Validate Warnings in Purchase Page',
        async({purchasePage}) =>
        {
            await purchasePage.goToPurchase();
            await purchasePage.sendPurchaseForm(); 
            await purchasePage.waitForTimeOut(200);
            await purchasePage.validateWarningMessagePurchasePage();                         
        }); 