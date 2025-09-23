"use client";

import React, { useEffect, useRef, useState } from 'react';

interface WaveformProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  onSeek: (time: number) => void;
  className?: string;
}

export function Waveform({ audioRef, currentTime, duration, isPlaying, onSeek, className = "" }: WaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Generate waveform data from audio
  useEffect(() => {
    if (!audioRef.current || isAnalyzing) return;

    const analyzeAudio = async () => {
      setIsAnalyzing(true);
      try {
        const audio = audioRef.current;
        if (!audio) return;

        // Create audio context for analysis
        const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioContext = new AudioContextClass();
        const response = await fetch(audio.src);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Get audio data from the first channel
        const channelData = audioBuffer.getChannelData(0);
        const samples = 100; // Number of bars in waveform
        const blockSize = Math.floor(channelData.length / samples);
        const waveform: number[] = [];

        // Calculate RMS (Root Mean Square) for each block
        for (let i = 0; i < samples; i++) {
          const start = i * blockSize;
          const end = start + blockSize;
          let sum = 0;
          
          for (let j = start; j < end && j < channelData.length; j++) {
            sum += channelData[j] * channelData[j];
          }
          
          const rms = Math.sqrt(sum / blockSize);
          // Normalize and amplify for better visualization
          waveform.push(Math.min(1, rms * 4));
        }

        setWaveformData(waveform);
        audioContext.close();
      } catch (error) {
        console.error('Error analyzing audio:', error);
        // Generate fallback waveform data
        const fallbackData = Array.from({ length: 100 }, () => Math.random() * 0.8 + 0.1);
        setWaveformData(fallbackData);
      } finally {
        setIsAnalyzing(false);
      }
    };

    if (audioRef.current && audioRef.current.src) {
      analyzeAudio();
    }
  }, [audioRef.current?.src]);

  // Draw waveform on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || waveformData.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const barWidth = width / waveformData.length;
    const progressRatio = duration > 0 ? currentTime / duration : 0;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw waveform bars
    waveformData.forEach((amplitude, index) => {
      const barHeight = amplitude * height * 0.8;
      const x = index * barWidth;
      const y = (height - barHeight) / 2;

      // Determine bar color based on progress
      const isPlayed = index / waveformData.length <= progressRatio;
      ctx.fillStyle = isPlayed ? '#3b82f6' : '#e5e7eb'; // Blue for played, gray for unplayed

      // Draw rounded rectangle bar
      const radius = Math.min(barWidth / 4, 2);
      ctx.beginPath();
      ctx.roundRect(x + 1, y, barWidth - 2, barHeight, radius);
      ctx.fill();
    });
  }, [waveformData, currentTime, duration]);

  // Handle click on waveform for seeking
  const handleWaveformClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || duration === 0) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    const seekTime = clickRatio * duration;

    onSeek(seekTime);
  };

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        width={400}
        height={60}
        className="w-full h-15 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleWaveformClick}
        style={{ maxHeight: '60px' }}
      />
      {isAnalyzing && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <div className="text-xs text-gray-500">Analyzing audio...</div>
        </div>
      )}
    </div>
  );
}