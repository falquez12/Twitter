import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash, BiBell, BiListUl } from "react-icons/bi";
import { FiMail, FiSearch } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiInboxIn } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsImage } from "react-icons/bs";

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
      return <FaTwitter size={35} color={"#1DA1F2"} />;
    case "Messages":
      return <FiMail size={siz} />;
    case "Retweet":
      return <FaRetweet style={{cursor:'pointer'}} size={tweetsize} color={tweetcolor} />;
    case "Heart":
      return <AiOutlineHeart style={{cursor:'pointer'}} size={tweetsize} color={tweetcolor} />;
    case "Delete":
      return <AiFillDelete style={{cursor:'pointer'}} size={tweetsize} color={tweetcolor} />;
    case "MessageRounded":
      return <BiMessageRounded style={{cursor:'pointer'}} size={tweetsize} color={tweetcolor} />;
    case "Inbox":
      return <HiInboxIn size={tweetsize} color={tweetcolor} />;
    case "Search":
      return <FiSearch size={tweetsize} color={tweetcolor} />;
    case "Close":
      return <IoMdClose style={{cursor:'pointer'}} size={28} color={"#ffff"} />;
    case "Emoji":
      return <HiOutlineEmojiHappy size={tweetsize} color={tweetcolor} />;
    case "Gif":
      return <AiOutlineFileGif size={tweetsize} color={tweetcolor} />;
    case "Image":
      return <BsImage size={tweetsize} color={tweetcolor} />;
    default:
      return <></>;
  }
};
export default SelectIcon;
