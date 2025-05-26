# FinShark - Portfolio Tracker

This is a full-stack web application built with React/TypeScript (Frontend) and C# ASP.NET Core (Backend). It allows users to track stock information fetched from the Financial Modelling Prep API, manage a personal portfolio, and comment on stocks.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Stock Searching:** Search for stock symbols/company names via the Financial Modeling Prep API.
- **Stock Details:** View detailed company information and stock data.
- **Portfolio Management:** Users can add stocks to their personal portfolio and view/remove them.
- **Stock Commenting:** Users can add and view comments associated with specific stocks.
- **RESTful API:** Backend exposes endpoints for frontend consumption.

## Tech Stack

**Frontend:**

- React
- TypeScript
- React Context
- Tailwind CSS
- Axios
- React Router for navigation
- Package Manager: npm

**Backend:**

- C#
- .NET Core 8.0
- ASP.NET Core Web API
- Entity Framework Core - Code-First Approach
- SQL Server
- JWT Bearer Tokens
- Dependency Injection (Built-in)
- Financial Modelling Prep API Client

## Getting Started

Follow these instructions to get the project running locally.

1.  **Clone the repository:**

    ```bash
    git clone [Your Repository URL]
    cd [Your Repository Folder Name]
    ```

2.  **Obtain FMP API Key:**
    - Sign up at [Financial Modeling Prep](https://site.financialmodelingprep.com/developer/docs/) to get your API key.

### Backend Setup

<!-- Adjust directory names (`backend`, `API`, etc.) if yours are different -->

1.  **Navigate to the backend directory:**

    ```bash
    cd api # e.g., cd API
    ```

2.  **Configure Settings:**

    - Open `appsettings.json`.
    - **Database Connection:** Update the `ConnectionStrings` section with your database connection details.
      ```json
      "ConnectionStrings": {
        "DefaultConnection": "[Your Database Connection String]"
      },
      ```
    - **FMP API Key:** Add your Financial Modeling Prep API key.
      ```json
      "FMPKey": "[Your FMP API Key]"
      ```
    - **JWT Settings (if applicable):** Configure `JWT:Issuer`, `JWT:Audience`, and `JWT:SigningKey` in `appsettings.json` or User Secrets. The `SigningKey` **must** be kept secret.
      ```json
        "JWT": {
          "Issuer": "[Issuer string]",
          "Audience": "[Issuer string]",
          "SigningKey": "[Signing Key String]"
      	}
      ```

3.  **Restore Dependencies:**

    ```bash
    dotnet restore
    ```

4.  **Apply Database Migrations:**
    - Run migrations to create/update the database schema:
    ```bash
    dotnet ef database update
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**

    ```bash
    # From the root project directory
    cd frontend
    ```

2.  **Install Dependencies:**
    ```bash
    # Using npm
    npm install
    ```

## Running the Application

1.  **Start the Backend API:**

    - Navigate to the backend directory (`cd api`).
    - Run the application:
      ```bash
      dotnet run
      ```
    - Note the URL(s) the API is listening on (e.g., `https://localhost:5001` or `http://localhost:5000`).

2.  **Start the Frontend Development Server:**

    - Navigate to the frontend directory (`cd frontend`).
    - Run the application:
      ```bash
      # Using npm
      npm run dev
      ```
    - This will usually open the application automatically in your default web browser (e.g., at `http://localhost:5173`).

3.  **Access the Application:** Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173`).

## API Endpoints

- API documentation is available via Swagger at `/swagger/index.html` on the backend URL (e.g., `https://localhost:5092/swagger/index.html`).
