import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Upload.css'

function Upload() {
  const [file, setFile] = useState(null)
  const [documentName, setDocumentName] = useState('')
  const [category, setCategory] = useState('Identity')
  const [expiryDate, setExpiryDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!file) {
      setMessage('Please select a document first.')
      return
    }

    setMessage('Document details saved successfully! (Demo only)')
    setFile(null)
    setDocumentName('')
    setCategory('Identity')
    setExpiryDate('')
    e.target.reset()
  }

  return (
    <div className="upload-page">
      <header className="upload-header">
        <Link to="/dashboard" className="upload-logo">LifeLedger.</Link>
        <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
      </header>

      <main className="upload-container">
        <div className="upload-title">
          <h1>Upload Document</h1>
          <p>Store and organize your important documents securely.</p>
        </div>

        <form className="upload-form" onSubmit={handleSubmit}>
          <label>Document Name</label>
          <input
            type="text"
            placeholder="e.g. Aadhaar Card"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            required
          />

          <label>Document Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Identity</option>
            <option>Education</option>
            <option>Insurance</option>
            <option>Invoices</option>
            <option>Certificates</option>
            <option>Other</option>
          </select>

          <label>Upload File</label>
          <div className="file-upload-box">
            <span className="upload-symbol">📁</span>
            <p>Select your document</p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
            <small>PDF, JPG, PNG or DOC (Maximum 10 MB)</small>
          </div>

          {file && (
            <p className="selected-file">
              Selected: {file.name}
            </p>
          )}

          <label>Expiry Date (Optional)</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />

          <button type="submit" className="save-document-btn">
            Save Document
          </button>

          {message && <p className="upload-message">{message}</p>}
        </form>
      </main>
    </div>
  )
}

export default Upload