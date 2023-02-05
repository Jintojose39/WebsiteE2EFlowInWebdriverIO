import Page from "./page";

//var randomValues = Math.random().toString(36).substring(2,15);
let r = (Math.random() + 1).toString(36).substring(7);

class HomePage extends Page{

    constructor(){
        
        this.$coursesClick=()=>$('//ul[@class="et-menu nav"]//li//a[contains(text(),"Courses")]');
        this.$emailBox=()=>$('(//input[@id="subscribe-field-blog_subscription-2"])[1]');
        this.$subscribeClick=()=>$('button[name="jetpack_subscriptions_widget"]');
        this.$errMsg=()=>$('//div[@class="et_pb_widget widget_blog_subscription jetpack_subscription_widget"]//h4[@class="widgettitle"]//following-sibling::p');
        

    }

    /**
     * open Website
     * @param {String} url 
     */
    async openHomePage(url){

        await browser.url(url);
    }

    
    async HomePageActions(enterEmail){

        await (this.$emailBox()).scrollIntoView({ block: 'center' });
        await browser.pause(10000);
        await this.$emailBox().setValue(enterEmail);
        await this.$subscribeClick().click();
        await this.$coursesClick().click();

    }

    
  
}

export default new HomePage();
