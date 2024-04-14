import './App.css';
import Instant from './Components/Instant/Instant';
import Interface from './Components/Interface/Interface';
import Footer from './Components/Footer/Footer';
import Frequently from './Components/Frequently/Frequently';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import Desktop from './Components/Desktop/Deskstop';
import Header from './Components/Header/Header';
import Kit from './Components/Kit/Kit';
function App() {
  return (
    <div>
      <Kit></Kit>
      <Header></Header>
      <Desktop></Desktop>
      <Navbar></Navbar>
      <Card></Card>
      <Interface></Interface>
      <Frequently></Frequently>
      <Instant></Instant>
      <Footer></Footer>


    </div>
  );
}

export default App;
