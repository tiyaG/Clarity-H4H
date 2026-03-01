// lib/elevenlabs.js
// lib/elevenlabs.js
// Make sure to replace this with your actual key from ElevenLabs!
const ELEVEN_LABS_API_KEY = 'PASTE_YOUR_ELEVEN_LABS_KEY_HERE'; 

export const VOICE_OPTIONS = [
  { id: '21mOjcItqZ97isOfu9SE', name: 'Rachel', trait: 'Bubbly' },
  { id: 'AZnzlk1Xhk9WOUz8meFp', name: 'Nicole', trait: 'Calm' },
  { id: 'EXAVITQu4vr4PUHQRL6B', name: 'Bella', trait: 'Gentle' }
];

export const speakText = async (text, voiceId) => {
  // Uses the passed voiceId, or defaults to Rachel (Bubbly)
  const selectedVoice = voiceId || '21mOjcItqZ97isOfu9SE'; 

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVEN_LABS_API_KEY,
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );
    return response;
  } catch (error) {
    console.error("ElevenLabs Error:", error);
  }
};