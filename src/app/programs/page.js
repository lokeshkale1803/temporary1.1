import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Our Programs</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>
          Explore our specialized programs designed to support every stage of your child's development.
        </p>
      </main>
      <Footer />
    </>
  );
}
