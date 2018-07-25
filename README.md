# JavaScript30

## 1. JavaScript Drumkit
### Changes
1. Script moved to seperate file

## 2. JavaScript and CSS Clock
### Changes
1. Split index.html into seprate script.js, style.css and index.html
2. Added additional css to clock hands to make it clearer which hand is which 
```css
.min-hand {
    width: 45%;
    margin-left: 5%;
    background:  #7d7d7d;
  }
  .hour-hand {
    width: 30%;
    margin-left: 20%;
    background:  #535353;
    z-index: 1;
  }
  .second-hand {
    height: 3px;
    background:  #9d9d9c;
    z-index: 2;
  }
```
3. Added additonal check to negate the hands jumping when reaching full 360 degreees. Toggles class "skip".
```javascript
    if (seconds === 0 || seconds === 1) secondHand.classList.toggle('skip');
```
```css
 .skip {
    transition: all  0s;
  }
```