import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber"

setDefaultTimeout(60 * 1000); //60 seconds
import test, { chromium, Page, Browser, expect } from "@playwright/test"

let browser: Browser, page: Page
let context

Given('I launch the browser', async function () {

  browser = await chromium.launch({

    headless: false,
    args: ['--start maximized']

  })
  context = await browser.newContext({

    viewport: null

  })
  page = await context.newPage()
  let page1 = await context.newPage


});

Then('I launch the facebook application', async function () {

  await page.goto('https://www.facebook.com')


});

Then('I close the browser', async function () {
  await page.close()

});

Then('I launch the test automation practice application', async function () {

  await page.goto('https://testautomationpractice.blogspot.com/')


});

Then('I verify playwright locators', async function () {
  console.log("=========getByPlaceholder=========")
  await page.goto('https://testautomationpractice.blogspot.com/')

  //Await page.getByPlaceholder(‘attribute value of the placholder attribute name').methods()

  await page.getByPlaceholder('Enter Name').fill("shubham")

  await page.getByPlaceholder('Enter EMail').fill("qt@gmail.com")

  console.log("=============GetByText==============")


  setDefaultTimeout(120 * 1000); //60 seconds

  //await page.getByText('text of the wev element').method()

  //Await page.getByPlaceholder(‘attribute value of the placholder attribute name').methods()

  await page.getByText('START').click()

  await page.getByText('STOP').click()



  console.log("=============GetByRole==============")


  //await page.getByRole('type pf the web element','{name:'type of web element' }').method()
  await page.getByRole('button', { name: 'start' }).click()

  await page.getByRole('button', { name: 'stop' }).click();

  await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded()

  await page.getByRole('checkbox', { name: 'Sunday' }).click()

  await page.getByRole('checkbox', { name: 'Monday' }).click()

  await page.getByRole('textbox', { name: 'Enter Name' }).fill('using getbye role')

  await page.getByRole('textbox', { name: 'Phone' }).fill('999999990')

  await page.close()




});

Then('I verify playwright locators part2', async function () {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm')

  console.log("==================getByAltText==================")

  //Await page.getByAltText(‘attribute value of the alt attribute name').methods()

  await page.getByAltText('ParaBank').click()

  console.log("==================getByTitle==================")

  //Await page.getByTitle(‘attribute value of the title attribute name').methods()

  await page.getByTitle('ParaBank').click()
  await page.close()
  console.log("==================getByLabel==================")

  //Await page.getByLabel(‘text of the attribute').methods()

  await page.goto('https://login.salesforce.com/')

  await page.getByLabel('Username').type('sai')

  await page.getByLabel('Password').type('vidya')
  await page.close()
});


Then('I verify playwright selenium locators', async function () {

  console.log("==================xpath==================")

  console.log("==================absolute xpath==================")

  // syntax:await page.locator(‘absolute xpath’).methods()

  // await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]').fill('absolute xpath')

  console.log("==================relative xpath==================")

  /*syntax:
await page.locator(‘relative xpath’).methods()
1st way:
//tagname[@attributename =’attributevalue’]
2nd way:
//*[@attributename =’attributevalue’]
*/

  await page.locator('//*[@id="name"]').fill('relative xpath')

  await page.locator('//textarea[@id="textarea"]').fill('hyderabad')

  console.log("==================css selector==================")

  await page.locator('input[placeholder="Enter Phone"]').fill('9090898990')

  // # means id 

  await page.locator('#email').fill('test@gmail.com')

  // . means classname 

  await page.locator('.wikipedia-search-input').fill('playwright')
  await page.close()




})
Then('I verify playwright hard assertion', async function () {

  await page.goto("https://www.amazon.in/")

  expect(await page.getByPlaceholder('Search Amazon.in')).toBeVisible()

  await page.getByPlaceholder('Search Amazon.in').fill('mobiles')
  setDefaultTimeout(60 * 1000); //60 seconds

  await expect(page.locator('#nav-search-submit-button')).toBeAttached()

  await page.locator("#nav-search-submit-button").click()
  setDefaultTimeout(60 * 1000); //60 seconds

})

// Then('I verify playwright filters', async function () {

//   await page.goto("https://www.saucedemo.com")
//   await page.getByPlaceholder('Username').fill('standard_user')
//     await page.waitForTimeout(5000)

