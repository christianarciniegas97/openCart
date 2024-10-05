import {test as base} from '@playwright/test';
import { CommonPage } from './pages/commonPage';
import { PurchasePage } from './pages/puchasePage';

type MyFixture = {
    commonPage : CommonPage;
    purchasePage : PurchasePage;
}

export const test = base.extend<MyFixture>({
    commonPage: async ({page}, use) =>
    {
        await use (new CommonPage(page))
    },
    purchasePage: async ({page}, use) =>
        {
            await use (new PurchasePage(page))
        }
})

export {expect} from '@playwright/test'
