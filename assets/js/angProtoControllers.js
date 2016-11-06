//Angular Introduction
app.controller('angIntroController', function() {
    this.title = ['AngularJS<br> Introduction', 'Angular Intro'];
    this.description = "<p>This prototype is intended to be a gentle introduction to the magic called Angular</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_intro';
    this.protoId = 24;

    this.links = {
        Presentation: {
            'AngularJS Intro': 'https://docs.google.com/presentation/d/1bGUW1yKeWmxUFwioAPElxvA4nyWyoJkJcbkVeyYXE58/pub?start=false&loop=false&delayms=15000'
        },
        Video: {
            'Intro to Frontend Frameworks with AngularJS': 'https://www.youtube.com/watch?v=XiNoxJVmxhY'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS Intro",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included in the <code>ang_intro</code> folder</li><li><strong>DO NOT</strong> Edit this README file</li></ol>"
        },
        'Feature Set 1 - Toe testing Angular': {
            html: "<ol class='left-border'><li>Within the included HTML file:<ul><li>Link to the <a href='https://developers.google.com/speed/libraries/#angularjs' target='_blank'>Angular CDN</a></li><li>ng-app:<ul><li>Correctly include the <code>ng-app</code> directive to the applicable HTML element</li></ul></li><li><code>ng-init</code>:<ul><li>Create a div within the body</li><li>In the opening tag of the div initialize a variable using <code>ng-init</code><ul><li>Name the variable <code>myVar</code></li><li>Set it to any string you like</li></ul></li></ul></li><li><code>expression</code>:<ul><li>Within the div use an Angular <code>expression</code> to display the variable's value in the DOM</li></ul></li></ul></li><li>Run your code<ol><li>Do you see your string displayed on the page as expected?<ol><li><strong>YES</strong> - Continue on to Feature Set 2</li><li><strong>NO</strong> - Return to step 1</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - The water is fine!': {
            html: "<ol class='left-border'><li>Building on the previous feature set:<ul><li><code>ng-init:</code><ul><li>Create a new div below the previous one</li><li>Create an array called <code>carArray</code> using <code>ng-init</code> inside the opening tag of your new div</li><li>The carArray should contain at least four car names as strings</li></ul></li><li><code>ng-repeat:</code><ul><li>Within your div create a <code>&lt;ul&gt;</code> that contains <strong>one</strong> <code>&lt;li&gt;</code></li><li>In the opening tag of the <code>&lt;li&gt;</code> add the <code>ng-repeat</code> directive with the proper values to loop through your <code>carArray</code></li><li>Add an expression between the opening and closing <code>&lt;li&gt;</code> tags to display the data from your <code>carsArray</code></li></ul></li></ul></li><li>Run your code<ol><li>Does your <code>carsArray</code> display properly as an unordered list on your page?<ol><li><strong>YES</strong> - Continue on to Feature Set 3</li><li><strong>NO</strong> - Return to step 1</li></ol></li></ol></li></ol>"
        },
        'Feature Set 3 - Dude... its freakin magic?!': {
            html: "<ol class='left-border'><li>Building on the previous feature sets:<ul><li>ng-model:<ul><li>Create a final div after the other two</li><li>Create an input of type text inside the input<ul><li>Use the <code>ng-model</code> directive to bind a variable called <code>myInput</code> to the input</li></ul></li><li>Create a <code>&lt;p&gt;</code> tag bellow the input<ul><li>Create an expression within the <code>p</code> tag that displays the value of the <code>myInput</code> variable</li></ul></li></ul></li></ul></li><li>Run your code<ol><li>As you type in the input do you see its value displayed below the input?<ol><li><strong>YES</strong> - You've made it!</li><li><strong>NO</strong> - Return to step 1</li></ol></li></ol></li></ol>"
        }
    }
});

