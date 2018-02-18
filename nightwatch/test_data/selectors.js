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
        nextButton: 'button[name="nextButton"]'
    },
    propLocationScreen: {
        propLocationText: 'p[name="promptText"]',
        cityName: 'input[name="city"]',
        nextButton: 'button[class="nextButton"]'
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
        nextButton: 'button[name="nextButton"]'
    },
    estCreditScoreScreen: {
        estCreditScoreText: 'p[name="promptText"]',
        excellent: 'button[value="Excellent"]',
        good: 'button[value="Good"]',
        fair: 'button[value="Fair"]',
        poor: 'button[value="Poor"]'
    },
    bankruptcyScreen: {
        bankruptcyOrForeclosureText: 'p[name="promptText"]',
        neither: 'button[value="Has not been in bankruptcy or foreclosure"]',
        bankruptcy: 'button[value="Has had bankruptcy"]',
        forclosure: 'button[value="Has had a foreclosure"]',
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
        name: 'div[name="nameLabel"]',
        nameOutput: 'p[class="name p2"]',
        email: 'div[name="emailLabel"]',
        emailOutput: 'p[class="email p2"]',
        loan: 'div[name="loanTypeLabel"]',
        loanOutput: 'p[class="loanType p2"]',
        property: 'div[name="propertyTypeLabel"]',
        propertyOutput: 'p[class="propertyType p2"]',
        city: 'div[name="cityLabel"]',
        cityOutput: 'p[class="city p2"]',
        propType: 'div[name="propertyPurposeLabel"]',
        propTypeOutput: 'p[class="propertyPurpose p2"]',
        found: 'div[name="foundLabel"]',
        foundOutput: 'p[class="found p2"]',
        agent: 'div[name="agentLabel"]',
        agentOutput: 'p[class="agent p2"]',
        cost: 'div[name="priceLabel"]',
        costOutput: 'p[class="price p2"]',
        downPayment: 'div[name="downPaymentLabel"]',
        downPaymentOutput: 'p[class="downPayment p2"]',
        credit: 'div[name="creditScoreLabel"]',
        creditOutput: 'p[class="creditScore p2"]',
        bankruptcy: 'div[class="vert-align"]',
        bankruptcyOutput: 'p[class="creditHistory p2"]',
        address: 'div[name="addressLabel"]',
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