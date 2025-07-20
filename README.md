# 🔥 Free Fire Tournament App

A modern web application for managing Free Fire tournaments with real-time updates using Firebase.

## Features

- 🔥 Real-time tournament management
- 👥 Anonymous user authentication
- 📊 Tournament status tracking
- 🎮 Join/Create tournaments
- 📱 Responsive design
- ⚡ Fast and modern UI

## Tech Stack

- **Frontend**: React 18 with Vite
- **Backend**: Firebase
  - Authentication (Anonymous)
  - Realtime Database
  - Firestore (ready for use)
  - Storage (ready for use)
  - Analytics
- **Styling**: Modern CSS with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd free-fire-tournament-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Firebase Configuration

The app is already configured with Firebase services:

- **Authentication**: Anonymous sign-in for quick access
- **Realtime Database**: For real-time tournament data
- **Firestore**: Available for more complex data structures
- **Storage**: Available for file uploads
- **Analytics**: Automatic event tracking

### Firebase Services Used

- `auth`: User authentication
- `realtimeDb`: Real-time tournament data
- `db`: Firestore database (ready for use)
- `storage`: File storage (ready for use)
- `analytics`: Usage analytics

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # React entry point
├── firebase.js      # Firebase configuration and services
├── App.css          # Application styles
└── index.css        # Global styles
```

## Features in Detail

### Tournament Management
- Create new tournaments with automatic timestamps
- View tournament status (registration, active, completed)
- Real-time participant count
- Join tournaments (UI ready, functionality can be extended)

### User Experience
- Anonymous authentication for immediate access
- Responsive design for mobile and desktop
- Modern UI with smooth animations
- Real-time data updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own tournaments!

## Support

For issues and questions, please open an issue in the repository. 
