import React from "react";

function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      {isNew ? <span className="newTag">NEW</span> : null}
      <img className="thumnail" src={image} alt="avatar" />
    </div>
  );
}

export default Avatar;
