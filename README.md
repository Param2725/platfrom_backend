# Video Sharing Platform – Backend (MERN Stack Backend Only)

This project is the **backend of a video-sharing platform** built using **Node.js, Express, and MongoDB**.  
It serves as the foundation for a platform where users can upload, watch, like, and comment on videos.  
The idea is *inspired by YouTube*, but the architecture, features, and logic are designed from scratch — built entirely from my own perspective of how such a platform should work.

---

## Features

- **Authentication & Authorization**
  - Secure signup and login using JWT
  - Password hashing with bcrypt
  - Protected routes for user actions

- **Video Management**
  - Upload, edit, delete, and fetch videos
  - Store metadata like title, description, and category
  - Thumbnail and file uploads using Multer

- **User Interactions**
  - Like and dislike system
  - Commenting system with nested replies
  - Count and display total likes/comments per video

- **User Profiles**
  - Manage user info and uploaded videos
  - View any user’s video library

- **Search & Explore**
  - Search videos by title, tags, or uploader
  - Fetch trending or recently uploaded videos

- **Additional**
  - Environment variable configuration
  - Structured MVC architecture
  - Ready for future scalability (microservices or cloud storage)

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JSON Web Token (JWT) |
| **Password Security** | bcrypt.js |
| **File Uploads** | Multer |
| **Env Management** | dotenv |

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>

2. **Install dependencies**
    npm install

3. **Create a .env file in the root directory and add the following**
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

4. **Run the development server**
    npm run dev
    The backend will start on http://localhost:5000/

## API overview

| Method   | Endpoint                 | Description                 |
| -------- | ------------------------ | --------------------------- |
| **POST** | `/api/auth/register`     | Register a new user         |
| **POST** | `/api/auth/login`        | Login user                  |
| **GET**  | `/api/videos`            | Get all videos              |
| **POST** | `/api/videos`            | Upload a new video          |
| **GET**  | `/api/videos/:id`        | Get video by ID             |
| **PUT**  | `/api/videos/:id/like`   | Like or unlike a video      |
| **POST** | `/api/comments/:videoId` | Add a comment               |
| **GET**  | `/api/users/:id`         | Get user profile and videos |
(More endpoints will be documented soon.)

## Project Structure

📦 video-sharing-backend
├── 📁 config
│   └── db.js
├── 📁 controllers
│   ├── authController.js
│   ├── videoController.js
│   └── commentController.js
├── 📁 models
│   ├── User.js
│   ├── Video.js
│   └── Comment.js
├── 📁 routes
│   ├── authRoutes.js
│   ├── videoRoutes.js
│   └── commentRoutes.js
├── 📁 middleware
│   └── authMiddleware.js
├── 📁 uploads
│   └── (video & thumbnail files)
├── server.js
└── package.json
(to be updated soon).

## Future Plans
1. Analytics system for views, likes, and audience data
2. Real-time notifications for comments and replies
3. Cloud video storage (AWS S3 / Firebase)
4. Channel subscription and following system
5. Personalized recommendation engine

## Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repository and submit a pull request.

## Author 
**Param Patel**
Mail : parampatel2725@gmail.com
github : https://github.com/Param2725

## If you find this project interesting, give it a star on GitHub!