/*import { test, expect, chromium } from '@playwright/test';

test('Browser Action - Open and Close Chrome', async () => {
    //Launch the browser engine(chrome engine)
    const browserEngine = await chromium.launch({ headless: false });

    //Launch the browser or incogntino windows from the the browser engine.
    const browserContext = await browserEngine.newContext();

    //Clear all the cookies before begining the exeuction 
    await browserContext.clearCookies();

    //Launch a new tab or page within the browser context
    const page = await browserContext.newPage();

    //Maximize the browser window to a specific resolution. (1920 * 1080)
    await page.setViewportSize({ width: 1920, height: 1080 });

    //Enter the http://www.google.com and launch the application 
    await page.goto('https://www.google.com/');

    //Verify application launched by using the title of the application 
    //Asseration : expected result vs acutal 
    await expect(page).toHaveTitle(/Google/);

    //Locate Sign-In button and take screenshot.
    const signButton=page.locator('a[aria-label="Sign in"]');
    await signButton.screenshot({path:'screenshot/signIn.png'});

    //launch a new application within the same tab or page using the URL https://playwright.dev
    await page.goto('https://playwright.dev');

    //Take the screenshot of the entire browser window.
    await page.screenshot({path:'screenshot/playwright.png',fullPage:true});
    

    //Go back to the previous google application 
    await page.goBack();

    // Verify we're back on Google (uncommented this for better testing)
    await expect(page).toHaveTitle(/Google/);

    //Move forward to the playwright application 
    await page.goForward();

    //Refresh the current application 
    await page.reload();

    //Launch the new tab within the same browser 
    const newPage = await browserContext.newPage();

    //Launch the new application with URL https://www.selenium.dev
    await newPage.goto('https://www.selenium.dev');

    //Go back the previous applicatin available in the previous tab
    await page.bringToFront();

    //Get the current page.
    let currentUrl = page.url();
    console.log(currentUrl);

    //close the current page or close the first tab
    await page.close();

    //Close the all context and second page
    await browserContext.close();

    // Shuts down the browser process
    await browserEngine.close();

});
*/