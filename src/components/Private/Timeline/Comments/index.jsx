const Comment = ({id, user, comment, tweetId, removeComment}) => {

    return (
        <li>
            <p>@{user?.username}</p>
            <p>{comment}</p>
            <p><button onClick={()=>removeComment(tweetId, id)}>Remove</button></p>
        </li>
    );
}

export default Comment;