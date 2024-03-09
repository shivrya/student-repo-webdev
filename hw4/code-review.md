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


### Issue #2: Accessibility

The issue, why this is an issue, and the solution:

The accessibility issue is the "empty button" issue, meaning that the button is either empty or has no value text. A button should also have a value. However sometimes, we might use a glyphicon such as "x" to indicate this button is meant to close the popup modal. To fix this issue, we can add an "aria-label" attribute. It's also a good idea to add the "title" attribute, which will show the "title" of the image as a tooltip when the user hovers over the image.

Initial Code UI : 
<img src="../images/before_label.png" height=200 alt="screenshot showing an aaccessibility issue on the image with the close button">

Updated code UI: 
<img src="../images/after_label.png" height=200 alt="screenshot showing an aaccessibility issue on the image with the close button">

Initial code:

```html
<div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input aria-label="name" class="form-input-box" type="text" id="name" name="name" />
          </p>
          <p class="label-input-group form-element-container">
            <span class="form-label">Username</span>
            <input
              aria-label="username"
              class="form-input-box"
              type="text"
              id="username"
              name="username"
            />
          </p>
        </div>
        <div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
          <p class="label-input-group form-element-container">
            <span class="form-label">Email</span>
            <input aria-label="email" class="form-input-box" type="email" id="email" name="email" />
          </p>
          <p class="label-input-group form-element-container">
            <span class="form-label">Phone Number</span>
            <input
              aria-label="phone"
              class="form-input-box"
              type="tel"
              id="phone-number"
              name="phone-number"
            />
          </p>
        </div>
```

Updated code:

```html
 <div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
          <p class="label-input-group form-element-container">
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" name="name" class="form-input-box" placeholder="Enter your name" />
          </p>
          <p class="label-input-group form-element-container">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-input-box"
              placeholder="Enter your username"
            />
          </p>          
        </div>
        <div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
          <p class="label-input-group form-element-container">
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" name="email" class="form-input-box" placeholder="Enter your email" />
          </p>
          <p class="label-input-group form-element-container">
            <label for="phone-number" class="form-label">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              class="form-input-box"
              placeholder="Enter your phone number"
            />
          </p>
        </div>
```