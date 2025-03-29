import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de FreeTechCamp</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Me encanta la forma en que los desarrollo por eso estoy desarrollando. Las clases son muy dinámicas y si he logrado aprender y poner en practica en la empresa. Estudiar los curso de freeTech me ha dado muchas habilidades y la confianza para obtener el trabajo de mis sueños.' />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Me encanta la forma en que los desarrollo por eso estoy desarrollando. Las clases son muy dinámicas y si he logrado aprender y poner en practica en la empresa. Estudiar los curso de freeTech me ha dado muchas habilidades y la confianza para obtener el trabajo de mis sueños.' />
        <Testimonio 
          nombre='Emma Watson'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Me encanta la forma en que los desarrollo por eso estoy desarrollando. Las clases son muy dinámicas y si he logrado aprender y poner en practica en la empresa. Estudiar los curso de freeTech me ha dado muchas habilidades y la confianza para obtener el trabajo de mis sueños.' />
      </div>
      
    </div>
  );
}

export default App;
