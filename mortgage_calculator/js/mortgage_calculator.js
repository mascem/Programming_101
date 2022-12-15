/*
  The developer's Name: Cemil Selcukler
  This program is developed for the CVTC Bank to provide estimate mortgage rates for its customers in the 5-year increment from a 10-year term to 30.
  
  This is the JavaScript code for
  "Final Project: Mortgage Calculator"
  File: /cselcukler_final/index.html 
*/

function calculateMortgage() {
    // Declare variables
    var monthlyPayment;
    var homeValue;
    var downPayment;
    var totalMonthlyPayment;
    var totalCostOfLoan;
    var propertyTax;
    var homeOwnersInsurance;
    var creditScore;
    var interestRate;
    var monthlyInterestRate;
    var loanAmount;
    var loanTermInYears = 30;
    var startYear;
    var startMonth;
    var startDate;
    var payOffDate;
    var payOffYear;
    var numOfMonth;
    const date = new Date();

    // Prompt a user for the credit score input
    var creditScore = prompt("Please, enter your most recent credit score!");
    creditScore = Number(creditScore);

    // Use an if statement to check if the user is eligible for a loan
    if (creditScore < 660) {

        // Display a loan eligibility message 
        alert("Sorry, you're not eligible for a mortgage loan!");
        document.write("Your Credit Score = " + creditScore + "<br>" + "<br>" +
            "Unfortunately, you're not eligible for a mortgage loan at this time." + "<br>" +
            " Please try again once your credit score is 660 or higher!");
    } else {
        // Set the right interest rate
        if (creditScore >= 660 && creditScore <= 679) {
            interestRate = 0.0763;
        } else if (creditScore > 679 && creditScore <= 699) {
            interestRate = 0.0713;
        } else if (creditScore > 699 && creditScore <= 719) {
            interestRate = 0.0699;
        } else if (creditScore > 719 && creditScore <= 739) {
            interestRate = 0.0687;
        } else {
            interestRate = 0.0675;
        }
        // Prompt a user for a home value
        homeValue = prompt("How much is the home value?")
        // Prompt a user for a down payment amount
        downPayment = prompt("What percentage down payment would you like to put on the house?")
        // Conver string inputs to numbers
        homeValue = Number(homeValue);
        downPayment = Number(downPayment);
        loanTermInYears = Number(loanTermInYears);
        // Convert the yearly loan term to monthly
        loanTermInMonths = loanTermInYears * 12;

        // Prompt the user for the year and month of the loan start date
        startYear = prompt("Please, enter the year of the loan start date!");
        numOfMonth = prompt("Please, enter the month of a loan start date! (1 - 12)");
        // Convert the year input to a number
        startYear = Number(startYear);

        // Make a decision and replace a number input with a name of the month
        switch (numOfMonth) {
            case '1':
                startMonth = 'Jan';
                break;
            case '2':
                startMonth = 'Feb';
                break;
            case '3':
                startMonth = 'Mar';
                break;
            case '4':
                startMonth = 'Apr';
                break;
            case '5':
                startMonth = 'May';
                break;
            case '6':
                startMonth = 'Jun';
                break;
            case '7':
                startMonth = 'Jul';
                break;
            case '8':
                startMonth = 'Aug';
                break;
            case '9':
                startMonth = 'Sep';
                break;
            case '10':
                startMonth = 'Oct';
                break;
            case '11':
                startMonth = 'Nov';
                break;
            case '12':
                startMonth = 'Dec';
                break;
            default:
                // Display only if the month entry is out of the range (1-12)
                startMonth = (numOfMonth + " is an invalid number of the month, please try again!");
        }
        // Output a startdate
        startDate = (startMonth + " " + startYear);

        // Calculate the total downpayment
        totalDownPayment = homeValue*downPayment * 0.01;
        // Calculate the loan amount
        loanAmount = (homeValue-totalDownPayment);
        // Calculate the monthly interest
        monthlyInterestRate = interestRate / 12;
        
        // Adjust the decimal to 2
        loanAmount = loanAmount.toFixed(2);

        // Display the name of bank branch and today's date
        document.write("MORTGAGE LOAN RATES - CVTC Bank, Eau Claire Branch - " + " as of  " + date + "<br>" + "<br>" + "<br>" + "<br>" +
            "--------------------------------------------------- ")
        //Display the loan information
        document.write("LOAN INFORMATION" + "<br>" + "<br>" +
            "  Home Value = $" + homeValue + "<br>" +
            "  Your Credit Score = " + creditScore + "<br>" +
            "  Total Down Payment = $" + totalDownPayment + "<br>" +
            "  Loan Amount = $" + loanAmount + "<br>" +
            "  Interest Rate (APR) = " + interestRate * 100 + "%" + "<br>" +
            "  Start Date = " + startDate + "<br>" + "<br>" + "<br>");
      
        // Use a for loop to calculate the monthly loan payments, insurance, tax and end date for 10, 15, 20, 25 and 30-year loan term
        for (var loanTermInYears; loanTermInYears >= 10; loanTermInYears -= 5) {
            // Convert the yearly loan term to monthly
            loanTermInMonths = loanTermInYears * 12;
            // Calculate the monthly payment
            monthlyPayment = loanAmount * (monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, loanTermInMonths)) / (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1));
            // Calculate the total cost of a loan
            totalCostOfLoan = monthlyPayment * loanTermInMonths;
            // Calculate the monthly tax payment
            propertyTax = monthlyPayment * 0.0855;
            // Calculate the monthly insurance payment
            homeOwnersInsurance = monthlyPayment * 0.0188;
            // Calculate the total monthly payment
            totalMonthlyPayment = Number(monthlyPayment) + Number(propertyTax) + Number(homeOwnersInsurance);

            // Round decimals to 2
            monthlyPayment = monthlyPayment.toFixed(2);
            propertyTax = propertyTax.toFixed(2);
            homeOwnersInsurance = homeOwnersInsurance.toFixed(2);
            totalCostOfLoan = totalCostOfLoan.toFixed(2);
            totalMonthlyPayment = totalMonthlyPayment.toFixed(2);

            // Calculate the end-year for a loan
            payOffYear = startYear + loanTermInYears;
            // Output the end-date of a loan
            payOffDate = (startMonth + " " + payOffYear);

            // Display the loan payment breakdown for the each loan term.
            document.write("--------------------------------------------------- " + loanTermInYears +
                "-Year Term " + "<br>" + "<br>" + "<br>" + "LOAN PAYMENT BREAKDOWN" + "<br>" + "<br>" +
                "  Total Cost of Loan  = $" + totalCostOfLoan + "<br>" + "  Payoff Date = " + payOffDate + "<br>" +
                "-----" + "<br>" + "<br>" + "  Monthly Principal & Interest = $" + monthlyPayment + "<br>" +
                "  Monthly Property Tax = $" + propertyTax + "<br>" + "  Monthly Homeowner's Insurance = $" +
                homeOwnersInsurance + "<br>" +
                "_________________________" + "<br>" +
                "  Total Monthly Payment = $" + totalMonthlyPayment + "<br>" + "<br>" + "<br>");
        }
    }
}
calculateMortgage();