import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import leaveStartDatePage_content from '../content/leaveStartDatePage_content';

export class LandingPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly day_input: Locator;
    private readonly month_input: Locator;
    private readonly year_input: Locator;
    private readonly continue_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = leaveStartDatePage_content.pageTitle;
        this.heading = leaveStartDatePage_content.heading;
        this.day_input = page.locator('#response-0');
        this.month_input = page.locator('#response-1');
        this.year_input = page.locator('#response-2');
        this.continue_button = page.getByRole('button', { name: leaveStartDatePage_content.continue_button });
    }

    async checkPageLoads(): Promise<void> {

        // Check all elements of the page
        await Promise.all([
            await expect(this.continue_button).toBeVisible(),
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(leaveStartDatePage_content.hint_text)).toBeVisible(),
        ]);
    }

    async enterDate(day: string, month: string, year: string): Promise<void> {
        // Enters all date information
        await this.day_input.fill(day);
        await this.month_input.fill(month);
        await this.year_input.fill(year)
    }

    async continueOn(): Promise<void> {
        // Click the continue button
        await this.continue_button.click();
    }
}

export default LandingPage;