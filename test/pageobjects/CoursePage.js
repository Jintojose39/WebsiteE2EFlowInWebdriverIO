
class Course{

    constructor(){

        super();
        this.$courseName=()=>$('//div[@class="banner__wrapper"]//h2');
        this.$clickEnter=()=>$('.product-action-buttons__purchase');
    }


    async coursePageActions(){


    }


}
export default new Course();