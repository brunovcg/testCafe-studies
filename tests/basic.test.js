import { Selector } from 'testcafe'

// prettier-ignore
fixture`Getting started with testCafe`
    .page(
	'https://devexpress.github.io/testcafe/example/'
    )

.before(async t=> {
    // Test setup goes here
    // await runDatabaseReset()
    // await seedTestData()
})

.beforeEach(async t=> {
    // runs before each test
})
.beforeEach(async t=> {
    // runs after each test
})

.after(async t=> {
    // e.g. Cleaning test Data
    // e.g. Logging or sending data for monitoring systems
})

// ! METHODS
/*
	? Control the speed of the test (even in the view mode), debug test only
	await t.setTestSpeed(0.1)
	? Not a good practice, 99% you wont need it, might be possible to use for debugging
	await t.wait(3000)

    ? Screenshots of full page or elements, using a regression test will be able to compare pixel by pixel
    await t.takeScreenshot({path: "tests/test.png", fullPage: true })
    await t.takeElementScreenshot(Selector('#article-header'))

    ? Timeout to wait before test starts and load the window, useful for example for heavy navigates
    await t.setPageLoadTimeout(300)
*/

test('My First testCafe test', async t => {
	const name_input = Selector('#developer-name')

	await t.typeText(name_input, 'Bruno')
	// ? the way above is better to read
	// await t.typeText('#developer-name', 'Bruno')

	await t.click('#submit-button')

	await t.expect(Selector('#article-header').innerText).contains('Bruno')
})

//! This will skip the test, the opposite of it is using .only to run only that test, awesome for debugging
test.skip('Skipped My First testCafe test', async t => {
	const name_input = Selector('#developer-name')

	await t.typeText(name_input, 'Bruno')

	await t.click('#submit-button')

	await t.expect(Selector('#article-header').innerText).contains('Bruno')

	/*
    !   SELECTORS
        click => mouse click                                            'await t.click('selector', {options})'
        doubleClick => mouse double click                               'await t.doubleClick('selector', {options})'
        rightClick => mouse right click                                 'await t.rightClick('selector', {options})'
        drag => drag an element                                         'await t.drag('selector', xAxis, yAxis ,{options})'
        hover => mouse hover                                            'await t.hover('selector',{options})'
        selectText => select a text                                     'await t.selectText('selector',{options})'
        typeText => typeText on input text areas etc.                   'await t.typeText('selector', 'text', {options})'
        pressKey => Simulate press o Keyboard                           'await t.pressKey('key', {options})'
        navigateTo => GO to a specific URL                              'await t.navigateTo('url', {options})'
        takeScreenshot => shoot the page                                'await t.takeScreenshot({options})'
        takeElementScreenShot => target particular element to shoot     'await t.takeElementScreenShot('selector,{options})'
        windowResize => resize the window                               'await t.windowResize(WIDTH, HEIGHT)'
    */

	/*
    *   ASSERTIONS
        deepEqual  =>                                            await expect('foo').eql('foo', 'message', options)
        not deepEqual  =>                                        await expect('foo').notEql('foo')
        ok => check if is truthy                                 await expect('foo').ok()
        ok => check if is falsy                                  await expect(false).notOk()
        contains => check if contains what is expected           await expect('Bruno Gouveia').contains('Gouveia')
        notContains => check if not contains what is expected    await expect('Bruno Gouveia').notContains('Lima')
        greaterThan => check if number is greater than           await expect(10).gt(5)
        lessThan    => check if number is less than              await expect(5).lt(10)
        greaterOrEqual => gte                           
        lessOrEqual => lte
        within => check range                                    await expect(5).within(1,10)
        notWithin => check range   (not in)                      await expect(12).within(1,10)
    */
})
