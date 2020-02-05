# DOM Document Object Model

<a href="https://github.com/philsinatra/IDM231/blob/master/instructor_materials/05-DOM.md">GITHUB NOTES</a>

<a href="https://github.com/philsinatra/IDM231/tree/master/examples/dom">GITHUB EXAMPLES FOR NOTES</a>

---
- javascript communicating with html to change media/ sound
- javascript and html talk dynamicly
---
## DOM
- document node
    - entire web page
- element node
    - built in tag
    - any tag in html
    - have attributes
- attribute node
    - inside of elements
- text node
    - inside element
    - what user sees
    - actual content
---
## Working with the DOM Tree
- locate element you want to work with
- use text, child elements, and attributes
    -JAVA: get element by ID
- can change attributes or contents of elements
---
## Access Elements
- getElementById ()
    - one value
-querySelector ()
    - returns list
    - multiple elements
- traverse DOM tree
    - once you have one of these two you can navigate DOM tree
---
## Multiple Nodes
- getElementByClassName ()
    - returns all interations
- getElementByTagName()
    - predefined HTML tag names
- querySelectorAll ()
    - anything that matches name in entire HTML
## Same Class Name
- parentNode
- previousSibling/ nextSibling
- firstChild/ lastChild
---
## Working with Elements
- access and update text
- work with html content
- access/ update attribute values
---
## Selecting Element from Node List
- item () method
    - elements.item(0)
- array syntax
    - elements[0]
## Repeating Actions for Entry Node List
- loops!
---
## Adding Elements Using DOM
- createElement()
    - can use JS to add HTML to HTML page
- createTextNode()
- appendChild()
    - have to append it to document
    - takes new text and adds it to new tag
    - document.body.appendChild(name)
        - appends name to body 
    - <b> WILL PUT ELEMENT RIGHT BEFORE CLOSE </b>
- POSITION
    - get the position of element around where you want it
    -position.appendChild(newName)
## Removing Dom Elements
- store element to be removed
- store parent element
- removeChild()
---
Attribute Nodes
- getElementById().getAttribute()
- methods
    - getAttribute()
        - extract attribute
    - hadAttribute()
        - let you know if it exists
    - setAttribute()
        - set an attribute
    - removeAttribute()
        - remove an attribute
## Available Properties
- class name
- ID
---
---
# Example Notes
- if statement false = jumps to closing curly bracket
- const init = () => {}
    - new way of calling a function
    - same as: function init() {}
    - add window.onload init --> will call init function on window load
- == NaN will return error because not all NaN equal each other
    - if (isNaN(variableName))
---
- build html
- build buttons
- add code
- use DOMS to replace image text and sound