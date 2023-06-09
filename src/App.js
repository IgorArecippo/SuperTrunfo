import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  validaBotao = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const duzentosEDez = 210;
    const zero = 0;
    const noventa = 90;
    const entre = +cardAttr1 + +cardAttr2 + +cardAttr3 <= duzentosEDez;
    const maior1 = +cardAttr1 >= zero;
    const maior2 = +cardAttr2 >= zero;
    const maior3 = +cardAttr3 >= zero;
    const menor1 = +cardAttr1 <= noventa;
    const menor2 = +cardAttr2 <= noventa;
    const menor3 = +cardAttr3 <= noventa;

    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && entre && maior1 && maior2 && maior3
      && menor1 && menor2 && menor3) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validaBotao());
  };

  onSaveButtonClick = (objInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objInfo],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
    }));
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, data } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ data.some((element) => element.cardTrunfo === true) }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          data.map((e) => (
            <Card
              cardName={ e.cardName }
              key={ e.cardName }
              cardDescription={ e.cardDescription }
              cardAttr1={ e.cardAttr1 }
              cardAttr2={ e.cardAttr2 }
              cardAttr3={ e.cardAttr3 }
              cardImage={ e.cardImage }
              cardRare={ e.cardRare }
              cardTrunfo={ e.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
