export interface Player {
  id: string;
  name: string;
  gameId: string;
  email: string;
  phoneNumber?: string;
  avatar?: string;
  joinedAt: Date;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  maxPlayers: number;
  entryFee: number;
  prizePool: number;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  gameMode: 'solo' | 'duo' | 'squad';
  map: string;
  rules: string[];
  createdBy: string;
  createdAt: Date;
  participants: Player[];
}

export interface Match {
  id: string;
  tournamentId: string;
  round: number;
  players: Player[];
  roomId?: string;
  roomPassword?: string;
  status: 'pending' | 'active' | 'completed';
  startTime: Date;
  endTime?: Date;
  results?: MatchResult[];
}

export interface MatchResult {
  playerId: string;
  playerName: string;
  position: number;
  kills: number;
  points: number;
}