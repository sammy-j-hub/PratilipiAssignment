import React from "react";
import "../CSS/Storyview.css";
import { useStateValue } from "../StateProvider";
function Storyview() {
  const [{ user, story }, dispatch] = useStateValue();
  console.log(story);
  return (
    <div className="storyview">
      <div className="storyview__container">
        <h1 className="storyview__title">{story.title}</h1>
        <p className="storyview__content">{story.Content}</p>
        <h3 className="storyview__read">Total read: {story.total_read}</h3>
        <h3 className="storyview__current">Current read: {story.cur_read}</h3>
      </div>
    </div>
  );
}

export default Storyview;
