import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

const ResetPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-neutral-900 mb-6">
        {t('auth.resetPassword.title')}
      </h2>

      {!isSubmitted ? (
        <>
          <p className="text-neutral-600 text-center mb-8">
            {t('auth.resetPassword.instructions')}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                {t('auth.resetPassword.email')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input pl-10"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              {t('common.submit')}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-success-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Check your email</h3>
          <p className="text-neutral-600 mb-6">
            We've sent a password reset link to {email}
          </p>
          <p className="text-sm text-neutral-500">
            Didn't receive the email? Check your spam folder or try again
          </p>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <Link 
          to="/login" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft size={16} className="mr-1" />
          {t('auth.resetPassword.back')}
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;