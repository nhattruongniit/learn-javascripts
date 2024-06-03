const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')


const HOST = 'http://localhost:4567'

describe('Form', function () {
  let driver

  beforeAll(async () => {
    const screen = {width: 800, height: 500}
    const options = new chrome.Options();
    if (options.headless) {
      options.addArguments("--headless");
    }
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options.windowSize(screen)).build();
    await driver.get(HOST);
  })

  afterAll(() => {
    driver.quit()
  })

  it.each([
    "First name", "Last name", "Age", "Address", "Place of work", "Job title", "Phone number", "Skype"
  ])('should position input %s correctly', async (placeholder) => {
    const container = await driver.findElement(By.className('form'))
    const templateContainer = await driver.findElement(By.className('template-form'))

    const input = await driver.findElement(By.css(`.form [placeholder="${placeholder}"]`))
    const templateInput = await driver.findElement(By.css(`.template-form [placeholder="${placeholder}"]`))

    await assertNotPositionedAbsolutely(input)
    await assertPositionedAbsolutely(templateInput)

    const containerRect = await container.getRect()
    const templateContainerRect = await templateContainer.getRect()

    const inputRect = await input.getRect()
    const templateInputRect = await templateInput.getRect()

    const epsilon = 1.5
    expect(Math.abs((templateInputRect.y - templateContainerRect.y) - (inputRect.y - containerRect.y))).toBeLessThanOrEqual(epsilon)
    expect(Math.abs((templateInputRect.x - templateContainerRect.x) - (inputRect.x - containerRect.x))).toBeLessThanOrEqual(epsilon)

    expect(Math.abs(templateInputRect.width - inputRect.width)).toBeLessThanOrEqual(epsilon)
    expect(Math.abs(templateInputRect.height - inputRect.height)).toBeLessThanOrEqual(epsilon)
  })

  it('should position button correctly', async () => {
    const container = await driver.findElement(By.className('form'))
    const templateContainer = await driver.findElement(By.className('template-form'))

    const button = await driver.findElement(By.css(`.form button`))
    const templateButton = await driver.findElement(By.css(`.template-form button`))

    await assertNotPositionedAbsolutely(button)
    await assertPositionedAbsolutely(templateButton)

    const containerRect = await container.getRect()
    const templateContainerRect = await templateContainer.getRect()

    const buttonRect = await button.getRect()
    const templateButtonRect = await templateButton.getRect()

    const epsilon = 1.5
    expect(Math.abs((templateButtonRect.y - templateContainerRect.y) - (buttonRect.y - containerRect.y))).toBeLessThanOrEqual(epsilon)
    expect(Math.abs((templateButtonRect.x - templateContainerRect.x) - (buttonRect.x - containerRect.x))).toBeLessThanOrEqual(epsilon)

    expect(Math.abs(templateButtonRect.width - buttonRect.width)).toBeLessThanOrEqual(epsilon)
    expect(Math.abs(templateButtonRect.height - buttonRect.height)).toBeLessThanOrEqual(epsilon)
  })

  const assertPositionedAbsolutely = async (node) => {
    const position = await node.getCssValue('position')
    expect(position).toEqual('absolute')
  }

  const assertNotPositionedAbsolutely = async (node) => {
    const position = await node.getCssValue('position')
    expect(position).not.toEqual('absolute')
  }
})