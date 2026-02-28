//This code communicates with our backend database, Supabase, and allows user to create an account via signup and login the user to the app
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Theme } from '../constants/Theme';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: Theme.colors.background }]}>
      <Text style={[styles.title, { color: Theme.colors.text }]}>Welcome to Clarity</Text>
      
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        placeholderTextColor="#888"
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        placeholderTextColor="#888"
        onChangeText={setPassword}
      />

      {/* Styled button using our Theme's primary color */}
      <TouchableOpacity style={[styles.button, { backgroundColor: Theme.colors.primary }]}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' },
  input: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: Theme.colors.border,
    fontSize: 16
  },
  button: { padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});