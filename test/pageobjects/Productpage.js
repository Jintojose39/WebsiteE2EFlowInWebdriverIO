import Page from "./page";

let name ='Coding';
class Products extends Page{

    constructor(){
        super()
        this.$pageHeader=()=>$('//main[@class="collections"]//div//h2[@class="collections__heading"]');
        this.$searchBox=()=>$('//input[@placeholder="Search"]');
        this.$$courseList=()=>$$('//div[@class="card__body-container"]//div//h3');
    }



    async productPageActions(){

        await this.$searchBox().setValue('Coding');
        await browser.keys(['Enter']);

    }

    async courseNameValidations(){

        
let value =[];
let value1=[];
 for (let element of  await this.$$courseList()) { 
 let text = await element;
 await value.push[text]

        
    }
return value;


}
  

}
export default new Products();
