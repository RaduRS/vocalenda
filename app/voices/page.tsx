"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2, Play, Pause, Loader2 } from "lucide-react";
import { Waveform } from "@/components/ui/waveform";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

// Voice data with demo recordings and avatars
const voices = [
  {
    id: 'aura-2-thalia-en',
    name: 'Thalia',
    accent: 'American',
    gender: 'feminine',
    description: 'Warm and professional voice perfect for customer service',
    demoPath: '/recordings/voice-demo/voice_sample_Thalia_American_feminine.mp3',
    avatarPath: '/recordings/avatars/Thalia.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-orpheus-en',
    name: 'Orpheus',
    accent: 'American',
    gender: 'masculine',
    description: 'Confident and trustworthy voice ideal for business calls',
    demoPath: '/recordings/voice-demo/voice_sample_Orpheus_American_masculine.mp3',
    avatarPath: null,
    hasAvatar: false,
  },
  {
    id: 'aura-2-arcas-en',
    name: 'Arcas',
    accent: 'American',
    gender: 'masculine',
    description: 'Clear and articulate voice great for appointments',
    demoPath: '/recordings/voice-demo/voice_sample_Arcas_American_masculine.mp3',
    avatarPath: '/recordings/avatars/Arcas.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-apollo-en',
    name: 'Apollo',
    accent: 'American',
    gender: 'masculine',
    description: 'Energetic and friendly voice for engaging conversations',
    demoPath: '/recordings/voice-demo/voice_sample_Apollo_American_masculine.mp3',
    avatarPath: '/recordings/avatars/Apollo.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-zeus-en',
    name: 'Zeus',
    accent: 'American',
    gender: 'masculine',
    description: 'Authoritative and commanding voice for professional settings',
    demoPath: '/recordings/voice-demo/voice_sample_Zeus_American_masculine.mp3',
    avatarPath: null,
    hasAvatar: false,
  },
  {
    id: 'aura-2-orion-en',
    name: 'Orion',
    accent: 'American',
    gender: 'masculine',
    description: 'Smooth and calming voice perfect for healthcare',
    demoPath: '/recordings/voice-demo/voice_sample_Orion_American_masculine.mp3',
    avatarPath: '/recordings/avatars/Orion.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-draco-en',
    name: 'Draco',
    accent: 'British',
    gender: 'masculine',
    description: 'Sophisticated British accent for premium services',
    demoPath: '/recordings/voice-demo/voice_sample_Draco_British_masculine.mp3',
    avatarPath: '/recordings/avatars/Draco.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-luna-en',
    name: 'Luna',
    accent: 'American',
    gender: 'feminine',
    description: 'Gentle and reassuring voice ideal for wellness businesses',
    demoPath: '/recordings/voice-demo/voice_sample_Luna_American_feminine.mp3',
    avatarPath: '/recordings/avatars/Luna.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-aurora-en',
    name: 'Aurora',
    accent: 'American',
    gender: 'feminine',
    description: 'Bright and cheerful voice great for retail and hospitality',
    demoPath: '/recordings/voice-demo/voice_sample_Aurora_American_feminine.mp3',
    avatarPath: null,
    hasAvatar: false,
  },
  {
    id: 'aura-2-athena-en',
    name: 'Athena',
    accent: 'American',
    gender: 'feminine',
    description: 'Intelligent and articulate voice perfect for professional services',
    demoPath: '/recordings/voice-demo/voice_sample_Athena_American_feminine.mp3',
    avatarPath: '/recordings/avatars/Athena.jpg',
    hasAvatar: true,
  },
  {
    id: 'aura-2-hera-en',
    name: 'Hera',
    accent: 'American',
    gender: 'feminine',
    description: 'Elegant and sophisticated voice for luxury brands',
    demoPath: '/recordings/voice-demo/voice_sample_Hera_American_feminine.mp3',
    avatarPath: null,
    hasAvatar: false,
  },
  {
    id: 'aura-2-asteria-en',
    name: 'Asteria',
    accent: 'American',
    gender: 'feminine',
    description: 'Versatile and adaptable voice suitable for any business',
    demoPath: '/recordings/voice-demo/voice_sample_Asteria_American_feminine.mp3',
    avatarPath: '/recordings/avatars/Asteria.jpg',
    hasAvatar: true,
  },
];

