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

import tweet1 from "../../../../imgs/tweet1.jpg"
import profilepicture1 from "../../../../imgs/profilepicture1.jpg"

const TweetElement = () => {
    return (
        <>  
            <Container>
            <ProfilePicture src={profilepicture1} alt="profilepicture" height="40" width="40"/>
                <TweetContainer>
                
                <TweetName>
                    <p>Annie</p>
                    <p><GoVerified/></p>
                    <p>@annie</p>
                    <p>.</p>
                    <p>14s</p>
                </TweetName>
                <TweetText>
                    This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis 
                </TweetText>
                
                <TweetImage><img src={tweet1} alt="profile" height="285" width="574"/></TweetImage>
                
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