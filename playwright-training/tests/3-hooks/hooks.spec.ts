import { test, expect } from '@playwright/test';
//hooks in palywright: Hooks are nothing but a set of conditions that we want to run before and after test execution.

//beforeAll: This will run one time before all the test cases within the describe block.
//afterAll: This will run one time after all the test cases are executed within the describe block.
//beforeEach: This will run before each and every test cases
//afterEach: This will run after each and every test cases.


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

});

test.describe("Group 2 - Test", async () => {

    test("Group 2 - Test 1", async () => {
        console.log("Group 2 - Test 1 executing........");
    });

    test("Group 2 - Test 2", async () => {
        console.log("Group 2 - Test 2 executing........");
    });
    test("Group 1 - Test 3", async () => {
        console.log("Group 1 - Test 2 executing........");
    });

});