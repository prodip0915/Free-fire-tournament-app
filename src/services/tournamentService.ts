import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { ref, set, onValue, off } from 'firebase/database';
import { firestore, database } from '../config/firebase';
import { Tournament, Player } from '../types/tournament';

export class TournamentService {
  // Firestore operations for tournaments
  static async createTournament(tournament: Omit<Tournament, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(firestore, 'tournaments'), {
        ...tournament,
        createdAt: Timestamp.now(),
        startDate: Timestamp.fromDate(tournament.startDate),
        endDate: Timestamp.fromDate(tournament.endDate)
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating tournament:', error);
      throw error;
    }
  }

  static async getTournaments(): Promise<Tournament[]> {
    try {
      const q = query(
        collection(firestore, 'tournaments'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        startDate: doc.data().startDate.toDate(),
        endDate: doc.data().endDate.toDate(),
        createdAt: doc.data().createdAt.toDate()
      })) as Tournament[];
    } catch (error) {
      console.error('Error getting tournaments:', error);
      throw error;
    }
  }

  static async updateTournament(id: string, updates: Partial<Tournament>): Promise<void> {
    try {
      const tournamentRef = doc(firestore, 'tournaments', id);
      await updateDoc(tournamentRef, updates);
    } catch (error) {
      console.error('Error updating tournament:', error);
      throw error;
    }
  }

  static async deleteTournament(id: string): Promise<void> {
    try {
      await deleteDoc(doc(firestore, 'tournaments', id));
    } catch (error) {
      console.error('Error deleting tournament:', error);
      throw error;
    }
  }

  static async joinTournament(tournamentId: string, player: Player): Promise<void> {
    try {
      // You would implement logic to add player to participants array
      // This is a simplified example
      console.log('Joining tournament:', tournamentId, 'Player:', player);
      // Example: await updateDoc(doc(firestore, 'tournaments', tournamentId), {
      //   participants: arrayUnion(player)
      // });
    } catch (error) {
      console.error('Error joining tournament:', error);
      throw error;
    }
  }

  // Real-time database operations for live tournament data
  static subscribeToLiveTournament(tournamentId: string, callback: (data: any) => void): () => void {
    const tournamentRef = ref(database, `live_tournaments/${tournamentId}`);
    
    onValue(tournamentRef, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });

    // Return unsubscribe function
    return () => off(tournamentRef);
  }

  static async updateLiveTournamentData(tournamentId: string, data: any): Promise<void> {
    try {
      const tournamentRef = ref(database, `live_tournaments/${tournamentId}`);
      await set(tournamentRef, data);
    } catch (error) {
      console.error('Error updating live tournament data:', error);
      throw error;
    }
  }

  // Analytics tracking
  static trackTournamentView(tournamentId: string): void {
    // You can use Firebase Analytics here
    console.log('Tournament viewed:', tournamentId);
    // analytics.logEvent('tournament_viewed', { tournament_id: tournamentId });
  }

  static trackTournamentJoin(tournamentId: string, playerId: string): void {
    // You can use Firebase Analytics here
    console.log('Tournament joined:', tournamentId, 'by player:', playerId);
    // analytics.logEvent('tournament_joined', { 
    //   tournament_id: tournamentId, 
    //   player_id: playerId 
    // });
  }
}

export default TournamentService;