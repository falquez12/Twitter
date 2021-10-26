import { ElementContainer, ElementH1, ElementWord } from "./trendingelements";
const TrendingCard = (props) => {
  const { trending, tweet, ntweets } = props;
  return (
    <>
      <ElementContainer>
        <ElementWord>{trending}</ElementWord>
        <ElementH1>{tweet}</ElementH1>
        <ElementWord>{ntweets}</ElementWord>
      </ElementContainer>
    </>
  );
};

export default TrendingCard;