//   await page.getByPlaceholder('password').fill('secret_sauce')


//     await page.locator('#login-button').click()

//     await page.waitForTimeout(5000)

//     await page.locator("")
//     inventory_item_name 
//})

Then('I verify playwright Frames', async function () {

  await page.goto("https://ui.vision/demo/webtest/frames/")
  await page.waitForTimeout(5000)


  var allFramesCount = await page.frames()

  console.log(" allFramesCount is : ", allFramesCount.length) //allFramesCount is :  7
  await page.waitForTimeout(1000)


  //await page.frameLocator(xpath)/frame(url).locator(selenium locator/playwright locator).methods()

  //1st way
  await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]').fill("Hello Guys")

  //2nd way
  const frame2 = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
  await frame2.fill("good morning")

  //3rd way

  const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

  await frame3?.locator('//input[@name="mytext3"]').pressSequentially('testing')

  var childFramesCount = await frame3?.childFrames()

  console.log(" childFramesCount is : ", childFramesCount?.length) // childFramesCount is :  1

  if (childFramesCount && childFramesCount.length > 0) {

    await childFramesCount[0].locator("//span[text()='Hi, I am the UI.Vision IDE']").click()

    await childFramesCount[0].locator("//span[text()='Web Testing']").click()

    await childFramesCount[0].locator("//span[text()='Form Autofilling']").click()

  }

  const frame4 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_4.html' })

  await frame4?.locator('//input[@name="mytext4"]').pressSequentially('playwright')


  const frame5 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_5.html' })

  await frame5?.locator('//input[@name="mytext5"]').pressSequentially('SHUBHAM')


  console.log("======FILE UPLOAD===============")
})

Then('I verify playwright upload files', async function () {

  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.waitForTimeout(3000)

  await page.locator('#singleFileInput').scrollIntoViewIfNeeded()


  console.log("====================upload single file===========")

  var singleFileUpload = await page.waitForSelector('#singleFileInput', { timeout: 3000 })

  var singleFileUpload = await page.waitForSelector('#singleFileInput', { timeout: 3000 })

  await page.locator('#singleFileInput').setInputFiles("Screenshot 2026-05-10 at 6.28.33 PM.png")

  await page.locator("//button[text()='Upload Single File']").click()
})

  // console.log("===================2ndway=================")

  //     //2nd way

  //   await page.locator('#singleFileInput').setInputFiles('setInputFiles')

  //   await page.locator("//button[text()='Upload Single File']").click()

  //   await page.waitForTimeout(3000)

  //   var fileText = await page.locator('#singleFileStatus').innerText()


  //   console.log(fileText)

  //   //1st way

  //   if (fileText.includes('singleFile')) {

  //       console.log('singleFile', "is uploaded")
  //   }

  //   //2nd way

  //   expect(fileText).toContain('singleFile')

//   console.log("====================Multiple files===========")

//   var multiFileUpload = await page.waitForSelector('#multipleFilesInput', { timeout: 5000 })


//   await page.locator('#multipleFilesInput').setInputFiles(['singleFile', '.Screenshot 2026-05-10 at 6.28.33 PM.png',
//     '/Users/shubhamgawai/Desktop/Playwrightnotes/10th Class_Frames_upload files/PlaywrightAutomationCode/Screenshots/fullpage.jpg'])

//   await page.locator("//button[text()='Upload Multiple Files']").click()

//   '/Users/shubhamgawai/Desktop/Playwrightnotes/10th Class_Frames_upload files/PlaywrightAutomationCode/Screenshots/fullpage.jpg'
// })

Then('I verify playwright Waits', async function () {

    await page.goto('https://www.facebook.com/')

    console.log("===========wait for timeout============")

    /*syntax:
await page.waitForTimeout(10000) //10000 means 10000 milliseconds means 10 seconds
*/

    // await page.waitForTimeout(10000) //10 seconds

    await page.locator('//input[@name="email"]').fill('Quality')
    await page.waitForTimeout(6000) //6 seconds

    await page.locator('//input[@name="pass"]').fill('thought')

})
Then('I verify playwright Waits', async function () {

    await page.goto('https://www.facebook.com/')

    console.log("===========wait for timeout============")

  
})