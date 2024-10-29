<script lang="ts">
  import { writable } from "svelte/store";

  // TODO: Implement form state management
  // TODO: Implement form validation
  // TODO: Implement submit handler
  // TODO: Implement success state management

  const formStore = writable<App.UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const successDataShow = writable(false);
  const errorStore = writable<App.FormErrors>({});
  const submittedData = writable<App.UserFormData>();

  const validatePassword = (value: string) => value.length >= 6;

  const validateEmail = (value: string) =>
    /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value);

  const handleInputValidation = (
    field: keyof App.UserFormData,
    value: string
  ) => {
    let error = "";

    if (!value) {
      error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (field === "password" && !validatePassword(value)) {
      error = "Password must be at least 6 characters";
    } else if (field === "email" && !validateEmail(value)) {
      error = "Please enter a valid email";
    }
    errorStore.update((errors) => ({ ...errors, [field]: error }));
    return error;
  };

  const handleInput = (field: keyof App.UserFormData, value: string) => {
    formStore.update((form) => ({ ...form, [field]: value }));

    handleInputValidation(field, value);
    successDataShow.set(false);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    let formValid = true;

    formStore.update((form) => {
      Object.entries(form).forEach(([field, value]) => {
        const error = handleInputValidation(
          field as keyof App.UserFormData,
          value
        );

        if (error) formValid = false;
      });
      return form;
    });

    if (formValid) {
      formStore.subscribe((data) => {
        submittedData.set(data);
      })();

      successDataShow.set(true);

      formStore.set({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      errorStore.set({});
    }
  };
</script>

<div class="form-container">
  <form on:submit={handleSubmit}>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        placeholder="Enter your first name"
        class:error={$errorStore.firstName}
        value={$formStore.firstName}
        on:input={(e) => handleInput("firstName", e.currentTarget.value)}
      />
      {#if $errorStore.firstName}
        <p class="error-message">
          {$errorStore.firstName}
        </p>
      {/if}
    </div>

    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        placeholder="Enter your last name"
        value={$formStore.lastName}
        class:error={$errorStore.lastName}
        on:input={(e) => handleInput("lastName", e.currentTarget.value)}
      />
      {#if $errorStore.lastName}
        <p class="error-message">
          {$errorStore.lastName}
        </p>
      {/if}
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={$formStore.email}
        class:error={$errorStore.email}
        on:input={(e) => handleInput("email", e.currentTarget.value)}
      />
      {#if $errorStore.email}
        <p class="error-message">
          {$errorStore.email}
        </p>
      {/if}
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={$formStore.password}
        class:error={$errorStore.password}
        on:input={(e) => handleInput("password", e.currentTarget.value)}
      />
      {#if $errorStore.password}
        <p class="error-message">
          {$errorStore.password}
        </p>
      {/if}
    </div>

    <button type="submit" class="submit-button">Submit</button>
  </form>

  <!-- TODO: Add success message section here -->

  {#if $successDataShow}
    <div class="success-message">
      {#if $submittedData}
        {#each Object.entries($submittedData) as [field, value]}
          <p><b>{field}:</b> {value}</p>
        {/each}
      {/if}
    </div>
  {/if}
</div>

<style>
  .form-container {
    max-width: 480px;
    margin: 0 auto;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.15s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  input::placeholder {
    color: #9ca3af;
  }

  input.error {
    border-color: #ef4444;
  }

  .error-message {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #ef4444;
  }

  .submit-button {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }

  .submit-button:hover {
    background-color: #2563eb;
  }

  .submit-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }

  .submit-button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }

  .success-message {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #edf7ed;
    border: 1px solid #c8e6c9;
    border-radius: 6px;
    color: #1b5e20;
  }
</style>
