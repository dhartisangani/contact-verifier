import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SingleVerifier from '../components/SingleVerifier';
import BulkVerifier from '../components/BulkVerifier';
import CreditsCard from '../components/CreditsCard';
import { BellIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
    const [section, setSection] = useState('dashboard');

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar selectedSection={section} setSection={setSection} />
            <main className="flex-1 p-8 overflow-y-auto flex flex-col">
                <div className="flex items-center space-x-2 justify-end">
                    <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
                    <div className="h-8 w-8 rounded-full bg-gray-500 text-white flex items-center justify-center font-semibold">
                        JD
                    </div>
                </div>
                <h1 className="text-3xl font-semibold mb-8">Welcome back, John Doe</h1>

                <div className="flex-1 space-y-6">
                    {section === 'dashboard' && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                <div className="md:col-span-2">
                                    <SingleVerifier />
                                </div>
                                <div>
                                    <CreditsCard />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                <div className="md:col-span-2">
                                    <BulkVerifier />
                                </div>
                                <div>
                                    <CreditsCard />
                                </div>
                            </div>
                        </>
                    )}

                    {section === 'contact' && (
                            <SingleVerifier />
                    )}

                    {section === 'history' && (
                        <p className="text-gray-500 italic">No history data available.</p>
                    )}

                    {section === 'credits' && (
                        <div className="space-y-6">
                            <CreditsCard />
                            <CreditsCard />
                        </div>
                    )}
                </div>

                <footer className="text-center text-gray-500 mt-8">
                    © 2024 Bulk Contact Verifier
                </footer>
            </main>

        </div>
    );
};

export default Dashboard;
