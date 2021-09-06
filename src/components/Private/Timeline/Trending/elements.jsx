import {
 ElementContainer,
 ElementH1,
 ElementWord
} from "./trendingelements";
const Elements = (props) => {
    const {trending, hashtag, ntweets} = props;
    return (
        <>  
        <ElementContainer>
            <ElementWord>{trending}</ElementWord>
            <ElementH1>{hashtag}</ElementH1>
            <ElementWord>{ntweets}</ElementWord>
            </ElementContainer>
        </>
    );
}

export default Elements;