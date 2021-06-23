import { Builder, Capabilities, By } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('adding a movie', async () => {

    let inputField = await driver.findElement(By.css('input'))
    let addBtn = await driver.findElement(By.css('button'))
    await inputField.sendKeys('Iron Man')
    await addBtn.click()
    await driver.sleep(3000)
})

test('deleting a movie', async () => {
    let deleteBtn = await driver.findElement(By.css('li button'))
    await deleteBtn.click()
    await driver.sleep(3000)
})

test('message says right thing', async () => {
    let message = await driver.findElement(By.id('message')).getAttribute('textContent')
    await expect(message).toContain('Iron Man deleted!')
})