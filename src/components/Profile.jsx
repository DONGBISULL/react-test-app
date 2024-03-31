import Avatar from "./Avatar";

function Profile({ image, name, title, isNew }) {
  // function Profile({ image, name, title, createTime }) {
  return (
    <div className="profile">
      {/* {isBeforeThreeDaysProfile(createTime) ? <span className="newTag">NEW</span> : null} */}
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

//
function isBeforeThreeDaysProfile(createTime) {
  if (!createTime) return false;
  let now = new Date();
  let diff = now.getTime() - new Date(createTime).getTime();
  // 3일 차이
  let threeDaysInMillis = 3 * 24 * 60 * 60 * 1000;
  if (diff <= threeDaysInMillis) {
    return true;
  }
  return false;
}

export default Profile;
