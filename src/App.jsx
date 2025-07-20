import React, { useState, useEffect } from 'react'
import { auth, db, realtimeDb } from './firebase.js'
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { ref, set, get } from 'firebase/database'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    // Sign in anonymously if no user
    if (!auth.currentUser) {
      signInAnonymously(auth)
        .catch((error) => {
          console.error('Error signing in anonymously:', error)
        })
    }

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      // Load tournaments from Firebase Realtime Database
      const tournamentsRef = ref(realtimeDb, 'tournaments')
      get(tournamentsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            const tournamentsList = Object.keys(data).map(key => ({
              id: key,
              ...data[key]
            }))
            setTournaments(tournamentsList)
          }
        })
        .catch((error) => {
          console.error('Error loading tournaments:', error)
        })
    }
  }, [user])

  const createTournament = () => {
    const newTournament = {
      name: `Tournament ${Date.now()}`,
      status: 'registration',
      createdAt: Date.now(),
      participants: []
    }

    const tournamentsRef = ref(realtimeDb, 'tournaments')
    const newTournamentRef = ref(realtimeDb, `tournaments/${Date.now()}`)
    
    set(newTournamentRef, newTournament)
      .then(() => {
        console.log('Tournament created successfully')
      })
      .catch((error) => {
        console.error('Error creating tournament:', error)
      })
  }

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔥 Free Fire Tournament App</h1>
        {user && <p>Welcome, Player!</p>}
      </header>

      <main className="app-main">
        <div className="tournament-section">
          <div className="tournament-header">
            <h2>Tournaments</h2>
            <button onClick={createTournament} className="create-btn">
              Create Tournament
            </button>
          </div>

          <div className="tournaments-grid">
            {tournaments.length === 0 ? (
              <p className="no-tournaments">No tournaments available. Create one to get started!</p>
            ) : (
              tournaments.map((tournament) => (
                <div key={tournament.id} className="tournament-card">
                  <h3>{tournament.name}</h3>
                  <p>Status: <span className={`status ${tournament.status}`}>{tournament.status}</span></p>
                  <p>Participants: {tournament.participants?.length || 0}</p>
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