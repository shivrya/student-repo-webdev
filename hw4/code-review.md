## Code Review Exercise


### Issue #1: Accessibility: Form Input Misses Its Corresponding Label Tag

Issue: Form input misses corresponding labels. The input tag is not correctly associated with a label tag because the "for" field of the label tag matches the "id" field of the input tag.  The input tag should have a label tag so that the field of the label is identical to that of the "id" field in the input tag.

Why it is an issue: This could cause issues such as rendering problems, accessibility concerns, compatibility issues, and maintenance challenges.

Solution: Each input tag element is associated with a label tag element using the for attribute. This improves accessibility by providing a visible label for each input field. Each input tag field should be accompanied by a label tag element that describes its purpose. The for attribute of the label tag should match the "id" field of the corresponding input tag field. This association improves accessibility by providing a clear and programmatically associated label for each input field. Each input field now has a label tag element associated with it, ensuring consistent labelling techniques for accessibility and usability.

Initial Code:
```html
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input aria-label="name" class="form-input-box" type="text" id="name" name="name" />
          </p>
```

Updated code: 
```html
          <p class="label-input-group form-element-container">
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" name="name" class="form-input-box" placeholder="Enter your name" />
          </p>
```




### Issue #2: Accessibility: Redundant "aria-label"

Issue: The use of aria-label on the input tag elements for "Name,” "Username,” "Email," and "Phone Number" is redundant because there are visible labels associated with them. It is generally better to rely on visible labels whenever possible and use aria-labels only when no visible label is present. When an input element is associated with a visible label using the for attribute, the label serves as the accessible name for the input field. Including an aria-label in addition to a visible label can lead to redundancy and potential confusion for assistive technology users.

Why it is an issue: Having redundant Aria labels can be an issue because of the cluttered accessibility tree, ambiguity, and confusion. It could create problems for web developers trying to create a more streamlined and accessible user experience.

Solution: The aria-label attribute was removed because it was redundant for "Name,” "Username,” "Email," and "Phone Number" because there are visible labels associated with them. Instead of relying solely on aria-label, a label element with a for attribute has been added. The use of visible labels is preferred over the aria-label when possible. Removing redundant aria-label attributes improves accessibility by ensuring that assistive technologies can accurately convey the purpose of each input field without unnecessary duplication of information.

Initial Code:
```html
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input aria-label="name" class="form-input-box" type="text" id="name" name="name" />
          </p>
```

Updated code: 
```html
          <p class="label-input-group form-element-container">
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" name="name" class="form-input-box" placeholder="Enter your name" />
          </p>
```



The UI and complete code changes for the 1st and 2nd issues are as follows: 


Initial code UI: 
 


<img src="../images/before_label.png" height=200 alt="screenshot showing an aaccessibility issue on the image with the close button">

Updated code and UI: 
 

 
<img src="../images/after_label.png" height=200 alt="screenshot showing an accessibility issue on the image with the close button">

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
            <input type="text" id="name" name="name" class="form-input-box" placeholder="Enter your name." />
          </p>
          <p class="label-input-group form-element-container">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-input-box"
              placeholder="Enter your username."
            />
          </p>          
        </div>
        <div class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
          <p class="label-input-group form-element-container">
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" name="email" class="form-input-box" placeholder="Enter your email." />
          </p>
          <p class="label-input-group form-element-container">
            <label for="phone-number" class="form-label">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              class="form-input-box"
              placeholder="Enter your phone number."
            />
          </p>
        </div>
```



### Issue #3: Code Refactoring: Removing Unused CSS Classes


Issue: There is one class in styles.css called navbar-toggle-close-button, which is not used anywhere in the index.html file.

Why it is an issue: Redundant class in styles.css can lead to unnecessary complexity and maintenance. Maintaining a clean and concise code is preferable.

Solution: Removing the navbar-toggle-close-button class from the styles.css file.

Initial Code:
```css

.navbar-toggle-close-button {
  font-size: 1.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  margin: auto;
}

```

Updated code: 
```css

/* Removed navbar-toggle-close-button class from styles.css */

```