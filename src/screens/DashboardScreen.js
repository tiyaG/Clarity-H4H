//dashboard screen of the app for users to interact with after they have logged in, this is where the main functionality of the app will be implemented
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Theme } from '../constants/Theme';

// We add { navigation } here so the buttons can switch screens
export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={[styles.container, { backgroundColor: Theme.colors.background }]}>
      
      {/* Research Source 22: Topic Badge */}
      <View style={styles.topicBadge}>
        <Text style={styles.topicText}>Topic: Dashboard</Text>
      </View>

      <Text style={[styles.header, { color: Theme.colors.text }]}>Welcome to Clarity</Text>
      
      {/* 🚀 INTEGRATED: Scan Card now connects to ScanToSpeech */}
      {/* activeOpacity={0.7} creates that elegant 'bubble' fade effect on press */}
      <TouchableOpacity 
        style={styles.mainCard}
        activeOpacity={0.7} 
        onPress={() => navigation.navigate('ScanToSpeech')}
      >
        <Text style={styles.cardTitle}>Scan New Text</Text>
        <Text style={styles.cardDesc}>
          Point your camera at a book or document to read with clarity.
        </Text>
      </TouchableOpacity>

      <View style={styles.optionsRow}>
        {/* History Button with Hover/Bubble effect */}
        <TouchableOpacity 
          style={[styles.smallCard, { backgroundColor: Theme.colors.secondary }]}
          activeOpacity={0.6}
          onPress={() => console.log('History Pressed')}
        >
          <Text style={styles.smallCardText}>History</Text>
        </TouchableOpacity>

        {/* Settings Button with Hover/Bubble effect */}
        <TouchableOpacity 
          style={[styles.smallCard, { backgroundColor: Theme.colors.accentBlue }]}
          activeOpacity={0.6}
          onPress={() => console.log('Settings Pressed')}
        >
          <Text style={styles.smallCardText}>Settings</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 25, 
    paddingTop: 60 
  },
  topicBadge: { 
    backgroundColor: '#d4e4f7', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 20, 
    alignSelf: 'flex-start', 
    marginBottom: 20 
  },
  topicText: { 
    color: '#2c5282', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  header: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'left' // Essential for dyslexic tracking
  },
  mainCard: { 
    backgroundColor: '#fff', 
    padding: 25, 
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: 'rgba(58, 58, 58, 0.15)', 
    marginBottom: 20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  cardDesc: { 
    fontSize: 16, 
    color: '#5a5a5a', 
    lineHeight: 24 // 1.5x spacing for readability
  },
  optionsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  smallCard: { 
    width: '48%', 
    padding: 20, 
    borderRadius: 12, 
    alignItems: 'center',
    // Elegant elevation for the small buttons
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  smallCardText: { 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});