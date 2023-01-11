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
│   <a href="https://gist.github.com/syedmazharaliraza/4a0c3391d370709caf59f871facd9d31">package.json</a>
│   Procfile
│   README.md
|   .env
│
├───client
│   │   package-lock.json
│   │   <a href="https://gist.github.com/syedmazharaliraza/46f34cf3706ade74d59e7cb16aa02158">package.json</a>
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
│       │   <a href="https://gist.github.com/syedmazharaliraza/04d92660529ce7e0460f1cb8b1d8a4ed">App.js</a>
│       │   bootstrap.min.css
│       │   <a href="https://gist.github.com/syedmazharaliraza/43202f54b17d577406f50d91c1516dc7">index.css</a>
│       │   <a href="https://gist.github.com/syedmazharaliraza/97869df7c02f07c15761f77fc3f40852">index.js</a>
│       │
│       ├───actions
│       │       <a href="https://gist.github.com/syedmazharaliraza/4bb326c49aa445b1b521056e5d293d3d">billActions.js</a>
│       │       <a href="https://gist.github.com/syedmazharaliraza/79f4d28bf52dbdabf68aaf62ae349e08">unitActions.js</a>
│       │       <a href="https://gist.github.com/syedmazharaliraza/b3c4c323eb731ce235a1391d34b0a908">userActions.js</a>
│       │
│       ├───components
│       │   │   <a href="https://gist.github.com/syedmazharaliraza/aa310468c6957d02a7bc78751a22e473">Footer.js</a>
│       │   │   <a href="https://gist.github.com/syedmazharaliraza/898b05d7342d3408c75f9fc535455942">Header.js</a>
│       │   │   <a href="https://gist.github.com/syedmazharaliraza/5331d48e6784ad61f8a1a37154baaf55">Main.js</a>
│       │   │
│       │   ├───Bill
│       │   │       <a href="https://gist.github.com/syedmazharaliraza/f01c2f3930fdf62ef887ee3b1d2fc9d0">index.js</a>
│       │   │       index.module.css
│       │   │
│       │   ├───BillHistory
│       │   │       <a href="https://gist.github.com/syedmazharaliraza/bf53fea616af572a0f459d8dbb4d32b9">Filter.js</a>
│       │   │
│       │   ├───form
│       │   │       <a href="https://gist.github.com/syedmazharaliraza/3aab376e514ff069036baf649f099761">FormContainer.js</a>
│       │   │
│       │   ├───Institutes
│       │   │   └───Modals
│       │   │           <a href="https://gist.github.com/syedmazharaliraza/61b070525384b5329c4287b8108aeef4">AddInstituteModal.js</a>
│       │   │          <a href="https://gist.github.com/syedmazharaliraza/cd65d82d1c6984f93affbf2ef46fee4f">EditInstituteModal.js</a>
│       │   │
│       │   └───ui
│       │           <a href="https://gist.github.com/syedmazharaliraza/aefc68db1f640c3db3ed17a108c56687">Loader.js</a>
│       │           <a href="https://gist.github.com/syedmazharaliraza/e3392d8b50ba03053d9c0fff79b33e55">Message.js</a>
│       │
│       ├───constants
│       │       billConstants.js
│       │       unitConstants.js
│       │       userConstants.js
│       │
│       ├───hooks
│       │       <a href="https://gist.github.com/syedmazharaliraza/5b701c7a40677d915b5a3f7336077ac5">useDebounce.js</a>
│       │
│       ├───reducers
│       │       <a href="https://gist.github.com/syedmazharaliraza/0834d6ce089ee8f3bc948b09441239c6">billReducer.js</a>
│       │       <a href="https://gist.github.com/syedmazharaliraza/5060c78e6b1ecf32077e119bb55ac4fa">unitReducers.js</a>
│       │       <a href="https://gist.github.com/syedmazharaliraza/860abedc2304bce8d9dc56d64c657587">userReducers.js</a>
│       │
│       ├───store
│       │       <a href="https://gist.github.com/syedmazharaliraza/6e3750ab015cc1f445dcfa8a031037b3">store.js</a>
│       │
│       ├───utils
│       │       <a href="https://gist.github.com/syedmazharaliraza/4d4a4ca25c6f62d79a7e6581fcf6cb11">dateToString.js</a>
│       │       <a href="https://gist.github.com/syedmazharaliraza/7a95a6e2b673cd56ea39c17977a2a7f6">formatAMPM.js</a>
|       |       <a href="https://gist.github.com/syedmazharaliraza/f710984a16558071482304c770928ccd">printPDF.js</a>
│       │
│       └───views
│               <a href="https://gist.github.com/syedmazharaliraza/79e9ea1cddc07743d9a210928d059154">BillHistoryPage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/880f11646fa441c318c4e31cb6fae2a3">BillPage.js</a>
│               <a href="">BillPage.module.css</a>
│               <a href="https://gist.github.com/syedmazharaliraza/15c861b1d372471f77bd60e5f8b48c08">EditBillPage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/217dfbf14fdeef127df95f69ac52ea37">HomePage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/c0b80a93bc6bb36d98efdcd8c6bb3649">InstitutesPage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/22fae945a55d2c11dac8cbe90e704416">LoginPage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/6937e3cbab6d1126722ebf16febc232f">ProfilePage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/df0d14e61542c08ceb2169d3ce753023">RegisterPage.js</a>
│               <a href="https://gist.github.com/syedmazharaliraza/b1889e305e59e1abd4f5dd8415837716">SchoolBillHistoryPage.js</a>
│
└───server
    │   <a href="https://gist.github.com/syedmazharaliraza/526b1672b9f1674034bfdb64ffd01d79">index.js</a>
    │
    ├───controllers
    │        <a href="https://gist.github.com/syedmazharaliraza/0d226480cc9b62df2db6f4b1eb335dc3">billController.js</a>
    │        <a href="https://gist.github.com/syedmazharaliraza/c085ca053022149d06fc3c272b2d9cc4">unitController.js</a>
    │        <a href="https://gist.github.com/syedmazharaliraza/4feb58411b7dd4a9afd58af8f4793105">userController.js</a>
    │
    ├───middleware
    │        <a href="https://gist.github.com/syedmazharaliraza/61e565d27c68a87e6b3e8f2d5bdd9295">authMiddleware.js</a>
    │        <a href="https://gist.github.com/syedmazharaliraza/76be8026a4c397ede9f75adfc664c1a7">errorMiddleware.js</a>
    │
    ├───models
    │        <a href="https://gist.github.com/syedmazharaliraza/318ae9b7f4917276a286af30c5720848">billModel.js</a>
    │        <a href="https://gist.github.com/syedmazharaliraza/835320deb5d2247bc119c956ce13b547">unitModel.js</a>
    │        <a href="https://gist.github.com/syedmazharaliraza/fc4018754c572df16aa8671da81b992c">userModel.js</a>
    │
    ├───routes
    │       <a href="https://gist.github.com/syedmazharaliraza/5ff2c8439d79b557732d72821e08820d">billRoutes.js</a>
    │       <a href="https://gist.github.com/syedmazharaliraza/cce59bf17b7bcf1b3d6f43e8bdbdbcb7">unitRoutes.js</a>
    │       <a href="https://gist.github.com/syedmazharaliraza/5b87181ab993ed3fd1aad6ec0f3198e6">userRoutes.js</a>
    │
    └───utils
            <a href="https://gist.github.com/syedmazharaliraza/8af7286fdfe5c82d275ae6f8d12a63b8">db.js<a/>
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
