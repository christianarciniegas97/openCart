import {test as base} from '@playwright/test';
import { CommonPage } from './pages/commonPage';
import {HomePage} from './pages/homePage';

type MyFixture = {
    commonPage : CommonPage;
    homePage : HomePage;
}

export const test = base.extend<MyFixture>({
    commonPage: async ({page}, use) =>
    {
        await use (new CommonPage(page))
    },
    homePage: async ({page}, use) =>
        {
            await use (new HomePage(page))
        }
})

export {expect} from '@playwright/test'