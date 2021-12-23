'use strict';

function  TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(<TradingCard
      name={currentCard.name}
      skill={currentCard.skill}
      imgUrl={currentCard.imgUrl}
    />);
  }

  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}

ReactDOM.render(<TradingCardContainer />, document.querySelector('#trading-card-container'));
