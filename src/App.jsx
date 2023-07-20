import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./components/header/nav";
import ItemListContainer from "./components/header/ItemListContainer";
import Card from "./components/main/cart";

function App() {

  return (
    <main>
      <BasicExample/>
      <ItemListContainer greetings="Hello world" />
      
      <section>
        <div className="cardd">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
      
      
    </main>
      
  )
}

export default App
