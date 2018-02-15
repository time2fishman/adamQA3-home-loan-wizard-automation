module.exports = {

    uiTest: {
        homeScreen: {
            homeTitleText: 'Home Loan Wizard',
            startButton: 'Get Started'
        },
        loanPropTypeScreen: {
            loanTypeText: 'What type of loan will you be needing?',
            loanPropText: 'What type of property are you purchasing?',
            loanDropDownMenu: 'Home Purchase',
            loanOptions: {
                optionPurchase: 'Home Purchase',
                optionRefi: 'Refinance',
                optionEquity: 'Home Equity loan/line',
            },

            propDropDownmenu: 'Single Family Home',
            propOptions: {
                optionSingle: 'Single Family Home',
                optionTown: 'Townhome',
                optionCondo: 'Condo',
                optionMulti: 'Multi Family Dwelling',
                optionMobile: 'Mobile Home'
            },
            nextButton: 'Next'
        },
        propLocationScreen: {
            propLocationText: 'In what city will the property be located?',
            cityName: 'city name',
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
            no: 'No',
            bankruptcy: 'Bankruptcy',
            forclosure: 'Foreclosure',
            both: 'Both'
        },
        addressScreen: {
            whataddressText: 'What is your address?',
            lineOne: 'Street Address',
            lineTwo: 'Street Address Cont\'d (Optional)',
            lineThree: 'City, ST 00000',
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
            name: 'Name:',
            nameOutput: 'aa',
            email: 'Email:',
            emailOutput: '',
            loan: 'What type of loan will you be needing?:',
            loanOutput: 'Home Purchase',
            property: 'What type of property are you purchasing?:',
            propertyOutput: 'Single Family Home',
            city: 'In what city will the property be located?:',
            cityOutput: '',
            propType: 'Type of property the loan is applied to:',
            propTypeOutput: 'Primary Home',
            found: 'Have you already found your new home?:',
            foundOutput: 'True',
            agent: 'Currently working with a real estate agent?:',
            agentOutput: 'True',
            cost: 'Estimated purchase price of the home:',
            costOutput: '0',
            downPayment: 'Down payment:',
            downPaymentOutput: '0',
            credit: 'Credit score:',
            creditOutput: 'Good',
            bankruptcy: 'Bankruptcy history:',
            bankruptcyOutput: 'Has had both a foreclosure and a bankruptcy',
            address: 'Current Address:',
            addressOutput1: '',
            addressOutput2: '',
            addressOutput3: '',
            sendBtn: 'Send',
            startAgainBtn: 'Start Again'
        },
        thankYouScreen: {
            thankYouText: 'Thank you for choosing Home Loan Wizard, a representative will be in touch with you shortly to talk about further steps.',
            homeBtn: 'Home'
        }
    },


}