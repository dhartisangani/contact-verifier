const CreditsCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-2 font-bold">
      <h3 className="text-lg font-semibold mb-4 uppercase">Credits</h3>
      <p>Remaining: 12,500</p>
      <p>Used: 7,500</p>
      <button className="bg-blue-600 font-normal text-white px-4 py-2 rounded hover:bg-blue-700 uppercase">
        Buy More
      </button>
    </div>
  );
};

export default CreditsCard;
