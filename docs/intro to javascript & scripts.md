# Intro to Javascript & Scripts
## Javascript
- pillar of web design
- based on ECMA scripting langauge
    - ES2018 latest
- want to be consistent in how code looks
    - styleguides
    - consistency in naming of variables
    - <b> NAMES SHOULD BE MEANINGFUL </b>
- white space
    - indents, spaces between
    - browser ignores
    - for you to make it more readiable
    - be consistent!
- <b> RESERVE WORDS FOR JAVASCRIPT </b>
    - words for functions etc that should not be variable names
- example: java tells machine to make decision about greeting
    - variable
        - const today = new Date ();
        - const currenthour = today.getHours();
        - var greeting = 'Welcome!';
    - if statement
        - if (currenthour > 18) {
            greeting = 'Good Evening!';
        } else if (currenthour > 12) {
            greeting = 'Good Afternoon!';
        }
---
## Writing a Script
1. define the goal
2. design the script
3. code each step
- flowchart vibe
- break steps into smallest detail
---
## Integrating Javascript into HTML
- script tag
    - < script src="source">< /script>
    - benefit: automatically updates
- place script on the page
    - < script> add script between </ script>
- browser renders HTML top down left to right
    - will render java in order it hits
    - decide where on your page you want java to begin to render

