import { test, expect } from '@playwright/test';

test('Automate Web Form', async ({ page }) => {
    
//1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)   
await page.goto("https://demoqa.com/alerts");

//2. Locate Alert button to trigger the alerts
const infoAlertButton=page.locator('button#alertButton');
const conformationAlert=page.locator('button#confirmButton');
const promptAlert=page.locator('button#promtButton');

//3. Click on the information alert and copy the alert message then select ok button 
page.once('dialog',async dialog=>{
    //copy and print alert message
    console.log("Info alert message:"+dialog.message());

    //click on the ok button
    await dialog.accept();

});

//trigger the information
infoAlertButton.click();

//wait for the 2 sec 
await page.waitForTimeout(2000);

//4. Click on the conformation alert and messageand select cancel button.
page.once('dialog',async dialog=>{
    //copy and print alert message
    console.log("Conformation alert message is:"+ await dialog.message());

    //click on the ok button
    await dialog.dismiss();

});

//trigger the information
conformationAlert.click();

//wait for the 2 sec 
await page.waitForTimeout(2000);

//5. Click on the prompt alert, copy the alert message enter text. the select ok button
page.once('dialog',async dialog=>{
    //copy and print alert message
    console.log("Prompt alert message is:"+ await dialog.message());

    //Enter text in the prompt alert and click on the ok button
    await dialog.accept('Successfully');

});
//trigger the information
await conformationAlert.click();

//wait for the 2 sec 
await page.waitForTimeout(2000);

});


    