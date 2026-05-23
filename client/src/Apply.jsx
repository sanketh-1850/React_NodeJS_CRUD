import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Apply() {
  const [values, setValues] = useState({
    studentUin: '',
    jobPostingId: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/create', values)
      .then(() => {
        navigate('/');
      }).catch((error) => {
        console.error('Error submitting application:', error);
        alert('Failed to submit application.');
      });
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w-50 bg-secondary border p-3 rounded">
      <h1>Apply</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label>Student UIN</label>
          <input
            type = "number"
            onChange={(e) => setValues({...values, studentUin: e.target.value})}
            required
          />
        </div>

        <div>
          <label>Job Posting ID</label>
          <input
            type = "number"
            onChange={(e) => setValues({...values, jobPostingId: e.target.value})}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Apply;