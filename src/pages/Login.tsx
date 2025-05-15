import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input className="w-full p-2 border rounded mb-4" placeholder="Name" />
        <input className="w-full p-2 border rounded mb-4" placeholder="Password" type="password" />
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
