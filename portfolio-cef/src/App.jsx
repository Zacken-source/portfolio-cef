import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

//Test function app with bootstrap and breakpoint

export default function App() {
  return (
    <Router>
      <header className="bg-dark text-white py-4">
        <div className="container">
          <h1>Portfolio John Doe</h1>
        </div>
      </header>

      <main className="container py-5">
        <h2>Bienvenue</h2>
        <p>Ceci est un test pour vérifier que Bootstrap et Nunito Sans fonctionnent.</p>
        
        <button className="btn btn-primary me-2">Bouton Primaire</button>
        <button className="btn btn-secondary">Bouton Secondaire</button>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Colonne 1</h5>
                <p className="card-text">Texte de test avec Nunito Sans.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Colonne 2</h5>
                <p className="card-text">Texte de test avec Nunito Sans.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Colonne 3</h5>
                <p className="card-text">Texte de test avec Nunito Sans.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}