//Angular DOM & Events
app.controller('angDomEventsController', function() {
    this.title = ['AngularJS<br> DOM and Events', 'Angular Dom and Events'];
    this.description = "<p>Building from the intro to Angular prototype, we will be adding to your Angular toolbag with directives that can show, hide and disable elements as well as adding click handlers.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_dom_events';
    this.protoId = 25;

    this.links = {
        Presentation: {
            'AngularJS DOM and Events': 'https://docs.google.com/presentation/d/1VwXNxsIV80PS0gYy_f9dIRbecTtCQwH0NcvY1NYCYYY/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'AngularJS DOM and Events': 'https://www.youtube.com/watch?v=yOI7qjF0ksY&feature=youtu.be'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS DOM and Events",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included inside the <code>ang_dom_and_events</code> folder</li><li>Add the <a href='https://developers.google.com/speed/libraries/#angularjs' target='_blank'>Angular CDN</a> to the top of the <code>index.html</code> file</li></ol>"
        },
        'Feature Set 1 - ng-disabled': {
            html: "<ol class='left-border'><li>Add the <code>ng-app</code> directive to the opening body tag</li><li>Create a single div inside your body tag<ol class='nested-1'><li>In the opening div tag initialize a variable and set it to <code>true</code></li></ol></li><li>Within the div tags create a button (it can say whatever you want)<ol class='nested-1'><li>Add the <code>ng-disabled</code> directive to your opening button tag and set it equal to the variable you initialized above</li></ol></li><li>Run your code<ol class='nested-1'><li>Can you click your button?<ol class='nested-2'><li><strong>YES</strong> - Return to step one</li><li><strong>NO</strong> - Continue to Feature Set 2</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Toggle that Boolean': {
            html: "<ol class='left-border'><li>Add an input below your button<ol class='nested-1'><li>Set the type to <code>checkbox</code></li><li>Bind your variable from <b>Feature Set 1</b> to the checkbox</li></ol></li><li>Run your code<ol class='nested-1'><li>When you uncheck your checkbox can you now click on the button?<ol class='nested-2'><li><strong>YES</strong> - Continue to Feature Set 3</li><li><strong>NO</strong> - Return to step one</li></ol></li></ol></li></ol>"
        },
        'Feature Set 3 - Should I Show or Should I Hide': {
            html: "<ol class='left-border'><li>Add two spans above your button<ol class='nested-1'><li>One span should say the button is <b>enabled</b></li><li>The other should say the button is disabled</li><li>Using <code>ng-show</code> and/or <code>ng-hide</code> only display one span at a time depending on the state of the button</li><li><em>Hint:</em> Utilize your variable from before</li></ol></li><li>Run your code<ol class='nested-1'><li>Does the proper message display depending rather the button is enabled or disabled?<ol class='nested-2'><li><strong>YES</strong> - Continue to Feature Set 4</li><li><strong>NO</strong> - Return to step one</li></ol></li></ol></li></ol>"
        },
        'Feature Set 4 - Count the <s>Clicks</s> ng-clicks': {
            html: "<ol class='left-border'><li>In the opening tag of your original div<ol class='nested-1'><li>Initialize an additional variable named <code>counter</code><ol class='nested-2'><li>Set it equal to 0</li></ol></li></ol></li><li>In the opening tag of your button<ol class='nested-1'><li>Add an Angular click handler<ol class='nested-2'><li>When the button is clicked 1 should be added to the value of <code>counter</code></li></ol></li></ol></li><li>At the bottom of your div<ol class='nested-1'><li>Add a <code>&lt;p&gt;</code> tag<ol class='nested-2'><li>Within the <code>&lt;p&gt;</code> tag add an Angular expression that displays the value of the <code>counter</code> variable</li><li>Add some text inside the <code>&lt;p&gt;</code> tag that gives context to the counter variable<ol><li><b>Hint</b>: \"The button has been clicked 4 times\"</li></ol></li></ol></li></ol></li><li>Run your code<ol class='nested-1'><li>Does the original disable functionality still work?<ol class='nested-2'><li><strong>YES</strong> - Move to next question</li><li><strong>NO</strong> - Revisit previous Feature Sets to fix</li></ol></li><li>Does the counter variable display and increment properly with each button click?<ol class='nested-2'><li><strong>YES</strong> - You are done</li><li><strong>NO</strong> - Return to step 1</li></ol></li></ol></li></ol> "
        }
    }

});

