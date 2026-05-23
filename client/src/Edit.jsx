import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Edit() {
    const {id} = useParams();
    const [values, setValues] = useState({
        studentUin: '',
        jobPostingId: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/edit/${id}`)
            .then(response => {
                setValues({...values, studentUin: response.data[0].student_uin, jobPostingId: response.data[0].job_id});
            });
    }, [id]);

    const navigate = useNavigate();

    const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/update/${id}`, values)
      .then(() => {
        navigate('/applications');
      }).catch((error) => {
        console.error('Error submitting application:', error);
        alert('Failed to submit application.');
      });
  };

    return (
        <div>
      <h1>Edit</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Student UIN</label>
          <input
            type = "number"
            value={values.studentUin}
            onChange={(e) => setValues({...values, studentUin: e.target.value})}
            required
          />
        </div>

        <div>
          <label>Job Posting ID</label>
          <input
            type = "number"
            value={values.jobPostingId}
            onChange={(e) => setValues({...values, jobPostingId: e.target.value})}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    );
}

export default Edit;