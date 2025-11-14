exports.ServiceRequest =
class ServiceRequest{

    constructor(page){
     this.page = page;

    }

async CreateSRExistingContact(){
    await this.page.locator("//img[@src='../../assets/images/mapvision-logo.png']").click();
    await this.page.waitForTimeout(5000);
    await this.page.locator("//span[normalize-space()='Service Requests']").click();
    await this.page.locator("//a[normalize-space()='View Service Requests']").click();
    await this.page.waitForTimeout(5000);
    await this.page.locator("//img[@title='Add']").click(); 
    await this.page.locator("//input[@placeholder = 'Enter Name / Phone with minimum 3 characters']").fill("test S");  
    //await this.page.waitForTimeout(5000);
    const ContDropdown = await this.page.$$("//span[@class = 'k-state-default']")
    for(const dropdown1 of ContDropdown){
        const text = await dropdown1.textContent();
        if(text.includes("Test Soumya-(812) 147-0340")){
            await dropdown1.click();
            break;
        }
    }
   // await this.page.locator("//a[normalize-space()='Address']").click();
    await this.page.locator("//a[normalize-space()='SR Types']").click();
    await this.page.locator("//label[normalize-space()='Mosquitoes']").click();
   // const drpdown1 = await this.page.locator("//select[@class = 'que-select ng-valid ng-touched ng-dirty']")
    // drpdown1.selectOption({label : "Yes, you have my permission"});
    await this.page.locator("//body[1]/app-root[1]/app-main-layout[1]/div[2]/app-add-service-request[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[5]/div[1]/dynamic-form[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/app-checkbox[1]/div[1]/div[1]/div[1]/div[1]/label[1]/input[1]").click();
    await this.page.locator("//body[1]/app-root[1]/app-main-layout[1]/div[2]/app-add-service-request[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[5]/div[1]/dynamic-form[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/app-checkbox[1]/div[1]/div[1]/div[1]/div[1]/label[1]").click();
    await this.page.locator("//a[normalize-space()='Administrative']").click();
    //await this.waitForTimeout(5000);
    const techdropdown = await this.page.waitForSelector("//kendo-dropdownlist//span[@id = '7cad7fa8-f9be-4d09-8fcc-fb6a259bdecd']")
    await techdropdown.click();



}}