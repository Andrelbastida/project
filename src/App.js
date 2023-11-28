import React, { useState } from 'react';
import Formulario from './components/Formulario';
import './styles/estiliza.css'

const App = () => {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  const handleFormSubmit = (dados) => {
    if (dados.tipo === "receita") {
      setReceitas([...receitas, dados]);
    } else if (dados.tipo === "despesa") {
      setDespesas([...despesas, dados]);
    }
  };

  const handleRemoverReceita = (index) => {
    const novasReceitas = [...receitas];
    novasReceitas.splice(index, 1);
    setReceitas(novasReceitas);
  };

  const handleRemoverDespesa = (index) => {
    const novasDespesas = [...despesas];
    novasDespesas.splice(index, 1);
    setDespesas(novasDespesas);
  };

  // Função para calcular a soma dos valores de receitas
  const calcularSomaReceitas = () => {
    return receitas.reduce((total, receita) => total + parseFloat(receita.valor), 0);
  };

  // Função para calcular a soma dos valores de despesas
  const calcularSomaDespesas = () => {
    return despesas.reduce((total, despesa) => total + parseFloat(despesa.valor), 0);
  };

  return (
    <div className='todoCorpo'>
      <div className='colunas'>
      <div>
        <h2>Formulário</h2>
        <Formulario onFormSubmit={handleFormSubmit} />
      </div>

      <div>
        <h2>Receitas</h2>
        <ResultadoReceitas soma={calcularSomaReceitas()} />
        <div>
          {receitas.map((receita, index) => (
            <div key={index} className='aReceita'>
              <p>Titular: {receita.nome}</p> 
              <p>Valor: {receita.valor}</p>  
              <p>Pago por: {receita.pagoPor}</p>
              <div className='divbutto'>
                <button onClick={() => handleRemoverReceita(index)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Despesas</h2>
        <ResultadoDespesas soma={calcularSomaDespesas()} />
        {despesas.map((despesa, index) => (
          <div key={index} className='aDespesa'>
            <p>Titular: {despesa.nome}</p> 
            <p>Valor: {despesa.valor}</p>  
            <p>Pago por: {despesa.pagoPor}</p>
            <div className='divbutto'>
              <button onClick={() => handleRemoverDespesa(index)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

// Componente ResultadoReceitas
const ResultadoReceitas = ({ soma }) => {
  return (
    <div>
      <p>Total de Receitas: {soma}</p>
    </div>
  );
};

// Componente ResultadoDespesas
const ResultadoDespesas = ({ soma }) => {
  return (
    <div>
      <p>Total de Despesas: {soma}</p>
    </div>
  );
};

export default App;