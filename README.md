# Evil Martians Test Task

This project is a demo task showcasing a simple login form with basic validation and mocked API calls.

## Features

- **Valid Users**:
  - `email: test@test.com`, `password: 123456`
  - `email: someOtherUser@gmail.com`, `password: qwerty123`
- After a successful login, an alert will display the message: **"You are logged in!"**

## API Behavior

- The login API is **mocked** to simulate network behavior:
  - There is a **1.5-second delay** before the response is returned.
  - There is a **20% chance** for the API to fail with a **"Network Error"**.

## Setup

Install the dependencies:

```bash
bun install
```

## Get Started

Start the dev server:

```bash
bun run dev
```

Build the app for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```
