import { useState } from "react";

function AccessibleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setSuccess(true);
  }

  return (
    <div>
      <h1>Accessible Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="studentName">
            Student Name:
          </label>

          <input
            id="studentName"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-invalid={Boolean(error && !name.trim())}
            aria-describedby={
              error && !name.trim()
                ? "form-error"
                : undefined
            }
          />
        </div>

        <br />

        <div>
          <label htmlFor="studentEmail">
            Email Address:
          </label>

          <input
            id="studentEmail"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={Boolean(error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
            aria-describedby={
              error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ? "form-error"
                : undefined
            }
          />
        </div>

        <br />

        {error && (
          <p id="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">
          Register
        </button>

        {success && (
          <p role="status">
            Registration completed successfully!
          </p>
        )}

      </form>
    </div>
  );
}

export default AccessibleForm;