# Catan Web

A web-based version of the popular board game **Catan** built using React for the frontend and Node.js for the backend.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Catan Web is an online multiplayer version of the classic board game Catan. The game allows players to build settlements, trade resources, and compete to earn victory points. The web application is designed to be responsive and accessible, allowing users to play on different devices.

## Features

- **Multiplayer Gameplay**: Play Catan online with friends or other players.
- **Real-time Updates**: The game state updates in real-time using WebSockets.
- **Responsive Design**: Accessible on desktops, tablets, and mobile devices.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.

### Backend

- **Node.js**: JavaScript runtime for the server.
- **Express**: Web framework for Node.js.
- **Socket.io**: For real-time, bi-directional communication between web clients and servers.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- **MongoDB** (local or cloud instance)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/powerreddude/catan.git
    cd catan
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the necessary configuration:

    ```bash
    # .env file in backend directory
    PORT=5000
    JWT_SECRET=your_secret_key
    ```

4. **Start the application:**

    ```bash
    # Start the backend server
    cd backend
    npm start

    # Start the frontend development server
    cd ../frontend
    npm start
    ```

5. **Access the application:**

   Open your web browser and go to `http://localhost:3000` to start playing Catan.

## Usage

- **Game Lobby**: Create or join a game lobby.
- **Game Play**: Interact with the board, trade resources, build settlements, and compete with other players.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
