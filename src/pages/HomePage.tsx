import React, { useState, useEffect } from 'react';
import { Tournament } from '../types/tournament';
import TournamentCard from '../components/TournamentCard';

// Mock data for demonstration
const mockTournaments: Tournament[] = [
  {
    id: '1',
    name: 'Free Fire Championship',
    description: 'The ultimate Free Fire tournament with amazing prizes!',
    maxPlayers: 100,
    entryFee: 50,
    prizePool: 10000,
    startDate: new Date('2024-02-01T18:00:00'),
    endDate: new Date('2024-02-01T20:00:00'),
    status: 'upcoming',
    gameMode: 'squad',
    map: 'Bermuda',
    rules: ['No hacking', 'Fair play only', 'Respect all players'],
    createdBy: 'admin',
    createdAt: new Date(),
    participants: []
  },
  {
    id: '2',
    name: 'Solo Survival Challenge',
    description: 'Test your solo skills in this intense survival challenge.',
    maxPlayers: 50,
    entryFee: 25,
    prizePool: 5000,
    startDate: new Date('2024-01-28T16:00:00'),
    endDate: new Date('2024-01-28T18:00:00'),
    status: 'active',
    gameMode: 'solo',
    map: 'Purgatory',
    rules: ['Solo only', 'No teaming', 'Survive to win'],
    createdBy: 'admin',
    createdAt: new Date(),
    participants: []
  },
  {
    id: '3',
    name: 'Duo Masters Tournament',
    description: 'Partner up and dominate in this duo tournament.',
    maxPlayers: 60,
    entryFee: 75,
    prizePool: 15000,
    startDate: new Date('2024-02-05T19:00:00'),
    endDate: new Date('2024-02-05T21:00:00'),
    status: 'upcoming',
    gameMode: 'duo',
    map: 'Kalahari',
    rules: ['Duo teams only', 'No substitutions', 'Communication allowed'],
    createdBy: 'admin',
    createdAt: new Date(),
    participants: []
  }
];

const HomePage: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading tournaments from Firebase
    setTimeout(() => {
      setTournaments(mockTournaments);
      setLoading(false);
    }, 1000);
  }, []);

  const handleJoinTournament = (tournamentId: string) => {
    console.log('Joining tournament:', tournamentId);
    // Here you would implement the logic to join a tournament
    // This would involve updating Firebase and the local state
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        fontSize: '1.2rem',
        color: '#6b7280'
      }}>
        Loading tournaments...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            Free Fire Tournaments
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join exciting Free Fire tournaments, compete with the best players, and win amazing prizes!
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏆</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', fontWeight: '700', color: '#1f2937' }}>
              {tournaments.length}
            </h3>
            <p style={{ margin: 0, color: '#6b7280' }}>Active Tournaments</p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💰</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', fontWeight: '700', color: '#1f2937' }}>
              ₹{tournaments.reduce((sum, t) => sum + t.prizePool, 0).toLocaleString()}
            </h3>
            <p style={{ margin: 0, color: '#6b7280' }}>Total Prize Pool</p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👥</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', fontWeight: '700', color: '#1f2937' }}>
              {tournaments.reduce((sum, t) => sum + t.maxPlayers, 0)}
            </h3>
            <p style={{ margin: 0, color: '#6b7280' }}>Total Slots</p>
          </div>
        </div>

        {/* Tournaments Section */}
        <div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Available Tournaments
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {tournaments.map((tournament) => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                onJoin={() => handleJoinTournament(tournament.id)}
              />
            ))}
          </div>
        </div>

        {tournaments.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6b7280'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No tournaments available</h3>
            <p>Check back later for new tournaments!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;