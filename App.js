import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import server from './server.js';
import bcrypt from 'bcrypt';
import axios from 'axios';

export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1/api/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        // Login riuscito, puoi gestire ulteriori azioni qui
        console.log(response.data.message);
      } else {
        // Altri codici di stato possono essere gestiti qui
        console.error('Errore durante il login:', response.data.error);
      }
    } catch (error) {
      console.error('Errore durante la chiamata API:', error.message);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <Text style={[styles.titolo, styles.titleMargin]}>Benvenuto in Lupus in Fabula</Text>
      <View style={styles.form}>
        <View style={styles.divTitolo}>
          <Text style={[styles.titolo, styles.log]}>LOGIN</Text>
        </View>

        <View style={styles.inputForm}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.TxtInput} placeholder="Inserisci username" />
        </View>

        <View style={styles.inputForm}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.TxtInput} placeholder="Inserisci password" secureTextEntry={true} />
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.buttonForm}>
          <Text style={styles.buttonText}>Accedi</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009050',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: 60,
    width: 1000,
    backgroundColor: '#004030',
    position: 'absolute',
    top: 0,
  },
  titolo: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'monospace',
  },
  titleMargin: {
    textAlign: 'center',
    margin: 18,
  },
  divTitolo: {
    height: 60,
    width: 200,
    backgroundColor: '#004030',
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 20,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  TxtInput: {
    height: 40,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  label: {
    color: '#009050',
    fontSize: 18,
    fontFamily: 'monospace',
  },
  buttonForm: {
    backgroundColor: '#009050',
    height: 40,
    width: '70%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 18,
  },
  inputForm: {
    width: '100%',
  },
});

