import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, X } from 'lucide-react';

type SearchBarProps = {
  className?: string;
  isExpanded?: boolean;
};

const SearchBar = ({ className = '', isExpanded = false }: SearchBarProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(isExpanded);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/properties?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleSearch = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    document.getElementById('search-input')?.focus();
  };

  return (
    <div className={`relative ${className}`}>
      <form 
        onSubmit={handleSearch}
        className={`flex items-center transition-all duration-300 ${
          isActive 
            ? 'bg-white border border-neutral-200 rounded-full shadow-lg w-full md:w-[450px]' 
            : 'bg-neutral-100 border border-transparent rounded-full w-10'
        }`}
      >
        <button 
          type={isActive ? 'submit' : 'button'}
          onClick={!isActive ? toggleSearch : undefined}
          className="p-3 text-neutral-500 hover:text-primary-600 transition-colors focus:outline-none"
        >
          <Search size={20} />
        </button>
        
        {isActive && (
          <>
            <div className="flex-grow">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('home.hero.searchPlaceholder')}
                className="w-full bg-transparent border-none focus:ring-0 py-2 px-1"
              />
            </div>
            
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="p-3 text-neutral-400 hover:text-neutral-600 transition-colors focus:outline-none"
              >
                <X size={18} />
              </button>
            )}
            
            {!isExpanded && (
              <button
                type="button"
                onClick={toggleSearch}
                className="p-3 text-neutral-400 hover:text-neutral-600 transition-colors focus:outline-none md:hidden"
              >
                <X size={18} />
              </button>
            )}
          </>
        )}
      </form>
      
      {isActive && !isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 p-2 z-10 hidden md:block">
          <div className="text-sm text-neutral-500 mb-2">Popular searches:</div>
          <div className="flex flex-wrap gap-2">
            {['Jakarta Selatan', 'Apartemen', 'Rumah 2 Kamar', 'BSD City', 'Pondok Indah'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setSearchQuery(term);
                  handleSearch({ preventDefault: () => {} } as React.FormEvent);
                }}
                className="flex items-center px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm text-neutral-700 transition-colors"
              >
                <MapPin size={14} className="mr-1" />
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;