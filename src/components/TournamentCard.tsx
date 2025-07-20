import React from 'react';
import { Tournament } from '../types/tournament';

interface TournamentCardProps {
  tournament: Tournament;
  onJoin?: () => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, onJoin }) => {
  const getStatusColor = (status: Tournament['status']) => {
    switch (status) {
      case 'upcoming': return '#3b82f6';
      case 'active': return '#10b981';
      case 'completed': return '#6b7280';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: Tournament['status']) => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'active': return 'Live Now';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      border: '1px solid rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ 
            margin: '0 0 0.5rem 0', 
            fontSize: '1.25rem', 
            fontWeight: '700',
            color: '#1f2937'
          }}>
            {tournament.name}
          </h3>
          <p style={{ 
            margin: 0, 
            color: '#6b7280', 
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            {tournament.description}
          </p>
        </div>
        <span style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: 'white',
          background: getStatusColor(tournament.status),
          whiteSpace: 'nowrap'
        }}>
          {getStatusText(tournament.status)}
        </span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>PRIZE POOL</span>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', fontWeight: '700', color: '#059669' }}>
            ₹{tournament.prizePool.toLocaleString()}
          </p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>ENTRY FEE</span>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', fontWeight: '700', color: '#dc2626' }}>
            ₹{tournament.entryFee}
          </p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>PLAYERS</span>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', fontWeight: '700', color: '#374151' }}>
            {tournament.participants.length}/{tournament.maxPlayers}
          </p>
        </div>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>MODE</span>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem', fontWeight: '700', color: '#374151', textTransform: 'capitalize' }}>
            {tournament.gameMode}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>START TIME</span>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500' }}>MAP: {tournament.map}</span>
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600', color: '#374151' }}>
          {formatDate(tournament.startDate)}
        </p>
      </div>

      {tournament.status === 'upcoming' && onJoin && (
        <button
          onClick={onJoin}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Join Tournament
        </button>
      )}
    </div>
  );
};

export default TournamentCard;