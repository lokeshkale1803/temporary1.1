import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ConditionsSection from '../components/ConditionsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import Footer from '../components/Footer';

const services = [
  {
    id: 1,
    title: 'Occupational Therapy',
    description: 'Build motor skills, sensory regulation, and daily-living independence.',
    iconName: 'Activity',
    iconBgColor: '#104037',
  },
  {
    id: 2,
    title: 'Speech & Language Therapy',
    description: 'Unlock expressive, receptive and social communication abilities.',
    iconName: 'MessageCircle',
    iconBgColor: '#DE6A4D',
  },
  {
    id: 3,
    title: 'Behavioral Therapy',
    description: 'Evidence-based behavior shaping with empathy and consistency.',
    iconName: 'BrainCircuit',
    iconBgColor: '#104037',
  },
  {
    id: 4,
    title: 'ABA Therapy',
    description: 'Structured Applied Behavior Analysis personalised for every child.',
    iconName: 'Target',
    iconBgColor: '#104037',
  },
  {
    id: 5,
    title: 'Special Education',
    description: 'Individualised learning plans aligned with academic milestones.',
    iconName: 'GraduationCap',
    iconBgColor: '#DE6A4D',
  },
  {
    id: 6,
    title: 'Physiotherapy',
    description: 'Strengthen posture, gait and gross-motor function safely.',
    iconName: 'HeartPulse',
    iconBgColor: '#104037',
  }
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#FDFDFc', minHeight: '100vh' }}>
      <Navbar />
      
      <HeroSection />

      <section style={{ backgroundColor: '#F4F0EC', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ color: '#DE6A4D', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                OUR SERVICES
              </h4>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4.5rem', color: '#104037', lineHeight: '1.1', fontWeight: '500' }}>
                Nine therapies. One coordinated team. One child at the centre.
              </h1>
            </div>
            <a href="#services" style={{ color: '#104037', fontWeight: '500', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '1rem' }}>
              Explore all services <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ConditionsSection />
      
      <WhyChooseUsSection />
      
      <SuccessStoriesSection />

      <Footer />
    </div>
  );
}
