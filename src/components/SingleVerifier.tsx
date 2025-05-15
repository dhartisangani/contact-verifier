import { useEffect, useRef, useState } from 'react';

const SingleVerifier = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const resultRef = useRef<HTMLDivElement | null>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const verify = () => {
    setLoading(true);

    setTimeout(() => {
      if (!email) {
        setResult('Unknown');
      } else if (!isValidEmail(email)) {
        setResult('Invalid');
      } else {
        setResult('Valid');
      }

      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Valid':
        return 'bg-green-500';
      case 'Invalid':
        return 'bg-red-500';
      case 'Unknown':
        return 'bg-yellow-400';
      default:
        return 'bg-gray-500';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultRef.current &&
        !resultRef.current.contains(event.target as Node)
      ) {
        setResult(null);
      }
    };

    if (result) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [result]);

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md space-y-2">
      <label htmlFor="single-verifier" className="uppercase font-bold">
        Single Contact Verifier
      </label>

      <div>
        <label htmlFor="email" className="font-bold">Email</label>
        <input
          type="text"
          className="p-2 mt-1 border rounded w-full"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        onClick={verify}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        disabled={loading}
      >
        {loading ? 'Verifying...' : 'Verify Now'}
      </button>

      {result && (
        <div
          ref={resultRef}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-72 shadow-lg rounded-xl overflow-hidden bg-white text-center text-white z-10"
        >
          <div className={`text-xl font-bold p-4 ${getStatusColor(result)}`}>
            {result}
          </div>
          <div className="text-sm p-4 text-gray-800">
            {email || 'No email provided'}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleVerifier;
