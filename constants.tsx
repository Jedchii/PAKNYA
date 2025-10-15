import React from 'react';
import { StatCardData, TimelinePhase, CostData, InnovationData, ImpactData } from './types';

const NetworkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);

const SmartphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const MobileWebIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GasStationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zM8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4.062c0 .466.18.913.5 1.25l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a1.75 1.75 0 0 1-2.5 0l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5c.32-.337.5-.784.5-1.25V7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0v-2.5" />
    </svg>
);

const CarIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.761 0-5 2.239-5 5h10c0-2.761-2.239-5-5-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12h2a1 1 0 011 1v4a1 1 0 01-1 1h-2m-16 0H3a1 1 0 01-1-1v-4a1 1 0 011-1h2" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.134-1.276-.38-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.134-1.276.38-1.857m0 0a5 5 0 017.24 0M12 15a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 00-14 0c0 1.956.812 3.73 2.118 4.994l.882.882a1 1 0 001.414 0l.882-.882A6.974 6.974 0 0019 11z" />
    </svg>
);

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const RevolutionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.94-1.88a1 1 0 011.786 0l.94 1.88M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

const SavingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1m-4 0h-4v-1h4m0-4h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0 12.02 12.02 0 00-2.382-8.984z" />
    </svg>
);

const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export const KEY_STATS: StatCardData[] = [
    {
        icon: <NetworkIcon />,
        value: "4,200+",
        label: "Instant Rest Hubs",
        subLabel: "Existing convenience stores & gas stations",
        details: {
            title: "High Feasibility via Existing Networks",
            points: [
                "Utilizes a massive pre-existing network of over 4,200 nationwide convenience stores and gas stations to serve as 'Rest Compliance Points.'",
                "These locations offer 24/7 operations and are already equipped with essential infrastructure like Wi-Fi and CCTV, covering major transport routes.",
                "This strategy leads to an 85% reduction in implementation costs compared to building new facilities from scratch."
            ]
        }
    },
    {
        icon: <WalletIcon />,
        value: "94M",
        label: "GCash Users",
        subLabel: "80% of adult population ready for digital integration",
        details: {
            title: "Seamless Digital Integration",
            points: [
                "Taps into 94 million existing GCash users, which represents 80% of the Philippines' adult population.",
                "Leverages the nation's 397 million mobile wallet accounts and the explosive growth of QR payments (2,800% merchant increase in 2023).",
                "This ensures the policy can be rolled out quickly and efficiently without needing to build a new user base or payment system."
            ]
        }
    },
    {
        icon: <SmartphoneIcon />,
        value: "75.6%",
        label: "Smartphone Penetration",
        subLabel: "97.5M internet users ensure national coverage",
        details: {
            title: "Mobile-First Infrastructure",
            points: [
                "With 75.6% smartphone penetration and 97.5 million internet users, the policy uses technology already in the hands of drivers and the public.",
                "This eliminates the need for expensive, proprietary hardware for compliance checks.",
                "Drivers can use their own phones for QR code scanning and GPS verification, making the system accessible and affordable."
            ]
        }
    },
    {
        icon: <MobileWebIcon />,
        value: "87.6%",
        label: "Mobile-First Behavior",
        subLabel: "of web traffic comes from mobile devices",
        details: {
            title: "Aligned with User Behavior",
            points: [
                "The policy's mobile-based QR compliance system is perfectly aligned with current Filipino digital habits, where over 87% of online activity is mobile.",
                "It requires no significant behavioral change from drivers, who already frequent gas stations and convenience stores.",
                "The addition of passenger-led verification through QR codes fits naturally into a mobile-centric society."
            ]
        }
    },
];

export const ECONOMIC_SAFETY_STATS: StatCardData[] = [
    {
        icon: <SavingsIcon />,
        value: "₱500M",
        label: "Annual Savings",
        subLabel: "From eliminating new government enforcement staff costs",
        details: {
            title: "Economic and Administrative Efficiency",
            points: [
                "The policy operates on a revenue-neutral model, where private partners (retailers, gas stations) cover operational costs in exchange for increased foot traffic.",
                "By using crowd-sourced verification and digital systems, it eliminates the need for new enforcement personnel, saving an estimated ₱500 million in annual government manpower costs.",
                "Integration with GCash's existing rewards programs provides incentives without additional government spending."
            ]
        }
    },
    {
        icon: <ShieldIcon />,
        value: "10-15%",
        label: "Potential Crash Reduction",
        subLabel: "Proactive fatigue compliance within the first year",
        details: {
            title: "Significant Road Safety Impact",
            points: [
                "Proactive fatigue compliance is projected to reduce fatigue-related crash rates by 10-15% within the first year of implementation.",
                "This data-driven forecast is based on regional road safety projections from the World Bank.",
                "The policy shifts the paradigm from reacting to accidents to proactively preventing them."
            ]
        }
    },
    {
        icon: <WarningIcon />,
        value: "20-25%",
        label: "of Accidents Targeted",
        subLabel: "Portion of highway crashes linked to driver fatigue",
        details: {
            title: "Addressing a Critical Safety Issue",
            points: [
                "The policy directly targets a major cause of road fatalities, as fatigue-related incidents account for 20-25% of all highway accidents in Southeast Asia.",
                "By ensuring drivers are well-rested, the PAKNYA policy addresses a root cause of preventable tragedies on Philippine roads.",
                "The system provides transparent, real-time compliance data for DOTr analysis, enabling continuous improvement of road safety standards."
            ]
        }
    }
];

