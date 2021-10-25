import { useEffect } from "react";
import TweetElements from "../Tweet/tweet";
import NewComment from "../Comments/newcomment.jsx";
import Comment from "../Comments/index.jsx";
import { useTweets } from "../../../../hooks/useTweets";
import { useParams } from 'react-router-dom'

const TweetPage = ({ setTitle }) => {
    const { tweets, removeTweet, addComment, likeTweet, removeComment } = useTweets();
    const { id } = useParams()
    console.log("tweetsxd1",tweets)
    useEffect(() => {
        setTitle("Tweet");
    });
    const filteredTweet = tweets.filter(t => t._id === id);
    const tweet = filteredTweet.map((tweet) => {
        return (
          <TweetElements
            profilepicture={"https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2Q0ZjhiYmNiNjUzYmFhNGQzY2YxNjUxMmI2ZmQzNTViLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"}
            name={tweet.user.name}
            username={tweet.user.username}
            time={tweet.comments?.length}
            text={tweet.content}
            id={tweet._id}
            likes={tweet.likes}
            removeTweet={removeTweet}
            likeTweet={likeTweet}
            tweetphoto={"https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png"}
          />
        );
    });
    return (
        <div>
            {tweet}
            <NewComment tweetId={filteredTweet[0]?._id} addComment={addComment} />
            {filteredTweet[0]?.comments.map(comments => 
                    <Comment
                        key={comments._id}
                        id={comments._id}
                        comment={comments.comment}
                        user={comments.user}
                        tweetId={filteredTweet[0]?._id}
                        removeComment={removeComment} 
                    />
                    )}
        </div>
    );
};

export default TweetPage;