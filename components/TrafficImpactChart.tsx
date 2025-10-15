import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TrafficImpactChartProps {
    data: any[];
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string; }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700 shadow-lg">
                <p className="font-bold text-slate-300 mb-2">{`Time: ${label}`}</p>
                {payload.map((p, i) => (
                    <p key={i} style={{ color: p.color }} className="text-sm">
                        {`${p.name}: ${p.value}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export const TrafficImpactChart: React.FC<TrafficImpactChartProps> = ({ data }) => {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">Projected Traffic Impact</h3>
            <p className="text-sm text-slate-400 mb-6">Comparing Negative Traffic Events (accidents, congestion) with and without the PAKNYA policy. Lower is better.</p>
            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="time" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" label={{ value: 'Event Index', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: '#475569', strokeDasharray: '3 3' }}
                        />
                        <Legend wrapperStyle={{ color: '#f1f5f9' }} />
                        <Line type="monotone" dataKey="Without Policy" stroke="#64748b" strokeWidth={2} name="Without Policy (Baseline)" dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="With Policy" stroke="#22d3ee" strokeWidth={2} name="With PAKNYA Policy" activeDot={{ r: 8 }} dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};