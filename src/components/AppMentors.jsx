import React, { useReducer, useState } from "react";
import personReducer from "../reducer/person-reducer";
import usePersonStore from "../store/usePersonStore";

export default function AppMentors(props) {
  // const [person, setPerson] = useState(initialPerson);
  // const [person, dispatch] = useReducer(personReducer, initialPerson);
  const { person, updateMentor, addMentor, deleteMentor } = usePersonStore();
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updateMentor(prev, current);

    // dispatch({ type: "updated", prev: prev, current: current });
    // setPerson((pre) => ({
    //   ...pre,
    //   mentors: pre.mentors.map((mentor) =>
    //     mentor.name == prev ? { ...mentor, name: current } : mentor
    //   ),
    // }));
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름을 입력해주세요`);
    const title = prompt(`추가할 멘토의 타이틀을 입력해주세요`);
    // dispatch({ type: "added", name: name, title: title });
    addMentor(name, title);

    // setPerson((prev) => ({
    //   ...prev,
    //   mentors: [...prev.mentors, { name: name, title: title }],
    // }));
  };

  const handleDelete = () => {
    const target = prompt(`어떤 멘토를 삭제하고 싶은가요?`);
    deleteMentor(target);
    // dispatch({ type: "deleted", name: target });
    // setPerson((prev) => ({
    //   ...prev,
    //   mentors: prev.mentors.filter((mentor) => mentor.name != target),
    // }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, idx) => (
          <li key={idx}>
            {mentor.name} {mentor.title}
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}

const initialPerson = {
  name: "dong",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "쭌",
      title: "시니어개발자",
    },
  ],
};
