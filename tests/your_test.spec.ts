import { test } from "@playwright/test";
// import all the page objects you need here 
// you will definitely need the landing page and the irregular hours page (see below)
// the rest depend on your user journey through the app
// HINT: you may need to create some new page objects for new pages you encounter
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import SummaryPage from "./pages/summaryPage";
import LeaveStartDatePage from "./pages/leaveStartDatePage"

test(`Your test - an alternate path`, async ({ page }): Promise<void> => {
    // Write your test here!
    // Add comments first to outline the steps then SHOW US YOUR STEPS BEFORE you start writing code!
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    // 1. Landing Page
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads();
    await landingPage.continueOn();

    // 2. Irregular Hours Page
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage(page);
    await irregularHoursPage.checkPageLoads();
    await irregularHoursPage.clickYesButton();
    await irregularHoursPage.continueOn();

    // 3. Leave Start Date Page (12/01/2026)
    // TODO
    const workOutHolidayPage: LeaveStartDatePage = new LeaveStartDatePage(page);
    await workOutHolidayPage.checkPageLoads();
    await workOutHolidayPage.enterDate('12', '01', '2026');
    await workOutHolidayPage.continueOn();

    // 4. Number of Hours Page (160 hours)
    // TODO

    // 5. Summary Page 
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads();
    await summaryPage.expectSummary('The statutory entitlement for this pay period is 19 hours.');

});
