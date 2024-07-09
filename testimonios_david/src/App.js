
import './App.css';
import Testimonio from "./componentes/testimonio.js";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre="Mario"
          pais="Ecuador"
          imagen="img1"
          cargo="ing de software"
          empresa="Amazon"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify"
        />
        <Testimonio
          nombre="Sarah"
          pais="Suecia"
          imagen="img2"
          cargo="ing de software"
          empresa="Chatdesk"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify"
        />
        <Testimonio
          nombre="Emma"
          pais="Suecia"
          imagen="img2"
          cargo="ing de software"
          empresa="Spotify"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify"
        />
      </div>
      
    </div>
  );
}

export default App;
