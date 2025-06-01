import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, Building, Building2, Map } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: 'Home Group',
    icon: <Home size={24} />,
  },
  {
    id: 2,
    name: 'Graha Properties',
    icon: <Building size={24} />,
  },
  {
    id: 3,
    name: 'Land Development',
    icon: <Map size={24} />,
  },
  {
    id: 4,
    name: 'Bumi Sentosa',
    icon: <Building2 size={24} />,
  },
];

const PartnersList = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bekerja sama dengan pengembang properti terkemuka
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Kami berkolaborasi dengan pengembang properti terpercaya untuk memberikan pilihan properti terbaik
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                {partner.icon}
              </div>
              <h3 className="text-lg font-semibold text-center">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersList;