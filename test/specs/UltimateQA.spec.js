import home from '../pageobjects/HomePage.js';
import product from '../pageobjects/Productpage.js';
import course from '../pageobjects/CoursePage.js';
import enroll from '../pageobjects/EnrollPage.js';
import dashboard from '../pageobjects/DashBoardpage.js';
let email = (Math.random() + 1).toString(36).substring(7);
let firstname = (Math.random() + 1).toString(39).substring(7);
let lastname = (Math.random() + 1).toString(36).substring(7);
let fullname = firstname + lastname;

let CourseName = 'Coding';
describe('Ultimate Qa Automation', () => {
    it('Open the Ultimate QA website and Validation of the URL', async () => {
        await browser.maximizeWindow();
        await home.openHomePage('https://ultimateqa.com/automation')
        await expect(browser).toHaveUrl('https://ultimateqa.com/automation');

    });

    it('Enters to the website home page and validation of the title', async () => {
        console.log((await browser.getTitle()));
        await expect(browser).toHaveTitleContaining('Automation Practice - Ultimate QA')
    });

    it('Validations in the Homepage checking dashboards buttons', async () => {
        await (home.$siteLogo()).scrollIntoView({ block: 'center' });
        expect(await home.$siteLogo().isDisplayed()).toBe(true)
        expect(await home.$coursesClick().isDisplayed()).toBe(true);
        await expect(home.$coursesClick()).toBeClickable(true)
    });


    it('Pass random email and validate the  message after clicking subsribe button', async () => {
        await (home.$emailBox()).scrollIntoView({ block: 'center' });
        expect(await home.$emailBox().isDisplayed()).toBe(true)
        await home.HomePageActions(email + "@gmail.com");
        expect(await home.$errMsg().isDisplayed()).toBe(true)

    });

    it('Enters to the products when  clicking course ,and checking validations', async () => {
        expect(await product.$pageHeader().isDisplayed()).toBe(true)
        expect(await product.$siteLogo().isDisplayed()).toBe(true)
        expect(await product.$searchBox().isDisplayed()).toBe(true)
    });

    it('Checking the validations of course names in the course page', async () => {
        let a = await product.courseNameValidations()
        for (let item of a) {
            if (expect(await a.toHaveTextContaining(CourseName))) {
                console.log("validated");
            }
            else {
                console.log("Not verified");
            }
        }
    });

    it('Remaining validations in the Course page,checking course name', async () => {
        expect(await product.$siteLogo().isDisplayed()).toBe(true);
        expect(await course.$courseName().isDisplayed()).toBe(true);
        expect(await course.$courseName()).toHaveTextContaining(CourseName);
        await expect(course.$clickEnter()).toBeClickable(true)

    });

    it('Enters to the form filling page after clicking enroll now ', async () => {
        await enroll.enrollactions();
        expect(await enroll.$siteLogo().isDisplayed()).toBe(true)
    });

    it('Enters to the Dashsboard page and Click Dashboard button ', async () => {
        await dashboard.dashboardActions();
        expect(await dashboard.$siteLogo().isDisplayed()).toBe(true)
    });

    it('Validation of welcome message after clicking my dash board on dash board page ,user returns to the home page,checking fullname', async () => {
        expect(await dashboard.$siteLogo().isDisplayed()).toBe(true)
        expect(await dashboard.$dashsBoardMessage().isDisplayed()).toBe(true);
        expect(await dashboard.$dashsBoardMessage()).toHaveTextContaining(fullname);
    });









});


