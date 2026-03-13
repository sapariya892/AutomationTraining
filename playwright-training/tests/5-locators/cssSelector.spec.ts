import { test, expect } from '@playwright/test';
//CSS selector syntax
// syntax1: tagname#id
// syntax2: tagname.classname
// syntax3: tagname[attribute='atrribute-value'];
// syntax4: tagname[attribute*='atrribute-value']; //*means contains
// syntax5: tagname[attribute^='atrribute-value']; //^ means start with
// syntax6: tagname[attribute$='atrribute-value']; //$ means end with
// syntax7: tagname[attribute='value1'][attribute='value2']//Multiple Attribute
// syntax8: Advance CSS selector with reletionship => locator:ancestor > parent >child

//Target:a[href="services.htm"]
//target->parent -> amcestor -> amcestor's parent -> amcestor parent's parent
//Grant Parent : ul[class="leftmenu"]
//Parent : li
//Target:>a[href="services.htm"]
//div[id="footerPanel"]>ul>li>a[href="about.htm"]


test("CSS selector syntax", async ({page}) => {
    await page.goto('https://www.google.com');


    //Locate the 'Google Search' text box using syntax 1
    await page.locator('textarea#APjFqb');

    //Locate the 'Google Search' text box using syntax 2
    await page.locator('textarea.gLFyf');

    //Locate the 'Google Search' text box using syntax 3
    await page.locator('textarea[title="Search"]');

    //Locate the 'how to search works' text box using syntax 4
    await page.locator('textarea[title="Search"]');

    //Locate the 'Google Search' button using syntax 5
    await page.locator('input[aria-label^="Google "]');

    //Locate the 'Google Search' button using syntax 6
    await page.locator('input[aria-label$="Search"]');

    //Locate the 'Google Search' button using syntax 7
    await page.locator('textarea[aria-label="Search"][aria-label="Search"]"]');

    //Locate the 'Google Search' button using syntax 8
    await page.locator('ul[class="leftmenu"]>li>a[href="services.htm"]');

});


