import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Home, Building, MessageSquare, User, Settings,
  Heart, LogOut, ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Dashboard | PropertyPro.id';
  }, []);

  const menuItems = [
    { icon: <Heart size={20} />, label: t('dashboard.menu.saved'), link: '/dashboard/saved' },
    { icon: <Building size={20} />, label: t('dashboard.menu.listings'), link: '/dashboard/listings' },
    { icon: <MessageSquare size={20} />, label: t('dashboard.menu.messages'), link: '/dashboard/messages' },
    { icon: <User size={20} />, label: t('dashboard.menu.profile'), link: '/dashboard/profile' },
    { icon: <Settings size={20} />, label: t('dashboard.menu.settings'), link: '/dashboard/settings' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-neutral-200">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <p className="text-neutral-500">Property Agent</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                ))}
                
                <button className="flex items-center w-full p-3 rounded-lg hover:bg-neutral-50 text-neutral-700 hover:text-primary-600 transition-colors">
                  <LogOut size={20} />
                  <span className="ml-3">{t('common.logout')}</span>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-2xl font-bold mb-4">
                {t('dashboard.welcome', { name: 'John' })}
              </h1>
              <p className="text-neutral-600">
                Manage your properties, messages, and account settings from your dashboard.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Building className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-neutral-500">Active Listings</span>
                </div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-neutral-500">Properties listed</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-secondary-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-secondary-600" />
                  </div>
                  <span className="text-sm font-medium text-neutral-500">Messages</span>
                </div>
                <div className="text-2xl font-bold">28</div>
                <div className="text-sm text-neutral-500">Unread messages</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-success-100 rounded-lg">
                    <Heart className="w-6 h-6 text-success-600" />
                  </div>
                  <span className="text-sm font-medium text-neutral-500">Saved</span>
                </div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-neutral-500">Saved properties</div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary-100 rounded-lg mr-4">
                      <Home className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">New Property Listed</h3>
                      <p className="text-sm text-neutral-500">Modern Villa with Pool</p>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-500">2 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-secondary-100 rounded-lg mr-4">
                      <MessageSquare className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">New Message</h3>
                      <p className="text-sm text-neutral-500">From: Sarah Johnson</p>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-500">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;