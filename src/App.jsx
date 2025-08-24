import "bootstrap/dist/css/bootstrap.min.css";
import Tp1_Helloworld from "./components/Tp1_helloworld";
import Tp2_Helloworld from "./components/Tp2_Helloworld";
import Tp3_helloworld from "./components/Tp3_helloworld";
import Navar from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navar />
      <main className="container text-center my-5">
        <Tp1_Helloworld />
        <Tp2_Helloworld saludo="My friend" />
        <Tp3_helloworld saludo="My friend" />
      </main>
      <Footer />
    </>
  );
}

export default App;
