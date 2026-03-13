import { test, expect } from '@playwright/test';

test("CSS selector syntax", async ({ page }) => {

    //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    console.log("1. Application launch successfully..");

    //2. verify application logo is displayed
    let imageLogo = page.locator('img.logo');
    await expect(imageLogo).toBeVisible();
    console.log("2. Logo is displayed successfully..");

    //Verify the image logo source to identify whether it is valid or not. 
    // Get src attribute
    const imageSrc = await imageLogo.getAttribute('src');
    await expect(imageSrc).toContain('images/logo.gif');


    //3. Verify application caption displayed as "Experience the difference"
    let caption = page.locator('p[class="caption"]');
    const acutalCaption = await caption.textContent();
    const expectedCaption = "Experience the difference";
    await expect(acutalCaption).toBe(expectedCaption);
    console.log("Caption is displayed successfully..");

    //4. Enter invalid username
    let username = await page.locator('input[name="username"]');
    await username.fill('invalid User');

    //5. Enter empty Password
    const password = await page.locator('input[name="password"]');
    await username.fill("");

    //6. Click on login button
    let loginButton = page.locator('input[value="Log In"]');
    await loginButton.click();

    //7. Verify the error message "Please enter a username and password."
    const actualErrorMessage = page.locator("//div[@id='rightPanel']//p[@class='error']");
    const expectedErrorMessage = "Please enter a username and password.";
    await expect(actualErrorMessage).toHaveText(expectedErrorMessage);
    console.log("Error Message is displayed successfully");

    //8. Click on admin page link
    let adminPageLink = page.locator('//ul[@class="leftmenu"]//a[text()="Admin Page"]');
    await adminPageLink.click();
    const adminPageHeader = page.locator('h1.title');
    await expect(adminPageHeader).toBeVisible();


    //9. select the option "soap" from dba mode radio button
    await selectDBMode(page, 'soap')

    //10. Scroll to loan provider dropdown
    let elementDropdown = page.locator('select[id="loanProvider"]'); // adjust selector if needed
    await elementDropdown.scrollIntoViewIfNeeded();
    console.log("Scroll to loan provider dropdown successfully");

    //11. Select the option web service from the dropdown
    await elementDropdown.selectOption({ label: 'Web Service' });
    console.log("Selected Web Services from dropdown successfully");

    //12. Click on submit button
    let btnSubmit = page.locator('input[value="Submit"]');
    btnSubmit.click();
     console.log("Clicked on submit button successfully");

    //13. Verify submission is successful by validating success message
    let successMessage = page.locator('//b[text()="Settings saved successfully."]');
    await expect(successMessage).toBeVisible();
    console.log("Settings saved successfully message is displayed");

    //14. Click on services page link
    let sevicePage = page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');
    sevicePage.click();
    console.log("Clicked on services page link successfully");


    //15. Wait for service page
    const servicePage = page.locator('//*[@id="rightPanel"]/span[2]');
    await expect(servicePage).toBeVisible();
    console.log("Services page header is visible");

    //16. Scroll down till bookstore services table
    let table = page.locator('//*[@id="rightPanel"]/table[2]'); // adjust selector if needed
    await table.scrollIntoViewIfNeeded();
    console.log("Scrolled to bookstore services table successfully");
/*
    // 17.get total rows of books store services table
    const rows = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const totalRows = await rows.count();
    console.log("Total rows in bookstore services table: " + totalRows);

    // 18.get total columns of books store services table
    const columns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]/td');
    const totalColumns = await columns.count();
    console.log("Total columns in bookstore services table: " + totalColumns);

    // 19.Print table data (row wise and column wise data)

    //loop to iterate rows
    for(let r = 1; r<=totalRows ; r++){

        //loop to iterate columns
        for(let c=1; c<=totalColumns ; c++){
            const cell = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr['+r+']//td['+c+']');
            const cellValue = await cell.textContent();
            console.log("Row "+ r + " , Column "+ c+ " value is : "+ cellValue);
        }

    }*/
    
    //17. Get total rows of books store services table
    let rows = page.locator('//*[@id="rightPanel"]/table[2]/tbody/tr');
    let rowCount = await rows.count();
    console.log(`Total Rows: ${rowCount}`);

    //18. Get total columns of books store services table
    let columns = page.locator('//*[@id="rightPanel"]/table[2]/tbody/tr[1]/td');
    let colCount = await columns.count();
    console.log(`Total Columns: ${colCount}`);


    // 19. Print table data (row wise and column wise data)
    for (let i = 0; i < rowCount; i++) {
        const cols = rows.nth(i).locator('td');
        const colSize = await cols.count();

        let rowData = [];
        for (let j = 0; j < colSize; j++) {
            const cellText = await cols.nth(j).innerText();
            rowData.push(cellText.trim());
        }
        console.log(`Row ${i + 1}:`, rowData);
        
    }

});

async function selectDBMode(page: any, option: string) {
    const dbMode = page.locator(`input[value="${option}"]`);
    dbMode.click();
}

