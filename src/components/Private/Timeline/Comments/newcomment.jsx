import { useState } from "react";
import {
  NewCommentContainer,
  InputBox,
  StyledTextArea,
  Bottom,
  Wrapper,
  Icons,
} from "./newcommentelements.jsx";
import Button from "../../../common/Button";
import SelectIcon from "../../../../lib/ui/icons/icons";

const NewComment = ({ tweetId, addComment }) => {
  const [comment, setComment] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    addComment(comment, tweetId);
  };

  return (
    <NewCommentContainer>
      <Wrapper>
        <form>
          <InputBox>
            <StyledTextArea
              name="content"
              id="content"
              placeholder="Tweet your comment"
              onChange={(event) => setComment(event.target.value)}
            ></StyledTextArea>
          </InputBox>
          <Bottom>
            <Icons>
                <SelectIcon name={"Emoji"} />
                <SelectIcon name={"Gif"} />
                <SelectIcon name={"Image"} />
            </Icons>
            <Button
              text="Reply"
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
    </NewCommentContainer>
  );
};

export default NewComment;
