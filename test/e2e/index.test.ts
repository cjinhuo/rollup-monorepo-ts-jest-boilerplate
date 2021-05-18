import puppeteer from 'puppeteer'
import { htmlUrl } from '../config'

describe('Native html', () => {
  const timeout = 3000
  let page: puppeteer.Page
  let browser: puppeteer.Browser

  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.goto(htmlUrl)
  })

  afterEach(async () => {
    browser.close()
  })

  afterAll(() => {
    browser.close()
  })

  it('Code Error btn click，breadcrumb stack should add two and upload this error', async () => {
    const exampleDom = await page.$eval('#example', (e) => e.innerHTML)
    expect(exampleDom).toBe('this is example')
  })
})
