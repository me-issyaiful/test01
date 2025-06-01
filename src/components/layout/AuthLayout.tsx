import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div className="py-4 px-6">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
          <HomeIcon size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <img src="/logo.svg" alt="PropertyPro Logo" className="h-12 mx-auto" />
            </Link>
          </div>
          <div className="bg-white py-8 px-6 shadow-xl rounded-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;