module.exports = {
    homeScreen: {
        homeTitleText: 'h1[class"home-text"]',
        startButton: 'button[class=home-btn]'
    },
    loanPropTypeScreen: {
        loanTypeText: 'p[name="promptText1"]',
        loanPropText: 'p[name="promptText2"]',
        loanDropDownmenu: 'select[name=loanDropDown]',
        loanOptions: {
            optionPurchase: 'option[name=purchase]',
            optionRefi: 'option[name=refi]',
            optionEquity: 'option[name=equity]',
        },

        propDropDownmenu: 'select[name=propDropDown]',
        propOptions: {
            optionSingle: 'option[name=singleHome]',
            optionTown: 'option[name=townHome]',
            optionCondo: 'option[name=condo]',
            optionMulti: 'option[name=multiHome]',
            optionMobile: 'option[name=mobileHome]'
        },
        nextButton: 'button[class="margin-btn"]'
    },
    propLocationScreen: {
        propLocationText: 'p[name="promptText"]',
        cityName: 'input[name="cityName"]',
        nextButton: 'button[class="wTwo-btn"]'
    },
    loanUseScreen: {
        whatLoanText: 'p[name="promptText',
        primaryHome: 'button[name="primary"]',
        rentalProperty: 'button[name="rental"]',
        secondaryHome: 'button[name="secondary"]'
    },
    alreadyFoundHomeScreen: {
        newHomeText: 'p[name="promptText"]',
        yes: 'button[name="yesFound"]',
        no: 'buton[name="noFound"]'
    },
    realEstateAgentScreen: {
        agent: 'p[name="promptText"]',
        yes: 'button[name="yesAgent"]',
        no: 'button[name="noAgent"]'
    },
    purchPriceDwnPaymntScreen: {
        estPurchPrice: 'input[name="purchasePrice"]',
        downPayment: 'input[name="downPayment"]',
        nextButton: 'button[class="wSix-btn"]'
    },
    estCreditScoreScreen: {
        excellent: 'button[name="excellent"]',
        good: 'button[name="good"]',
        fair: 'button[name="fair"]',
        poor: 'button[name="poor"]'
    },
    bankruptcyScreen: {
        no: 'button[name="noBankruptForclose"]',
        bankruptcy: 'button[name="bankrupt',
        forclosure: 'button[name="forclosure"]',
        both: 'button[name="bankruptForclose"]'
    },
    addressScreen: {
        lineOne: 'input[name="addressOne"]',
        lineTwo: 'input[name="addressTwo"]',
        lineThree: 'input[name="addressThree"]',
        nextButton: 'button[name="next"]'
    },
    nameScreen: {
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        nextButton: 'button[name="next"]'
    },
    overViewScreen: {
        name: 'div[name="name"]',
        nameOutput: 'p[name="nameOutput"]',
        email: 'div[name="email"]',
        emailOutput: 'p[name="emailOutput"]',
        loan: 'div[name="loan"]',
        loanOutput: 'p[name="loanOutput"]',
        property: 'div[name="property"]',
        propertyOutput: 'p[name="propertyOutput"]',
        city: 'div[name="city"]',
        cityOutput: 'p[name="cityOutput]',
        propType: 'div[name="propertyType"]',
        propTypeOutput: 'p[name="propertyOutput"]',
        found: 'div[name="found"]',
        foundOutput: 'p[name="foundOutput"]',
        agent: 'div[name="agent"]',
        agentOutput: 'p[name="agentOutput"]',
        cost: 'div[name="cost"]',
        costOutput: 'p[name="costOutput"]',
        downPayment: 'div[name="downPayment"]',
        downPaymentOutput: 'p[name="dwnpaymntOutput"]',
        credit: 'div[name="credit"]',
        creditOutput: 'p[name="creditOutput"]',
        bankruptcy: 'div[name="bankruptcy"]',
        bankruptcyOutput: 'p[name="bankruptcyOutput"]',
        address: 'div[name="address"]',
        addressOutput: 'p[name="addressOutput"]',
        sendBtn: 'button[name="send"]',
        startAgainBtn: 'button[name="startOver"]'
    },
    thankYouScreen: {
        homeBtn: 'button[name="homeButton"]'
    }
}