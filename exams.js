import Link from 'next/link'

export default function Exams() {
  const exams = ['Mathematics', 'English', 'Science', 'History'] // placeholder exams

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <header style={{
        textAlign: 'center',
        padding: '2rem 0',
        borderBottom: '2px solid #ddd'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#1E3A8A' }}>Exams List</h1>
        <p style={{ color: '#555' }}>Select an exam to start practicing.</p>
      </header>

      <main style={{ marginTop: '2rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {exams.map((exam, index) => (
            <li key={index} style={{
              marginBottom: '1rem',
              padding: '1rem',
              border: '1px solid #eee',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <Link href={/test/${exam}} style={{ textDecoration: 'none' }}>
                <span style={{ color: '#1E40AF', fontWeight: 'bold', cursor: 'pointer' }}>
                  {exam}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/">
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#1E40AF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}