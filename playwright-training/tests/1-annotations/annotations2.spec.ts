import { test, expect } from '@playwright/test';


//test.only() ==> It will execute only particular test cases by skipping all other test cases.
//test.skip() ==> It will skip particular test case and execute all other test cases.
//test.fail() ==> It will mark the particualr test case as failed and execute other test cases.
//test.fixme() ==> I am sure this test case is not working. Please ignore even if it is failed.
//test.slow() ==> Playwright will consider that there are loading issue and it may face slowness in the execution. It can increase the timeout 3x more than the normal timeout.

// Test.descrive refers group of tests related to specific feature.
test.describe("Group 1 - Test", async () => {

    // Test Indi 
    test.skip("Group 1 - Test 1", async () => {
        console.log("Group 1 - Test 1 executing........");
        expect(1).toBe(2);
    });

    test.fixme("Group 1 - Test 2", async () => {
        console.log("Group 1 - Test 2 executing........");
    });

    test("Group 1 - Test 3", async () => {
        test.slow();
        console.log("Group 1 - Test 3 executing........");
        await new Promise(resolve => setTimeout(resolve,40000));//wait for 40 second
    });

    //if test will take even more than 90 sec
    test("Group 1 - Test 4", async () => {
        test.setTimeout(18000);
        console.log("Group 1 - Test 4 executing........");
        await new Promise(resolve => setTimeout(resolve,40000));//wait for 100 second
    });
    test.setTimeout(90000,)

    test("Group 1 - Test 5", async () => {
        console.log("Group 1 - Test 5 executing........");
    });

});