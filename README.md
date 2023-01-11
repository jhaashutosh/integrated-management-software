<!-- Improved compatibility of back to top link -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://img.icons8.com/color/512/bill.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Integrated Management System</h3>

  <p align="center">
    A complete bill management software to digitilize previously offline billing process.
    <br />
    <br />
    <a href="mailto:jhaashutosh58@gmail.com?subject=Demo request for Integrated Management 
             System&body=Hi Ashutosh, can we schedule a meeting for a demo tour of your project: Integrated Management System?">Request Demo</a>
    ·
     <a href="mailto:jhaashutosh58@gmail.com?subject=Bug report for Integrated 
              Management System&body=Hi Ashutosh, below are the details of the bug I spotted in your project: Integrated Management System.">Report Bug</a>
    ·
    <a href="mailto:jhaashutosh58@gmail.com?subject=Feature request for Integrated 
              Management System&body=Hi Ashutosh, below are the details of the feature I want you to implement in your project: Integrated Management System.">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#directory-tree">Directory tree</a></li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#user-authentication-from-backend">User authentication from backend</a></li>
        <li><a href="#searching-institutes">Searching institutes</a></li>
        <li><a href="#bill-generation">Bill generation</a></li>
        <li><a href="#edit-and-delete-previously-saved-bills">Edit and delete previously saved bills</a></li>
        <li><a href="#filter-bills-by-dates">Filter bills by date</a></li>
        <li><a href="#institute-specific-bills">Institute specific bills</a></li>
        <li><a href="#view-add-edit-delete-institutes">View/Add/Edit/Delete Institutes</a></li>
        <li><a href="#update-profile">Update profile</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Integrated Management System screenshot](https://user-images.githubusercontent.com/77449219/201415734-d5a4e625-e50d-4413-a69e-b8b7e4bc315c.png)

The goal of this project is to manage saved bills and data of more than **400+ Delhi-based institutes** that the _Delite Catering Company_ counts as clients, as well as to digitize the offline billing process.

The Digital Transformation era has begun and businesses need to efficiently utilize and manage data in order to compete
in the digital economy of today while also assuring future success. Starting by eliminating paper-based operations is a smart strategy.

Companies should be transformed digitally so that data can be quickly searched for, retrieved, and **integrated**. This simplifies process
implementation and reduces costs.

### Built With

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width=46/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width=46/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width=46/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"  width=53 />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width=56 />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Directory tree

<pre>
│   .gitignore
│   package-lock.json
│   <a href="https://gist.github.com/jhaashutosh/9de516357b54eff5077fabb6a978a075">package.json</a>
│   Procfile
│   README.md
|   .env
│
├───client
│   │   package-lock.json
│   │   <a href="https://gist.github.com/jhaashutosh/8332af845ae12680f04684e3e07cb76b">package-lock.json</a>
│   │   README.md
│   │
│   ├───public
│   │       favicon.ico
│   │       index.html
│   │       logo192.png
│   │       logo512.png
│   │       manifest.json
│   │       robots.txt
│   │
│   └───src
│       │   <a href="https://gist.github.com/jhaashutosh/793ed4fe9ac38522aac145d251d36288">App.js</a>
│       │   bootstrap.min.css
│       │   <a href="https://gist.github.com/jhaashutosh/794c5da7b9b24607b46a6af2304caf6e">index.css</a>
│       │   <a href="https://gist.github.com/jhaashutosh/a32ddfd9feda457bf88c6d526bfb4e6a">index.js</a>
│       │
│       ├───actions
│       │       <a href="https://gist.github.com/jhaashutosh/fd7b0967d08cde8c1e3a220fb6aa27ac">billActions.js</a>
│       │       <a href="https://gist.github.com/jhaashutosh/9eed8467085fba2c2fa09d5361de1dab">unitActions.js</a>
│       │       <a href="https://gist.github.com/jhaashutosh/25f9d5b5630b9aacc22da5d5564310fc">userActions.js</a>
│       │
│       ├───components
│       │   │   <a href="https://gist.github.com/jhaashutosh/2ac6f85a0fb27a0e16d1ef0b9ecf2239">Footer.js</a>
│       │   │   <a href="https://gist.github.com/jhaashutosh/06f81c080693f55036390e50cc785bcd">Header.js</a>
│       │   │   <a href="https://gist.github.com/jhaashutosh/20324062a9f89555019d2d5aa6b22cc1">Main.js</a>
│       │   │
│       │   ├───Bill
│       │   │       <a href="https://gist.github.com/jhaashutosh/b70bfc4270807859e230d7f2066f1c98">index.js</a>
│       │   │       index.module.css
│       │   │
│       │   ├───BillHistory
│       │   │       <a href="https://gist.github.com/jhaashutosh/e95294d5e8d8cd1b193a8c746d05742e">Filter.js</a>
│       │   │
│       │   ├───form
│       │   │       <a href="https://gist.github.com/jhaashutosh/34f436186b085ca788a9eba019317097">FormContainer.js</a>
│       │   │
│       │   ├───Institutes
│       │   │   └───Modals
│       │   │           <a href="https://gist.github.com/jhaashutosh/82f5fccdcc1f7e2b65c9e47f4de94bc1">AddInstituteModal.js</a>
│       │   │          <a href="https://gist.github.com/jhaashutosh/775a4c262dac0290c1f503cb21427f1f">EditInstituteModal.js</a>
│       │   │
│       │   └───ui
│       │           <a href="https://gist.github.com/jhaashutosh/e535dfb36a907ed5a8092e09564d7c97">Loader.js</a>
│       │           <a href="https://gist.github.com/jhaashutosh/370823f5d9bf7487ccb91a8a10b31db2">Message.js</a>
│       │
│       ├───constants
│       │       billConstants.js
│       │       unitConstants.js
│       │       userConstants.js
│       │
│       ├───hooks
│       │       <a href="https://gist.github.com/jhaashutosh/4fb887d4eacf99b4404f19483e5c36f4">useDebounce.js</a>
│       │
│       ├───reducers
│       │       <a href="https://gist.github.com/jhaashutosh/8ab257b0b8039bdbc2cb16cc36a3b685">billReducer.js</a>
│       │       <a href="https://gist.github.com/jhaashutosh/22cf0a4101379b96890671b02b156fe6">unitReducers.js</a>
│       │       <a href="https://gist.github.com/jhaashutosh/b7b94408decc157349d4a613240a9f01">userReducers.js</a>
│       │
│       ├───store
│       │       <a href="https://gist.github.com/jhaashutosh/dba59a4d9118227e59fd1a14d2a38ef6">store.js</a>
│       │
│       ├───utils
│       │       <a href="https://gist.github.com/jhaashutosh/68e6234d45bc15e4829cf2d801d3a7a9">dateToString.js</a>
│       │       <a href="https://gist.github.com/jhaashutosh/5e35e901914e5b8d4a1f3b82d0f2c9f6">formatAMPM.js</a>
|       |       <a href="https://gist.github.com/jhaashutosh/c7f7137e34a0bca479dfc4ce9b811dec">printPDF.js</a>
│       │
│       └───views
│               <a href="https://gist.github.com/jhaashutosh/b2b82e0b14cd82de1cd935743445476c">BillHistoryPage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/263cdcdc0a25e9759a3c4dceb28b4d11">BillPage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/cec4e0115e04f1af36ff327693002379">BillPage.module.css</a>
│               <a href="https://gist.github.com/jhaashutosh/00c825a82bd0001210965405dd36502f">EditBillPage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/e56110f20e4b69beaa958c5e7e105d3c">HomePage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/f93bd057b428157c4ff1e91219fd47ea">InstitutesPage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/98fc1f42106fad620da72b90c4d1be9c">LoginPage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/1561e1dfe425154f61773756ef195689">ProfilePage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/d80b1617a123fdc6119e35c403b64c11">RegisterPage.js</a>
│               <a href="https://gist.github.com/jhaashutosh/702fa4f39c9875dafd19dde58e58d1e7">SchoolBillHistoryPage.js</a>
│
└───server
    │   <a href="https://gist.github.com/jhaashutosh/134def97ecd1c068e414e1322d710f0f">index.js</a>
    │
    ├───controllers
    │        <a href="https://gist.github.com/jhaashutosh/3f7e6205639c0c13f8922f89afa078cb">billController.js</a>
    │        <a href="https://gist.github.com/jhaashutosh/871f269f0ba1f6b06c0f3e9e80d20898">unitController.js</a>
    │        <a href="https://gist.github.com/jhaashutosh/b9fc37c738b9ce73a479c08435060a36">userController.js</a>
    │
    ├───middleware
    │        <a href="https://gist.github.com/jhaashutosh/2c8b121b218ad57797f25255048de3f3">authMiddleware.js</a>
    │        <a href="https://gist.github.com/jhaashutosh/509ad31461bb5b8ca31121fe80c66d66">errorMiddleware.js</a>
    │
    ├───models
    │        <a href="https://gist.github.com/jhaashutosh/7ba29a4933a23a194570a17c674dbe5b">billModel.js</a>
    │        <a href="https://gist.github.com/jhaashutosh/e94c157419f795d69b842f1dd0657a4a">unitModel.js</a>
    │        <a href="https://gist.github.com/jhaashutosh/09b1f160ce80ebdd0cd306d29527d825">userModel.js</a>
    │
    ├───routes
    │       <a href="https://gist.github.com/jhaashutosh/18c027f54de5d387a12cde1db898eb35">billRoutes.js</a>
    │       <a href="https://gist.github.com/jhaashutosh/20c80621f423f2638c48dd681a7a00bd">unitRoutes.js</a>
    │       <a href="https://gist.github.com/jhaashutosh/417afc9ae233dcb2f03fbbca80a26e8a">userRoutes.js</a>
    │
    └───utils
            <a href="https://gist.github.com/jhaashutosh/6c74794616589bb938c252fe6bd9a0b0">db.js<a/>
</pre>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

### User authentication from backend

https://user-images.githubusercontent.com/77449219/201427649-8ddb5020-e78e-4a30-b2e7-ff4e6cfe5585.mp4

- User can enter email ID and password, which is verified in backend using custom controller function.
- Passwords are encrypted and compared using **BCryptJS**
- An authentication token is generated using **JSON Web Token**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Searching institutes

https://user-images.githubusercontent.com/77449219/201429070-e27d3f00-d295-4ad5-b4fa-38809f733243.mp4

- Institute list is fetched from backend and populated into an array which is then passed to data attribute of **Mantine/core's Select component**
- **Mantine/core's Select component** is searchable using a filter function that has been configured to exclude institutions whose code or name doesn't matches the entered value.
- Once user selects an institute and click on generate bill, redirection takes place with _institute id_ and _unit id_ as url parameters.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Bill generation

https://user-images.githubusercontent.com/77449219/201461926-c7a661dd-2eb6-474e-aad9-4b87e8364ef2.mp4

- Using the unit and institute IDs from URL parameters, the data is fetched from backend. The bill automatically updates fields like the most recent invoice number, the billing/supply address, etc.
- The total/taxable amount is calculated and updated automatically, and fields like date, time, quantity, rate, etc. are kept editable.
- When a user enters all the necessary information and clicks the save button, the bill is stored in the database and the user is redirected to the home page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Edit and delete previously saved bills

https://user-images.githubusercontent.com/77449219/201469748-5afd8a83-2986-4487-afe4-0184536507be.mp4

- When user navigates to all bills option in navbar, a complete list of latest bills (max 50)
- The total/taxable amount is calculated and updated automatically, and fields like date, time, quantity, rate, etc. are kept editable.
- When a user enters all the necessary information and clicks the save button, the bill is stored in the database and the user is redirected to the home page.
- Using `findById(req.params.id)` to find the bill `deleteOne()` methods, a bill can be deleted and from the database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Print multiple bills

https://user-images.githubusercontent.com/77449219/201464925-87d69e96-af10-4197-ac7e-81fe894f561e.mp4

- User can select multiple bills from the table and select print option.
- Details of selected bills are fetched and each bill is mapped into the bill component.
- The total content of web page is replaced with all bill components and `window.print()` method is used. Once done, the document is replaced back with original content.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Filter bills by dates

https://user-images.githubusercontent.com/77449219/201467225-6ee8e178-d8bc-449c-b781-702a2e2853b2.mp4

- User can filter bills according to a specific date or a range of dates.
- When a user picks a date or range of dates, a backend request is made, and bills that correspond to the selected dates are returned and displayed in the front end.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Institute specific bills

https://user-images.githubusercontent.com/77449219/201468172-369a8e10-ba51-47a3-8a40-4ffeb05f94d7.mp4

- A user may also search for bills for a specific institute. A backend request is made when an institute is chosen and using the institute ID, bills are filtered and sent back to the client.
- All features are identical to those on the "all bills" page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### View add edit delete Institutes

https://user-images.githubusercontent.com/77449219/201469303-6f4d543c-8880-4b95-a4b8-7aa1f2f2f063.mp4

- Users can view a list of all institutes as well as add, edit, and delete them which, in backend, has been implemented using CRUD operations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Update profile

https://user-images.githubusercontent.com/77449219/201470188-adbe8347-4117-4c30-b335-f0a3424e61be.mp4

- Users can also update their profile information such as name, email, and password.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
