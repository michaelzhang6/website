(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom:5em;display:flex;flex-direction:column;margin-bottom:0px;\npadding:13vw;\nbackground-image:url(assets/budapest.jpg);\nbackground-position:center;\nbackground-color:rgb(36, 69, 75);\nbackground-blend-mode:overlay\n\">\n  <h1 style=\"margin-bottom:0px;color:white\">MICHAEL ZHANG</h1>\n  <h2 style=\"text-align: center; font-size: 2.8vw;margin-top:0px;color:white\">SOFTWARE ENGINEER</h2>\n</div>\n<nav #nav style=\"margin-top:0px\" [class.sticky]=\"sticky\">\n  <a href=\"#home\">HOME</a>\n  <a href=\"#courses\">COURSES</a>\n  <a href=\"#projects\">PROJECTS</a>\n  <a href=\"#experience\">EXPERIENCE</a>\n  <a href=\"#contact\">CONTACT</a>\n</nav>\n<app-home id=\"home\"></app-home>\n<app-courses id=\"courses\"></app-courses>\n<app-projects id=\"projects\"></app-projects>\n<app-experience id=\"experience\"></app-experience>\n<app-contact id=\"contact\"></app-contact>\n<!--<router-outlet></router-outlet>-->\n<p style=\"text-align: center; font-size: 1vw;padding-bottom:10em\">Copyright &#169; 2019 Michael Zhang </p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/aiproject/aiproject.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/aiproject/aiproject.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Marth Bot</h2>\n<p>For my Artifical Intelligence Practicum Project Course, my teammates and I\n    created a reinforcement learning AI that learns how to play Super Smash\n    Brothers Melee. We used the Dolphin GameCube emulator to run the game and get\n    game state information. The AI controlled a Marth character in the game by inputting\n    commands into a virtual controller. We implemented a single deep Q neural\n    network (DQN) for the AI to be able to learn from its in game experiences. The AI\n    was able to attack a target, dodge enemy attacks, as well as recover from being\n    knocked off the stage.\n</p>\n<div style=\"margin-left:.5em\">\n    <a href=\"https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee\" target=\"_blank\" title=\"SSBM\">\n        <button>About Super Smash Bros Melee\n        </button>\n    </a>\n    <a href=\"https://en.wikipedia.org/wiki/Dolphin_(emulator)\" target=\"_blank\" title=\"Dolphin\">\n        <button>About Dolphin\n        </button>\n    </a>\n</div>\n<br>\n<p style=\"padding-top:1.5em\">\n    Tools Used: <br>\n    <i class=\"mdi mdi-language-python\" title=\"Python\"></i>\n    <img src=\"assets/dolphin.jpg\" style=\"height:2em;width:2em;\" title=\"Dolphin\">\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/budapest/budapest.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/budapest/budapest.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Study Abroad at AIT Budapest</h2>\n<p> I am spending the first semester of my junior year studying abroad at AIT Budapest. AIT Budapest\n    is a well known study abroad program designed specifically for computer science majors. I have always\n    wanted to study abroad as well as travel around Europe, so this program was a perfect fit for what I wanted\n    to study and where I wanted to go.\n</p>\n<div style=\"text-align:center\">\n    <a href=\"https://ait-budapest.com\" target=\"_blank\" title=\"study abroad\">\n        <button>More about the Program</button>\n    </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <!-- Contact -->\n    <h2 id=\"Ct\">Contact</h2>\n    <p>Email me at <a class=\"js-emaillink\" href=\"mailto:maz62@cornell.edu\"\n            style=\"text-decoration: none;\">maz62@cornell.edu</a>\n        <button class=\"js-emailcopybtn\" style=\"font-size: 1vw;margin-left:.4em\">Copy Email</button></p>\n    <script>\n        var copyEmailBtn = document.querySelector('.js-emailcopybtn');\n        copyEmailBtn.addEventListener('click', function (event) {\n            // Select the email link anchor text  \n            var emailLink = document.querySelector('.js-emaillink');\n            var range = document.createRange();\n            range.selectNode(emailLink);\n            window.getSelection().addRange(range);\n\n            try {\n                // Now that we've selected the anchor text, execute the copy command  \n                var successful = document.execCommand('copy');\n                var msg = successful ? 'successful' : 'unsuccessful';\n                console.log('Copy email command was ' + msg);\n            }\n            catch (err) {\n                console.log('Oops, unable to copy');\n            }\n\n            // Remove the selections - NOTE: Should use\n            // removeRange(range) when it is supported  \n            window.getSelection().removeAllRanges();\n        });   \n    </script>\n\n    <a class=\"mdi mdi-linkedin-box\" href=\"https://www.linkedin.com/in/michael-zhang-7100b2143/\" target=_blank\n        title=\"LinkedIn Profile\" style=\"font-size:3.5vw; color:#0077B5;\">\n    </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/courses/courses.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/courses/courses.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#eee; padding-bottom:5em\">\n    <!-- Coursework-->\n    <h2 id=\"Cw\" style=\"padding-top:1.5em\">Coursework</h2>\n    <table id=\"t01\"\n        style=\"width:100%; font-size:1.5vw; margin:0px auto;font-family: arial; color: #6B6B6B; font-family: 'Oswald', sans-serif;\">\n        <tr>\n            <!-- headers -->\n            <th>Course Name</th>\n            <th>Course Description</th>\n            <th>Learn More</th>\n        </tr>\n        <tr>\n            <td>CS4700: Foundations of Artificial Intelligence</td>\n            <td>Challenging introduction to the major subareas and current\n                research directions in artificial intelligence. Topics include\n                knowledge representation, heuristic search, problem solving,\n                natural-language processing, game-playing, logic and deduction,\n                planning, and machine learning.\n            </td>\n            <td><a href=\"http://www.cs.cornell.edu/courses/cs4700/2019sp/\" target=\"_blank\"\n                    title=\"http://www.cs.cornell.edu/courses/cs4700/2019sp/\">\n                    <button>Course Website</button></a>\n            </td>\n        </tr>\n        <tr>\n            <td>CS3410: Systems Programming</td>\n            <td> Introduction to computer organization, systems programming and\n                the hardware/software interface. Topics include instruction sets,\n                computer arithmetic, datapath design, data formats, addressing\n                modes, memory hierarchies including caches and virtual memory,\n                I/O devices, bus-based I/O systems, and multicore architectures.\n                Students learn assembly language programming and design a pipelined RISC processor</td>\n            <td><a href=\"http://www.cs.cornell.edu/courses/cs3410/2019sp/\" target=\"_blank\"\n                    title=\"http://www.cs.cornell.edu/courses/cs3410/2019sp/\"><button>Course Website</button></a>\n            </td>\n        </tr>\n        <tr>\n            <td>CS3110: Data Structures and Functional Programming</td>\n            <td>This course will give you the opportunity to become a better programmer.\n                First, you will learn a functional programming language, OCaml. Second, we will explore questions\n                that arise in the fields of\n                software engineering, programming methodology, and programming language theory.\n                Third, and most importantly, this course will give you the opportunity to read and write a lot of\n                code,\n                and to strive for excellence in your own programming.</td>\n            <td><a href=\"http://www.cs.cornell.edu/courses/cs3110/2018fa/\" target=\"_blank\"\n                    title=\"http://www.cs.cornell.edu/courses/cs3110/2018fa/\"><button>Course Website</button></a>\n            </td>\n        </tr>\n        <tr *ngIf=\"moreCourses\">\n            <td>CS2800: Discrete Structures</td>\n            <td>This course covers the mathematical concepts that underlie computer science, including: induction,\n                combinatorics, basic probability,\n                sets, functions and relations, number theory, regular expressions and finite automata, graph theory,\n                basic propositional and first-order logic.\n                Careful mathematical reasoning and argument are a major theme of the course. Students are required\n                to write a large number of clear,\n                rigorous proofs and to work with precise definitions.</td>\n            <td><a href=\"https://courses.cs.cornell.edu/cs2800/wiki/index.php/CS_2800_Spring_2018\" target=\"_blank\"\n                    title=\"https://courses.cs.cornell.edu/cs2800/wiki/index.php/CS_2800_Spring_2018\"><button>Course\n                        Website</button></a></td>\n        </tr>\n        <tr *ngIf=\"moreCourses\">\n            <td>CS2110: Object Oriented Programming and Data Structures</td>\n            <td>Intermediate programming in a high-level language and introduction to computer science.\n                Topics include program structure and organization, object-oriented programming (classes, objects,\n                types, sub-typing),\n                graphical user interfaces, algorithm analysis (asymptotic complexity, big O notation), recursion,\n                data structures (lists, trees, stacks, queues, heaps, search trees, hash tables, graphs), graph\n                algorithms.\n                Java is the principal programming language.</td>\n            <td><a href=\"http://www.cs.cornell.edu/courses/cs2110/2018sp/index.html\" target=\"_blank\"\n                    title=\"http://www.cs.cornell.edu/courses/cs2110/2018sp/index.html\"><button>Course\n                        Website</button></a></td>\n        </tr>\n        <tr *ngIf=\"moreCourses\">\n            <td>INFO1998: Introduction to Machine Learning</td>\n            <td> This course introduces various machine learning models,\n                visualization techniques, and data manipulation strategies, with applications in the Python\n                programming language.</td>\n            <td><a href=\"https://junyounglim.github.io/machine-learning-course/\" target=\"_blank\"\n                    title=\"https://junyounglim.github.io/machine-learning-course/\"><button>Course\n                        Website</button></a></td>\n        </tr>\n        <tr *ngIf=\"moreCourses\">\n            <td>CS1998: Intro to iOS App Development</td>\n            <td>This course starts with the basics of Xcode and how to make a simple app, and works its way towards\n                more advanced techniques\n                as the course progresses. By the end of the course, you should have all the experience necessary to\n                create your own app and distribute\n                it on the iOS App Store</td>\n            <td><a href=\"https://www.cornellappdev.com/intro-to-ios-development\" target=\"_blank\"\n                    title=\"https://www.cornellappdev.com/intro-to-ios-development\"><button>Course\n                        Website</button></a></td>\n        </tr>\n        <tr *ngIf=\"moreCourses\">\n            <td>CS1110: Introduction to Programming</td>\n            <td>Programming and problem solving using Python.\n                Emphasizes principles of software development, style, and testing.\n                Topics include procedures and functions, iteration, recursion, arrays and vectors, strings, an\n                operational model\n                of procedure and function calls, algorithms, exceptions, object-oriented programming, and GUIs\n                (graphical user interfaces).\n                Weekly labs provide guided practice on the computer, with staff present to help.\n                Assignments may use graphics and GUIs to help develop fluency and understanding.</td>\n            <td><a href=\"https://www.cs.cornell.edu/courses/cs1110/\" target=\"_blank\"\n                    title=\"https://www.cs.cornell.edu/courses/cs1110/\"><button>\n                        Course Website</button></a></td>\n        </tr>\n        <tr *ngIf=\"moreCourses\">\n            <td></td>\n            <td style=\"text-align:center\">\n                Math Courses: Calculus II, Linear Algebra, Probability\n            </td>\n        </tr>\n        <!-- <tr>\n                    <td>CS4320: Introduction to Database Systems</td>\n                    <td>CS4320/CS5320 is an introduction to relational database systems, NoSQL and NewSQL systems,\n                    and other tools for large-scale data analysis. Topics covered include the relational model, SQL,\n                    query processing and optimization, transactions, recovery, NoSQL and NewSQL systems, database design, Map Reduce, and Spark.</td>\n                    <td><a href=\"http://www.cs.cornell.edu/courses/cs4320/2018fa/\" target=\"_blank\"\n                    title=\"http://www.cs.cornell.edu/courses/cs4320/2018fa/\"><button>Course Website</button></a></td>\n                </tr> -->\n        <button *ngIf=\"!moreCourses\" (click)=\"moreCourses = true\">See More</button>\n        <button *ngIf=\"moreCourses\" (click)=\"moreCourses = false\">See Less</button>\n    </table>\n    <h3>Fall 2019: Study Abroad at AIT Budapest\n        <button *ngIf=\"!budapest\" (click)=\"budapest=true\">Learn More</button>\n        <button *ngIf=\"budapest\" (click)=\"budapest=false\">Close</button>\n    </h3>\n    <app-budapest *ngIf=\"budapest\"></app-budapest>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/experience/experience.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/experience/experience.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#eee; padding-bottom:5em\">\n    <!-- Experience-->\n    <h2 id=\"Ex\" style=\"padding-top:1.5em\">Experience</h2>\n    <h3>Work Experience</h3>\n    <div>\n        <h4>Raytheon Intelligence, Information and Services -- Software Engineering Intern (Summer 2019)</h4>\n        <p class=exp>\n            - Developed a web application in Angular from scratch that greatly simplifies the data recording\n            process for an internal R&D radar and worked with a user experience team on designing its layout and\n            features <br>\n            - Updated the RESTful server side API for the radar recorder by reworking many of the Java methods to\n            provide\n            the necessary data for the features requested by the product owner and user experience team <br>\n            - Implemented an algorithm in C++ that generates noise estimates for dual-polarization data from the radar\n            in\n            order to generate more accurate and distinctive detections for weather data products <br> <br>\n\n            Tools Used:\n            <i class=\"mdi mdi-language-typescript\" title=\"TypeScript\"></i>\n            <i class=\"mdi mdi-language-html5\" title=\"HTML5\"></i>\n            <i class=\"mdi mdi-language-css3\" title=\"CSS3\"></i>\n            <i class=\"mdi mdi-language-java\" title=\"Java\"></i>\n            <i class=\"mdi mdi-language-c\" title=\"C\"></i>\n            <i class=\"mdi mdi-language-cpp\" title=\"C++\"></i>\n        </p>\n    </div>\n    <div>\n        <h4>Cornell CIS Student Employment -- Course Consultant - CS1110 (2018-Present)</h4>\n        <p class=exp>\n            - Answers student questions and reinforces concepts taught in class during weekly office hours <br>\n            - Assists TAs in running discussion sections by leading students through lab assignments <br>\n            - Manages the course announcement board and serves as publicity point of contact <br>\n            - Grades programming assignments, lab activities, and exams <br> <br>\n\n            Tools Used:\n            <i class=\"mdi mdi-language-python\" title=\"Python\"></i>\n        </p>\n    </div>\n    <div>\n        <h4>Atlantis Technology -- Data Curation Intern (Summer 2017)</h4>\n        <p class=exp>\n            - Collaborated with engineering and product teams to build a stealth-mode SaaS product that provides\n            healthcare contact information for medical suppliers <br>\n            - Researched contact data and curated the database using Microsoft Excel <br> <br>\n\n            Tools Used:\n            <i class=\"mdi mdi-file-excel\" title=\"Excel\"></i>\n        </p>\n    </div>\n    <!--\n    <div>\n        <h4>New England Chinese Youth Summer Camp -- Counselor (Summer 2016-Summer 2018)</h4>\n        <p class=exp>Leads group of 15 campers throughout the week as a camp counselor in various activities\n            relating to Chinese culture.\n            Organizes nightly activities for the entire camp of around 300 campers.\n        </p>\n    </div>\n    <div>\n        <h4>Stop & Shop -- Front End Associate (Summer 2018)</h4>\n        <p class=exp>\n            Assists in the daily operation of the store; helps customers check out and keeps shelves stocked.\n        </p>\n    </div>\n    <div>\n        <h4>InspireDo -- Tutor (Summer 2016-2017)</h4>\n        <p class=exp>\n            Worked with students on a weekly basis to create personalized study plans in order to meet their goals\n            for the SAT/ACT.\n        </p>\n    </div>\n    <div>\n        <h4>Kumon Learning Center -- Tutor (2015-2016)</h4>\n        <p class=exp>\n            Promoted the development of students’ reading comprehension and math skills by reviewing their work and\n            explaining concepts.\n        </p>\n    </div>-->\n    <h3>Extracurriculars</h3>\n    <div>\n        <h4>Association of Computer Science Undergraduates -- Social Team Officer (2017-Present)</h4>\n        <p class=exp>\n            - Plans and helps set up monthly campus wide social events for the computer science community <br>\n            - Manages the mentorship program that connects new members to older and more experienced students <br>\n            - Coordinates monthly officer socials that increase cross team collaboration\n\n        </p>\n    </div>\n    <div>\n        <h4>Cornell Spikeball Club -- Co-President (2017-Present)</h4>\n        <p class=exp>\n            - Co-Founded the Spikeball Club at Cornell University <br>\n            - Organizes practices and trips to tournaments for a\n            15 member team.\n        </p>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='padding:1vw;'>\n    <!--Overview-->\n    <h2 style=\"padding-top:1em\">About Me</h2>\n    <p style='text-align: center;'>Hello! I'm Michael and I'm a junior studying computer science at Cornell\n        University.\n        I'm interested in software development, web development, AI, and data science. I'm highly motivated and\n        eager to learn.\n    </p>\n    <img src=\"assets/headshot.jpeg\" alt=\"Headshot\" title=\"Headshot\"\n        style=\"width:15vw;height:15.84vw;margin:0px auto;display: block;border-radius:90%\">\n    <a href=\"#contact\" style=\"text-decoration: none;text-align: center;\"><button\n            style=\"margin: 0 auto; display: block; font-size:1.5vw; margin-top: .7em;\">\n            Contact for Resume</button></a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/projects/projects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/projects/projects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-bottom:5em; text-align:center\">\n    <!--Projects -->\n    <h2 id=\"Pr\" style=\"padding-top:1.5em\">Projects</h2>\n    <div id=\"container\">\n        <div (click)=\"openProject(0)\">\n            <img style=\"width:18vw;height:17vw;\"\n                [ngClass]=\"{'notSelected': (projSelected[0] != undefined && projSelected[0] != 0)}\"\n                src=\"assets/WebsiteLogo.jpg\">\n        </div>\n        <div (click)=\"openProject(1)\">\n            <img style=\"height:18vw;width:21vw\"\n                [ngClass]=\"{'notSelected': (projSelected[0] != undefined && projSelected[0] != 1)}\"\n                src=\"assets/marth.gif\">\n        </div>\n        <div (click)=\"openProject(2)\" style=\"border:1px solid black\">\n            <img style=\"height:18vw;width:18vw\"\n                [ngClass]=\"{'notSelected': (projSelected[0] != undefined && projSelected[0] != 2)}\"\n                src=\"assets/riscv.jpg\">\n        </div>\n    </div>\n    <app-websiteinfo *ngIf=\"projSelected[0] != undefined && projSelected[0] == 0\"></app-websiteinfo>\n    <app-aiproject *ngIf=\"projSelected[0] != undefined && projSelected[0] == 1\"></app-aiproject>\n    <app-riscv *ngIf=\"projSelected[0] != undefined && projSelected[0] == 2\"></app-riscv>\n    <button *ngIf=\"projSelected[0] != undefined\" (click)=\"projSelected.pop()\">Close</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/riscv/riscv.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/riscv/riscv.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Fully Pipelined 32 bit RISC-V Processor</h2>\n<p>\n    For my Systems Programming course, I designed a fully pipelined 32 bit RISC-V\n    processor in Logisim. The processor was designed to handle the most important\n    arithmetic and logic operations. Control flow instructions such as branching and\n    jumping were also implemented. A hazard detection unit was also implemented to\n    handle data and control hazards.\n</p>\n<p>\n    Tools Used: <br>\n    <img src=\"assets/logisim.png\" title=\"Logisim\" style=\"height:2em;width:2em;padding-top:.5em\">\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/webcontent/websiteinfo/websiteinfo.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/webcontent/websiteinfo/websiteinfo.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Personal Website</h2>\n<p>The summer after my freshman year at Cornell, I decided to make a website\n    that I could use to keep track of both my academic progress and professional achievements.\n    Being completely new to web development at the time gave me the chance to discover\n    technologies on my own and learn independently. I update the website\n    every few months or so, which helps me keep my web development skills sharp.\n</p>\n<p>\n    This past summer I worked on a project at Raytheon in Angular and subsequently picked\n    up TypeScript/JavaScript. I redesigned my website to be more robust and complex\n    using these skills.\n</p>\n<p>\n    Any feedback\n    on the design or layout of the website is greatly appreciated!\n</p>\n<p>\n    Tools Used: <br>\n    <i class=\"mdi mdi-language-typescript\" title=\"TypeScript\"></i>\n    <i class=\"mdi mdi-language-javascript\" title=\"JavaScript\"></i>\n    <i class=\"mdi mdi-language-html5\" title=\"HTML5\"></i>\n    <i class=\"mdi mdi-language-css3\" title=\"CSS3\"></i>\n</p>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _webcontent_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webcontent/home/home.component */ "./src/app/webcontent/home/home.component.ts");
/* harmony import */ var _webcontent_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webcontent/courses/courses.component */ "./src/app/webcontent/courses/courses.component.ts");
/* harmony import */ var _webcontent_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webcontent/projects/projects.component */ "./src/app/webcontent/projects/projects.component.ts");
/* harmony import */ var _webcontent_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webcontent/experience/experience.component */ "./src/app/webcontent/experience/experience.component.ts");
/* harmony import */ var _webcontent_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webcontent/contact/contact.component */ "./src/app/webcontent/contact/contact.component.ts");
/* harmony import */ var _webcontent_budapest_budapest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webcontent/budapest/budapest.component */ "./src/app/webcontent/budapest/budapest.component.ts");
/* harmony import */ var _webcontent_websiteinfo_websiteinfo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webcontent/websiteinfo/websiteinfo.component */ "./src/app/webcontent/websiteinfo/websiteinfo.component.ts");
/* harmony import */ var _webcontent_aiproject_aiproject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webcontent/aiproject/aiproject.component */ "./src/app/webcontent/aiproject/aiproject.component.ts");
/* harmony import */ var _webcontent_riscv_riscv_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./webcontent/riscv/riscv.component */ "./src/app/webcontent/riscv/riscv.component.ts");












