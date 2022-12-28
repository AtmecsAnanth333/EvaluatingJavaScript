import { test, chromium, expect,ElementHandle,Page, request, } from "@playwright/test";


test('Evaluating javascript', async()=>{
         const browser = await chromium.launch({
            headless : false
        })
        const context = await browser.newContext();
             const page = await context.newPage();
             await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
             await page.setContent('/html/head/link[2]');

const status = await page.evaluate(async () => {
    const response = await fetch(location.href);
    return response.status;
    expect(response).toBe(82);
  });
})

// test('Evaluating javascript', async()=>{
//     const browser = await chromium.launch({
//        headless : false
//     })

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
//     await page.setContent('/html/head/link[2]');
//     const href = await page.evaluate(() => document.location.href);
//     expect(href).toBe(82);
// })

/*test('Evaluating javascript', async()=>{
    const browser = await chromium.launch({
       headless : false
    })

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
    await page.setContent('//*[@id="post-399"]/div/div[3]/div/div[1]/div[1]/div/a');
    const divsCount = await page.$$eval('xpath=div', divs => divs.length);
      expect(divsCount).toBe(0);

      

})*/
// test('should work with css selector', async ({ page,  }) => {
    
//   await page.setContent('//*[@id="__next"]/div[2]/div[1]/div/div[1]');
//   const divsCount = await page.$$eval('xpath=div', divs => divs.length);
//   expect(divsCount).toBe(0);
// });