//Angular Controllers
app.controller('angControllersController', function() {
    this.title = ['AngularJS<br> Controllers', 'Angular Controllers'];
    this.description = "<p>Building from the previous Angular prototypes, this prototype will introduce controllers allowing you much more control over your application.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_controllers';
    this.protoId = 26;

    this.links = {
        Presentation: {
            'AngularJS Controllers': 'https://docs.google.com/presentation/d/12Q8YLu1YhtdaJN43wsTnSSslVVbVQiKxXJE5x9LLYuE/pub?start=false&loop=false&delayms=15000'
        },
        Video: {
            'AngularJS Controllers': 'https://www.youtube.com/watch?v=JBH9ncbvhh8'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS Controllers",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file is included in the <code>ang_controllers</code> folder</li><li>Add the <a href='https://developers.google.com/speed/libraries/#angularjs' target='_blank'>Angular CDN</a> to the head of the index file</li></ol>"
        },
        'Feature Set 1 - Adding Control': {
            html: "<ol class='left-border'><li>Add a <code>ng-app</code> directive to your body tag<ol class='nested-1'><li>Give your app a name</li><li>For the examples <code>myApp</code> will be the name of the application</li></ol></li><li>Add <code>&lt;script&gt;</code> tags at the bottom of the body<ol class='nested-1'><li>Create a module and assign it to a variable<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint0'aria-expanded='false' aria-controls='hint0'>View Hint</button></li><li id='hint0' class='clean-list collapse'><code>var app = angular.module(\"myApp\", []);</code></li></ul></li><li>Create the controller<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1'aria-expanded='false' aria-controls='hint1'>View Hint</button></li><li id='hint1' class='clean-list collapse'><code>app.controller(\"formController\",function(){...});</code></li></ul></li><li>Within the controller declare an empty form object<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2'aria-expanded='false' aria-controls='hint2'>View Hint</button></li><li id='hint2' class='clean-list collapse'><code>this.form = {};</code></li></ul></li><li>Declare an empty array to hold the form objects in the future<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3'aria-expanded='false' aria-controls='hint3'>View Hint</button></li><li id='hint3' class='clean-list collapse'><code>this.formArray = [];</code><br></li></ul></li></ol></li><li>Add a <code>&lt;div&gt;</code> within the body<ol class='nested-1'><li>Add a <code>ng-controller</code> directive to your div<ul><li>For the examples <code>formController as fc</code> will be used for the controller</li></ul></li><li>Within the div add three inputs and a textarea<ol class='nested-2'><li>One input for first name<ul><li>Add <code>fc.form.fName</code> to the first name input field so that the value inserted, binds to the object property</li></ul></li><li>One input for last name<ul><li>Add <code>fc.form.lName</code> to the last name input field so that the value inserted, binds to the object property</li></ul></li><li>one input for an email<ul><li>Add <code>fc.form.email</code> to the email input field so that the value inserted binds to the object property</li></ul></li><li>One textarea for comments<ul><li>Add <code>fc.form.comments</code> to the comments textarea so that the value inserted, binds to the object property<br></li></ul></li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Make it functional': {
            html: "<ol class='left-border'><li>In the script tags do the following:<ul><li>Add another method that adds the form object to the formArray<ul><li>After you have added the form object to the <code>formArray</code> clear the form object<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse'data-target='#hint4' aria-expanded='false' aria-controls='hint4'>View Hint</button></li><li id='hint4' class='clean-list collapse'><code>this.form = {};</code></li></ul></li></ul></li></ul></li><li>WIthin in the HTML add the following:<ol class='nested-1'><li>Add a button after the textarea that calls the add function when clicked</li><li>Below the button create a table that has three columns: Full Name, Email, and Comments<ul><li>For the full name use concatenation to display the first and last names in the same cell</li></ul></li><li>Use <code>ng-repeat</code> to loop through the <code>formArray</code> and display the data in the table</li></ol></li><li>Run your code<ol class='nested-1'><li>Are you able to add data to the <code>formArray</code> and have the table update with the added info?<ol class='nested-2'><li><strong>YES</strong> - Continue on to Feature Set 3</li><li><strong>NO</strong> - Go back through the steps, make sure you properly binded the inputs and that your function is written properly</li></ol></li></ol></li></ol>"
        },
        'Feature Set 3 - Keeping it Short': {
            html: "<ol class='left-border'><li>Within the script tag do the following:<ol class='nested-1'><li>Within the <code>formController</code><ol class='nested-2'><li>Declare a variable to set a max length to the comment section<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse'data-target='#hint5' aria-expanded='false' aria-controls='hint5'>View Hint</button></li><li id='hint5' class='clean-list collapse'><code>this.maxLength = 25;</code></li></ul></li><li>Create a method that returns the total number of characters still available for the comment<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse'data-target='#hint6' aria-expanded='false' aria-controls='hint6'>View Hint</button></li><li id='hint6' class='clean-list collapse'><b>subtract the length of the comments string from the maxLangth variable</b></li></ul></li><li>Add a method to your controller that returns <code>true</code> if remaining characters &lt;= 0 and <code>false</code> for everything else</li></ol></li></ol></li><li>Within the HTML<ol class='nested-1'><li>Add a <code>&lt;p&gt;</code> tag that will display the amount of remaining characters for the commentsection<ul><li><strong>Example Output</strong>: Characters Remaining: 15</li></ul></li><li>Use your new method to disable the textarea if the max amount of characters have been used</li><li>Make sure to reset the textarea after the form object has been added to the infoArray</li></ol></li><li>Run your code<ol class='nested-1'><li>Does the comments textarea become disabled when you reach the character limit as well as retain thefunctionality from the previous feature sets?<ol class='nested-2'><li><strong>YES</strong> - Continue on to Feature Set 4</li><li><strong>NO</strong> - Revisit the previous steps to gain the proper functionality</li></ol></li></ol></li></ol>"
        },
        'Feature Set 4 - Multiple Controllers': {
            html: "<ol class='left-border'><li>In the script tag create the JavaScript to create a new controller <code>tableController</code> and update the<code>formController</code><ol class='nested-1'><li>in the function keyword pass in the <code>$scope</code> parameter, also add $scope to the Formcontroller as well<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint7'aria-expanded='false' aria-controls='hint7'>View Hint</button></li><li id='hint7' class='clean-list collapse'><code>app.controller(\"formController\",function($scope){...});</code></li></ul></li><li>Within your <code>formController</code> change the <code>formArray</code> from using <code>this</code>to use <code>$scope</code><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint8'aria-expanded='false' aria-controls='hint8'>View Hint</button></li><li id='hint8' class='clean-list collapse'><code>$scope.formArray = [];</code></li><li>Make sure to update everywhere you refer to the <code>formArray</code></li></ul></li><li>Add a method to the <code>tableController</code> that takes in one parameter<ul><li>The parameter should be the index of a table row</li><li>Have the method remove the corresponding object from the <code>formArray</code></li></ul></li><li>Add another method to the <code>tableController</code><ul><li>Add a method that will return the total number of entries in the table</li></ul></li></ol></li><li>Make the following updates to the HTML<ol class='nested-1'><li>Wrap the table within a <code>&lt;div&gt;</code><ul><li>Give the div a new controller called <code>tableController as tc</code></li></ul></li><li>Update the HTML to reflect the changes to the <code>formArray</code><ol class='nested-2'><li>In the <code>ng-repeat</code> directive you can now just refer to the <code>formArray</code>directly<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse'data-target='#hint9' aria-expanded='false' aria-controls='hint9'>View Hint</button></li><li id='hint9' class='clean-list collapse'><code>ng-repeat='info in formArray'</code></li></ul></li><li>Add an additional column to your table to hold a delete button</li><li>Add a button to each entry<ul><li>Have the buttons call the delete method from the <code>tableController</code></li><li>Remember to pass in <code>$index</code></li></ul></li><li>Add an additional row to the table that will show a live update of the form data as it is entered</li></ol></li><li>At the top of your table div add a <code>&lt;p&gt;</code> tag<ol class='nested-2'><li>It should display the total number of entries in the table<ol><li><strong>Example Output</strong>: Total Entries: 4</li><li>Utilize the method that was created in the <code>tableController</code></li></ol></li></ol></li></ol></li></ol>"
        }
    }
});