const routes = [
    {
        path: 'home',
        component: _webcontent_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: '',
        component: _webcontent_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'courses',
        component: _webcontent_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"]
    },
    {
        path: 'projects',
        component: _webcontent_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    },
    {
        path: 'experience',
        component: _webcontent_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"]
    },
    {
        path: 'contact',
        component: _webcontent_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    },
    {
        path: 'budapest',
        component: _webcontent_budapest_budapest_component__WEBPACK_IMPORTED_MODULE_8__["BudapestComponent"]
    },
    {
        path: 'websiteinfo',
        component: _webcontent_websiteinfo_websiteinfo_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteinfoComponent"]
    },
    {
        path: 'ai',
        component: _webcontent_aiproject_aiproject_component__WEBPACK_IMPORTED_MODULE_10__["AiprojectComponent"]
    },
    {
        path: 'riscv',
        component: _webcontent_riscv_riscv_component__WEBPACK_IMPORTED_MODULE_11__["RiscvComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n    background-color: #6BC4D6;\n}\nnav a {\n    color: white;\n    padding: 1em;\n    font-size: .9em\n}\nnav a:hover {\n    color: #6B6B6B;\n}\n.sticky {\n    position:fixed;\n    top: 0;\n    width: 100%;\n    overflow: hidden;\n    z-index: 10;\n}\n.content {\n    padding: 16px\n}\nh1 {\n    font-size: 5vw\n}\nh2 {\n    font-size: 2.5vw\n}\n:host {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLE1BQU07SUFDTixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULE1BQU07RUFDUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkJDNEQ2O1xufVxubmF2IGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAuOWVtXG59XG5uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICM2QjZCNkI7XG59XG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHhcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNXZ3XG59XG5oMiB7XG4gICAgZm9udC1zaXplOiAyLjV2d1xufVxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'website';
        this.sticky = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.navPos = this.navElement.nativeElement.offsetTop;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.navPos) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nav", { static: true })
], AppComponent.prototype, "navElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
], AppComponent.prototype, "handleScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _webcontent_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webcontent/home/home.component */ "./src/app/webcontent/home/home.component.ts");
/* harmony import */ var _webcontent_courses_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webcontent/courses/courses.component */ "./src/app/webcontent/courses/courses.component.ts");
/* harmony import */ var _webcontent_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webcontent/projects/projects.component */ "./src/app/webcontent/projects/projects.component.ts");
/* harmony import */ var _webcontent_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webcontent/experience/experience.component */ "./src/app/webcontent/experience/experience.component.ts");
/* harmony import */ var _webcontent_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webcontent/contact/contact.component */ "./src/app/webcontent/contact/contact.component.ts");
/* harmony import */ var _webcontent_budapest_budapest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webcontent/budapest/budapest.component */ "./src/app/webcontent/budapest/budapest.component.ts");
/* harmony import */ var _webcontent_websiteinfo_websiteinfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./webcontent/websiteinfo/websiteinfo.component */ "./src/app/webcontent/websiteinfo/websiteinfo.component.ts");
/* harmony import */ var _webcontent_aiproject_aiproject_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webcontent/aiproject/aiproject.component */ "./src/app/webcontent/aiproject/aiproject.component.ts");
/* harmony import */ var _webcontent_riscv_riscv_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./webcontent/riscv/riscv.component */ "./src/app/webcontent/riscv/riscv.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _webcontent_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _webcontent_courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"],
            _webcontent_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
            _webcontent_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
            _webcontent_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            _webcontent_budapest_budapest_component__WEBPACK_IMPORTED_MODULE_10__["BudapestComponent"],
            _webcontent_websiteinfo_websiteinfo_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteinfoComponent"],
            _webcontent_aiproject_aiproject_component__WEBPACK_IMPORTED_MODULE_12__["AiprojectComponent"],
            _webcontent_riscv_riscv_component__WEBPACK_IMPORTED_MODULE_13__["RiscvComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/webcontent/aiproject/aiproject.component.css":
/*!**************************************************************!*\
  !*** ./src/app/webcontent/aiproject/aiproject.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    text-align:left;\n    padding-left:.5em;\n    padding-right:.5em\n}\ni {\n    font-size:2em\n}\ndiv {\n    float:left\n}\na {\n    padding-left:.5em\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC9haXByb2plY3QvYWlwcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93ZWJjb250ZW50L2FpcHJvamVjdC9haXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6LjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0Oi41ZW1cbn1cbmkge1xuICAgIGZvbnQtc2l6ZToyZW1cbn1cbmRpdiB7XG4gICAgZmxvYXQ6bGVmdFxufVxuYSB7XG4gICAgcGFkZGluZy1sZWZ0Oi41ZW1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/webcontent/aiproject/aiproject.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/webcontent/aiproject/aiproject.component.ts ***!
  \*************************************************************/
/*! exports provided: AiprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiprojectComponent", function() { return AiprojectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AiprojectComponent = class AiprojectComponent {
    constructor() { }
    ngOnInit() {
    }
};
AiprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aiproject',
        template: __webpack_require__(/*! raw-loader!./aiproject.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/aiproject/aiproject.component.html"),
        styles: [__webpack_require__(/*! ./aiproject.component.css */ "./src/app/webcontent/aiproject/aiproject.component.css")]
    })
], AiprojectComponent);



