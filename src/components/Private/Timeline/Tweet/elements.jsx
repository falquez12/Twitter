import {
 TweetContainer,
 TweetName,
 TweetText,
 TweetImage,
 TweetIcons,
 Container,
 ProfilePicture
} from "./tweetelements";
import { GoVerified } from 'react-icons/go';
import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiInboxIn } from 'react-icons/hi';

// import tweet1 from "../../../../imgs/tweet1.jpg"
// import profilepicture1 from "../../../../imgs/profilepicture1.jpg"

const TweetElement = (props) => {
    const {profilepicture, name, username, time, text, tweetphoto} = props;

    return (
        <>  
            <Container>
            <ProfilePicture src={profilepicture} alt="profilepicture" height="40" width="40"/>
                <TweetContainer>
                
                <TweetName>
                    <p>{name}</p>
                    <p><GoVerified/></p>
                    <p>{username}</p>
                    <p>.</p>
                    <p>{time}</p>
                </TweetName>

                <TweetText>
                    {text}
                </TweetText>
                
                <TweetImage><img src={tweetphoto} alt="profile" height="285" width="574"/></TweetImage>
                
                <TweetIcons>
                    <div><BiMessageRounded></BiMessageRounded></div>
                    <p><FaRetweet></FaRetweet></p>
                    <p><AiOutlineHeart></AiOutlineHeart></p>
                    <p><HiInboxIn></HiInboxIn></p>
                </TweetIcons>
                </TweetContainer>
            </Container>
        </>
    );
}

export default TweetElement;