//Angular Routes
app.controller('angRoutesController', function() {
    this.title = ['AngularJS Routes', 'Angular Routes'];
    this.description = "<p>This prototype will build from the previous Angular prototypes and introduce you to Routes. Routes will enable you to create dynamic one page apps/sites with unique URLs for different views</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_routes';
    this.protoId = 27;

    this.links = {
        Presentation: {
            'AngularJS Routing': 'https://docs.google.com/presentation/d/15kUwUIOJFeLjq4Rut21s9nJAfmhgPlN8SYsn54H8r_U/pub?start=false&loop=false&delayms=15000&slide=id.p'
        },
        Video: {
            'AngularJS Routing': 'https://www.youtube.com/watch?v=FW8aweNTYbk'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS Routes",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>included:<ul><li>script.js</li><li>index.html</li><li>pages folder<ul><li>home.html</li><li>about.html</li><li>contact.html</li></ul></li></ul></li><li>You will need to include angular and angular-route</li><li>Also included is bootstrap and fontawesome</li></ol>"
        },
        "Feature Set 1 - \"So many activities!\" - <a href='https://www.youtube.com/watch?v=moR_v1lmJL4&feature=youtu.be' target='_blank'>Will Ferrell: Step Brothers</a>": {
            html: "<ol class='left-border'><li>HTML<ul><li>index.html</li><li>include required angular scripts via CDN</li></ul></li><li>Module<ul><li>script.js<br><ul><li>create an angular application called routeApp</li></ul></li></ul></li><li>Controller<ul><li>Place a controller on routeApp and name it 'routeCtrl' and give it a callback function that has $scope as a parameter<ul><li>In the controller, assign a message property to $scope and give it a string of \"lorem ipsum\"</li></ul></li></ul></li><li>HTML<ul><li>index.html<ul><li>Initialize the Angular application and add associated Angular directives<ul><li>Display the message variable that was defined within the route controller with an Angular expression</li></ul></li></ul></li></ul></li></ol>"
        },
        "Feature Set 2 - \"more cowbell? = false; more Angular injections = true;\"": {
            html: "<ol class='left-border'><li>HTML<ul><li>index.html</li><li>Add a div with the directive ng-view in the #main div</li></ul></li><li>Javascript Angular.config<ul><li>script.js</li><li>Add the dependency ngRoute into the routeApp</li><li>configure routes:<ul><li>Call the config method on routeApp<ul><li>The config method should have a callback function that takes $routeProvider as an argument</li></ul></li><li>Call the when method on $routeProvider three times<ul><li>The when method expects 2 arguments ('path', route) path is a string and route is an object<ul><li>the path argument should should be a string and is the url<ul><li>if the path was home.html it should be '/home'</li></ul></li><li>Assign values to the templateUrl and controller properties of the route object<ul><li>templateUrl should look like - template: 'pages/home.html'</li><li>controller should look like - controller: 'mainCtrl'</li></ul></li></ul></li></ul></li></ul></li></ul></li><li>Javascript<ul><li>script.js<ul><li>for each route create controllers</li><li>the controller should take $scope as an argument<ul><li>assign a different message for each controller</li></ul></li></ul></li></ul></li><li>HTML<ul><li>Within the pages folder, add the message from the controllers to the associated HTML files</li></ul></li></ol>"
        }
    }
});

