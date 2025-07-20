# 🎮 Free Fire Tournament App

A modern web application for managing Free Fire tournaments with real-time updates, user authentication, and tournament management features.

## ✨ Features

- 🔐 User Authentication (Sign up/Login)
- 🏆 Tournament Creation and Management
- 📊 Real-time Tournament Updates
- 🎯 Participant Management
- 📱 Responsive Design
- 🌐 Firebase Integration

## 🚀 Tech Stack

- **Frontend**: React 18 with Vite
- **Backend**: Firebase
- **Authentication**: Firebase Auth
- **Database**: Firestore + Realtime Database
- **Styling**: Modern CSS with Glassmorphism Design

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd free-fire-tournament-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Firebase Setup

The app is already configured with Firebase. The configuration includes:

- **Authentication**: Email/Password sign-in
- **Firestore**: For tournament data storage
- **Realtime Database**: For live updates
- **Storage**: For file uploads (ready for future use)
- **Analytics**: For usage tracking

### Firebase Services Used

- `firebase/auth` - User authentication
- `firebase/firestore` - Tournament data
- `firebase/database` - Real-time updates
- `firebase/storage` - File storage (future use)
- `firebase/analytics` - Usage analytics

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # React entry point
├── firebase.js      # Firebase configuration
├── App.css          # Application styles
└── index.css        # Global styles
```

## 🎯 Usage

1. **Sign Up/Login**: Create an account or sign in with existing credentials
2. **Create Tournaments**: Click "Create Tournament" to start a new tournament
3. **Manage Tournaments**: View all tournaments and their details
4. **Join Tournaments**: Click "Join Tournament" to participate (feature ready for implementation)

## 🔮 Future Features

- [ ] Tournament brackets and match management
- [ ] Real-time chat during tournaments
- [ ] Player statistics and leaderboards
- [ ] Tournament scheduling and notifications
- [ ] Mobile app version
- [ ] Payment integration for prize pools

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Environment Variables

The Firebase configuration is already set up. If you need to use your own Firebase project:

1. Create a new Firebase project
2. Enable Authentication, Firestore, and Realtime Database
3. Update the configuration in `src/firebase.js`

## 📄 License

MIT License - feel free to use this project for your own tournaments!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy Gaming! 🎮** 
