exports.LoginPage =
class LoginPage {

    constructor(page){
        this.page = page;
    }
    async Login(){
    await this.page.goto("https://contracosta.test.leateamapps.com/#/signin")
    await this.page.locator("#userid").fill("orionuser")
    await this.page.locator("#spassword").fill("Abc@12345")
    await this.page.locator("//button[normalize-space()='Sign In']").click()
    await this.page.waitForTimeout(5000);
    


    }

}