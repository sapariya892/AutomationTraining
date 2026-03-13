import { test, expect, chromium } from '@playwright/test';

test('Assignment of the paraBank Webistes', async ({ page }) => {
    //Open the parabank websites 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    // verify Titile
    await expect(page).toHaveTitle(/ParaBank/);

    //Locate the image logo of the parabank
    await page.locator('img[title="ParaBank"]');


    //Locate the top navigation menu 

    //Solutions

    //Locate about us the top navigation menu
    await page.locator('ul[class="leftmenu"]>li>a[href="about.htm"]');
    //Locate Services top navigation menu
    await page.locator('ul[class="leftmenu"]>li>a[href="services.htm"]');
    //Locate Products top navigation menu Products the About Us navigation menu
    await page.locator('ul[class="leftmenu"]>li>a[href="http://www.parasoft.com/jsp/products.jsp"]');
    //Products Locations the About Us navigation menu
    await page.locator('ul[class="leftmenu"]>li>a[href="about.htm"]');
    //Admin Page the About Us navigation menu
    await page.locator('ul[class="leftmenu"]>li>a[href="admin.htm"]');
    

    //Right Small Menu
    //Home
    await page.locator('ul[class="button"]>li>a[href="index.htm"]');
    
    //About
    //Contact
    
    
    //Login Section
    //Username textbox
    //Password textbox
    //Login button
    //Forgot Login Info
    //Register


    //Left Panel – Services
    //ATM Services
    //Withdraw Funds
    //Transfer Funds
    //Check Balances
    //Make Deposits

    //Right Panel – Latest News
    //Latest News Title
    //News List

    //Footer Links
    //Home
    //About Us
    //Services
    //Products
    //Locations
    //Forum
    //Site Map
    //Contact Us


});


