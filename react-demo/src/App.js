import './App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

function App() {
  return (
    <>
    <Header></Header>
    <main className="page-main flex-centered">
      <div className="container">
        <Form />
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
