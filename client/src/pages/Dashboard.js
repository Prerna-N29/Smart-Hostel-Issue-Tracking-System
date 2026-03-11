import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [issues, setIssues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/"); // redirect to login if no token
          return;
        }

        const res = await API.get("/issues/my", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIssues(res.data);
      } catch (error) {
        alert("Failed to fetch issues");
      }
    };

    fetchIssues();
  }, [navigate]);

  return (
    <div>
      <h2>My Issues</h2>

      <button onClick={() => navigate("/create")}>Report New Issue</button>

      <ul>
        {issues.length === 0 ? (
          <li>No issues reported yet</li>
        ) : (
          issues.map((issue) => (
            <li key={issue._id}>
              Room: {issue.room} <br />
              Problem: {issue.problem} <br />
              Status: {issue.status} <br />
              Created At: {new Date(issue.createdAt).toLocaleString()}
              <hr />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dashboard;