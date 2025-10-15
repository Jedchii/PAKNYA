import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CostData } from '../types';

interface CostBenefitChartProps {
    data: CostData[];
}

const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `₱${(value / 1_000_000).toFixed(0)}M`;
    }
    return `₱${value.toLocaleString()}`;
};

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string; }) => {
    if (active && payload && payload.length && payload[0].payload) {
        return (
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700 shadow-lg">
                <p className="font-bold text-slate-300 mb-2">{label}</p>
                <p style={{ color: payload[0].payload.name === 'PAKNYA' ? '#22d3ee' : '#64748b' }}>
                    {`Cost: ₱${Number(payload[0].value).toLocaleString()}`}
                </p>
            </div>
        );
    }
    return null;
};

const CustomizedLabel = (props: any) => {
    const { x, y, width, value, payload } = props;

    if (payload && payload.name === 'PAKNYA') {
        return (
            <text x={x + width / 2} y={y} dy={-4} fill="#f1f5f9" fontSize="12" textAnchor="middle">
                {value}
            </text>
        );
    }

    return null;
};


export const CostBenefitChart: React.FC<CostBenefitChartProps> = ({ data }) => {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-lg">
             <h3 className="text-2xl font-bold text-white mb-2">Cost Analysis: 85% Reduction</h3>
             <p className="text-sm text-slate-400 mb-6">
                The policy achieves significant savings by utilizing existing infrastructure instead of building new facilities. Low-cost QR scanners are deployed in partner stores, avoiding the high capital expenditure of a traditional rollout.
             </p>
            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 10, left: -15, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" tickFormatter={formatCurrency} />
                        <Tooltip
                            cursor={{ fill: 'rgba(100, 116, 139, 0.1)' }}
                            content={<CustomTooltip />}
                        />
                        <Bar dataKey="cost" name="Cost" label={<CustomizedLabel />}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.name === 'PAKNYA' ? '#22d3ee' : '#64748b'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};