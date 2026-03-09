# Contact Form Validation & Email Sender

A simple project that validates a website contact form and sends the submitted message via email.

This project ensures that user input is properly validated before sending an email using SMTP. It helps prevent invalid submissions and ensures reliable communication from the website to the administrator.

---

## Features

* Client-side form validation
* Server-side validation for security
* Email sending using SMTP
* Error handling for failed submissions
* Success and error response messages
* Clean and simple API endpoint for contact form submission


---

## Tech Stack

* Frontend: HTML / CSS / JavaScript (or Vue.js)
* Backend: Node.js / Express (or PHP)
* Email Service: SMTP (Gmail or any SMTP provider)

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/contact-form-email.git
cd contact-form-email
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

MAIL_TO=your-email@gmail.com
PORT=3000
```

---

## Run the Project

Start the server:

```
npm start
```

or for development:

```
npm run dev
```

The server will start on:

```
http://localhost:3000
```

---

## API Endpoint

### Send Contact Form

**POST** `/contact`

Request Body Example:

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "location": "USA",
  "message": "Hello, I would like to know more about your services."
}
```

Response:

Success

```
{
  "message": "Message sent successfully"
}
```

Error

```
{
  "error": "Failed to send message"
}
```

---

## Validation Rules

The form validates the following fields:

* **Name** – Required
* **Email** – Must be a valid email format
* **Phone** – Must contain only numbers
* **Location** – Required
* **Message** – Required

---

## Project Structure

```
project-root
│
├── server.js
├── package.json
├── .env
│
├── routes
│   └── contact.js
│
└── frontend
    └── ContactForm.vue
```

---

## Security Notes

* Always use environment variables for email credentials.
* Never commit the `.env` file to version control.
* Use an **App Password** instead of your Gmail password.

---

## License

This project is open-source and available for personal or commercial use.

---

## Author

Developed for handling contact form validation and email delivery for websites.
