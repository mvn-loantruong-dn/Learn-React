import './App.css';
import Header from './Header';
import Footer from './Footer';
import FormHooks from './FormHooks';

function App() {
  return (
    <>
    <Header></Header>
    <main className="page-main flex-centered">
      <div className="container">
        <FormHooks />
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
