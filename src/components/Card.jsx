import React from 'react';
import Proptypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <>
        <p data-testid="name-card">{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        {cardAttr1 > 0 && <p data-testid="attr1-card">{ cardAttr1 }</p>}
        {cardAttr2 > 0 && <p data-testid="attr2-card">{ cardAttr2 }</p>}
        {cardAttr3 > 0 && <p data-testid="attr3-card">{ cardAttr3 }</p>}
        <p data-testid="rare-card">{ cardRare }</p>
        {
          cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null
        }
      </>
    );
  }
}

Card.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.string.isRequired,
  cardAttr2: Proptypes.string.isRequired,
  cardAttr3: Proptypes.string.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
};

export default Card;
