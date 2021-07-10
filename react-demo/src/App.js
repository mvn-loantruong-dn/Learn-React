import './App.css';
import Header from './Header';
import Footer from './Footer';
import ListUsersEffect from './ListUsers';

function App() {
  return (
    <>
    <Header></Header>
    <main className="page-main">
      <div className="container">
        <ListUsersEffect />
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