//Angular Service Intro
app.controller('angServiceIntroController', function() {
    this.title = ['AngularJS <br> Services Introduction', 'Angular Services Intro'];
    this.description = "<p>This prototype will introduce you to services in Angular, for this prototype we will be utilizing some pre-existing services that are included with Angular.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_servIntro';
    this.protoId = 28;

    this.links = {
        Presentation: {
            'AngularJS Service Intro': 'https://docs.google.com/presentation/d/1WctpsivgTMrPCl9yxwycQ8KOoX5TZmjZW9lvJqiv_ak/pub?start=false&loop=false&delayms=15000&slide=id.p'
        },
        Video: {
            'AngularJS Service Intro': 'https://www.youtube.com/watch?v=JVatlUUVu7w'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS Services Intro",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> and <code>script.js</code> file has been included in the <code>ang_services_intro</code> folder</li><li>Using $http and $log create a prototype that takes in a users input and searches iTunes then displays the results.</li></ol>"
        },
        'Feature Set 1 - Getting Started': {
            html: "<ol class='left-border'><li>Do the following in the <code>index.html</code> file<ol class='nested-1'><li>Add the necessary Angular directives<ol class='nested-2'><li>Declare your app</li><li>Create a div that has a controller</li></ol></li><li>Create the necessary HTML to add an input field and a button within your div</li></ol></li><li>Do the following in the <code>script.js</code> file<ol class='nested-1'><li>Define your controller</li><li>Create a function that constructs the proper URL based on the users input<ol class='nested-2'><li><a href='https://itunes.apple.com/search?term=%5BARTIST+NAME%5D&amp;callback=JSON_CALLBACK'>https://itunes.apple.com/search?term=[ARTIST+NAME]&amp;callback=JSON_CALLBACK</a></li><li>[ARTIST+NAME] Should be replaced with the users input</li></ol></li><li>Create another function that uses the constructed URL to retrieve data from iTunes<ol class='nested-2'><li>Use $log to log out the data upon a successful call</li><li>Log out an error message upon failure</li></ol></li><li>Have your button call the function that retrieves the data from iTunes</li></ol></li><li>Run Your Code<ol class='nested-1'><li>Are you able to view the retrieved data in the console after the button is clicked?<ol class='nested-2'><li><strong>YES</strong> - Move onto Feature Set 2</li><li><strong>NO</strong> - Go back through the steps and ask for help if necessary</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Making this look good': {
            html: "<ol class='left-border'><li>In the <code>script.js</code> file do the following<ol class='nested-1'><li>In your function that calls the iTune API asign the result to a variable that can be accessed in the HTML</li></ol></li><li>In the <code>index.html</code> file do the following<ol class='nested-1'><li>Utilizing the data retrieved from iTunes display the data to the user in a neat organized way<ol class='nested-2'><li>You can use a table or any other means you wish</li></ol></li></ol></li><li>Run your code<ol class='nested-1'><li>Are you able to search iTunes based on a users input and display the results in a organized fashion?<ol class='nested-2'><li><strong>YES</strong> - Congrats you are done!</li><li><strong>NO</strong> - Review the steps again and ask for help if necessary</li></ol></li></ol></li></ol>"
        }
    }
});

