import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './GitHubModal.css';

const cache = {};

function GitHubModal({ username, isOpen, onClose }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubData = useCallback(async () => {
    if (cache[username]) {
      setUserData(cache[username]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      cache[username] = response.data;
      setUserData(response.data);
    } catch (err) {
      setError('Impossible de charger les données GitHub');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    if (isOpen && username) {
      fetchGitHubData();
    }
  }, [isOpen, username, fetchGitHubData]);
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal-overlay" 
        onClick={onClose}
        role="presentation"
      />

      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content github-modal">

            <div className="modal-header">
              <h5 className="modal-title">
                <i className="bi bi-github me-2"></i>
                Profil GitHub
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose}
                aria-label="Fermer"
              ></button>
            </div>
            <div className="modal-body">
              {loading && (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                  <p className="mt-3">Chargement des données...</p>
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}

              {userData && !loading && (
                <div className="github-user-info">

                  <div className="text-center mb-4">
                    <img 
                      src={userData.avatar_url} 
                      alt={userData.name || userData.login}
                      className="github-avatar"
                    />
                  </div>

                  <div className="user-details">
                    <h4 className="text-center mb-2">
                      {userData.name || userData.login}
                    </h4>
                    <p className="text-center text-muted mb-3">
                      @{userData.login}
                    </p>

                    {userData.bio && (
                      <p className="text-center mb-4 text-muted">
                        {userData.bio}
                      </p>
                    )}

                    <div className="row text-center">
                      <div className="col-4">
                        <div className="stat-box">
                          <h5 className="mb-0">{userData.public_repos}</h5>
                          <small className="text-muted">Repositories</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-box">
                          <h5 className="mb-0">{userData.followers}</h5>
                          <small className="text-muted">Followers</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-box">
                          <h5 className="mb-0">{userData.following}</h5>
                          <small className="text-muted">Following</small>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <a 
                        href={userData.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                      >
                        <i className="bi bi-github me-2"></i>
                        Voir sur GitHub
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

GitHubModal.propTypes = {
  username: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GitHubModal;