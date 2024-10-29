# Svelte Form Implementation Test

## Task

Implement a functional form using Svelte's form handling capabilities. The HTML structure and CSS are provided - you need to add all the necessary Svelte functionality.

NOTE: USE NODE (17.0.0 or higher)

## Requirements

### 1. State Management

- Create appropriate state variables for form data
- Use the provided TypeScript types from app.d.ts
- Use Svelte's reactive bindings to connect inputs to state
- Implement success state management for showing submitted data

### 2. Form Validation

Implement form validation with the following rules:

- All fields are required
- Email must be in valid format
- Password must be at least 6 characters
- Show error messages below each field when validation fails
- Add the "error" class to inputs that have validation errors

### 3. Event Handling

- Implement proper form submission handling
- Prevent default form submission
- On successful submission:
  - Display submitted data below the form (excluding password)
  - Clear the form for new entries
  - Show a success message
- Hide success message when user starts filling the form again

### 4. Error Handling

- Create a proper error state management system
- Show error messages when validation fails
- Clear relevant error messages when user starts typing

## Evaluation Criteria

You will be evaluated on:

1. Understanding of Svelte concepts:
   - Reactive declarations
   - Two-way binding
   - Event handling
   - Conditional rendering
2. Proper use of TypeScript types
3. Implementation of form validation
4. Error handling approach
5. Code organization and cleanliness

## Example Success Message Format

```html
<div class="success-message">
    <h3>Successfully submitted:</h3>
    <p>First Name: John</p>
    <p>Last Name: Doe</p>
    <p>Email: john@example.com</p>
</div>
```
