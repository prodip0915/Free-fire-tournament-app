# Free Fire Tournament App

A modern web application for managing Free Fire tournaments built with React, TypeScript, and Firebase.

## Features

- 🏆 **Tournament Management**: Create and manage Free Fire tournaments
- 👥 **Player Registration**: Easy player signup and tournament joining
- 🔥 **Real-time Updates**: Live tournament data using Firebase Realtime Database
- 📊 **Analytics**: Tournament participation tracking with Firebase Analytics
- 🎮 **Game Modes**: Support for Solo, Duo, and Squad tournaments
- 💰 **Prize Pool Management**: Track entry fees and prize distributions
- 🔐 **Authentication**: Secure user authentication with Firebase Auth

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Backend**: Firebase (Firestore, Realtime Database, Authentication, Analytics)
- **Build Tool**: Vite
- **Styling**: Inline styles with modern CSS (easily convertible to styled-components or CSS modules)

## Firebase Configuration

The app is configured with your Firebase project:
- **Project ID**: free-fire-tornament-6cee2
- **Database**: Firestore + Realtime Database
- **Authentication**: Firebase Auth
- **Analytics**: Firebase Analytics
- **Storage**: Firebase Storage

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prodip0915/Free-fire-tournament-app.git
cd Free-fire-tournament-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── config/
│   └── firebase.ts          # Firebase configuration and initialization
├── components/
│   ├── Header.tsx           # Navigation header component
│   └── TournamentCard.tsx   # Tournament display card
├── hooks/
│   └── useAuth.ts           # Authentication hook
├── pages/
│   └── HomePage.tsx         # Main homepage
├── services/
│   └── tournamentService.ts # Firebase service layer
├── types/
│   └── tournament.ts        # TypeScript type definitions
├── App.tsx                  # Main app component
└── main.tsx                # App entry point
```

## Firebase Services Used

### Firestore Database
- Stores tournament data, player information, and match results
- Real-time synchronization across all clients

### Realtime Database
- Live tournament updates during matches
- Real-time leaderboards and scoring

### Authentication
- User registration and login
- Secure access to tournament features

### Analytics
- Track tournament participation
- Monitor user engagement

## Key Components

### Tournament Management
- Create tournaments with various game modes
- Set entry fees and prize pools
- Manage participant limits
- Track tournament status (upcoming, active, completed)

### Player Features
- Join tournaments
- View tournament details
- Real-time match updates
- Leaderboards and statistics

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Adding New Features

1. **New Components**: Add to `src/components/`
2. **New Pages**: Add to `src/pages/`
3. **Firebase Operations**: Extend `src/services/tournamentService.ts`
4. **Types**: Update `src/types/tournament.ts`

## Security Notes

- Firebase configuration keys are public and safe for client-side use
- Implement Firebase Security Rules for database protection
- Use Firebase Auth for user verification before sensitive operations

## Future Enhancements

- [ ] Real-time chat during tournaments
- [ ] Advanced tournament brackets
- [ ] Payment integration for entry fees
- [ ] Mobile app version
- [ ] Tournament streaming integration
- [ ] Advanced statistics and analytics dashboard

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For support, email [your-email] or create an issue in this repository. 
