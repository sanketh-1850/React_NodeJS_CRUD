import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


function Applications() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/applications')
            .then(response => {
                setData(response.data);
            })
            .catch(() => {
                setData([]);
            });
    }, []);


    const handleClick = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (confirmed) {
            axios.delete(`http://localhost:8000/api/delete/${id}`)
                .then(() => {
                    window.location.reload();
                }).catch((error) => {
                    console.error('Error deleting applications:', error);
                    alert('Failed to delete applications.');
                });
        }
    };
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-secondary border p-3 rounded">
                <h1>Applications</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>student_uin</th>
                            <th>job_posting_id</th>
                            <th>created_at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((application) => (
                            <tr key={application.id}>
                                <td>{application.id}</td>
                                <td>{application.student_uin}</td>
                                <td>{application.job_id}</td>
                                <td>{application.applied_at}</td>
                                <td>
                                    <Link to={`/edit/${application.id}`} className='btn btn-primary'>Edit</Link>
                                    <button onClick={() => handleClick(application.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Applications;