/***/ }),

/***/ "./src/app/webcontent/budapest/budapest.component.css":
/*!************************************************************!*\
  !*** ./src/app/webcontent/budapest/budapest.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    padding-left:.5em\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC9idWRhcGVzdC9idWRhcGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dlYmNvbnRlbnQvYnVkYXBlc3QvYnVkYXBlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmctbGVmdDouNWVtXG59Il19 */"

/***/ }),

/***/ "./src/app/webcontent/budapest/budapest.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/webcontent/budapest/budapest.component.ts ***!
  \***********************************************************/
/*! exports provided: BudapestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudapestComponent", function() { return BudapestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BudapestComponent = class BudapestComponent {
    constructor() { }
    ngOnInit() {
    }
};
BudapestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-budapest',
        template: __webpack_require__(/*! raw-loader!./budapest.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/budapest/budapest.component.html"),
        styles: [__webpack_require__(/*! ./budapest.component.css */ "./src/app/webcontent/budapest/budapest.component.css")]
    })
], BudapestComponent);



/***/ }),

/***/ "./src/app/webcontent/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/webcontent/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYmNvbnRlbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/webcontent/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/webcontent/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/webcontent/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/webcontent/courses/courses.component.css":
/*!**********************************************************!*\
  !*** ./src/app/webcontent/courses/courses.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    padding-left: .5em\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93ZWJjb250ZW50L2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIHBhZGRpbmctbGVmdDogLjVlbVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/webcontent/courses/courses.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/webcontent/courses/courses.component.ts ***!
  \*********************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoursesComponent = class CoursesComponent {
    constructor() {
        this.budapest = false;
        this.moreCourses = false;
    }
    ngOnInit() {
    }
};
CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-courses',
        template: __webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/courses/courses.component.html"),
        styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/webcontent/courses/courses.component.css")]
    })
], CoursesComponent);



/***/ }),