export const IMPLEMENTATION_TIMELINE: TimelinePhase[] = [
    {
        phase: "Phase 1",
        duration: "Months 1-3",
        title: "Convenience Store Network",
        description: "Convert 24/7 convenience stores into Rest Compliance Points using existing infrastructure and simple QR scanners.",
        icon: <CheckCircleIcon />
    },
    {
        phase: "Phase 2",
        duration: "Months 4-6",
        title: "Gas Station Integration",
        description: "Partner with major gas stations like Petron and Shell, using existing fuel card readers and adding digital signage.",
        icon: <GasStationIcon />
    },
    {
        phase: "Phase 3",
        duration: "Months 7-9",
        title: "Vehicle Inspection (PMVIC) Integration",
        description: "Integrate rest compliance checks into the 138 existing PMVICs, leveraging their LTO database connectivity.",
        icon: <CarIcon />
    },
];

export const COST_COMPARISON_DATA: CostData[] = [
    { name: 'Traditional', cost: 20000000, label: '₱20,000,000' },
    { name: 'PAKNYA', cost: 15000000, label: '₱15,000,000' }
];

export const INNOVATION_ELEMENTS: InnovationData[] = [
    {
        icon: <UsersIcon />,
        title: "Crowd-Sourced Enforcement",
        description: "Passengers verify driver compliance by scanning in-vehicle QR codes, creating social accountability."
    },
    {
        icon: <TrophyIcon />,
        title: "Gamification Integration",
        description: "Link rest compliance to existing GCash rewards programs, offering positive reinforcement."
    },
    {
        icon: <ChartBarIcon />,
        title: "Dynamic Compliance Scoring",
        description: "Use real-time data to adjust rest intervals, maximizing safety without rigid bureaucracy."
    },
];

export const MEASURABLE_IMPACT_DATA: ImpactData[] = [
    {
        icon: <RevolutionIcon />,
        title: "Enforcement Revolution",
        description: "Transforms from reactive accident investigation to proactive fatigue prevention using existing digital payment infrastructure.",
        details: {
            title: "A Shift to Proactive Safety",
            points: [
                "Moves away from post-accident investigation to preventing fatigue-related incidents before they happen.",
                "Leverages the trust and ubiquity of digital payment systems like GCash, used by 94 million Filipinos.",
                "Creates a system of social accountability through passenger and public verification."
            ]
        }
    },
    {
        icon: <DatabaseIcon />,
        title: "Data-Driven Policy",
        description: "Creates the Philippines' first real-time driver fatigue database, enabling evidence-based safety improvements.",
        details: {
            title: "Evidence-Based Governance",
            points: [
                "Establishes a national, real-time database on driver fatigue patterns for the first time.",
                "Provides the DOTr with transparent, actionable data to refine road safety policies and standards.",
                "Enables dynamic adjustments to rest requirements based on real-world traffic and driver data."
            ]
        }
    },
    {
        icon: <GlobeIcon />,
        title: "Regional Leadership",
        description: "Positions the Philippines as a model for Southeast Asia in leveraging mobile tech for transportation safety.",
        details: {
            title: "A Model for Southeast Asia",
            points: [
                "Showcases the Philippines as an innovator in public safety by using existing digital infrastructure.",
                "Creates an exportable, low-cost model for neighboring countries like Malaysia, Indonesia, and Thailand facing similar traffic challenges.",
                "Strengthens the nation's position as a leader in digital transformation and smart governance."
            ]
        }
    },
];

export const TRAFFIC_IMPACT_DATA = [
    { time: 'Start', 'Without Policy': 100, 'With Policy': 100 },
    { time: '6 Months', 'Without Policy': 101, 'With Policy': 103 },
    { time: '1 Year', 'Without Policy': 102.5, 'With Policy': 90 },
    { time: '2 Years', 'Without Policy': 105, 'With Policy': 85 },
];