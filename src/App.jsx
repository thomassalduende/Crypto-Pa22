import { useEffect, useState } from 'react'
import  {Formulario}  from "./components/Formulario"
import  {Header}  from "./components/Header"
import Cripto from './components/Cripto'
import './index.css'


function App() {

  // state del formulario
  const [ busqueda, setBusqueda ] = useState ({
    cripto: '',
    currency: ''
  })

  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})

  const {cripto, currency} = busqueda

  useEffect(() => {
    const InfoApi = async() => {
      const key = '72003d5b4e7ab06b5a25ace2793a21e2f95c743ac7d6673679d9b49d0b81f32d'
      const url2 = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`

      const respuesta = await fetch(url2);
      const resultado = await respuesta.json();

      setResultado(resultado);
      setConsultar(false)

    }
    InfoApi();
    
  }, [consultar])

  return (
    
        <>
          <Header
            titulo='Crypto Coin'
          />
          <div className="container-form">
              <div className="container">
                  <div className="row">
                      <div className="col m6 s12">
                          <Formulario 
                            busqueda={busqueda}
                            setBusqueda={setBusqueda}
                            setConsultar={setConsultar}
                          />
                      </div>
                      <div className="col m6 s12">
                          <Cripto
                          resultado={resultado}
                          busqueda={busqueda}
                          />
                      </div>
                  </div>
              </div>
          </div>
        </>
  )
}

export default App;