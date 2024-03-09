## Code Review Exercise

### Issue #1: Code Formatting

There are a lot of statements in the given code which are longer in length.
This will create an issue in readability and maintanance of the code. It also becomes difficult to follow the line.
Hence we need to make sure that there is a consistent style which will improve code maintainance as well as the readability.
All 3 files : index.html, index.js and styles.css has this issue.
I am pasting the code and improvements for styles.css and index.js

Initial code for styles.css :

```css
  background: linear-gradient(34deg, var(--dark-blue) 6%, var(--blue) 46%, var(--purple) 91%);
```

Updated code for styles.css :

```css
  background: linear-gradient(
    34deg,
    var(--dark-blue) 6%,
    var(--blue) 46%,
    var(--purple) 91%
  );
```
Initial code for index.js :

```javascript
    const popupSection = event.currentTarget.parentElement.parentElement.parentElement;
```

Updated code for index.js :

```javascript
    const popupSection =
      event.currentTarget.parentElement.parentElement.parentElement;
```
