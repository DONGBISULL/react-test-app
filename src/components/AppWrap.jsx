import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1627290991293-77c2ffefd8ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="jjun"
          size={200}
        />
        <p> 안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ background: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div className="profile">
      <img src={image} width={size} />
      <p>{name}</p>
    </div>
  );
}
