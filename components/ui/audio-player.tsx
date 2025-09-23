"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Loader2, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { Waveform } from './waveform';

interface AudioPlayerProps {
  src: string;
  title?: string;
  voiceName?: string;
  avatarUrl?: string;
  className?: string;
}

export function AudioPlayer({ src, title = "Audio", voiceName, avatarUrl, className = "" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canPlay, setCanPlay] = useState(false);

  // Format time in MM:SS format
  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle play/pause toggle
  const togglePlayPause = useCallback(async () => {
    if (!audioRef.current || !canPlay) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      }
    } catch (err) {
      console.error("Audio play error:", err);
      setError("Failed to play audio. Please check if the file exists and is accessible.");
    }
  }, [isPlaying, canPlay]);

  // Handle progress bar click for scrubbing
  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current || !canPlay) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration, canPlay]);

  // Handle waveform seek
  const handleWaveformSeek = useCallback((time: number) => {
    if (!audioRef.current || !canPlay) return;
    
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, [canPlay]);



  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset states when src changes
    setIsLoading(true);
    setError(null);
    setCanPlay(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    const handleCanPlay = () => {
      setCanPlay(true);
      setIsLoading(false);
      console.log("Audio can play");
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      console.log("Audio metadata loaded, duration:", audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      const target = e.target as HTMLAudioElement;
      let errorMessage = "Failed to load audio";
      
      if (target && target.error) {
        switch (target.error.code) {
          case target.error.MEDIA_ERR_ABORTED:
            errorMessage = "Audio loading was aborted";
            break;
          case target.error.MEDIA_ERR_NETWORK:
            errorMessage = "Network error while loading audio";
            break;
          case target.error.MEDIA_ERR_DECODE:
            errorMessage = "Audio format not supported";
            break;
          case target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMessage = "Audio file not found or format not supported";
            break;
        }
      }
      
      setError(errorMessage);
      setIsLoading(false);
      setCanPlay(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
      console.log("Audio loading started");
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleCanPlayThrough = () => {
      setIsLoading(false);
    };

    // Add event listeners
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);

    // Load the audio
    audio.load();

    // Cleanup
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [src]);

  // Calculate progress percentage
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-red-600 text-sm">{error}</p>
        </div>
        <p className="text-red-500 text-xs mt-1">File: {src}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        crossOrigin="anonymous"
      />
      
      {/* Top Section: Avatar + Title/Badge */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4">
          {/* Avatar on top left */}
          <div className="flex-shrink-0">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="User avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {voiceName ? voiceName.charAt(0).toUpperCase() : 'A'}
                </span>
              </div>
            )}
          </div>

          {/* Title and Badge on the right */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
            )}
            
            {/* Voice Name Badge */}
            {voiceName && (
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {voiceName}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section: Play Button + Waveform */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-3">
          {/* Play/Pause button */}
          <Button
            onClick={togglePlayPause}
            disabled={isLoading || !canPlay}
            size="sm"
            className="flex-shrink-0 w-12 h-12 rounded-full p-0 bg-blue-600 hover:bg-blue-700"
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
      </div>
    </div>
  );
}