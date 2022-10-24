const portfinder = require("portfinder");
const puppeteer = require("puppeteer");

const app = require("../codelife");

let server = null;
let port = null;

beforeEach(async () => {
  port = await portfinder.getPortPromise();
  server = app.listen(port);
});
afterEach(() => {
  server.close;
});

test("Nav bar links to home page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="home"]'),
  ]);
  expect(page.url()).toBe(`http://localhost:${port}/`);
  await browser.close();
});
test("Nav bar links to about page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="about"]'),
  ]);
  expect(page.url()).toBe(`http://localhost:${port}/about`);
  await browser.close();
});
test("Nav bar links to cookieSort page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="cookieSort"]'),
  ]);
  expect(page.url()).toBe(`http://localhost:${port}/cookieSort`);
  await browser.close();
});
