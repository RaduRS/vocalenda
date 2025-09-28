import { toast } from "sonner";

// Sample text for voice previews
const PREVIEW_TEXT = "Hello! Thank you for calling Vocalenda. How can I help you today?";

/**
 * Preview a Deepgram voice by generating and playing a sample audio
 * @param voiceId - The Deepgram voice ID (e.g., 'aura-2-thalia-en')
 */
export async function previewVoice(voiceId: string): Promise<void> {
  try {
    // Show loading state
    const loadingToast = toast.loading("Generating voice preview...");
    
    // Call our API endpoint to generate the audio
    const response = await fetch('/api/voice-preview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voice: voiceId,
        text: PREVIEW_TEXT,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to generate voice preview: ${response.statusText}`);
    }

    // Get the audio blob
    const audioBlob = await response.blob();
    
    // Create audio URL and play it
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    
    // Clean up the URL when audio ends
    audio.addEventListener('ended', () => {
      URL.revokeObjectURL(audioUrl);
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