import { useState } from 'react';
import Alunos from './components/Alunos';

function App() {

  const[nomeAluno, SetNomeAluno] = useState('João');

  return (
    <div>
      <h1>Escola</h1>
      <hr/>
      <Alunos nome={nomeAluno} mudaNome={SetNomeAluno}/>
    </div>
  );
}

export default App;
