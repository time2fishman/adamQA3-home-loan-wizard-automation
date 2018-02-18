const selectors = require('./selectors')
const data = require('./data')

module.exports = {

    // Tests that all default text and buttons are present on each page
    // Also that the text matches what it should
    uiTestFunc: browser => {
        browser.waitForElementVisible(selectors.homeScreen.homeTitleText, 3000)
        browser.expect.element(selectors.homeScreen.homeTitleText).text.to.equal(data.uiTest.homeScreen.homeTitleText)
        browser.expect.element(selectors.homeScreen.startButton).text.to.equal(data.uiTest.homeScreen.startButton)
        browser.click(selectors.homeScreen.startButton)
            .waitForElementVisible(selectors.loanPropTypeScreen.loanPropText, 3000)
            .expect.element(selectors.loanPropTypeScreen.loanTypeText).text.to.equal(data.uiTest.loanPropTypeScreen.loanTypeText)
        browser.expect.element(selectors.loanPropTypeScreen.loanDropDownMenu).text.to.contain(data.uiTest.loanPropTypeScreen.loanDropDownMenu)
        browser
            .click(selectors.loanPropTypeScreen.loanDropDownMenu)
            .expect.element(selectors.loanPropTypeScreen.loanOptions.optionEquity).text.to.equal(data.uiTest.loanPropTypeScreen.loanOptions.optionEquity)
        browser.expect.element(selectors.loanPropTypeScreen.loanOptions.optionPurchase).text.to.equal(data.uiTest.loanPropTypeScreen.loanOptions.optionPurchase)
        browser.expect.element(selectors.loanPropTypeScreen.loanOptions.optionRefi).text.to.equal(data.uiTest.loanPropTypeScreen.loanOptions.optionRefi)
        browser
            .click(selectors.loanPropTypeScreen.loanOptions.optionEquity)
        browser.expect.element(selectors.loanPropTypeScreen.propDropDownmenu).text.to.contain(data.uiTest.loanPropTypeScreen.propDropDownmenu)
        browser
            .click(selectors.loanPropTypeScreen.propDropDownmenu)
            .expect.element(selectors.loanPropTypeScreen.propOptions.optionSingle).text.to.equal(data.uiTest.loanPropTypeScreen.propOptions.optionSingle)
        browser.expect.element(selectors.loanPropTypeScreen.propOptions.optionCondo).text.to.equal(data.uiTest.loanPropTypeScreen.propOptions.optionCondo)
        browser.expect.element(selectors.loanPropTypeScreen.propOptions.optionMobile).text.to.equal(data.uiTest.loanPropTypeScreen.propOptions.optionMobile)
        browser.expect.element(selectors.loanPropTypeScreen.propOptions.optionMulti).text.to.equal(data.uiTest.loanPropTypeScreen.propOptions.optionMulti)
        browser.expect.element(selectors.loanPropTypeScreen.propOptions.optionTown).text.to.equal(data.uiTest.loanPropTypeScreen.propOptions.optionTown)
        browser
            .click(selectors.loanPropTypeScreen.propOptions.optionCondo)
            .click(selectors.loanPropTypeScreen.nextButton)
            .waitForElementVisible(selectors.propLocationScreen.cityName, 3000)
            .expect.element(selectors.propLocationScreen.propLocationText).text.to.equal(data.uiTest.propLocationScreen.propLocationText)
        browser.assert.attributeEquals(selectors.propLocationScreen.cityName, 'placeholder', data.uiTest.propLocationScreen.cityName)
        browser.expect.element(selectors.propLocationScreen.nextButton).text.to.equal(data.uiTest.propLocationScreen.nextButton)
        browser
            .click(selectors.propLocationScreen.nextButton)
            .waitForElementVisible(selectors.loanUseScreen.primaryHome, 3000)
            .expect.element(selectors.loanUseScreen.whatLoanText).text.to.equal(data.uiTest.loanUseScreen.whatLoanText)
        browser.expect.element(selectors.loanUseScreen.primaryHome).text.to.equal(data.uiTest.loanUseScreen.primaryHome)
        browser.expect.element(selectors.loanUseScreen.rentalProperty).text.to.equal(data.uiTest.loanUseScreen.rentalProperty)
        browser.expect.element(selectors.loanUseScreen.secondaryHome).text.to.equal(data.uiTest.loanUseScreen.secondaryHome)
        browser
            .click(selectors.loanUseScreen.primaryHome)
            .waitForElementVisible(selectors.alreadyFoundHomeScreen.yes, 3000)
            .expect.element(selectors.alreadyFoundHomeScreen.newHomeText).text.to.equal(data.uiTest.alreadyFoundHomeScreen.newHomeText)
        browser.expect.element(selectors.alreadyFoundHomeScreen.yes).text.to.equal(data.uiTest.alreadyFoundHomeScreen.yes)
        browser.expect.element(selectors.alreadyFoundHomeScreen.no).text.to.equal(data.uiTest.alreadyFoundHomeScreen.no)
        browser
            .click(selectors.alreadyFoundHomeScreen.yes)
            .waitForElementVisible(selectors.realEstateAgentScreen.no, 3000)
            .expect.element(selectors.realEstateAgentScreen.agent).text.to.equal(data.uiTest.realEstateAgentScreen.agent)
        browser.expect.element(selectors.realEstateAgentScreen.no).text.to.equal(data.uiTest.realEstateAgentScreen.no)
        browser.expect.element(selectors.realEstateAgentScreen.yes).text.to.equal(data.uiTest.realEstateAgentScreen.yes)
        browser
            .click(selectors.realEstateAgentScreen.yes)
            .waitForElementVisible(selectors.purchPriceDwnPaymntScreen.downPayment, 3000)
            .expect.element(selectors.purchPriceDwnPaymntScreen.estPurchPriceText).text.to.equal(data.uiTest.purchPriceDwnPaymntScreen.estPurchPriceText)
        browser.assert.attributeEquals(selectors.purchPriceDwnPaymntScreen.estPurchPrice, 'placeholder', data.uiTest.purchPriceDwnPaymntScreen.estPurchPrice)
        browser.expect.element(selectors.purchPriceDwnPaymntScreen.downPaymentText).text.to.equal(data.uiTest.purchPriceDwnPaymntScreen.downPaymentText)
        browser
            .assert.attributeEquals(selectors.purchPriceDwnPaymntScreen.downPayment, 'placeholder', data.uiTest.purchPriceDwnPaymntScreen.downPayment)
            .expect.element(selectors.purchPriceDwnPaymntScreen.nextButton).text.to.equal(data.uiTest.purchPriceDwnPaymntScreen.nextButton)
        browser
            .click(selectors.purchPriceDwnPaymntScreen.nextButton)
            .waitForElementVisible(selectors.estCreditScoreScreen.excellent, 3000)
            .expect.element(selectors.estCreditScoreScreen.estCreditScoreText).text.to.equal(data.uiTest.estCreditScoreScreen.estCreditScoreText)
        browser.expect.element(selectors.estCreditScoreScreen.excellent).text.to.equal(data.uiTest.estCreditScoreScreen.excellent)
        browser.expect.element(selectors.estCreditScoreScreen.good).text.to.equal(data.uiTest.estCreditScoreScreen.good)
        browser.expect.element(selectors.estCreditScoreScreen.fair).text.to.equal(data.uiTest.estCreditScoreScreen.fair)
        browser.expect.element(selectors.estCreditScoreScreen.poor).text.to.equal(data.uiTest.estCreditScoreScreen.poor)
        browser
            .click(selectors.estCreditScoreScreen.good)
            .waitForElementVisible(selectors.bankruptcyScreen.bankruptcy, 3000)
            .expect.element(selectors.bankruptcyScreen.bankruptcyOrForeclosureText).text.to.equal(data.uiTest.bankruptcyScreen.bankruptcyOrForeclosureText)
        browser.expect.element(selectors.bankruptcyScreen.bankruptcy).text.to.equal(data.uiTest.bankruptcyScreen.bankruptcy)
        browser.expect.element(selectors.bankruptcyScreen.no).text.to.equal(data.uiTest.bankruptcyScreen.no)
        browser.expect.element(selectors.bankruptcyScreen.forclosure).text.to.equal(data.uiTest.bankruptcyScreen.forclosure)
        browser.expect.element(selectors.bankruptcyScreen.both).text.to.equal(data.uiTest.bankruptcyScreen.both)
        browser
            .click(selectors.bankruptcyScreen.both)
            .waitForElementVisible(selectors.addressScreen.lineOne, 3000)
            .expect.element(selectors.addressScreen.whataddressText).text.to.equal(data.uiTest.addressScreen.whataddressText)
        browser
            .assert.attributeEquals(selectors.addressScreen.lineOne, 'placeholder', data.uiTest.addressScreen.lineOne)
            .assert.attributeEquals(selectors.addressScreen.lineTwo, 'placeholder', data.uiTest.addressScreen.lineTwo)
            .assert.attributeEquals(selectors.addressScreen.lineThree, 'placeholder', data.uiTest.addressScreen.lineThree)
        browser.expect.element(selectors.addressScreen.nextButton).text.to.equal(data.uiTest.addressScreen.nextButton)
        browser
            .click(selectors.addressScreen.nextButton)
            .waitForElementVisible(selectors.nameScreen.email, 3000)
            .expect.element(selectors.nameScreen.nameText).text.to.equal(data.uiTest.nameScreen.nameText)
        browser
            .assert.attributeEquals(selectors.nameScreen.firstName, 'placeholder', data.uiTest.nameScreen.firstName)
            .assert.attributeEquals(selectors.nameScreen.lastName, 'placeholder', data.uiTest.nameScreen.lastName)
            .assert.attributeEquals(selectors.nameScreen.email, 'placeholder', data.uiTest.nameScreen.email)
            .expect.element(selectors.nameScreen.nextButton).text.to.equal(data.uiTest.nameScreen.nextButton)
        browser
            .click(selectors.nameScreen.nextButton)
            .waitForElementVisible(selectors.overViewScreen.startAgainBtn, 3000)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.overviewText)
            // Test each constant field (i.e Name:, Email:, etc) to equal its own text in form when new selectors get added
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.name)
        browser.expect.element(selectors.overViewScreen.nameOutput).text.to.equal(data.uiTest.overViewScreen.nameOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.email)
        browser.expect.element(selectors.overViewScreen.emailOutput).text.to.equal(data.uiTest.overViewScreen.emailOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.loan)
        browser.expect.element(selectors.overViewScreen.loanOutput).text.to.equal(data.uiTest.overViewScreen.loanOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.property)
        browser.expect.element(selectors.overViewScreen.propertyOutput).text.to.equal(data.uiTest.overViewScreen.propertyOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.city)
        browser.expect.element(selectors.overViewScreen.cityOutput).text.to.equal(data.uiTest.overViewScreen.cityOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.propType)
        browser.expect.element(selectors.overViewScreen.propTypeOutput).text.to.equal(data.uiTest.overViewScreen.propTypeOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.found)
        browser.expect.element(selectors.overViewScreen.foundOutput).text.to.equal(data.uiTest.overViewScreen.foundOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.agent)
        browser.expect.element(selectors.overViewScreen.agentOutput).text.to.equal(data.uiTest.overViewScreen.agentOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.cost)
        browser.expect.element(selectors.overViewScreen.costOutput).text.to.equal(data.uiTest.overViewScreen.costOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.downPayment)
        browser.expect.element(selectors.overViewScreen.downPaymentOutput).text.to.equal(data.uiTest.overViewScreen.downPaymentOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.credit)
        browser.expect.element(selectors.overViewScreen.creditOutput).text.to.equal(data.uiTest.overViewScreen.creditOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.bankruptcy)
        browser.expect.element(selectors.overViewScreen.bankruptcyOutput).text.to.equal(data.uiTest.overViewScreen.bankruptcyOutput)
        browser.expect.element(selectors.overViewScreen.overviewText).text.to.contain(data.uiTest.overViewScreen.address)
        browser.expect.element(selectors.overViewScreen.addressOutput1).text.to.equal(data.uiTest.overViewScreen.addressOutput1)
        browser.expect.element(selectors.overViewScreen.addressOutput2).text.to.equal(data.uiTest.overViewScreen.addressOutput2)
        browser.expect.element(selectors.overViewScreen.addressOutput3).text.to.equal(data.uiTest.overViewScreen.addressOutput3)
        browser.expect.element(selectors.overViewScreen.sendBtn).text.to.equal(data.uiTest.overViewScreen.sendBtn)
        browser.expect.element(selectors.overViewScreen.startAgainBtn).text.to.equal(data.uiTest.overViewScreen.startAgainBtn)
        browser
            .click(selectors.overViewScreen.sendBtn)
            .waitForElementVisible(selectors.thankYouScreen.homeBtn, 3000)
            .expect.element(selectors.thankYouScreen.thankYouText).text.to.equal(data.uiTest.thankYouScreen.thankYouText)
        browser.expect.element(selectors.thankYouScreen.homeBtn).text.to.equal(data.uiTest.thankYouScreen.homeBtn)
    },

    // buttonTestFunc: function(browser) {
    //     browser
    //         .waitForElementVisible(selectors.homeScreen.startButton, 3000)
    //         .click(selectors.homeScreen.startButton)
    //         .waitForElementVisible(selectors.loanPropTypeScreen.nextButton, 3000)
    //         .click(selectors.loanPropTypeScreen.nextButton)
    //         .waitForElementVisible(selectors.propLocationScreen.nextButton, 3000)
    //         .click(selectors.propLocationScreen.nextButton)
    //         .waitForElementVisible(selectors.loanUseScreen.rentalProperty, 3000)
    //         .click(selectors.loanUseScreen.primaryHome)
    //         .waitForElementVisible(selectors.alreadyFoundHomeScreen.no, 3000)
    //         .back()
    //         .click(selectors.loanUseScreen.rentalProperty)
    //         .waitForElementVisible(selectors.alreadyFoundHomeScreen.no, 3000)
    //         .back()
    //         .click(selectors.loanUseScreen.secondaryHome)
    //         .waitForElementVisible(selectors.alreadyFoundHomeScreen.no, 3000)
    //         .back()


    // }
}