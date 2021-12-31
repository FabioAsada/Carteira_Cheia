import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Menu from "./Menu/Menu";
import Rotas from "./Rotas/Rotas";

const App = props => {

  return (<>
    <Header></Header>
    
      <Rotas/>
      <Menu/>
   
    <Footer></Footer>
  </>);
};

export default App;
