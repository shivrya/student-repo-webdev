## Code Review Exercise


### Issue #1: Accessibility : Form input misses its corresponding label tag

Issue: Form input misses corresponding labels. Input tag is not correctly associated with a label tag by making the "for" field of the label tag matches the "id" field of the input tag.  The input tag should have a label tag with for the field of the label to be identical to that of the "id" field in the input tag.

Why it is an issue: This could cause issues such as rendering problems, accessibility concerns, compatibility issues, and maintenance challenges.

Solution: Each input tag element is associated with a label tag element using for attribute. This improves the accessibility by providing a visible label for each input field. Each input tag field should be accompanied by a label tag element that describes its purpose. The for attribute of the label tag should match the "id" field of the corresponding input tag field. This association improves accessibility by providing a clear and programmatically associated label for each input field.Each input field now has a label tag element associated with it, ensuring consistent labeling techniques for accessibility and usability.

Initial Code:
```html
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input aria-label="name" class="form-input-box" type="text" id="name" name="name" />
          </p>
```

Updated code : 
```html
          <p class="label-input-group form-element-container">
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" name="name" class="form-input-box" placeholder="Enter your name" />
          </p>
```

### Issue #2: Accessibility : Redundant aria-label

Issue: The use of aria-label on the input tags elements for "Name,” "Username,” "Email" and "Phone Number" is redundant because there are visible labels associated with them. It is generally better to rely on visible labels whenever possible and use aria-labels only when no visible label is present.

Why it is an issue: Having redundant Aria labels can be an issue because of the cluttered accessibility tree, ambiguity, and confusion. It couls create problem for web developers to create more streamlined and accessible user experience

Solution: The redundant aria-label attributes have been removed from the input tags elements for "Email" and "Phone Number" because there are visible labels associated with them. The use of visible labels is preferred over the aria-label when possible. Removing redundant aria-label attributes improves accessibility by ensuring that assistive technologies can accurately convey the purpose of each input field without the unnecessary duplication of information.

Initial Code:
```html
<input aria-label="name" class="form-input-box" type="text" id="name" name="name" />
```

Updated code : 
```html
<input type="text" id="name" name="name" class="form-input-box" placeholder="Enter your name" />
```



UI and complete code changes for 1st and 2nd issues are as follows : 


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