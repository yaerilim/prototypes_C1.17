//MySQL Basics
app.controller('mysqlBasicsController', function() {
    this.title = ['MySQL Basics', 'MySQL Basics'];
    this.description = "<p>This prototype will introduce you to creating some basic SQL statements and creating tables using phpMyAdmin</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'mysql_basics';
    this.protoId = 33;

    this.links = {
        Presentation: {
            'Intro to Databases': 'https://docs.google.com/presentation/d/1g91Zuyyx9w8ZKJgBFv88C4aTlXUhKjbtPdD-k-EQpC8/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'MySQL PhpMyAdmin': 'https://docs.google.com/presentation/d/1UksvgIn8wmBpkVMp_e5PtUPDkF976-yA-JmiM8gCdvE/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Intro to Databases': 'https://www.youtube.com/watch?v=YQ2AenC--H4&feature=youtu.be',
            'MySQL PhpMyAdmin': 'https://www.youtube.com/watch?v=MB7qtR3Dbgg&feature=youtu.be'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "MySQL Basics",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li><p>The following file is included in the <code>mysql_basics</code> folder</p><ol class='nested-1'><li><code>mysql_queries.sql</code></li></ol></li><li>Place all your queries in the <code>mysql_queries.sql</code> file</li></ol>"
        },
        'Feature Set 1 - MySQL Basics': {
            html: "<ol class='left-border'><li class='clean-list'><h5>Do all of this in phpMyAdmin</h5></li><li class='clean-list'><h5>Make sure to check your database's contents between each operation</h5></li><li class='clean-list'><h5>Put all of your answer SQL statements into <code>mysql_queries.sql</code></h5></li><li value='1'>Using <b><code>SELECT</code></b>, find one user from your user table by username<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button></li><li id='hint1' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">SELECT</span> <span class=\"pl-k\">*</span> <span class=\"pl-k\">FROM</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">WHERE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Juan<span class=\"pl-pds\">'</span></span></pre></div></li></ul></li><li>Using <b><code>UPDATE</code></b>, change one user's email from your user table. Update only the user that you had previously selected above<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>View Hint</button></li><li id='hint2' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">UPDATE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">SET</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>email<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>myawesomeemail<span class=\"pl-pds\">'</span></span> <span class=\"pl-k\">WHERE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Juan<span class=\"pl-pds\">'</span></span></pre></div></li></ul></li><li>Using <b><code>INSERT</code></b>, add one new user to your user table<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>View Hint</button></li><li id='hint3' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">INSERT INTO</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">SET</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Mandy<span class=\"pl-pds\">'</span></span>, <span class=\"pl-s\"><span class=\"pl-pds\">`</span>email<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>greatemail@email.com<span class=\"pl-pds\">'</span></span>, <span class=\"pl-s\"><span class=\"pl-pds\">`</span>password<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span>sha1(<span class=\"pl-s\"><span class=\"pl-pds\">'</span>thisisagreatpassword<span class=\"pl-pds\">'</span></span>)</pre></div></li></ul></li><li>Using <b><code>DELETE</code></b>, delete the user you just create<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>View Hint</button></li><li id='hint4' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">DELETE</span> <span class=\"pl-k\">FROM</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">WHERE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Mandy<span class=\"pl-pds\">'</span></span></pre></div></li></ul></li></ol>"
        },
        'Feature Set 2 - Make a Table': {
            html: "<ol class='left-border'><li>Create a table, <code>todo_items</code>, with the following fields:<ol class='nested-1'><li><b>id</b>: int 11</li><li><b>title</b>: varchar 50</li><li><b>details</b>: varchar 500</li><li><b>timestamp</b>: int 11</li><li><b>user_id:</b> int 11</li></ol></li><li>Inside <code>todo_items</code>, in phpMyAdmin, manually do the following:<ol class='nested-1'><li>create 10 todo items</li></ol></li><li>Inside <code>todo_items</code> create SQL statements to do the following:<ol class='nested-1'><li>Select all todo_items made by 1 user of your choice</li><li>Insert a new todo item into the table by that same user</li><li>Delete a todo item by that user</li><li>Update a todo item by that user with data of your choice</li><li>Perform a select to get all information from `users` by using the user's id</li><li>Copy all 5 SQL statements into <code>mysql_queries.sql</code>.<ul><li>Make sure to clearly label all SQL statements</li></ul></li></ol></li></ol>"
        }
    }

});

//Firebase Intro
app.controller('fbIntroController', function() {
    this.title = ['Firebase Introduction', 'Firebase Intro'];
    this.description = "<p>This prototype will introduce you to Firebase, a backend solution for your website or app. In this prototype we will be editing entries in a Firebase database and deleting entries.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'fb_intro';
    this.protoId = 43;

    this.links = {
        Presentation: {
            'Intro to Databases': 'https://docs.google.com/presentation/d/1g91Zuyyx9w8ZKJgBFv88C4aTlXUhKjbtPdD-k-EQpC8/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Firebase Intro': 'https://docs.google.com/presentation/d/1BchTvPKiJpol8ooIBGCwIaKKJdlVOfxTw-L5kTZ4uO0/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Intro to Databases': 'https://www.youtube.com/watch?v=YQ2AenC--H4&feature=youtu.be',
            'Firebase Intro': 'https://www.youtube.com/watch?v=DtT5dkkXD2o'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "Firebase Intro",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Included files<ol class='nested-1'><li><code>index.html</code></li><li><code>script.js</code></li></ol></li></ol>"
        },
        "Feature Set 1 - Excuse me...That's not how my name is spelt.": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>script.js</code> complete the following:</b></li><li value='1'>Create a function that takes an argument of the Firebase reference of the student to be edited when the <code>#confirm-edit</code> button is clicked<ol class='nested-1'><li>This function should take in a Firebase reference to a particular student (<i>The one that was clicked</i>).</li><li>The function should update the Firebase representation of the student with the new values from the modal inputs</li></ol></li><li>In the click handler assigned to the <code>#confirm-edit</code> button, send the correct variable to the function that you just created.</li></ol>"
        },
        "Feature Set 2 - Deleting students": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>script.js</code> add delete functionality:</b></li><li value='1'>We have provided you with a delegated click event handler that is automatically attached to any student row that is created. If you do not understand how that was done please bring it to an instructors attention.</li><li>On <b>line 115</b> in <code>script.js</code> use the correct Firebase method to successfully remove the student</li></ol>"
        }
    }
});