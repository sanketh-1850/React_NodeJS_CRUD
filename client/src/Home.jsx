import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <p><Link to="/students">Students</Link></p>
                <p><Link to="/jobpostings">Job Postings</Link></p>
                <p><Link to="/applications">Applications</Link></p>
                <p><Link to="/apply">Apply</Link></p>
            </nav>
        </div>
    );
}

export default Home;