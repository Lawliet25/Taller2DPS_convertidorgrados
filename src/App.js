import {useState, useEffect} from 'react';
import './App.css';

function App() {
 
  const [celsius, setCelcius] = useState(0);
  const [farenheit, setFarenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCelcius((total * 1) / tipo);
    setFarenheit((total * 1.8) + 32);
    setKelvin(total*tipo + 273.15);

  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };

  return (
    <div className="App">
      <h1>Convertidor de temperatura</h1>

      <p>Celcius: {celsius}</p>
      <p>Farenheit: {farenheit}</p>
      <p>Kelvin: {kelvin}</p>
      <hr />

      <h3>{total}</h3>
      
      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Celcius</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
      <br/><br/>
      <hr/>
      <br/>
      <img src='https://previews.123rf.com/images/kume111000/kume1110001801/kume111000180100064/94395616-term%C3%B3metros-de-meteorolog%C3%ADa-aislados-temperatura-de-fr%C3%ADo-y-calor-ilustracion-vectorial-celsius-y-fah.jpg'/>
    </div>
    
  );
}
export default App;
