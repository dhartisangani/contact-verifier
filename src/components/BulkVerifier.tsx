import { useState } from 'react';
import Papa from 'papaparse';
import DonutChart from './DonutChart';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const BulkVerifier = () => {
  const [fileName, setFileName] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [statusCounts, setStatusCounts] = useState<{ label: string; value: number }[]>([]);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setProgress(0);
    setStatusCounts([]);
    setDownloadReady(false);

    Papa.parse(file, {
      complete: () => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            const next = prev + 10;
            if (next >= 100) {
              clearInterval(interval);
              const mockData = [
                { label: 'Valid', value: 30 },
                { label: 'Invalid', value: 15 },
                { label: 'Unknown', value: 5 },
              ];
              setStatusCounts(mockData);
              setDownloadReady(true);
            }
            return next;
          });
        }, 300);
      },
    });
  };

  const handleDownload = () => {
    const csv = `Email,Status\nexample1@mail.com,Valid\nexample2@mail.com,Invalid\nexample3@mail.com,Unknown`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'results.csv');
    link.click();
  };

  return (
    <div className="space-y-1 bg-white px-6 py-4 rounded-xl shadow-md">
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col space-y-2 w-2/3">
          <label htmlFor="bulk-verifier" className="uppercase font-bold">Bulk Contact Verifier</label>
          <div className="flex items-center space-x-2 border rounded shadow-sm w-full p-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <CloudArrowUpIcon className="w-5 h-5 text-blue-500" />
              <span className="text-black font-medium">Upload CSV or TXT</span>
              <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          {fileName && (
            <div className="p-2 border rounded shadow-sm w-full">
              <div className="flex justify-between items-center font-semibold">
                <p>{fileName}</p>
                <p className="text-sm mt-1">{progress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          {downloadReady && (
            <button
              onClick={handleDownload}
              className="text-blue-600 text-sm flex items-center space-x-1 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3" />
              </svg>
              <span>Download Results</span>
            </button>
          )}
        </div>

        {statusCounts.length > 0 && (
          <div className="w-1/3 flex justify-center items-center">
            <DonutChart data={statusCounts} />
          </div>
        )}

      </div>
    </div>
  );
};

export default BulkVerifier;
