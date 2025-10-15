import React from 'react';

export interface StatCardData {
  icon: React.ReactNode;
  value: string;
  label: string;
  subLabel?: string;
  details?: {
    title: string;
    points: string[];
  };
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CostData {
  name: string;
  cost: number;
  label: string;
}

export interface InnovationData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ImpactData {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: {
    title: string;
    points: string[];
  };
}