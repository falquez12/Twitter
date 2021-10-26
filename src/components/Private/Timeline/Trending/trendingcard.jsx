import { ElementContainer, ElementH1, ElementWord, ElementContent } from "./trendingelements";
const TrendingCard = (props) => {
  const { trending, hashtag, content, ntweets } = props;
  return (
    <>
      <ElementContainer>
        <ElementWord>{trending}</ElementWord>
        <ElementH1>{hashtag}</ElementH1>
        <ElementContent>{content}</ElementContent>
        <ElementWord>{ntweets}</ElementWord>
      </ElementContainer>
    </>
  );
};

export default TrendingCard;
