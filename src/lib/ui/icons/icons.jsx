import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash, BiBell, BiListUl } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsBookmarks, BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiInboxIn } from "react-icons/hi";

const SelectIcon = ({ name }) => {
  const siz = 30;
  const tweetcolor = "#828282";
  const tweetsize = 20;
  switch (name) {
    case "Home":
      return <RiHome7Fill size={siz} />;
    case "Profile":
      return <CgProfile size={siz} />;
    case "Trending":
      return <BiHash size={siz} />;
    case "Notifications":
      return <BiBell size={siz} />;
    case "Bookmarks":
      return <BsBookmarks size={siz} />;
    case "Lists":
      return <BiListUl size={siz} />;
    case "Twitter":
      return <FaTwitter size={40} color={"#1DA1F2"} />;
    case "Messages":
      return <FiMail size={siz} />;
    case "Retweet":
      return <FaRetweet size={tweetsize} color={tweetcolor} />;
    case "Heart":
      return <AiOutlineHeart size={tweetsize} color={tweetcolor} />;
    case "MessageRounded":
      return <BiMessageRounded size={tweetsize} color={tweetcolor} />;
    case "Inbox":
      return <HiInboxIn size={tweetsize} color={tweetcolor} />;
    default:
      return <></>;
  }
};
export default SelectIcon;
