// screens/ScanToSpeechScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av'; // Make sure you ran the --force install for this!
import { speakText, VOICE_OPTIONS } from '../lib/elevenlabs';

export default function ScanToSpeechScreen({ route }) {
  const { scannedText } = route.params;
  const [selectedVoice, setSelectedVoice] = useState(VOICE_OPTIONS[0].id);
  const [loading, setLoading] = useState(false);

  async function handlePlayAudio() {
    setLoading(true);
    try {
      const response = await speakText(scannedText, selectedVoice);
      const audioBlob = await response.blob();
      
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const { sound } = await Audio.Sound.createAsync(
          { uri: reader.result },
          { shouldPlay: true }
        );
        setLoading(false);
      };
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>AI Voice Reader</Text>
      <View style={styles.box}><Text style={styles.txt}>{scannedText}</Text></View>

      <Text style={styles.label}>Select Tone:</Text>
      <View style={styles.row}>
        {VOICE_OPTIONS.map((v) => (
          <TouchableOpacity 
            key={v.id} 
            style={[styles.bubble, selectedVoice === v.id && styles.active, 
                   v.trait === 'Bubbly' && {borderColor: '#FFD700'}]} 
            onPress={() => setSelectedVoice(v.id)}
          >
            <Text style={{fontSize: 20}}>{v.trait === 'Bubbly' ? '✨' : v.trait === 'Calm' ? '🌊' : '☁️'}</Text>
            <Text style={styles.trait}>{v.trait}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.play} onPress={handlePlayAudio}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.playTxt}>🔊 Play Audio</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf8f3', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  box: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 20 },
  txt: { fontSize: 18, lineHeight: 26 },
  label: { fontWeight: '600', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  bubble: { width: '30%', padding: 10, borderRadius: 15, backgroundColor: '#fff', alignItems: 'center', borderWidth: 2, borderColor: 'transparent' },
  active: { backgroundColor: '#f0f7ff', transform: [{scale: 1.05}] },
  trait: { fontSize: 12, fontWeight: 'bold', marginTop: 5 },
  play: { backgroundColor: '#4A90E2', padding: 20, borderRadius: 15, alignItems: 'center' },
  playTxt: { color: '#fff', fontSize: 18, fontWeight: '700' }
});