/***/ "./src/app/webcontent/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/webcontent/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div div {\n    padding-left:.5em\n}\ndiv h3 {\n    padding-left:.4em\n}\ni {\n    font-size:1.5em\n}\ndiv.logo {\n    border-radius:50%;\n    overflow:hidden;\n    width:100px;\n    height:100px;\n    -webkit-box-align:center;\n            align-items:center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBa0I7WUFBbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvd2ViY29udGVudC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBkaXYge1xuICAgIHBhZGRpbmctbGVmdDouNWVtXG59XG5kaXYgaDMge1xuICAgIHBhZGRpbmctbGVmdDouNGVtXG59XG5pIHtcbiAgICBmb250LXNpemU6MS41ZW1cbn1cbmRpdi5sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/webcontent/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/webcontent/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/experience/experience.component.html"),
        styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/webcontent/experience/experience.component.css")]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/webcontent/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/webcontent/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYmNvbnRlbnQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/webcontent/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/webcontent/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/webcontent/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/webcontent/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/webcontent/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#container {\n    display:-webkit-box;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n            flex-direction:row;\n    -webkit-box-pack:center;\n            justify-content:center;\n    padding:2em;\n}\ndiv#container div{\n    border-radius:50%;\n    overflow:hidden;\n    width:18vw;\n    height:18vw;\n    display:-webkit-box;\n    display:flex;\n    -webkit-box-align:center;\n            align-items:center;\n    -webkit-box-pack:center;\n            justify-content:center;\n    margin:2vw;\n}\n.notSelected {\n    opacity: 0.5\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQVk7SUFBWixZQUFZO0lBQ1osNkJBQWtCO0lBQWxCLDRCQUFrQjtZQUFsQixrQkFBa0I7SUFDbEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBWTtJQUFaLFlBQVk7SUFDWix3QkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHVCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2ViY29udGVudC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHBhZGRpbmc6MmVtO1xufVxuZGl2I2NvbnRhaW5lciBkaXZ7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIHdpZHRoOjE4dnc7XG4gICAgaGVpZ2h0OjE4dnc7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIG1hcmdpbjoydnc7XG59XG4ubm90U2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDAuNVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/webcontent/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/webcontent/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() {
        // queue for project selection (only one at any given time)
        this.projSelected = new Array();
    }
    ngOnInit() {
    }
    /**
     * Opens a project and removes the previously selected one
     *
     * project - number representing the project
     *
     * mapping is:
     * 0 - website
     * 1 - ai
     * 2 - riscv
     */
    openProject(project) {
        if (this.projSelected.length == 0) {
            this.projSelected.push(project);
        }
        else {
            // non empty 
            if (this.projSelected[0] == project) {
                return;
            }
            else {
                this.projSelected.pop();
                this.projSelected.push(project);
            }
        }
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/webcontent/projects/projects.component.css")]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/webcontent/riscv/riscv.component.css":
/*!******************************************************!*\
  !*** ./src/app/webcontent/riscv/riscv.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    text-align:left;\n    padding-left:.5em;\n    padding-right:.5em\n}\ni {\n    font-size:2em\n}\ndiv {\n    float:left\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC9yaXNjdi9yaXNjdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2ViY29udGVudC9yaXNjdi9yaXNjdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDouNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6LjVlbVxufVxuaSB7XG4gICAgZm9udC1zaXplOjJlbVxufVxuZGl2IHtcbiAgICBmbG9hdDpsZWZ0XG59Il19 */"

/***/ }),

