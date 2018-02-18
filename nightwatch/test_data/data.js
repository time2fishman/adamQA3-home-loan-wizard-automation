module.exports = {

    uiTest: {
        homeScreen: {
            homeTitleText: 'Home Loan Wizard',
            startButton: 'Get Started'
        },
        loanPropTypeScreen: {
            loanTypeText: 'What type of loan will you be needing?',
            loanPropText: 'What type of property are you purchasing?',
            loanDropDownMenu: '',
            loanOptions: {
                optionPurchase: 'Home Purchase',
                optionRefi: 'Refinance',
                optionEquity: 'Home Equity Loan/Line of Credit',
            },

            propDropDownmenu: '',
            propOptions: {
                optionSingle: 'Single Family Home',
                optionTown: 'Town Home',
                optionCondo: 'Condo',
                optionMulti: 'Multi Family Dwelling',
                optionMobile: 'Mobile Home'
            },
            nextButton: 'Next'
        },
        propLocationScreen: {
            propLocationText: 'In what city and state or zip code are you looking for property?',
            cityName: 'San Francisco, CA / 94111',
            cityZipInput: '84111',
            nextButton: 'Next'
        },
        loanUseScreen: {
            whatLoanText: 'What property are you looking to use the loan on?',
            primaryHome: 'Primary Home',
            rentalProperty: 'Rental Property',
            secondaryHome: 'Secondary Home'
        },
        alreadyFoundHomeScreen: {
            newHomeText: 'Have you already found your new home?',
            yes: 'Yes',
            no: 'No'
        },
        realEstateAgentScreen: {
            agent: 'Are you currently working with a real estate agent?',
            yes: 'Yes',
            no: 'No'
        },
        purchPriceDwnPaymntScreen: {
            estPurchPriceText: 'What is the estimated purchase price?',
            downPaymentText: 'How much are you putting down as a down payment?',
            estPurchPrice: '$0.00',
            downPayment: '$0.00',
            nextButton: 'Next'
        },
        estCreditScoreScreen: {
            estCreditScoreText: 'Estimate your credit score',
            excellent: 'Excellent',
            good: 'Good',
            fair: 'Fair',
            poor: 'Poor'
        },
        bankruptcyScreen: {
            bankruptcyOrForeclosureText: 'Have you had a bankruptcy or foreclosure in the past seven years?',
            neither: 'Neither',
            bankruptcy: 'Bankruptcy',
            forclosure: 'Foreclosure',
            both: 'Both'
        },
        addressScreen: {
            whataddressText: 'What is your current mailing address?',
            lineOne: 'Street Address',
            lineTwo: 'Street Address Cont\'d (Optional)',
            lineThree: 'San Francisco, CA 94111',
            nextButton: 'Next'
        },
        nameScreen: {
            nameText: 'What is your name?',
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'email',
            nextButton: 'Next'
        },
        overViewScreen: {
            overviewText: 'Here is an overview of your form:',
            name: 'Full Name:',
            nameOutput: 'A B',
            email: 'Email:',
            emailOutput: 'test@gmail.com',
            loanType: 'Loan Type:',
            loanTypeOutput: 'Home Equity',
            propertyType: 'Property Type:',
            propertyTypeOutput: 'Condo',
            propLocation: 'Property Location:',
            propLocationOutput: '84111',
            purchaseReason: 'Purchase Reason:',
            purchaseReasonOutput: 'Primary Home',
            propLocated: 'Property Already Located:',
            propLocatedOutput: 'Yes',
            agent: 'Agent Already Engaged:',
            agentOutput: 'Yes',
            price: 'Estimated Price of Property:',
            priceOutput: '$1',
            downPayment: 'Estimated Down Payment:',
            downPaymentOutput: '$1',
            credit: 'Credit Score:',
            creditOutput: 'Good',
            creditHistory: 'Credit History:',
            creditHistoryOutput: 'Has had both a foreclosure and a bankruptcy',
            address: 'Current Address:',
            addressOutput1: '12345 W 1234 N',
            addressOutput2: '',
            addressOutput3: 'Ogden, UT 84401',
            sendBtn: 'Send',
            startAgainBtn: 'Start Over'
        },
        thankYouScreen: {
            thankYouText: 'Thank you for choosing Home Loan Wizard, a representative will be in touch with you shortly to talk about further steps.',
            homeBtn: 'Home'
        }
    },


}