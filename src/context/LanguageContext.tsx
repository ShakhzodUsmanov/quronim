import { createContext, useState } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "",
  setLanguage: () => {
    "en";
  },
});

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<string>("en");
  console.log(language);


  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
