# Events
- browser automatically detects events in browser (ex: resizing)
    - load, error, resize, scroll
    - key down, key up
    - click, mouse down, mouse up, mouseover
---
## Javascript events
- triggered by user interaction
- code responds to user interaction

## terminology
- triggered: fired/ raised 
- triggers javascript call

## Trigger java code
1. selecr element 
2. indicate which event is the trigger
3. decide what code you want to run
---
## Binding events to elements
1. html event handler
2. dom event handlers
3. event listeners
    - element.addEventListener (event, functionname, boolean)
    - boolean determines if click should be translated anywhere else in html
### Using parameters with event handlers
- el.addEventListener('blur', function() {
  checkUserName(5);
}, false);

---
## change default behavior of browser
- preventDefault()

---
## different types of events
- W3C DOM Events
- HTML5 Events
- BOM Events (browser object model)
---
# examples notes
- <a href="https://github.com/philsinatra/IDM231/tree/master/examples/events">See Examples</a>
    - main.js is samples of different event listeners
- () => same as function()
- for repeat code with different parameters, make one function and pass parameters
- DO THIS: 
    - html {
        box-sizing: border-box;
    }
    - *,
    *:before,
    *:after {
        box-sizing: inherit;
    }