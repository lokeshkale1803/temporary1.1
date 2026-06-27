import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>About Unique Minds</h1>
        <div style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Unique Minds Child Development Services was founded on a simple principle: every child deserves 
            the opportunity to reach their full potential in a supportive, nurturing environment.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our team of expert occupational therapists, speech pathologists, and child psychologists work 
            collaboratively to provide comprehensive care. We believe in evidence-based practices tailored 
            to the unique needs of each family we serve.
          </p>
          <p>
            Whether your child is facing developmental delays, sensory processing challenges, or needs 
            emotional support, we are here to partner with you on this journey.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
