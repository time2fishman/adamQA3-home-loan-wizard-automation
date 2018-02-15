module.exports = {
    homeScreen: {
        homeTitleText: 'h1[name="promptText"]',
        startButton: 'button[class=home-btn]'
    },
    loanPropTypeScreen: {
        loanTypeText: 'p[name="promptText1"]',
        loanPropText: 'p[name="promptText2"]',
        loanDropDownMenu: 'select[id="loanTypes"]',
        loanOptions: {
            optionPurchase: 'option[value="Home Purchase"]',
            optionRefi: 'option[value="Refinance"]',
            optionEquity: 'option[value="Home Equity"]',
        },

        propDropDownmenu: 'select[id="propertyTypes"]',
        propOptions: {
            optionSingle: 'option[value="Single Family Home"]',
            optionTown: 'option[value="Town Home"]',
            optionCondo: 'option[value="Condo"]',
            optionMulti: 'option[value="Multi Family Dwelling"]',
            optionMobile: 'option[value="Mobile Home"]'
        },
        nextButton: 'button[class="margin-btn"]'
    },
    propLocationScreen: {
        propLocationText: 'p[name="promptText"]',
        cityName: 'input[name="city"]',
        nextButton: 'button[class="wTwo-btn"]'
    },
    loanUseScreen: {
        whatLoanText: 'p[name="promptText',
        primaryHome: 'button[value="Primary Home"]',
        rentalProperty: 'button[value="Rental Property"]',
        secondaryHome: 'button[value="Secondary Home"]'
    },
    alreadyFoundHomeScreen: {
        newHomeText: 'p[name="promptText"]',
        yes: 'button[name="yesButton"]',
        no: 'button[name="noButton"]'
    },
    realEstateAgentScreen: {
        agent: 'p[name="promptText"]',
        yes: 'button[name="yesButton"]',
        no: 'button[name="noButton"]'
    },
    purchPriceDwnPaymntScreen: {
        estPurchPriceText: 'p[name="promptText1"]',
        downPaymentText: 'p[name="promptText2"]',
        estPurchPrice: 'input[name="price"]',
        downPayment: 'input[name="down"]',
        nextButton: 'button[class="wSix-btn"]'
    },
    estCreditScoreScreen: {
        estCreditScoreText: 'p[name="promptText"]',
        excellent: 'button[value="excellent"]',
        good: 'button[value="good"]',
        fair: 'button[value="fair"]',
        poor: 'button[value="poor"]'
    },
    bankruptcyScreen: {
        bankruptcyOrForeclosureText: 'p[name="promptText"]',
        no: 'button[value="Has never been in bankruptcy"]',
        bankruptcy: 'button[value="Has had bankruptcy before"]',
        forclosure: 'button[value="Has had a foreclosure before"]',
        both: 'button[value="Has had both a foreclosure and a bankruptcy"]'
    },
    addressScreen: {
        whataddressText: 'p[name="promptText"]',
        lineOne: 'input[id="addressOne"]',
        lineTwo: 'input[id="addressTwo"]',
        lineThree: 'input[id="addressThree"]',
        nextButton: 'button[name="nextButton"]'
    },
    nameScreen: {
        nameText: 'p[name="promptText"]',
        firstName: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]',
        nextButton: 'button[name="nextButton"]'
    },
    overViewScreen: {
        overviewText: 'div[class="vert-align"]',
        // name: 'div[name="name"]',
        nameOutput: 'p[class="name p2"]',
        // email: 'div[name="email"]',
        emailOutput: 'p[class="email p2"]',
        // loan: 'div[name="loan"]',
        loanOutput: 'p[class="loanType p2"]',
        // property: 'div[name="property"]',
        propertyOutput: 'p[class="propertyType p2"]',
        // city: 'div[name="city"]',
        cityOutput: 'p[class="city p2"]',
        // propType: 'div[name="propertyType"]',
        propTypeOutput: 'p[class="propertyPurpose p2"]',
        // found: 'div[name="found"]',
        foundOutput: 'p[class="found p2"]',
        // agent: 'div[name="agent"]',
        agentOutput: 'p[class="agent p2"]',
        // cost: 'div[name="cost"]',
        costOutput: 'p[class="price p2"]',
        // downPayment: 'div[name="downPayment"]',
        downPaymentOutput: 'p[class="downPayment p2"]',
        // credit: 'div[name="credit"]',
        creditOutput: 'p[class="creditScore p2"]',
        // bankruptcy: 'div[name="bankruptcy"]',
        bankruptcyOutput: 'p[class="creditHistory p2"]',
        // address: 'div[name="address"]',
        addressOutput1: 'span[id="addressOne"]',
        addressOutput2: 'span[id="addressTwo"]',
        addressOutput3: 'span[id="addressThree"]',
        sendBtn: 'button[name="sendButton"]',
        startAgainBtn: 'button[name="restartButton"]'
    },
    thankYouScreen: {
        thankYouText: 'p[name="promptText"]',
        homeBtn: 'button[class="margin-btn"]'
    }
}