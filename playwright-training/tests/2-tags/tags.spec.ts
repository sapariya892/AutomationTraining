import { test, expect } from '@playwright/test';

// Test.descrive refers group of tests related to specific feature.
test.describe("Group 1 - Test", async () => { 
    test("Group 1 - Test 1",{tag:'@smoke'}, async () => {
        console.log("Group 1 - Test 1 executing........");
    });

    test("Group 1 - Test 2",{tag:'@sanity'}, async () => {
        console.log("Group 1 - Test 2 executing........");
    });

});

test.describe("Group 2 - Test", async () => {

    test("Group 2 - Test 1",{tag:'@regression'}, async () => {
        console.log("Group 2 - Test 1 executing........");
    });

    test("Group 2 - Test 2",{tag:['@smoke','@regression']}, async () => {
        console.log("Group 2 - Test 2 executing........");
    });

});


//npx playwright test  tests/2-tags/tags.spec.ts --grep="@smoke|@sanity"
//It will run 3 test case 

//npx playwright test  tests/2-tags/tags.spec.ts --grep-invert="@smoke|@sanity"
//Only 1 test case execute

// if we need to run file togtheth best.spec.ts and test.spec.ts
//npx playwright test ".*est\.spec.\ts"