type FilterType = 'all' | 'feminine' | 'masculine';

// Custom Voice Player Component (only waveform + play button)
function VoicePlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [canPlay, setCanPlay] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateTime = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setCanPlay(true);
      setIsLoading(false);
      setError(null);
      console.log('Audio loaded successfully:', src);
    }
  }, [src]);

  const handleError = useCallback((e: Event) => {
    console.error('Audio loading error:', e, 'Source:', src);
    setError('Failed to load audio');
    setIsLoading(false);
    setCanPlay(false);
  }, [src]);

  const handleCanPlayThrough = useCallback(() => {
    setCanPlay(true);
    setIsLoading(false);
    console.log('Audio can play through:', src);
  }, [src]);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  const handleWaveformSeek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const togglePlayPause = useCallback(async () => {
    if (!audioRef.current) {
      console.error('Audio ref not available');
      return;
    }

    if (!canPlay) {
      console.log('Audio not ready to play yet');
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log('Audio paused');
      } else {
        setIsLoading(true);
        console.log('Attempting to play audio:', src);
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
        console.log('Audio playing successfully');
      }
    } catch (error) {
      console.error('Audio playback failed:', error, 'Source:', src);
      setError('Playback failed');
      setIsLoading(false);
    }
  }, [isPlaying, canPlay, src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset states when src changes
    setIsLoading(true);
    setCanPlay(false);
    setError(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    // Force load
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [src, updateTime, handleLoadedMetadata, handleCanPlayThrough, handleError, handleEnded]);

  if (error) {
    return (
      <div className="flex items-center gap-3 text-red-500 text-sm">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <Play className="w-5 h-5 text-red-500" />
        </div>
        <span>Audio unavailable</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
      />
      
      {/* Play/Pause button */}
      <Button
        onClick={togglePlayPause}
        disabled={isLoading || !canPlay}
        size="sm"
        className="flex-shrink-0 w-12 h-12 rounded-full p-0 bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin text-white" />
        ) : isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </Button>
      
      {/* Waveform */}
      <div className="flex-1">
        <Waveform
          audioRef={audioRef}
          currentTime={currentTime}
          duration={duration}
          isPlaying={isPlaying}
          onSeek={handleWaveformSeek}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default function VoicesPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const filteredVoices = voices.filter(voice => {
    if (selectedFilter === 'all') return true;
    return voice.gender === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">


      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4">
              <Volume2 className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                <span className="text-blue-600">AI Voice Assistants</span> for Business
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Discover premium AI voice assistants for your business phone system. Our natural-sounding 
              voices handle customer calls, book appointments, and provide 24/7 support with human-like 
              conversation quality that builds trust and drives results.
            </p>
            <div className="flex items-center justify-center text-blue-600 mb-8">
              <Volume2 className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Preview each AI voice assistant with live audio samples</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 border border-slate-200 inline-flex">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({voices.length})
              </button>
              <button
                onClick={() => setSelectedFilter('feminine')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedFilter === 'feminine'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Female ({voices.filter(v => v.gender === 'feminine').length})
              </button>
              <button
                onClick={() => setSelectedFilter('masculine')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedFilter === 'masculine'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Male ({voices.filter(v => v.gender === 'masculine').length})
              </button>
            </div>
          </div>

          {/* Voices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredVoices.map((voice) => (
              <Card key={voice.id} className="overflow-hidden hover:shadow-lg transition-shadow py-0">
                <CardContent className="p-0">
                  {/* Custom header with avatar, name, and badge */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        {voice.hasAvatar && voice.avatarPath ? (
                          <Image
                            src={voice.avatarPath}
                            alt={`${voice.name} avatar`}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-gray-500 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">
                              {voice.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Name and Badge */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{voice.name}</h3>
                          <Badge variant="outline" className={`text-xs ${
                            voice.gender === 'feminine' 
                              ? 'bg-pink-50 text-pink-700 border-pink-200' 
                              : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}>
                            {voice.gender === 'feminine' ? 'Female' : 'Male'}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600">{voice.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Audio controls */}
                  <div className="px-6 pb-6">
                    <VoicePlayer src={voice.demoPath} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 sm:p-12 border border-slate-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Choose your perfect AI voice and set up your 24/7 receptionist in minutes.
              Start taking calls and booking appointments automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/setup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Start Free Setup
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}