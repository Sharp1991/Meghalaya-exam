import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        padding: '2rem 0',
        borderBottom: '2px solid #ddd'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#1E3A8A' }}>
          Meghalaya Exam Portal
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Practice and prepare for exams online, anywhere in Meghalaya.
        </p>
      </header>

      {/* Main Content */}
      <main style={{ marginTop: '2rem' }}>
        {/* Exams Section */}
        <section style={{
          padding: '1.5rem',
          border: '1px solid #eee',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          backgroundColor: '#f9f9f9'
        }}>
          <h2 style={{ color: '#1E40AF' }}>Available Exams</h2>
          <p>Click below to view and take available exams:</p>
          <Link href="/exams">
            <button style={{
              padding: '0.5rem 1rem',
              marginTop: '0.5rem',
              backgroundColor: '#1E40AF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Go to Exams List
            </button>
          </Link>
        </section>

        {/* About Section */}
        <section style={{
          padding: '1.5rem',
          border: '1px solid #eee',
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ color: '#1E40AF' }}>About the Portal</h2>
          <p>
            This portal helps students prepare for exams with practice tests and exam materials. 
            It’s designed to be simple, fast, and accessible on all devices.
          </p>
        </section>

        {/* Contact Section */}
        <section style={{
          padding: '1.5rem',
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h2 style={{ color: '#1E40AF' }}>Contact & Support</h2>
          <p>If you have any queries or feedback, reach out to the site administrator at <strong>admin@meghalayaexam.com</strong>.</p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', color: '#777' }}>
        &copy; 2025 Meghalaya Exam Portal
      </footer>
    </div>
  )
}