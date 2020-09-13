import React, { useState, useEffect } from "react";
import "../CSS/Stories.css";
import Story from "./Story";
import { db } from "../firebase";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    db.collection("Stories").onSnapshot(snapshot =>
      setStories(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);

  console.log(stories[0]);

  return (
    <div className="stories">
      <div className="stories__container">
        {stories.map(story => (
          <div className="stories__row">
            <Story story={story} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
