import AppRoutes from './routes/routes.js'
import Header from './components/Header/Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header image={`/imageSource/siteLogo.jpg`} altText='CarCo'/>
      <AppRoutes />
    </div>
  );
}

export default App;
