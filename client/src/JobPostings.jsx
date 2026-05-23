import React, { useEffect, useState } from 'react';
import axios from 'axios';


function JobPostings() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/jobpostings')
            .then(response => {
                setData(response.data);
            })
            .catch(() => {
                setData([]);
            });
    }, []);

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-secondary border p-3 rounded">
                <h1>Job Postings</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((jobPosting) => (
                            <tr key={jobPosting.id}>
                                <td>{jobPosting.id}</td>
                                <td>{jobPosting.title}</td>
                                <td>{jobPosting.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default JobPostings;