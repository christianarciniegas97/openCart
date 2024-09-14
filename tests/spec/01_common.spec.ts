import { test } from "../base";

test('go to homepage', 
    async({commonPage}) =>
    {
        await commonPage.goToHomePage();
    });