/***/ "./src/app/webcontent/riscv/riscv.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/webcontent/riscv/riscv.component.ts ***!
  \*****************************************************/
/*! exports provided: RiscvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiscvComponent", function() { return RiscvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RiscvComponent = class RiscvComponent {
    constructor() { }
    ngOnInit() {
    }
};
RiscvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-riscv',
        template: __webpack_require__(/*! raw-loader!./riscv.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/riscv/riscv.component.html"),
        styles: [__webpack_require__(/*! ./riscv.component.css */ "./src/app/webcontent/riscv/riscv.component.css")]
    })
], RiscvComponent);



/***/ }),

/***/ "./src/app/webcontent/websiteinfo/websiteinfo.component.css":
/*!******************************************************************!*\
  !*** ./src/app/webcontent/websiteinfo/websiteinfo.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    text-align:left;\n    padding-left:.5em;\n    padding-right:.5em\n}\ni {\n    font-size:2em\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViY29udGVudC93ZWJzaXRlaW5mby93ZWJzaXRlaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2ViY29udGVudC93ZWJzaXRlaW5mby93ZWJzaXRlaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDouNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6LjVlbVxufVxuaSB7XG4gICAgZm9udC1zaXplOjJlbVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/webcontent/websiteinfo/websiteinfo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/webcontent/websiteinfo/websiteinfo.component.ts ***!
  \*****************************************************************/
/*! exports provided: WebsiteinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteinfoComponent", function() { return WebsiteinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WebsiteinfoComponent = class WebsiteinfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
WebsiteinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-websiteinfo',
        template: __webpack_require__(/*! raw-loader!./websiteinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/webcontent/websiteinfo/websiteinfo.component.html"),
        styles: [__webpack_require__(/*! ./websiteinfo.component.css */ "./src/app/webcontent/websiteinfo/websiteinfo.component.css")]
    })
], WebsiteinfoComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelzhang/Documents/Website/michaelzhang6.github.io/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map