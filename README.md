![JavaScript 30 Banner](https://lh3.googleusercontent.com/S8slXDe-rMTb7LP89OATxZAMqVTr9OU7YNGUO5Dv1JcSSwYKbJZgtKTosvenoyZZUEbKO36K_AVQ)

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

## 3. CSS Variables
### Changes
1. Split index.html into seprate script.js, style.css and index.html

## 4. Array Cardio Day 1
### Changes
1. Split index.html into seperate script.js and index.html
2. Used different sort method
```javascript
const results3 = inventors.sort((a,b) => a.year - b.year);
```
insted of 
```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
```

## 4. Array Cardio Day 1
### Changes
1. Split index.html in seperate script, style and index files
2. Changes images and text to theme of personal interest

### TO DO
1. Look into creating functionality that causes the panels to shrink back automatically when another is clicked
