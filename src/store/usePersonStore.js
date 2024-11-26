import { create } from "zustand";

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

const usePersonStore = create((set) => ({
  person: initialPerson,
  updateMentor: (prev, current) =>
    set((state) => ({
      person: {
        ...state.person,
        mentors: state.person.mentors.map((mentor) =>
          mentor.name == prev ? { ...mentor, name: current } : mentor
        ),
      },
    })),
  addMentor: (name, title) => {
    set((state) => ({
      person: {
        ...state.person,
        mentors: [
          ...state.person.mentors,
          {
            name: name,
            title: title,
          },
        ],
      },
    }));
  },
  deleteMentor: (name) => {
    set((state) => {
        
      const foundMentor = state.person.mentors.find((mentor) => mentor.name === name);

    if (!foundMentor){
        alert(`${name}이라는 멘토는 존재하지 않습니다.`)
        return state;
    }

      return {
        person: {
          ...state.person,
          mentors: state.person.mentors.filter((mentor) => mentor.name != name),
        },
      };
    });
  },
}));

export default usePersonStore;
