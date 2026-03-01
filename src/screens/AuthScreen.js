//This code communicates with our backend database, Supabase, and allows user to create an account via signup and login the user to the app
// This code communicates with our backend database, Supabase, and allows user to create an account via signup and login the user to the app
import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';
import { Theme } from '../constants/Theme';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  // UPDATED: No email confirmation required 
  async function signUpWithEmail() {
    setLoading(true);
    
    // This creates the user and logs them in immediately since confirmation is off in Supabase dashboard
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Error", error.message);
    } else if (data.session) {
      Alert.alert("Success!", "Account created and logged in.");
    } else {
      // Safety check in case the Supabase dashboard setting wasn't toggled off
      Alert.alert("Check your settings", "Make sure 'Confirm Email' is OFF in your Supabase project settings.");
    }
    
    setLoading(false);
  }

  return (
    <View style={[styles.container, { backgroundColor: Theme.colors.background }]}>
      <Text style={styles.header}>Clarity Auth</Text>
      
      <TextInput
        placeholderTextColor="#888"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={'none'}
        style={styles.input}
      />
      
      <TextInput
        placeholderTextColor="#888"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
        style={styles.input}
      />

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: Theme.colors.primary }]} 
        disabled={loading} 
        onPress={() => signInWithEmail()}
        activeOpacity={0.7} // Elegant "Bubble" effect feedback
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: Theme.colors.secondary }]} 
        disabled={loading} 
        onPress={() => signUpWithEmail()}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'left' // Tracking anchor for dyslexia-friendly design
  },
  input: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: '#ddd',
    fontSize: 16 
  },
  button: { 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 10 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});