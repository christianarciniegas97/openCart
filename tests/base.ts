import {test as base} from '@playwright/test';
import { CommonPage } from './pages/commonPage';

type MyFixture = {
    commonPage : CommonPage;
}

export const test = base.extend<MyFixture>({
    commonPage: async ({page}, use) =>
    {
        await use (new CommonPage(page))
    }
})

export {expect} from '@playwright/test'