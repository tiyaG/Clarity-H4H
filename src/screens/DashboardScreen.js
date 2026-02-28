//dashboard screen of the app for users to interact with after they have logged in, this is where the main functionality of the app will be implemented
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Theme } from '../constants/Theme';

export default function DashboardScreen() {
  return (
    <ScrollView style={[styles.container, { backgroundColor: Theme.colors.background }]}>
      {/* Research Source 22: Topic Badge */}
      <View style={styles.topicBadge}>
        <Text style={styles.topicText}>Topic: Dashboard</Text>
      </View>

      <Text style={[styles.header, { color: Theme.colors.text }]}>Welcome to Clarity</Text>
      
      {/* Research Source 10: Small, digestible blocks */}
      <TouchableOpacity style={styles.mainCard}>
        <Text style={styles.cardTitle}>Scan New Text</Text>
        <Text style={styles.cardDesc}>Point your camera at a book or document to read with clarity.</Text>
      </TouchableOpacity>

      <View style={styles.optionsRow}>
        <TouchableOpacity style={[styles.smallCard, { backgroundColor: Theme.colors.secondary }]}>
          <Text style={styles.smallCardText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallCard, { backgroundColor: Theme.colors.accentBlue }]}>
          <Text style={styles.smallCardText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, paddingTop: 60 },
  topicBadge: { 
    backgroundColor: '#d4e4f7', // Soft blue feature highlight [cite: 52, 53]
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 20, 
    alignSelf: 'flex-start', 
    marginBottom: 20 
  },
  topicText: { color: '#2c5282', fontWeight: 'bold', fontSize: 14 }, // Deep blue accent [cite: 49, 50]
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'left' }, // Left aligned 
  mainCard: { 
    backgroundColor: '#fff', 
    padding: 25, 
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: 'rgba(58, 58, 58, 0.15)', // Subtle border [cite: 59, 60]
    marginBottom: 20,
    elevation: 3
  },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  cardDesc: { fontSize: 16, color: '#5a5a5a', lineHeight: 24 }, // Muted text [cite: 56, 57]
  optionsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  smallCard: { width: '48%', padding: 20, borderRadius: 12, alignItems: 'center' },
  smallCardText: { fontWeight: 'bold', fontSize: 16 }
});