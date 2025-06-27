
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then(res => {
      setProjects(res.data);
    });
  }, []);

  const calculateProgress = (tasks) => {
    if (!tasks.length) return 0;
    const completed = tasks.filter(t => t.completed).length;
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <div>
      <h1>Project Dashboard</h1>
      {projects.map((project, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div style={{ background: '#eee', width: '100%', height: '20px', borderRadius: '5px' }}>
            <div style={{
              width: `${calculateProgress(project.tasks)}%`,
              background: 'green',
              height: '100%',
              borderRadius: '5px'
            }}></div>
          </div>
          <p>{calculateProgress(project.tasks)}% Complete</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
