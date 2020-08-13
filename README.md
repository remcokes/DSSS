# Dutch Speed Surf Spots

## Demo
[Live website](https://remcokes.github.io/DSSS/)

![](assets/screenshots/website.jpg)

## UX

### User Stories

<strong>User Story 1:</strong> Inexperienced people who want to start practicing yoga.<br>

### Strategy
This website is for people

### Scope 
The website is easy to read and easy to use.

### Structure
Every page has

### Skeleton
__Header:__ <br>
Same fixed header on every page.<br>

__Menu:__ <br>
On large devices: 
On medium and small devices:

__Footer:__ <br>
The footer is 

__Maps:__ 

### Surface
All text with font family: 'Noto Sans JP'.<br>
All text with font color: #666666 (dark grey).<br>
All titles with font color: #bf9b30 (gold)<br>
Header image quote text in font color black.<br>
![](assets/screenshots/%23BF9B30.PNG)
![](assets/screenshots/%23C0C0C0.PNG)
<br><br>

__Header__<br>

__Footer__<br>

__Home page / index.html__<br>

### Mockups
The following wireframes were created using Balsamiq to design the website layout options:
<br>
[Small devices](assets/mockups/DSSS_Small.pdf)<br>
[Medium devices](assets/mockups/DSSS_Medium)<br>
[Large devices](assets/mockups/DSSS_Large.pdf)

## Features
The webpage consists of the following features:<br><br>
__Bootstrap form__<br>
The sign-up form uses Bootstrap form features.<br>
Radio buttons, to choose the preferred options.<br>
The form has required text fields for the name and email address.
<br><br>
__Bootstrap Icons__<br>
All grey icons are used in the footer for social media, phone and email, linked to the right place.<br>
In the fixed header is a home icon, linked to the _index.html_.<br>
In the fixed header is a _hamburger_ icon only on small and medium devices.<br>
Next to a lot of titles is a playful icon, they are not linked.
<br><br>
__Bootstrap Button__<br>
The sign-up form uses a Bootstrap button, which is styled with CSS.
<br><br>
__Bootstrap Navbar__<br>
Makes the _locations_ button a drop down list.
<br><br>
__Google Maps__<br>
Each location has his own API key and his own JavaScript file.
<br><br>

## Technologies

### Languages
[HTML5](https://en.wikipedia.org/wiki/HTML5) for the structure of the website <br>
[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) for the styling <br>
[JavaScript](https://en.wikipedia.org/wiki/JavaScript) for the Google Maps, header image quote and required fields of the sign up form.

### Frameworks / Tools / Libraries
[Balsamiq](https://balsamiq.com.) for the mockups.<br>
[Bootstrap](https://getbootstrap.com/) for the collapsible navbar, button and the footer icons<br>
[Google Fonts](https://fonts.google.com/) for the font family 'Noto Sans JP'<br>
[Gitpod](https://www.gitpod.io/) was the IDE used to write the code for this website<br>
[GitHub](https://github.com/) for version control

### Testing
[HTML Validator](https://validator.w3.org/) for testing the HTML code<br>
[CSS Validator](https://jigsaw.w3.org/css-validator/) for testing the CSS code<br>
Google Chrome Developer Tools for testing different device sizes

## Testing

__Responsiveness__<br>
Every page was tested for responsiveness on small, medium and large devices.<br>
Through the _Google Chrome Developer Tools_ I tested the following types:<br>
<ul>
  <li>iPhone 5/SE (portrait: 320x568 & landscape: 568x320)
  <li>Galaxy S5/Moto G4 (portrait: 360x640 & landscape: 640x360)
  <li>iPhone 6/7/8 (portrait: 375x667 & landscape: 667x375)
  <li>iPhone X (portrait: 375x812 & landscape: 812x375)
  <li>Pixel 2 (portrait: 411x731 & landscape: 731x411)
  <li>Pixel 2 XL (portrait: 411x823 & landscape: 823x411)
  <li>iPhone 6/7/8 Plus (portrait: 414x736 & landscape: 736x414)
  <li>iPad (portrait: 768x1024 & landscape: 1024x768)
  <li>iPad Pro (portrait: 1024x1366 & landscape: 1366x1024)
  <li>Surface Duo (portrait: 450x500 & landscape 600x450)
  <li>Galaxy Fold (portrait: 280x653 & landscape 653x280)
</ul>

This site was also tested in [Responsinator](https://www.responsinator.com/).<br>
![](assets/screenshots/small_devices.png)
<br><br>

__Header__<br>
The header is fixed and responsive to small, medium and large devices.
<br><br>
__Navigation menu__<br>
The links in the navigation menu are linked to the right internal webpage.
<br><br>
__Footer__<br>
In the footer the social media links will be found, which are external links.
There are also contact icons, which will can be used to get in contact right away.
## Testing results
HTML validator tested on the following pages:
index.html
![](assets/screenshots/html_validator.PNG)
<br>
CSS validator tested on the following page:
style.css<br>
![](assets/screenshots/css_validator.PNG)

## Deployment
I started working on this project in Repl.it because 

This website contains the following map:
<ul>
  <li>assets
</ul>
Inside the <strong>assets</strong> map I created five new maps:
<ul>
  <li>css
  <li>images
  <li>js
  <li>mockups
  <li>screenshots
</ul>
Inside the <strong>css</strong> map is the css style sheet called <strong>style.css</strong>.<br>
Inside the <strong>images</strong> map are all the images used on the website.<br>
Inside the <strong>js</strong> map are the three JavaScript sheets with the Google Maps information.<br>
Inside the <strong>mockups</strong> map are the three mockups for small, medium and large devices.<br>
Inside the <strong>screenshots</strong> map are all screenshots used in the README.md.<br>
Ending with the README.md

### Deployment left to be implemented
After this page is checked by the examinators, I will make the locations pages private in GitHub for the protection of my API key's.

### New Repository in GitHub
First you need an account on [GitHub](https://github.com) which you can download from [here](https://desktop.github.com).<br>
<ol>
  <li>Click <strong>Create a New Repository</strong>.
  <li>At <strong>Repository template</strong> you can select a template, if you have one.
  <li>At <strong>Repository name</strong> you can choose the name for you new repository.
  <li>At <strong>Description (optional)</strong> you give you repository a decription.
  <li>Next you can choose if you want a <strong>Public</strong> or a <strong>Private</strong> repository.
  <li><strong>Initialize this repository with a README</strong> you click this checkbox if you like to create a README file.
  <li>Click the green button with <strong>Create repository</strong>.
</ol>

### Creating a branch
To create a branch link you have to go to your repository in GitHub and follow the following steps:
<ol>
  <li>Click on <strong>settings</strong>.
  <li>Scroll down to <strong>GitHub Pages</strong>.
  <li>At <strong>Source</strong> the button stands on <strong>None</strong>, click it and select <strong>master branch</strong>.
  <li>Your site is ready to be published at (your branch name).
</ol>

### Push from GitPod to GitHub
When you make some changes in GitPod you can push them to GitHub.
<ol>
  <li>In GitPod click on <strong>Source Control: Git</strong>.
  <li>In the textfield you can give your changes a message name.
  <li>Underneath the line <strong>CHANGES</strong>, you see all the changes that have been made. Press the <strong>+</strong> button behind the page name which you want to be pushed. You can also press the <strong>+</strong> button next to the line <strong>CHANGES</strong>, to push all the made changes.
  <li>Klink the <strong>Commit</strong>.
  <li>On the right, press the GitPod logo with the name <strong>Pull Request</strong>.
  <li>A yellow field appears. Click the blue button with <strong>Push</strong>.
</ol>
    
### Create your own Google API key
To start you need to have a Google Account and start at the [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview).
<ol>
  <li>On the top of the Google Cloud Platform Console, next to the text <strong>Google Cloud Platform</strong> you see a drop project drop down menu.
  <li>When you click it, you will get a pop up with all your projects, if you have any.
  <li>Click on <strong>New Project</strong>.
  <li>Fill in your <strong>Project Name</strong> and click <strong>Create</strong>.
  <li>Go to your new project and click on <strong>Credentials</strong>.
  <li>Go to <strong>Credentials in APIs & Services</strong>.
  <li>Click on <strong>Create Credentials</strong> and <strong>API Key</strong>.
  <li>Copy your API Key code and paste into your website.
</ol>

## Credits

### Content
The full content is made up and written by me.

### Media
The photos used in this website were obtained from [Pixabay](https://pixabay.com/).

### Acknowledgements
Everything I learned from the [Code Institute](https://codeinstitute.net/) Fullstack Web Development course.<br>
I used [W3Schools](https://www.w3schools.com/) for extra general coding knowledge.<br>
I used the [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) site to create a API key and for general information.<br>
I used [Bootstrap](https://getbootstrap.com/) for info and offcourse to use the icons, buttons and navbar.<br>
