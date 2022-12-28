import { test, chromium, expect,ElementHandle,Page, request } from "@playwright/test";

test("Delete the user", async ({request})=>{
    const response = await request.delete('https://reqres.in/api/users/2', {  
       }); 
    expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(204);
 // console.log(await response.json());
  });