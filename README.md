# 🔐 PassOP - Your Own Password Manager

PassOP (Password Operations) is a full-stack, secure, and intuitive password manager designed to help you organize and protect your digital credentials. Built with React for a dynamic frontend and MongoDB for reliable data storage.

## 🚀 Live Demo

You can access the live version of this project hosted on GitHub Pages:

**[Visit PassOP Live Site](https://rudra113.github.io/password-manager/)**

## ✨ Features

* **Secure Storage:** Stores credentials securely using a robust MongoDB backend.
* **Intuitive Interface:** Built with React and styled beautifully using Tailwind CSS for a modern, responsive user experience.
* **Unique Identifiers:** Utilizes the `uuid` library for generating unique IDs for robust credential management (editing and deletion).
* **CRUD Operations:** Easily create, read, update, and delete stored passwords and usernames.

## ⚙️ Technology Stack

PassOP is built using a powerful and modern stack:

### Frontend
| Technology | Description |
| :--- | :--- |
| **React** | A JavaScript library for building the user interface. |
| **Tailwind CSS** | A utility-first CSS framework for rapid and responsive styling. |
| **uuid** | Used for generating universally unique identifiers for keys and entries. |

### Backend / Database
| Technology | Description |
| :--- | :--- |
| **Node.js / Express** | (Implied/Standard) Used for the server-side API development. |
| **MongoDB** | A NoSQL database used for persistent and flexible storage of credentials. |

## 📦 Local Installation and Setup

Follow these steps to get a local copy of PassOP running on your machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn
* A running MongoDB instance (local or Atlas cluster)

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/rudra113/password-manager.git](https://github.com/rudra113/password-manager.git)
    cd password-manager
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the root of your project and add your MongoDB connection string:
    ```
    # Replace <your_connection_string> with your actual MongoDB URL
    MONGO_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/passopdb?retryWrites=true&w=majority"
    ```

4.  **Run the Application (Development):**
    You will likely need to start the backend server and the frontend development server separately. Consult your project scripts (in `package.json`) if these commands differ:
    ```bash
    # Start the backend server (if separate)
    npm run server 
    
    # Start the frontend application
    npm run dev
    ```

The application should now be running locally, typically on `http://localhost:5173` (for Vite) or `http://localhost:3000`.

## 🤝 Contributing

Contributions are always welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (You may need to create this file).

---
*Developed by **[rudra113](https://github.com/rudra113)**.*
