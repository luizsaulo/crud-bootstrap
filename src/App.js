import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';

let initialState = [
  {
    id: 1, 
    prioridade: '1',
    titulo: 'Título',
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    prioridade: '1',
    titulo: 'Título',
    descricao: 'Segunda Atividadade',
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };
   
    setAtividades([ ...atividades, { ...atividade }]);   
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }  

  return (
    <>
    <AtividadeForm 
      addAtividade={addAtividade}
      atividades={atividades}
    />
    <div className="mt-3">      
        {atividades.map((ativ) => (         
          <Atividade 
            key={ativ.id} 
            ativ={ativ}
            deletarAtividade={deletarAtividade}
          />
        ))}                 
      
    </div>
    </>
  );
}

export default App;
