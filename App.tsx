import React, { useState } from 'react';
import { StatsCard } from './components/StatsCard';
import { CostBenefitChart } from './components/CostBenefitChart';
import { DetailsModal } from './components/DetailsModal';
import { TrafficImpactChart } from './components/TrafficImpactChart';
import { KEY_STATS, IMPLEMENTATION_TIMELINE, COST_COMPARISON_DATA, INNOVATION_ELEMENTS, MEASURABLE_IMPACT_DATA, ECONOMIC_SAFETY_STATS, TRAFFIC_IMPACT_DATA } from './constants';
import { TimelinePhase, InnovationData, ImpactData, StatCardData } from './types';

const TimelineItem: React.FC<{ item: TimelinePhase; index: number }> = ({ item, index }) => (
    <div className={`flex md:flex-row flex-col md:items-center w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-5/12"></div>
        <div className="md:w-2/12 flex justify-center">
            <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-lg">
                {item.icon}
            </div>
        </div>
        <div className="md:w-5/12 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-lg mt-4 md:mt-0">
            <p className="text-sm font-semibold text-sky-400">{item.phase} ({item.duration})</p>
            <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
            <p className="text-slate-400 mt-2">{item.description}</p>
        </div>
    </div>
);

const InnovationCard: React.FC<{ item: InnovationData }> = ({ item }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center shadow-lg">
        <div className="bg-slate-700 p-3 rounded-full mb-4">
            {item.icon}
        </div>
        <h4 className="text-xl font-bold text-white">{item.title}</h4>
        <p className="text-slate-400 mt-2 text-sm">{item.description}</p>
    </div>
);

const ImpactCard: React.FC<{ item: ImpactData; onClick: (item: ImpactData) => void }> = ({ item, onClick }) => {
    const isClickable = !!item.details;
    return (
        <div
            onClick={() => isClickable && onClick(item)}
            className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-lg flex flex-col ${isClickable ? 'hover:-translate-y-1 hover:shadow-cyan-500/10 cursor-pointer transform transition-transform duration-300' : ''}`}
        >
            <div className="flex items-center mb-4">
                <div className="bg-slate-700 p-3 rounded-full mr-4 flex-shrink-0">
                    {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
            </div>
            <p className="text-slate-400 text-sm">{item.description}</p>
        </div>
    );
};


function App() {
    const [selectedStat, setSelectedStat] = useState<StatCardData | ImpactData | null>(null);

    const handleCardClick = (stat: StatCardData | ImpactData) => {
        if (stat.details) {
            setSelectedStat(stat);
        }
    };

    const closeModal = () => {
        setSelectedStat(null);
    };

    return (
        <div className="min-h-screen text-slate-200 bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="container mx-auto px-4 py-12 md:py-20">

                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                        Pahinga-K-Naman-Ya (PAKNYA) Policy
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-4">
                        Maximizing Feasibility Through Existing Infrastructure for a Safer Philippines.
                    </p>
                </header>

                {/* Key Stats Grid */}
                <section id="stats" className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-white mb-10">Key Feasibility Metrics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {KEY_STATS.map((stat, index) => (
                            <StatsCard key={index} item={stat} onClick={handleCardClick} />
                        ))}
                    </div>
                </section>

                 {/* Economic & Safety Impact */}
                <section id="impact-stats" className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-white mb-10">Projected Economic & Safety Impact</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ECONOMIC_SAFETY_STATS.map((stat, index) => (
                            <StatsCard key={index} item={stat} onClick={handleCardClick} />
                        ))}
                    </div>
                </section>

                {/* Implementation Timeline */}
                <section id="timeline" className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">Implementation Strategy</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 h-full w-1 bg-slate-700/50 rounded-full hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
                        {IMPLEMENTATION_TIMELINE.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </section>

                {/* Cost Analysis & Innovation */}
                <section id="cost-innovation" className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-white mb-10">Technology & Cost-Efficiency</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <CostBenefitChart data={COST_COMPARISON_DATA} />

                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Innovation Elements</h3>
                            <div className="grid grid-cols-1 gap-6">
                                {INNOVATION_ELEMENTS.map((item, index) => (
                                    <InnovationCard key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* National Traffic Impact */}
                <section id="traffic-impact" className="mb-20">
                     <h2 className="text-3xl font-bold text-center text-white mb-10">Projected National Traffic Impact</h2>
                    <TrafficImpactChart data={TRAFFIC_IMPACT_DATA} />
                </section>

                {/* Measurable Innovation Impact */}
                <section id="impact">
                    <h2 className="text-3xl font-bold text-center text-white mb-10">Measurable Innovation Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {MEASURABLE_IMPACT_DATA.map((item, index) => (
                            <ImpactCard key={index} item={item} onClick={handleCardClick} />
                        ))}
                    </div>
                </section>


                {/* Footer */}
                <footer className="text-center mt-20 text-slate-500">
                    <p>The PAKNYA Policy achieves maximum innovation through minimal disruption.</p>
                    <p className="text-sm mt-2">A data-driven approach to proactive fatigue prevention.</p>
                    <div className="mt-8 border-t border-slate-700/50 pt-6">
                        <h4 className="font-semibold text-slate-400">Data Sources</h4>
                        <p className="text-xs mt-2 max-w-2xl mx-auto">
                            Statistics derived from GCash Public Reports, LTO Database, Statista, DataReportal, DOTr Mandates, and public data from industry partners like Petron, Shell, and 7-Eleven.
                        </p>
                    </div>
                </footer>

                <DetailsModal 
                    isOpen={selectedStat !== null}
                    onClose={closeModal}
                    data={selectedStat}
                />

            </div>
        </div>
    );
}

export default App;