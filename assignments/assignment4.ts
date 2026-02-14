//Bank Trasnscation Assignment
//Store the transcation into the array
const trasnscationAmounts: number[] = [50000, -2000, 3000, -150000, -200, -300, 4000, -3000];

//Declare variable for the count no. of credit and debit amount and also check total credit and debit amount
let countCreditTransction: number = 0;
let countDebitTransction: number = 0;
let totalAmountCreditTransction: number = 0;
let totalAmountDebitTransction: number = 0;
let suspiciouscreditTransactions: number = 0;
let suspiciousTransactions: number = 0;

//First get the all trascation to check for the debit and credit
for (const transAmount of trasnscationAmounts) {
    if (transAmount > 0) {
        //credit trasnscation
        countCreditTransction++;
        totalAmountCreditTransction += transAmount;
        // Check for suspiciously credit transaction
        if (transAmount > 10000) {
            console.log("Suspicious credit transaction with amount: " + transAmount);
            suspiciousTransactions++;
        }
    }
    else {
        //Debit trasnscation
        countDebitTransction++;
        //Get total of Debit Amount
        totalAmountDebitTransction -= transAmount;
        // Check for suspiciously debit transaction
        if (transAmount < -10000) {
            console.log("Suspicious credit transaction with amount: " + transAmount);
            suspiciousTransactions++;
        }
    }
}
// Final balance
const finalBalanceAmount: number = totalAmountCreditTransction - totalAmountDebitTransction;

// Print summary
console.log("----- Transaction Summary -----");
console.log("Total number of credit transactions:", countCreditTransction);
console.log("Total number of debit transactions:", countDebitTransction);
console.log("Total amount credited:", totalAmountCreditTransction);
console.log("Total amount debited:", totalAmountDebitTransction);
console.log("Final remaining amount in the account:", finalBalanceAmount);
console.log("Total number of suspicious transactions:", suspiciousTransactions);