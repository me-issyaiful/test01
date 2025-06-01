import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary-600">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-neutral-600">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          </p>
        </div>
        <Link to="/" className="btn-primary inline-flex items-center">
          <HomeIcon size={20} className="mr-2" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;