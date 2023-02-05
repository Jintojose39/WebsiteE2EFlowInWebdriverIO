import Page from "./page";

class DashsBoard extends Page{

    constructor(){
    super();
        this.$clickMydashboard=()=>$('li[class="header__nav-item header__nav-item--default"] a');
        this.$dashsBoardMessage=()=>$('//div[@class="student-dashboard__banner"]//div//h2');
    }

    async dashboardActions(){

        await (this.$clickMydashboard()).scrollIntoView({ block: 'center' });
        await this.$clickMydashboard().click();
    }

}


export default new DashsBoard();
