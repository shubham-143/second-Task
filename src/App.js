import './App.css';
import Instant from './Components/Instant/Instant';
import Interface from './Components/Interface/Interface';
import Footer from './Components/Footer/Footer';
import Frequently from './Components/Frequently/Frequently';
import Card from './Components/Card/Card';
import Image from './Components/Navbar/Image';
import Desktop from './Components/Desktop/Deskstop';
import Navbar2 from './Components/Navbar2/Navbar2';
import Kit from './Components/Kit/Kit';

function App() {
  return (
    <div>
      <Kit></Kit>
      <Navbar2></Navbar2>
      <Desktop></Desktop>
      <Image></Image>
      <Card></Card>
      <Interface></Interface>
      <Frequently></Frequently>
      <Instant></Instant>
      <Footer></Footer>


    </div>
  );
}

export default App;
