import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
function AppProfile() {
  return (
    <>
      <Avatar  isNew={true} image="https://images.unsplash.com/photo-1627290991293-77c2ffefd8ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Profile
        image="https://images.unsplash.com/photo-1627290991293-77c2ffefd8ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="jjun"
        title="강아지"
        isNew={true}
        // createTime={new Date()}
      />

      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="developer"
        title="프론트엔드개발자"
        isNew={false}
        // createTime={new Date().setDate(new Date() - 5)}
      />
    </>
  );
}

export default AppProfile;