//Angular Service Creation
app.controller('angServiceCreationController', function() {
    this.title = ['AngularJS <br> Services Creation', 'Angular Services Creation'];
    this.description = "<p>Building from the <b>Services Intro</b> prototype this prototype will give you the opportunity to create your own service using Provider</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_servCreation';
    this.protoId = 29;

    this.links = {
        Presentation: {
            'AngularJS Service Creation': 'https://docs.google.com/presentation/d/1yoETsQHlyf6UVLROgcPyjAZnRA0qv-MOX92GwVsdiL8/pub?start=false&loop=false&delayms=15000&slide=id.p'
        },
        Video: {
            'AngularJS Service Creation': 'https://www.youtube.com/watch?v=sbsackBcGmA'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS Services Creation",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file and a <code>script.js</code> file have been included in the <code>ang_services_creation</code> folder </li><li>The <code>index.html</code> file is complete and should not need altered (unless you want to add bootstrap or styling)</li><li>The <code>script.js</code> file has been started and already contains some code that you will need to complete this prototype</li></ol>"
        },
        'Feature Set 1 - Time to provide': {
            html: '<ol class="left-border"><li>In the <code>script.js</code> file do the following</li><li>Create three variables at the beginning of your provider code<ol class="nested-1"><li>One to hold <code>this</code></li><li>One to hold your <code>API Key</code> set to: \"\"</li><li>One to hold the <code>API URL</code> set to: \"\"</li></ol></li><li>In the <code>$get</code> method within the provider inject in the needed services<ol class="nested-1"><li><code>$http</code></li><li><code>$q</code></li><li><code>$log</code> (optional)</li></ol></li><li>Still working within the <code>$get</code> method in the provider, have it <code>return</code> an object (<i>For now just leave the object empty, we will be adding to it in the next steps.</i>)<ul><li><button class="btn btn-danger btn-xs" type="button" data-toggle="collapse" data-target="#hint1" aria-expanded="false" aria-controls="hint1">View Hint</button></li><li id="hint1" class="clean-list collapse"><i>Hint:</i><div class="highlight highlight-source-js"><pre><span class="pl-v">this</span>.<span class="pl-en">$get</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){<br>&nbsp;&nbsp;<span class="pl-k">return</span> {};<br>}</pre></div></li></ul></li><li>In the object you just created add a method called <code>call_api</code> (<i>This method will call the LearningFuze SGT API</i>)<ul><li><button class="btn btn-danger btn-xs" type="button" data-toggle="collapse" data-target="#hint2" aria-expanded="false" aria-controls="hint2">View Hint</button></li><li id="hint2" class="clean-list collapse"><i>Hint:</i><div class="highlight highlight-source-js"><pre><span class="pl-v">this</span>.<span class="pl-en">$get</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">$http</span>, <span class="pl-smi">$q</span>, <span class="pl-smi">$log</span>){<br>&nbsp;&nbsp;<span class="pl-k">return</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">call_api</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){<br><br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;};<br>}</pre></div></li></ul><ol class="nested-1"><li>In the <code>call_api</code> method do the following:<ol class="nested-2"><li>Create a variable for the data you wish to send to the API<ol><li>The only data that needs to be sent for this API is your <b>API Key</b></li><li>The data needs to be a string in the following format<ol class="nested-1"><li><code>\"key=value\"</code></li><li>The LearningFuze API looks for a <i>key</i> named: <code>api_key</code></li><li>The <i>value</i> of <code>api_key</code> should be set to the variable that you created at the beginning of your provider (<i>The one that holds your API Key</i>)</li><li>Overall your string should look like: <div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>api_key=<span class="pl-pds">"</span></span> <span class="pl-k">+</span> api_key;</pre></div></li><li>Also there is a jQuery method that will convert an object to a string formatted in the above way (<i>This is an alternative to the above steps, and not required</i>)<ol class="nested-2"><li>As an alternative to creating a string on your own you can have jQuery do it for you</li><li>Create an object that contains the data you want to convert. In this case there will only be one property: <code>api_key</code></li><li>Then use <code>$.param(object);</code> to convert your object to a string</li><li>Example: <div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> dataObj <span class="pl-k">=</span> {<br>&nbsp;&nbsp;<span class="pl-s"><span class="pl-pds">"</span>api_key<span class="pl-pds">"</span></span><span class="pl-k">:</span> api_key<br>};<br><br><span class="pl-k">var</span> dataStr <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">param</span>(dataObj);</pre></div></li></ol></li></ol></li></ol></li><li>Create a variable to create a promise<ol><li><div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> defer <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();</pre></div></li></ol></li><li>Create a <code>$http</code> request<ol><li>Make sure to include the following information<ol class="nested-1"><li><b>url</b> = the api\'s url<ol class="nested-2"><li>This should be set to the variable from the beginning of the provider (<i>The one that holds the API URL</i>)</li></ol></li><li><b>method</b> = should be POST</li><li><b>data</b> = should be set to the data you created above</li><li><b>headers</b> = {\'Content-Type\': \'application/x-www-form-urlencoded\'}<ol class="nested-2"><li><strong>FYI:</strong> This changes how angular sends the data, to a PHP friendly format</li></ol></li></ol></li><li>Upon success use <code>defer.resolve(data)</code> to catch the received data<ol class="nested-1"><li>You may want to <code>$log</code> an info message here of the data received</li></ol></li><li>Upon error use <code>defer.reject(\"Error msg here\")</code> to notify the user of errors<ol class="nested-1"><li>You may want to <code>$log</code> an error message here as well</li></ol></li></ol></li></ol></li><li><code>return</code> your <code>defer</code> object using <code>defer.promise;</code></li><li>Here is a completed example, only view if you are completely stuck or if you are done with the above steps and would like to compare your code<ul><li><button class="btn btn-danger btn-xs" type="button" data-toggle="collapse" data-target="#hint3" aria-expanded="false" aria-controls="hint3">View Example</button></li><li id="hint3" class="clean-list collapse"><i>Example:</i><div class="highlight highlight-source-js"><pre><span class="pl-v">this</span>.<span class="pl-en">$get</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">$http</span>, <span class="pl-smi">$q</span>, <span class="pl-smi">$log</span>){<br>&nbsp;&nbsp;<span class="pl-k">return</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">call_api</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>api_key=<span class="pl-pds">"</span></span> <span class="pl-k">+</span> api_key;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> defer <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">$http</span>({<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url<span class="pl-k">:</span> api_url,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>POST<span class="pl-pds">"</span></span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data<span class="pl-k">:</span> data,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers<span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">"</span>Content-Type<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>application/x-www-form-urlencoded<span class="pl-pds">"</span></span>}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}).<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">resp</span>){<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">$log</span>.<span class="pl-en">info</span>(<span class="pl-s"><span class="pl-pds">"</span>Data from API call: <span class="pl-pds">"</span></span>, resp);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">defer</span>.<span class="pl-en">resolve</span>(resp);<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}, <span class="pl-k">function</span>(<span class="pl-smi">resp</span>){<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">$log</span>.<span class="pl-en">error</span>(<span class="pl-s"><span class="pl-pds">"</span>HTTP request failed: <span class="pl-pds">"</span></span>, resp);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">defer</span>.<span class="pl-en">reject</span>(<span class="pl-s"><span class="pl-pds">"</span>HTTP request failed<span class="pl-pds">"</span></span>);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-smi">defer</span>.<span class="pl-smi">promise</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;};<br>}</pre></div></li></ul></li><li><b>NOTE:</b> <code>$http</code> returns a <code>promise</code> by default. So it is possible to write this section different without using defer.</li></ol></li></ol>'
        },
        'Feature Set 2 - Config your provider': {
            html: "<ol class='left-border'><li>Use <code>app.config()</code> to set your <code>api_key</code> and the <code>api_url</code><ol class='nested-1'><li>Remember to add the word <code>Provider</code> to your service name<ol class='nested-2'><li><strong>EX:</strong> <code>app.config(function(sgtDataProvider){...});</code></li></ol></li><li>Inside the config method<ol class='nested-2'><li>Set the api_key to your api_key for the sgt</li><li>Set the api_url to <code>http://s-apis.learningfuze.com/sgt/get</code></li></ol></li></ol></li></ol>"
        },
        'Feature Set 3 - Add the final control': {
            html: "<ol class='left-border'><li>Add the following code to the <code>ioController</code><ol class='nested-1'><li>Inject your new service into the controller and any other service you may need</li><li>Create a variable to hold <code>this</code><ol class='nested-2'><li>Make sure you name it different than what you used in your provider code<ol><li><strong>IE:</strong> Don't use <code>self</code> in both places</li></ol></li></ol></li><li>Add an empty data object to your controller, make sure to call it <b><code>data</code></b></li><li>Add a function called <code>getData</code> to your controller to call the SGT API<ol class='nested-2'><li>Call your service to call the API<ol><li>Remember to use <code>.then()</code></li><li><code>then</code> takes two parameters<ol class='nested-1'><li>The first is a function that will be executed on <span class='label label-success'>success</span><ol class='nested-2'><li>Set the data returned to the controller's data object</li></ol></li><li>The second is a function that will be executed on <span class='label label-danger'>failure</span><ol class='nested-2'><li>Log an error to the console and/or notify the user of the failure</li></ol></li></ol></li></ol></li></ol></li></ol></li><li>Run your code<ol class='nested-1'><li>After you click the <code>Get Students</code> button, do you see the student data?<ol class='nested-2'><li><strong>YES</strong> - Congrats! You made it!</li><li><strong>NO</strong> - Review the steps to try and find any issues with your code, if necessary ask for help.</li></ol></li></ol></li></ol>"
        }
    }

});

