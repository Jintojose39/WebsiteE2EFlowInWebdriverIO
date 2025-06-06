# Ultimate QA Automation - WebdriverIO + Jasmine + Allure

This is a UI automation project for testing the **Ultimate QA website** using **WebdriverIO** with the **Jasmine** framework. The framework follows the **Page Object Model (POM)** and integrates **Allure Reports** for detailed reporting.

---

## 📁 Project Structure

├── test/
│ ├── pageobjects/ # Page Object classes (HomePage, ProductPage, etc.)
│ └── specs/ # Jasmine test specs
├── wdio.conf.js # WebdriverIO configuration file
├── package.json # Project dependencies and NPM scripts
├── package-lock.json # Dependency lock file


---

## 🚀 Features

- Built using **WebdriverIO** and **JavaScript**
- Utilizes **Jasmine** test framework
- Structured using **Page Object Model (POM)**
- Includes **Allure** for detailed test reporting
- Covers end-to-end testing of Ultimate QA site flow
- Generates random data for dynamic email and name fields

---

## 🧪 Test Scenario Overview

The test suite `Ultimate Qa Automation` performs the following:

1. **Open and validate the Ultimate QA website URL**
2. **Validate home page title**
3. **Validate dashboard buttons and logo on the home page**
4. **Input random email into subscription box and validate error message**
5. **Navigate to product/course pages and validate visibility**
6. **Loop validation for course names containing a specific keyword**
7. **Check course page validations and interactions**
8. **Click "Enroll Now" and validate form page**
9. **Navigate to Dashboard and validate visibility**
10. **Validate welcome message and user's full name on Dashboard**

---

## 🔁 Random Data Generation

Dynamic data generation for:

- Email
- First Name
- Last Name
- Full Name (used in welcome message validation)

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ultimateqa-wdio-automation.git
   cd ultimateqa-wdio-automation

Install dependencies:

npm install


✅ Running the Tests

npx wdio run wdio.conf.js

📊 Allure Report

Generate the Allure report:

npm run allureCombine

Open Report : 
npm run allure open

Make sure these scripts are added in package.json:

"scripts": {
  "allure:generate": "allure generate allure-results --clean",
  "allure:open": "allure open"
}

🌐 Technologies Used
WebdriverIO

Jasmine

JavaScript (ES6+)

Allure Reporter

Node.js


📷 Screenshots & Reports
After the test run, Allure Reports are generated in the allure-report folder and show:

Steps

Logs

Screenshots (if implemented)

Duration

Assertions

👨‍💻 Author
Your Name – @jintojose39GitHub


📄 License
This project is licensed under the MIT License.



---

Let me know if you'd like to:

- Include screenshots in Allure
- Add GitHub Actions for CI/CD
- Attach sample logs
- Convert this to a downloadable `.md` file or generate a styled version for GitHub Pages

