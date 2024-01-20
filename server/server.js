const express = require('express');
const sql = require('mssql');
const bcrypt = require('bcrypt');

const app = express();

// Configurazione della connessione al database
const config = {
    user: 'Mirko',
    password: '',
    server: '127.0.0.1',
    database: 'lupus_db.mdf',
    /*options: {
      encrypt: true, // Utilizzato se il database è su Azure
    },*/
  };
  
  // Connessione al database
  sql.connect(config)
    .then(() => console.log('Connessione al database riuscita'))
    .catch((err) => console.error('Errore di connessione al database', err));
  


    app.post('/api/login', async (req, res) => {
        const { username, password } = req.body;
      
        try {
          // Cerca l'utente nella tabella 'utenti'
          const findUserQuery = `SELECT * FROM utenti WHERE username = '${username}'`;
          const result = await sql.query(findUserQuery);
      
          if (result.recordset.length > 0) {
            // L'utente esiste, verifica la password
            const storedHashedPassword = result.recordset[0].password;
      
            const passwordMatch = await bcrypt.compare(password, storedHashedPassword);
      
            if (passwordMatch) {
              // L'utente è autenticato con successo
              res.status(200).json({ message: 'Login riuscito!' });
            } else {
              // La password non corrisponde
              res.status(401).json({ error: 'Credenziali non valide' });
            }
          } else {
            // L'utente non esiste
            res.status(404).json({ error: 'Utente non trovato' });
          }
        } catch (error) {
          console.error('Errore durante il login', error);
          res.status(500).json({ error: 'Errore interno del server' });
        }
      });


  // Altri endpoint del server
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
  });

  module.exports = app;