//AngularJS Directive Creation
app.controller('angDirectiveCreationController', function() {
    this.title = ['AngularJS <br> Directive Creation', 'Angular Directive Creation'];
    this.description = "<p>This prototype will build off of the previous Angular prototypes and introduce you to building custom directives</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'ang_direcCreation';
    this.protoId = 30;

    this.links = {
        Presentation: {
            'AngularJS Directive Creation': 'https://docs.google.com/presentation/d/1KbEfzhGO-Gj9bDaqwAIlwGCbXymO6J0FYWvCfmx2wdc/pub?start=false&loop=false&delayms=15000&slide=id.p',
            'AngularJS Directive Creation Advanced': 'https://docs.google.com/presentation/d/1tPJtC-I8kbdmMTmWOnwmnwJPKTUZs1blVdRjivt5cQw/pub?start=false&loop=false&delayms=15000&slide=id.p'
        },
        Video: {
            'AngularJS Directive Creation': 'https://www.youtube.com/watch?v=sWmzMmbV_ik',
            'AngularJS Directive Creation Advanced': 'https://www.youtube.com/watch?v=eiwGlxrAL_g'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "AngularJS Directive Creation",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>The following files are included in the <code>ang_directives_creation</code> folder<ol class='nested-1'><li><code>example-design.png</code><ul><li>An image file to display a posible layout for the Tic-Tac-Toe game</li></ul></li><li><code>game-board-template.html</code><ul><li>File to hold the HTML for the game board</li></ul></li><li><code>index.html</code><ul><li>The main file that will display the Tic-Tac-Toe game</li></ul></li><li><code>info-bar-template.html</code><ul><li>File to hold the HTML for the status bar</li></ul></li><li><code>style.css</code><ul><li>Holds the minimum styling for the Tic-Tac-Toe game</li></ul></li></ol></li></ol>"
        },
        'Feature Set 1 - Make The Board': {
            html: "<ol class='left-border'><li>In the <code>script.js</code> file do the following:<ol class='nested-1'><li>Create a directive to display the game board<ol class='nested-2'><li>Restrict it to only work as an element</li><li>Use the template loacted in <code>game-board-template.html</code> ... It is empty right now</li><li>Add a controller to your directive<ol><li>Inject the <code>boardServ</code> service into your controller</li><li>Create an array in your controller that will hold all the board data<ol class='nested-1'><li>Call <code>boardServ.buildBoardArr();</code> to populate your array with the appropriate data</li></ol></li></ol></li><li>Create a controller alias for your controller. I used 'gc' for game controller</li></ol></li></ol></li><li>In the <code>game-board-template.html</code> file do the following<ol class='nested-1'><li>Create a div that has the class of <code>board-container</code> and <code>container</code><ol class='nested-2'><li>Within that div do the following:<ol><li>Create a div with the class of row and use <code>ng-repeat</code> to loop through the board data<ol class='nested-1'><li>Within the row div create another div and use <code>ng-repeat</code> to loop through the properties from each object in the array above<ol class='nested-2'><li>Set the following properties on the new div:<ol><li>Set <code>id</code> = to the id property</li><li>set <code>class</code> = to the class property</li><li>set <code>style</code> = to the style property</li></ol></li><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button></li></ol></li></ol></li></ol></li></ol></li></ol></li><li id='hint1' class='clean-list collapse'><div class='highlight highlight-text-html-basic'><pre>&lt;<span class='pl-ent'>div</span> <span class='pl-e'>class</span>=<span class='pl-s'><span class='pl-pds'>\"</span>row<span class='pl-pds'>\"</span></span> <span class='pl-e'>ng-repeat</span>=<span class='pl-s'><span class='pl-pds'>\"</span>board in gc.boardInfo<span class='pl-pds'>\"</span></span>&gt; &lt;<span class='pl-ent'>div</span> <span class='pl-e'>ng-repeat</span>=<span class='pl-s'><span class='pl-pds'>\"</span>info in board<span class='pl-pds'>\"</span></span> <span class='pl-e'>id</span>=<span class='pl-s'><span class='pl-pds'>\"</span>{{ info.id }}<span class='pl-pds'>\"</span></span> <span class='pl-e'>class</span>=<span class='pl-s'><span class='pl-pds'>\"</span>{{info.class}}<span class='pl-pds'>\"</span></span> <span class='pl-e'>style</span>=<span class='pl-s'><span class='pl-pds'>\"</span>{{ info.style }}<span class='pl-pds'>\"</span></span>&gt;&lt;/<span class='pl-ent'>div</span>&gt; &lt;/<span class='pl-ent'>div</span>&gt;</pre></div></li><li value='3'>Add your new directive to the <code>index.html</code> to view the board</li><li>Run your code<ol class='nested-1'><li>Do you see a standard 3x3 Tic-Tac-Toe board displayed?<ol class='nested-2'><li><strong>YES</strong> - Move to feature set 2</li><li><strong>NO</strong> - Re-read the instuctions and ask an instructor if necessary.</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Add Some Info': {
            html: "<ol class='left-border'><li>Using Bootstrap or just plain css:<ol class='nested-1'><li>Create an info 'bar' that displays the games name, a new game button, a reset all button, X wins and O wins<ol class='nested-2'><li>None of this needs to be functional yet</li></ol></li><li>Add the necessary HTML to the <code>info-bar-template.html</code> file</li></ol></li><li>Create a directive that utilizes the <code>info-bar-template.html</code> file</li><li>Add your new directive to the <code>index.html</code> file</li><li>Here is an example of the possible design:<ol><li class='clean-list'><a href='assets/images/prototypes/ang-directive-creation/example-design.png' target='_blank'><img src='assets/images/prototypes/ang-directive-creation/example-design.png' height='400px' style='max-width:100%;'></a></li></ol></li></ol>"
        }
    }

});