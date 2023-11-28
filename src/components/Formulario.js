import React, { useState } from 'react';
import '../styles/Formulario.css'

const Formulario = ({ onFormSubmit }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [pagoPor, setPagoPor] = useState("");

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({ nome, valor, tipo, pagoPor });

    // Limpar os campos após o envio
    setNome("");
    setValor("");
    setTipo("");
    setPagoPor("");
  };
  

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <label>
        Nome:
        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Valor:
        <input type="text" name="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
      </label>
      <br />
      <label>
        Tipo:
        <select name="tipo" value={tipo} onChange={handleTipoChange}>
          <option value="">Selecione</option>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </label>
      <br />
      <label>
        Pago Por:
        <input type="text" name="pagoPor" value={pagoPor} onChange={(e) => setPagoPor(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;