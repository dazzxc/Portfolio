import { Routes, Route } from 'react-router';
import './App.css';

import HomePage from './pages/HomePage.jsx';
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx';

function App() {
return (
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
</Routes>
);
}

export default App;