import React from 'react';
// FIX: Import ImpactData to use in the component's props.
import { StatCardData, ImpactData } from '../types';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // FIX: Broaden the type of the 'data' prop to accept both StatCardData and ImpactData.
  data: StatCardData | ImpactData | null;
}

const CheckIcon = () => (
    <svg className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data || !data.details) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      style={{ opacity: isOpen ? 1 : 0 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-800 border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-2xl p-8 transform transition-all duration-300"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}
      >
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-2xl font-bold text-white">{data.details.title}</h3>
                <p className="text-slate-400 mt-1">Detailed Breakdown</p>
            </div>
            <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
            >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6 border-t border-slate-700/50 pt-6">
          <ul className="space-y-4">
            {data.details.points.map((point, index) => (
              <li key={index} className="flex items-start text-slate-300">
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
