import { createContext, useState } from "react";

export const DarkModeContext = createContext();

// 컨텍스트 : 전역적 데이터 공유
// 프로바이더 : 하위 컴포넌트를 감싸는 컴포넌트 / 하위 컴포넌트에 데이터 전달
export function DarkModeProvider({ children }) {  
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
