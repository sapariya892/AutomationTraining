function evaluatesBankloanApplication(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {

    //Display message 
    console.log("Loan eveluation Result for:" + customerName);
    //1. Check Credit Score
    if (creditScore > 750) {
        // if Credit score is above 750, the loan is automatically approved
        console.log("Your loan has been approved. Your credit scrore is excellent:" + creditScore);
    } else if (creditScore >= 650 && creditScore <= 750) {
        //if the credit score between 650 and 750, further check are needed
        //2. Check income 
        if (income >= 50000) {
            //if the income at least 50000, check employee status
            if (isEmployed == true) {
                //Check Debt Ratio
                if (debtToIncomeRatio < 40) {
                    //if DTI is less than 40%, approve the loan
                    console.log("Your loan loan has been approved, And Meet all criteria with income>50000,employement is active and dent ratio above 40");
                }
                else {
                    //if DTI is Grater than 40%, deny the loan
                    console.log("Your loan is denied, your dent to ration is high more than 40%");
                }

            } else {
                // if Customer is unemployed, deny the loan
                console.log("Your loan is denied, due to customer is unemployed");
            }
        }
        else{
            // if Customer is income is less than 50000, deny the loan
            console.log("Your loan is denied, Customer income is less than 50000");
        }
    }
    else {
       // if Customer is credit score is less 650, deny the loan
            console.log("Your loan is denied, Customer credit score is less than 650"); 
    }
}


evaluatesBankloanApplication(
    "Bhavin Sapariya",
    751,
    51000,
    true,
    20
);
