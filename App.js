import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { serverLink } from './global/global_variables';
import { use } from 'express/lib/router';
import Login from './screens/login';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.top} />
        <Login>
          
        </Login>
      <StatusBar style="dark-content" />
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
  congiunzione:{
    color: '#000',
    margin: 3,
  },
  link:{
    fontSize: 17,
    color: '#004030',
    margin: 3
  }
});

export default App;