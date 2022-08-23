import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="description"
            type="textarea"
          />
        </label>
        <label htmlFor="atrr1">
          De boisse:
          <input
            data-testid="attr1-input"
            name="attr1"
            type="number"
          />
        </label>
        <label htmlFor="atrr2">
          Saúde mental:
          <input
            data-testid="attr2-input"
            name="attr2"
            type="number"
          />
        </label>
        <label htmlFor="atrr3">
          Cance de coringar:
          <input
            data-testid="attr3-input"
            name="attr3"
            type="number"
          />
        </label>
        <label htmlFor="img">
          Foto:
          <input
            data-testid="image-input"
            name="img"
            type="text"
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select
            data-testid="rare-input"
            name="rare"
            type="select"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            name="trunfo"
            type="checkbox"
          />
        </label>
        <button
          data-testid="save-button"
          name="save-button"
          type="button"
        >
          Salvar
        </button>
      </>
    );
  }
}

export default Form;
