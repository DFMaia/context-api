import { useContext } from 'react';

import Nome from '../Nome';

import { UserContext } from '../../contexts/user';

function Alunos() {

    const { alunos, qtdAlunos } = useContext(UserContext)

    return (
      <div>
        <h2>Componentes alunos. Aluno online: {alunos}</h2>
        <h2>QUantidade de alunos: {qtdAlunos}</h2>
        <Nome/>
      </div>
    );
  }
  
  export default Alunos;