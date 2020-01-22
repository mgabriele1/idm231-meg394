# Functions
- let you group code and commands and call a function with several lines of code inside
    - inside code considered a code block
- example:
    - function updateMessage(name, message) {
        - const newMessage = `${name} ${message};
    - }
    - updateMessage('Mel', 'sup');
---
<a href = "https://github.com/philsinatra/IDM231/blob/master/instructor_materials/03-functions.md">Arrow Functions</a>
- new syntax

---
# Forms 
<a href="https://www.w3schools.com/html/html_form_input_types.asp">Forms</a>
- if you do date it brings up a calendar drop down (able to do some styling)
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date">Input date </a>
    - other formats may be more customizable
---
## Parameters
- need to give function the parameters added in code block to run
    - function for area needs width and height
---
## Anatomy
- function functionName () {
    - code block
- }
---
## How to use
- call the name
- give parameters and recieve value
- once function hits 'return' it will leave the funcion
    - how to bypass this when you want two outputs: <b> ARRAY </b>
    - then set variables outside of function equal to section of array that has the answer you want
---
## Variables and Functions
- if you declare a variable in a function you can only call it in a function (local)
- a variable declared outside a function is global and can be called anywhere
---
## Block Scope
- let and const have
    - different variables if declared inside of function vs outside
- var does not have
    - one variable no matter where declared
---
# Example Notes
- if you put java in head it will load before content
- put java at end of body tag so all paramaters can load that it needs to call
- new script tag - look into why
    - < script type="application/javascript" src="myjavascript.js"></ script>
- tells button to call function 'doSomething' on click
    - < button onclick="doSomething();">Click Me</ button>
    - ; is not needed - but it does not mess up the code so stay consistent
    - use ; to seperate multiple functions when calling
- when calling a function with parameters in HTML - NEED to input the parameters in () or function will not be able to work