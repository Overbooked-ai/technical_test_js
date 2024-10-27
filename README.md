# Personalized Recommendations App

## Overview

This application provides personalized recommendations based on user preferences. It consists of a backend service that generates recommendations using a mock LLM agent and a frontend built with Next.js.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Docker](https://www.docker.com/) (for running the mock LLM agent)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) (for package management)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/repo-name.git
cd repo-name
```

### 2. Set Up the Backend

#### 2.1. Start the Mock LLM Agent

1. Navigate to the directory containing the `docker-compose.yml` file.
2. Run the following command to start the mock LLM agent:
```bash
docker compose up wiremock -d
```
This will start the mock LLM agent, which will be accessible at `http://localhost:8080`.

#### 2.2. Install Backend Dependencies

Navigate to the backend directory (if applicable) and install the dependencies:
```bash
npm install
```

### 3. Set Up the Frontend

#### 3.1. Install Frontend Dependencies

Navigate to the frontend directory and install the dependencies:
```bash
cd frontend
npm install
```

#### 3.2. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory and add the following line:
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Make sure to replace `8000` with the port your backend is running on if it's different.

### 4. Run the Application

#### 4.1. Start the Backend Server

If you have a separate backend server, start it:
```bash
npm run dev
```

#### 4.2. Start the Frontend Development Server

In the `frontend` directory, run:
```bash
npm run dev
```
This will start the Next.js development server, and you can access the application at `http://localhost:3000`.

### 5. Usage

- Navigate to the homepage to enter a user ID and preferences.
- Click "Generate Recommendations" to generate personalized recommendations.
- You can also fetch recommendations for a specific user by entering their user ID.