import { test, expect } from '@playwright/test';

test.slow()
test('Automate Web Frames', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/frames)   
    await page.goto("https://demoqa.com/frames");

    //2. Locate main Window element
    const mainWindosElement = page.locator('h1.text-center');

    //Locate the frame store in the variable
    const frame = page.locator('iframe#frame1');

    //3. Locate Frame Element
    const frameElement = await frame.locator('h1#sampleHeading');

    //4. Copy and Print text from frame Element
    console.log("Main Windows Element:" + await frameElement.textContent());

    //5. Copy and Print Text from the main window element
    console.log("Main Windows Element:" + await mainWindosElement.textContent());


});


