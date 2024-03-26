const { test, expect } = require('@playwright/test');

test('Frames', async ({ page }) => {
    page.goto("https://ui.vision/demo/webtest/frames/");

    // Total Frames
    const allframes = await page.frames();
    console.log("Number of Frames: ", allframes.length);


    //Approach-1: Using name or url 
    // const var = await page.frame('name'); if name is present
    //const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    //await frame1.locator("input[name='mytext1']").fill("Hello world!");

    // Approach-2
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputBox.fill("Hello world!");
    await page.waitForTimeout(5000);
})