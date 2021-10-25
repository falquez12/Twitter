import { useState } from "react";
import {
  NewTweetContainer,
  InputBox,
  StyledTextArea,
  Bottom,
  Wrapper,
  Icons
} from "./newtweetelements.jsx";
import Button from "../../../common/Button";
import SelectIcon from "../../../../lib/ui/icons/icons";

const NewTweet = ({ addTweet }) => {
  const [content, setContent] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    addTweet(content);
  };

  return (
    <NewTweetContainer>
      <Wrapper>
        <form>
          <InputBox>
            <StyledTextArea
              name="content"
              id="content"
              placeholder="What's happening ?"
              onChange={(event) => setContent(event.target.value)}
            ></StyledTextArea>
          </InputBox>
          <Bottom>
            <Icons>
                <SelectIcon name={"Emoji"} />
                <SelectIcon name={"Gif"} />
                <SelectIcon name={"Image"} />
            </Icons>
            <Button
              text="Send Tweet"
              primary
              fluid
              round
              onClick={handleClick}
              type="button"
            >
              Send Tweet
            </Button>
          </Bottom>
        </form>
      </Wrapper>
    </NewTweetContainer>
  );
};

export default NewTweet;
