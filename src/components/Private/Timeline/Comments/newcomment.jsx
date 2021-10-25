import { useState } from "react";

const NewComment = ({tweetId, addComment}) => {
    const [comment, setComment] = useState("");
    const handleClick = (event) => {
        event.preventDefault();
        addComment(comment, tweetId);
    }

    return (
        <form>
            <div>
                <textarea
                    name="content"
                    id="content"
                    placeholder="Tweet your comment"
                    onChange={event=>setComment(event.target.value)}
                ></textarea>
            </div>
            <div>
                <button onClick={handleClick} type="button">Send Comment</button>
            </div>
        </form>
    );
}

export default NewComment;