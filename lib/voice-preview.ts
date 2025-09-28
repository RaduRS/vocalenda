import { toast } from "sonner";

/**
 * Map voice IDs to their corresponding local audio file paths
 * @param voiceId - The Deepgram voice ID (e.g., 'aura-2-thalia-en')
 * @param useDemo - Whether to use demo recordings instead of voice previews
 * @returns The path to the local audio file
 */
function getLocalAudioPath(voiceId: string, useDemo: boolean = false): string | null {
  const BASE_PATH = useDemo 
    ? '/recordings/voice-demo/voice_sample_' 
    : '/recordings/voice-previews/voice_sample_';
  
  const voiceMap: Record<string, { name: string; accent: string; gender: string }> = {
    'aura-2-thalia-en': { name: 'Thalia', accent: 'American', gender: 'feminine' },
    'aura-2-orpheus-en': { name: 'Orpheus', accent: 'American', gender: 'masculine' },
    'aura-2-arcas-en': { name: 'Arcas', accent: 'American', gender: 'masculine' },
    'aura-2-apollo-en': { name: 'Apollo', accent: 'American', gender: 'masculine' },
    'aura-2-zeus-en': { name: 'Zeus', accent: 'American', gender: 'masculine' },
    'aura-2-orion-en': { name: 'Orion', accent: 'American', gender: 'masculine' },
    'aura-2-draco-en': { name: 'Draco', accent: 'British', gender: 'masculine' },
    'aura-2-luna-en': { name: 'Luna', accent: 'American', gender: 'feminine' },
    'aura-2-aurora-en': { name: 'Aurora', accent: 'American', gender: 'feminine' },
    'aura-2-athena-en': { name: 'Athena', accent: 'American', gender: 'feminine' },
    'aura-2-hera-en': { name: 'Hera', accent: 'American', gender: 'feminine' },
    'aura-2-asteria-en': { name: 'Asteria', accent: 'American', gender: 'feminine' },
  };
  
  const voice = voiceMap[voiceId];
  if (!voice) return null;
  
  return `${BASE_PATH}${voice.name}_${voice.accent}_${voice.gender}.mp3`;
}

/**
 * Get the demo recording path for a voice
 * @param voiceId - The Deepgram voice ID (e.g., 'aura-2-thalia-en')
 * @returns The path to the demo recording file
 */
export function getDemoRecordingPath(voiceId: string): string | null {
  return getLocalAudioPath(voiceId, true);
}

/**
 * Preview a voice by playing a local audio sample
 * @param voiceId - The Deepgram voice ID (e.g., 'aura-2-thalia-en')
 * @param useDemo - Whether to use demo recordings instead of voice previews
 */
export async function previewVoice(voiceId: string, useDemo: boolean = false): Promise<void> {
  try {
    // Show loading state
    const loadingToast = toast.loading("Loading voice preview...");
    
    // Get the local audio file path
    const audioPath = getLocalAudioPath(voiceId, useDemo);
    
    if (!audioPath) {
      throw new Error(`No audio sample available for voice: ${voiceId}`);
    }
    
    // Create audio element and load the local file
    const audio = new Audio(audioPath);
    
    // Wait for audio to load
    await new Promise((resolve, reject) => {
      audio.addEventListener('canplaythrough', resolve);
      audio.addEventListener('error', reject);
      audio.load();
    });
    
    // Play the audio
    await audio.play();
    
    // Dismiss loading toast
    toast.dismiss(loadingToast);
    toast.success("Playing voice preview");
    
  } catch (error) {
    console.error('Voice preview error:', error);
    toast.error("Failed to preview voice. Please try again.");
  }
}

/**
 * Preview a voice using demo recordings
 * @param voiceId - The Deepgram voice ID (e.g., 'aura-2-thalia-en')
 */
export async function previewVoiceDemo(voiceId: string): Promise<void> {
  return previewVoice(voiceId, true);
}

/**
 * Get a user-friendly display name for a voice ID
 * @param voiceId - The Deepgram voice ID
 * @returns Formatted display name
 */
export function getVoiceDisplayName(voiceId: string): string {
  const voiceMap: Record<string, string> = {
    'aura-2-thalia-en': 'Thalia (American, feminine)',
    'aura-2-orpheus-en': 'Orpheus (American, masculine)',
    'aura-2-arcas-en': 'Arcas (American, masculine)',
    'aura-2-apollo-en': 'Apollo (American, masculine)',
    'aura-2-zeus-en': 'Zeus (American, masculine)',
    'aura-2-orion-en': 'Orion (American, masculine)',
    'aura-2-draco-en': 'Draco (British, masculine)',
    'aura-2-luna-en': 'Luna (American, feminine)',
    'aura-2-aurora-en': 'Aurora (American, feminine)',
    'aura-2-athena-en': 'Athena (American, feminine)',
    'aura-2-hera-en': 'Hera (American, feminine)',
    'aura-2-asteria-en': 'Asteria (American, feminine)',
  };
  
  return voiceMap[voiceId] || voiceId;
}