import { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Counter from "./components/Counter";
import CounterC from "./components/CounterC";

// Lazy loading the components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (<>
    <BrowserRouter>
      <div>
        <NavigationButtons /> {/* Extracted navigation buttons into a new component */}
        
        <Suspense fallback={<div>Loading...</div>}> {/* Suspense with fallback while loading */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
            
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>


    <br />
      <br />
      <div>
      <Counter></Counter>
      <CounterC></CounterC>
      </div>
    </>
    
  );
}

function NavigationButtons() {
  const navigate = useNavigate(); // Now the hook is used within the BrowserRouter context
  
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      
    </div>
  );
}

export default App;
