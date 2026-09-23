const { Before, After, AfterStep, setDefaultTimeout, Status } = require("@cucumber/cucumber");
const fs = require("fs");
const path = require("path");

setDefaultTimeout(30000);

Before(async function (scenario) {
  await this.openBrowser();
  this.scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, "_");
  this.stepCount = 0;
});

AfterStep(async function ({ result }) {
  if (!this.page) return;
  this.stepCount++;
  const status = result.status === Status.PASSED ? "PASS" : "FAIL";
  const dir = path.join("reports", "screenshots");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const fileName = `${this.scenarioName}_step${this.stepCount}_${status}.png`;
  const safeName = fileName.replace(/[^a-zA-Z0-9_\-\.]/g, "_");
  const filePath = path.join(dir, safeName);

  const screenshot = await this.page.screenshot();
  fs.writeFileSync(filePath, screenshot);
  this.attach(screenshot, "image/png");
});

After(async function () {
  await this.closeBrowser();
});
