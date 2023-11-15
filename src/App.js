import './App.scss';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import routes from './assets/routes';



function App() {
  return (
    <Routes>
        {routes.filter(r => r.isNav).map(r => 
          <Route 
            exact path={r.path} 
            key={r.title} 
            element={<r.element 
            />} 
          />)}
    </Routes>
  );
}

export default App;
