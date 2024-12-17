// Creare un semplice form con un campo input per il titolo di un articolo del blog.
// Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.

//import
import FormComponent from "./components/FormComponents";
import CardComponents from "./components/CardComponents";

function App() {
  //parte logica
  const titoli = [];

  //parte html
  return (
    <>
      <header>
        <h1>titolo</h1>
      </header>
      <main><p><FormComponent /></p>
        {titoli.map((titolo, index) => (
          <p key={index}>{titolo}</p>
        ))}
      </main>
      <footer></footer>
    </>
  )

}

export default App;