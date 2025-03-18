import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Aleatorio from './assets/components/estudo/Aleatorio';
import Cards from './assets/components/estudo/layouts/Card'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <h1>Fundamentos React</h1>

      <div className='Cards'>
      <Cards title="Exemplo de Card" color="#080">
        <Aleatorio min={1} max={10} />
      </Cards>

      <Cards title="Fragmento">
        <Aleatorio min={1} max={10} />
      </Cards>

      <Cards title="Fragmento">
        <Aleatorio min={1} max={10} />
      </Cards>

      <Cards title="Fragmento">
        <Aleatorio min={1} max={10} />
      </Cards>

      <Cards title="Fragmento">
        <Aleatorio min={1} max={10} />
      </Cards>
      </div>
      
      
    
    </div>
  </StrictMode>
);
