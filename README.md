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
Done without watching video first, to test knowledge of Array methods

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

## 5. Flexbox Panel Gallery
### Changes
1. Split index.html in seperate script, style and index files
2. Changed images and text to theme of personal interest

### TO DO
1. Look into creating functionality that causes the panels to shrink back automatically when another is clicked

## 6. Ajax Type Ahead
### Changes
1. Split index.html in to seperate script and index files

## 7. Array Cardio Day 2
Done without watching video first, to test knowledge of Array methods

### Changes
1. Split index.html in seperate script and index files
2. Created function to calculateAge
    ```javaScript
    function currentAge(yearOfBirth) {
        return new Date().getFullYear() - yearOfBirth;
    }
    ```
## 8. Fun With HTML5 Canvas
### Changes
1. Split index in to seperate script, index and style files

## 9. Dev Tools Domination
### TODO

## 10. Hold Shift and Check Checkboxes
### Changes
1. Split index in to seperate script, index and style files

## 11. Custom Video Player
### Changes
1. Simplified togglePlay and updateButton functions

    Original togglePlay
    ```javascript
    function togglePlay() {
      const method = video.paused ? 'play' : 'pause';
      video[method]();
    }
    ```
    Simplified togglePlay
    ```javascript
    function togglePlay() {
        video.paused ? video.play() : video.pause();
    }
    ```
    Original updateButton
    ```javascript
    function updateButton() {
      const icon = this.paused ? '►' : '❚ ❚';
      console.log(icon);
      toggle.textContent = icon;
    }
    ```
    Simplified updateButton
    ```javascript
    function updateButton() {
        this.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚';
    }
    ```
2. Added an on load Event Listener to the window object whcih runs an init function which does two things.

    Sets progress bar to 0% on load, instead of when the video starts playing
    ```javascript
    progressBar.style.flexBasis = '0%';
    ```
    and runs updateTimes (See below)

3. Added functionality that displays elapsed time and total duration of video along side the playback controls, updateTimes.

    updateTimes calls convertTime which takes a time in seconds and converts it to hours, minutes and seconds. It then adds leading 0's if required, when the seconds or minutes is less than 9.

    ```javascript
    function updateTimes(){
        curTime.textContent = convertTime(video.currentTime);
        durTime.textContent = convertTime(video.duration);
    }
    ```
    ```javascript
    function convertTime(time) {
        let hours = Math.floor(time / 3600);
        let mins = Math.floor(time / 60);
        let secs = Math.floor(time % 60);

        if (mins < 10){
            mins = `0${mins}`;
        }
        if (secs < 10) {
            secs = `0${secs}`;
        }

        return hours > 0 ? `${hours}:${mins}:${secs}` : `${mins}:${secs}`;
    }
    ```
    Finally updateTimes sets the text content of 2 spans that were added to index.html
    ```html
    <div class="times"><span class="current__time">0:00</span> / <span class="duration__time">0:00</span></div>

    ```

## 12. Key Sequence Detection (KONAMI CODE)
### Changes
1. Split index.html in seperate script and index files
