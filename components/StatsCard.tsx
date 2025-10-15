import React from 'react';
import { StatCardData } from '../types';

interface StatsCardProps {
    item: StatCardData;
    onClick: (item: StatCardData) => void;
}

export const StatsCard: React.FC<StatsCardProps> = ({ item, onClick }) => {
    const { icon, value, label, subLabel, details } = item;
    const isClickable = !!details;

    return (
        <div 
            onClick={() => isClickable && onClick(item)}
            className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 transform transition-transform duration-300 shadow-lg ${isClickable ? 'hover:-translate-y-1 hover:shadow-cyan-500/10 cursor-pointer' : ''}`}
        >
            <div className="flex items-start justify-between">
                <div className="flex-shrink-0">
                    {icon}
                </div>
            </div>
            <div className="mt-4">
                <p className="text-4xl font-bold text-white">{value}</p>
                <p className="text-md font-medium text-slate-300 mt-1">{label}</p>
                {subLabel && <p className="text-sm text-slate-400 mt-2">{subLabel}</p>}
            </div>
        </div>
    );
};