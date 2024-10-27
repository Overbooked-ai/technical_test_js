# Technical Test Instructions for Node.js/TypeScript Developer

## Objective

Your task is to extend an existing Node.js web application by adding new features that simulate a real-world scenario. You will:

- Add a new endpoint that allows users to receive personalized recommendations based on their interests.
- Save these recommendations in a database.
- Add another endpoint to retrieve saved recommendations for each user.
- Integrate with a mock Large Language Model (LLM) agent using a provided Docker Compose setup.
- Create a frontend to interact with the backend.

This task assesses your ability to integrate external services, handle HTTP requests/responses, work with databases, and write clean, maintainable code following best practices. 
### Note: you can change any file on this project, as long as you provide a working code OR enough code that can you can explain your choices.

## Project Overview

You are provided with a basic project structure of a web application built using Express.js and TypeScript. The application currently has a few endpoints set up. Your job is to:

1. **Add a new endpoint `/recommendations`** that generates and saves personalized recommendations.
    - Integrate with a mock LLM agent, accessible via Docker Compose, to generate recommendations.
    - Save recommendations in a database (you'll need to add a database service to the Docker Compose file).
  
2. **Add another endpoint `/users/:user_id/recommendations`** to retrieve saved recommendations.
    - Ensure proper error handling and input validation.

3. **Create a frontend using React that uses those two endpoints**
   - There is no restriction on component library or tools you use.
   - Create it based on the mockup provided.

4. **Write unit tests** for your new code.
  
5. **Document your work** and provide instructions on how to run the application.

## How to Run the Application

### 1. Clone the Repository