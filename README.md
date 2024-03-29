## Project Setup Instructions

This project uses Docker Compose to run a Next.js frontend and a Node.js Express backend API server. 

**Prerequisites**

* Docker 
* Docker Compose

**Getting Started**

1. **Set Up Environment Variables:**
   * **Navigate to the server directory:** `cd server`
   * **Create a .env file:** Create a new file named `.env`
   * **MongoDB Connection String:** Add the following line to your `.env` file and replace the placeholder with your actual MongoDB connection string:
      ```
      MONGODB_URI=mongodb://your-connection-details
      ```

2. **Build and Run with Docker Compose:**
   * **From the project root directory, execute:**
     ```bash
     docker-compose up -d
     ```

**Accessing the Application**

* **Frontend:** Open  `http://localhost:3000`  in your web browser.
* **Backend API:** The backend API will be accessible from the frontend.  Refer to specific API endpoints within your backend documentation.

**Additional Notes**

* **Code Changes:** If you make changes to the frontend or backend code, you may need to rebuild the Docker images:
   ```bash
   docker-compose build 
