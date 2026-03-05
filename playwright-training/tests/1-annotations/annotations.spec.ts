import { test, expect } from '@playwright/test';

// Test.descrive refers group of tests related to specific feature.
test.describe("Group 1 - Test", async () => {

    // test: indepent test case we need to run. 
    test("Group 1 - Test 1", async () => {
        console.log("Group 1 - Test 1 executing........");
    });

    test("Group 1 - Test 2", async () => {
        console.log("Group 1 - Test 2 executing........");
    });

});

test.describe("Group 2 - Test", async () => {

    test("Group 2 - Test 1", async () => {
        console.log("Group 2 - Test 1 executing........");
    });

    test("Group 2 - Test 2", async () => {
        console.log("Group 2 - Test 2 executing........");
    });

});