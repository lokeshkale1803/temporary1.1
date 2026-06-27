import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ConditionsPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Conditions We Treat</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>
          Information about the various developmental conditions and challenges we support will be detailed here.
        </p>
      </main>
      <Footer />
    </>
  );
}
