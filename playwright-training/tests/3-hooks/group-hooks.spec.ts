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
    test("Group 1 - Test 3", async () => {
        console.log("Group 1 - Test 3 executing........");
    });

    test.beforeAll(async () => {
        console.log("**** Group Hooks before all: This run once before All test cases. ******");
    });
    test.afterAll(async () => {
        console.log("**** Group Hooks after all: This run once after All test cases. ******");
    });
    test.beforeEach(async () => {
        console.log("---- Group Hooks Before Each: This run once before each test cases ----");
    });
    test.afterEach(async () => {
        console.log("---- Group Hooks After Each: This run once after each test cases. ----");
    });

});

test.describe("Group 2 - Test", async () => {
    test("Group 2 - Test 1", async () => {
        console.log("Group 2 - Test 1 executing........");
    });

    test("Group 2 - Test 2", async () => {
        console.log("Group 2 - Test 2 executing........");
    });
    test("Group 1 - Test 3", async () => {
        console.log("Group 2 - Test 3 executing........");
    });

});