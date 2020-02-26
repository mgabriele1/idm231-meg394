# Storage and Timers
## Web Storage
- session storage
    - when user leaves window
    - browser is close - info is lost
- local storage
    - when user closes browser
    - browser saves info to local client machine
    - up to 5MB
- Javascript (name and value)
    - setItem
    - getItem
    - removeItem
        - removes name and item
    - clear
        - removes value
- local storage example:
    - localStorage.setItem('email', 'grace@gmail.com');
    - const email = localStorage.getItem('email');
    - localStorage.email = 'grace@gmail.com';
    - const email = localStorage.email;
- session storage example:
    - sessionStorage.setItem('itemname', 'value');
    - const itemName = sessionStorage.getItem('itemname');
    - sessionStorage.removeItem('itemname');
    - sessionStorage.clear();
- INSPECTOR
    - storage in menu on top
    - local and session
    - how to test what page is storing locally and for session
---
## Timers
- setTimeout()
    - lets you execute code after a set number of seconds
    - can call a function or execute some demand
    - if you want to trigger something a set amount of time after site load
    - EXAMPLE FOR FUNCTION:
        - setTimeout(myFunction, 2000);
- 1 second = 1000
- CANCEL
    - clearTimeout()
- Zero delay
    - will excute immediately AFTER functions have executed
    - good if you dont want to clog up calling many functions at the same time
- setInterval()
    - loops
    - example:
        - const interval = setInterval(() => {
        - // runs every 2 seconds
        - if (App.somethingIWait === 'arrived') {
        - clearInterval(interval);
        - return;
        - }
        - // otherwise do nothing
        - }, 2000);