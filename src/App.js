import './styles/globals.scss';
import Header from './component/Header'
import Footer from './component/Footer'
import NotEnrolled from './pages/notenrolled.jsx'
function App() {
  return (
    <div className="App">
      <Header />
      <div className={`container mx-auto py-10`}>
        <NotEnrolled />
      </div>
      <Footer />
    </div>
  );
}

export default App;
