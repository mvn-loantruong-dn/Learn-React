import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header></Header>
    <main class="page-main flex-centered">
      <div class="container">
        <div class="content">
        <a href="#"><img src="./logo512.png" alt="Logo" /></a>
        <h3>Hello React !!!</h3>
        </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
