import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Documents.css'

const sampleDocuments = [
  { id: 1, name: 'Aadhaar Card', category: 'Identity', date: '09 Nov 2026', expiry: 'No expiry', icon: '🪪' },
  { id: 2, name: 'Health Insurance', category: 'Insurance', date: '05 Nov 2026', expiry: '20 Nov 2026', icon: '🏥' },
  { id: 3, name: 'Laptop Invoice', category: 'Invoices', date: '02 Nov 2026', expiry: 'No expiry', icon: '💻' },
  { id: 4, name: 'Degree Certificate', category: 'Education', date: '01 Nov 2026', expiry: 'No expiry', icon: '🎓' },
  { id: 5, name: 'Vehicle Insurance', category: 'Insurance', date: '28 Oct 2026', expiry: '28 Nov 2026', icon: '🚗' },
  { id: 6, name: 'Birth Certificate', category: 'Certificates', date: '20 Oct 2026', expiry: 'No expiry', icon: '📜' },
]

function Documents() {
  const [documents, setDocuments] = useState(sampleDocuments)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || doc.category === category
    return matchesSearch && matchesCategory
  })

  const deleteDocument = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this document?')
    if (confirmDelete) {
      setDocuments(documents.filter((doc) => doc.id !== id))
    }
  }

  return (
    <div className="documents-page">
      <header className="documents-header">
        <Link to="/dashboard" className="documents-logo">LifeLedger.</Link>
        <Link to="/dashboard" className="documents-back">← Dashboard</Link>
      </header>

      <main className="documents-container">
        <div className="documents-title">
          <div>
            <h1>My Documents</h1>
            <p>View and organize all your important documents.</p>
          </div>
          <Link to="/upload" className="add-document-btn">
            + Add Document
          </Link>
        </div>

        <div className="documents-summary">
          <div>
            <span>📁</span>
            <p>Total Documents</p>
            <h2>{documents.length}</h2>
          </div>
          <div>
            <span>🗂️</span>
            <p>Categories</p>
            <h2>{new Set(documents.map((doc) => doc.category)).size}</h2>
          </div>
        </div>

        <section className="documents-list-card">
          <div className="documents-controls">
            <input
              type="search"
              placeholder="🔍 Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Identity">Identity</option>
              <option value="Education">Education</option>
              <option value="Insurance">Insurance</option>
              <option value="Invoices">Invoices</option>
              <option value="Certificates">Certificates</option>
            </select>
          </div>

          <div className="documents-table">
            <div className="documents-table-heading">
              <span>Document</span>
              <span>Category</span>
              <span>Uploaded</span>
              <span>Expiry Date</span>
              <span>Action</span>
            </div>

            {filteredDocuments.map((doc) => (
              <div className="documents-table-row" key={doc.id}>
                <div className="document-name-cell">
                  <span className="document-emoji">{doc.icon}</span>
                  <strong>{doc.name}</strong>
                </div>
                <span>{doc.category}</span>
                <span>{doc.date}</span>
                <span>{doc.expiry}</span>
                <button
                  className="delete-document-btn"
                  onClick={() => deleteDocument(doc.id)}
                >
                  Delete
                </button>
              </div>
            ))}

            {filteredDocuments.length === 0 && (
              <p className="no-documents">No documents found.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Documents