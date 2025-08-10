
import React from 'react';

// For "13.4% of the Australian population ... below the poverty line"
export const PovertyRateChart: React.FC = () => (
    <div className="my-6 p-4 bg-amber-50 rounded-lg border border-amber-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="relative w-24 h-24 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    className="text-amber-200"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                <path
                    className="text-brand-primary"
                    strokeDasharray="13.4, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-primary">13%</span>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-brand-dark text-lg">Poverty in Australia</h4>
            <p className="text-sm text-brand-text">Approximately 1 in 6 children and 13.4% of the total population live below the poverty line, facing financial hardship. (ACOSS, 2022)</p>
        </div>
    </div>
);

// For "families are forced to pay over 30 per cent of their income in the accommodation sector"
export const HousingStressChart: React.FC = () => (
    <div className="my-6 p-4 bg-blue-50 rounded-lg border border-blue-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-brand-secondary/10 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </div>
        <div>
            <h4 className="font-bold text-brand-dark text-lg">Housing Affordability Stress</h4>
            <p className="text-sm text-brand-text">A significant number of families, particularly in major cities, experience housing stress, spending over 30% of their income on rent. (Anglicare Australia, 2023)</p>
        </div>
    </div>
);


// For "One in every six women and one in every sixteen men in Australia have experienced family violence"
export const FamilyViolenceStats: React.FC = () => (
    <div className="my-6 p-4 bg-red-50 rounded-lg border border-red-200 grid md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-red-600 flex-shrink-0">1 in 6</div>
            <div>
                <h4 className="font-semibold text-brand-dark">Women</h4>
                <p className="text-sm text-brand-text">have experienced family violence since the age of 15.</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-red-600 flex-shrink-0">1 in 16</div>
            <div>
                <h4 className="font-semibold text-brand-dark">Men</h4>
                <p className="text-sm text-brand-text">have experienced family violence since the age of 15.</p>
            </div>
        </div>
        <p className="md:col-span-2 text-xs text-center text-gray-500 mt-2">Source: AIHW, 2022</p>
    </div>
);
