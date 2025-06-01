import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Target, Eye, History, CheckCircle2 } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'About Us | PropertyPro.id';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t('about.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-100"
            >
              Platform properti terlengkap di Indonesia untuk rumah, apartemen, komersial, dan tanah.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary-900">
                {t('about.mission')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Misi kami adalah menyediakan platform properti yang transparan, 
                terpercaya, dan mudah digunakan untuk membantu setiap orang 
                menemukan properti impian mereka dengan cara yang efisien dan 
                menyenangkan.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">
                {t('about.vision')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Visi kami adalah menjadi platform properti nomor satu di Indonesia 
                yang menghubungkan penjual dan pembeli properti dengan teknologi 
                inovatif dan layanan berkualitas tinggi.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan layanan terbaik dengan berpedoman pada nilai-nilai utama kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary-500" />,
                title: 'Inovasi',
                description: 'Selalu mencari cara baru untuk meningkatkan layanan kami'
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-primary-500" />,
                title: 'Integritas',
                description: 'Menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi'
              },
              {
                icon: <Users className="w-8 h-8 text-primary-500" />,
                title: 'Kolaborasi',
                description: 'Bekerja sama dengan semua pihak untuk mencapai tujuan bersama'
              },
              {
                icon: <Eye className="w-8 h-8 text-primary-500" />,
                title: 'Transparansi',
                description: 'Memberikan informasi yang jelas dan akurat kepada pengguna'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('about.history')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Perjalanan kami dalam membangun platform properti terpercaya di Indonesia
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: '2020',
                title: 'Awal Mula',
                description: 'PropertyPro didirikan dengan visi mengubah cara orang mencari properti'
              },
              {
                year: '2021',
                title: 'Ekspansi Nasional',
                description: 'Memperluas jangkauan ke 10 kota besar di Indonesia'
              },
              {
                year: '2022',
                title: 'Inovasi Teknologi',
                description: 'Meluncurkan fitur Virtual Tour dan AI Property Matching'
              },
              {
                year: '2023',
                title: 'Pencapaian Besar',
                description: 'Mencapai 1 juta pengguna aktif dan 100.000 listing properti'
              }
            ].map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="w-24 flex-shrink-0 text-center">
                  <span className="text-xl font-bold text-primary-600">{event.year}</span>
                </div>
                <div className="flex-grow bg-neutral-50 p-6 rounded-lg ml-4">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-neutral-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('about.team')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Tim berpengalaman yang membangun PropertyPro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://randomuser.me/api/portraits/women/32.jpg'
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://randomuser.me/api/portraits/men/44.jpg'
              },
              {
                name: 'Amanda Lee',
                role: 'Head of Operations',
                image: 'https://randomuser.me/api/portraits/women/68.jpg'
              },
              {
                name: 'David Wilson',
                role: 'Head of Marketing',
                image: 'https://randomuser.me/api/portraits/men/75.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-neutral-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;