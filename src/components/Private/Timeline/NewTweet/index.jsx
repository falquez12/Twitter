import { useState } from "react";

const NewTweet = ({addTweet}) => {
    const [content, setContent] = useState("");
    const handleClick = (event) => {
        event.preventDefault();
        addTweet(content);
    }

    return (
        <form>
            <div>
                <textarea
                    name="content"
                    id="content"
                    placeholder="say something"
                    onChange={event=>setContent(event.target.value)}
                ></textarea>
            </div>
            <div>
                <button onClick={handleClick} type="button">Send Tweet</button>
            </div>
        </form>
    );
}

export default NewTweet;