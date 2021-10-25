import {
  CommentsContainer,
  ProfilePicture,
  CommentBoxContainer,
  CommentName,
  CommentText,
} from "./commentelements.jsx";
import SelectIcon from "../../../../lib/ui/icons/icons";

const Comment = ({ id, user, comment, tweetId, removeComment }) => {
  return (
    <CommentsContainer>
      <ProfilePicture
        src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2Q0ZjhiYmNiNjUzYmFhNGQzY2YxNjUxMmI2ZmQzNTViLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
        alt="profilepicture"
        height="40"
        width="40"
      />
      <CommentBoxContainer>
        <CommentName>
          <p style={{ fontWeight: "600" }}>@{user?.username}</p>
        </CommentName>
        <CommentText>{comment}</CommentText>
        <div onClick={() => removeComment(tweetId, id)}>
          <SelectIcon name={"Delete"} />
        </div>
      </CommentBoxContainer>
    </CommentsContainer>
  );
};

export default Comment;
