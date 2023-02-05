
class Enroll{

    constructor(){
        this.$enterEmail=()=>$('(//input[@id="input-1"])[1]')
        this.$enterFirstname=()=>$('(//input[@id="input-2"])[1]')
        this.$enterLastname=()=>$('//input[@id="input-3"])[1]')
        this.$clickAgree=()=>$('//label[contains(text(),"I agree to the")]');
        this.$clickSignup=()=>$('//button[normalize-space()="Sign up"]');

    }
/**
 * Filling datas
 * @param {String} email 
 * @param {String} firstname 
 * @param {String} lastname 
 */
    async enrollactions(email,firstname,lastname){
        await this.$enterEmail().setValue(email);
        await this.$enterFirstname().setValue(firstname);
        await this.$enterLastname().setValue(lastname);
        await this.$clickAgree().click();
        await this.$clickSignup().click();
    }
}

export default new Enroll();