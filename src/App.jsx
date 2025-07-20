import React, { useState, useEffect } from 'react'
import { auth, db, realtimeDb } from './firebase.js'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth'
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where 
} from 'firebase/firestore'
import { 
  ref, 
  set, 
  get, 
  push 
} from 'firebase/database'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        fetchTournaments()
      }
    })

    return () => unsubscribe()
  }, [])

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
    } catch (error) {
      console.error('Auth error:', error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const fetchTournaments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tournaments'))
      const tournamentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTournaments(tournamentsData)
    } catch (error) {
      console.error('Error fetching tournaments:', error)
    }
  }

  const createTournament = async () => {
    const tournamentName = prompt('Enter tournament name:')
    if (!tournamentName) return

    try {
      const docRef = await addDoc(collection(db, 'tournaments'), {
        name: tournamentName,
        createdBy: user.uid,
        createdAt: new Date().toISOString(),
        status: 'upcoming',
        participants: []
      })
      
      // Also add to realtime database for live updates
      await set(ref(realtimeDb, `tournaments/${docRef.id}`), {
        name: tournamentName,
        createdBy: user.uid,
        createdAt: new Date().toISOString(),
        status: 'upcoming',
        participants: []
      })

      fetchTournaments()
    } catch (error) {
      console.error('Error creating tournament:', error)
      alert('Failed to create tournament')
    }
  }

  if (!user) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1>🎮 Free Fire Tournament</h1>
          <form onSubmit={handleAuth}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
            </button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              className="link-button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎮 Free Fire Tournament Manager</h1>
        <div className="user-info">
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <main className="main">
        <div className="tournaments-section">
          <div className="section-header">
            <h2>Tournaments</h2>
            <button onClick={createTournament} className="create-btn">
              + Create Tournament
            </button>
          </div>

          <div className="tournaments-grid">
            {tournaments.length === 0 ? (
              <p className="no-tournaments">No tournaments yet. Create one to get started!</p>
            ) : (
              tournaments.map(tournament => (
                <div key={tournament.id} className="tournament-card">
                  <h3>{tournament.name}</h3>
                  <p className="status">Status: {tournament.status}</p>
                  <p className="participants">
                    Participants: {tournament.participants?.length || 0}
                  </p>
                  <button className="join-btn">Join Tournament</button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App