import { test, expect } from '@playwright/test';

/* =========================================================
      Assertion : Default method provided by Playwright to compare expected results vs actual results. 

      2 Types of Assertions:
      1.Hard Assertions: If the assertion fails, the test will stop executing and will be marked as failed.
      2.Soft Assertions: If the assertion fails, the test will continue executing and will be marked as failed at the end of the test.

      //Syntax for Hard Assertion:
      expect(actual).toBe(expected);

      //Syntax for Soft Assertion:
      expect.soft(actual).toBe(expected);
      ========================================================= */

test("CSS selector syntax", async ({page}) => {
    //Launch application 
    await page.goto('www.google.com');

    //Verify Application is lanuched successfully by using title.
    await expect.soft(page).toHaveTitle(/Google/);
});