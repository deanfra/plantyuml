import React, { Dispatch, SetStateAction } from "react";

type Props = {
  uml: string;
  setUml: Dispatch<SetStateAction<string>>;
};

export const UMLEditor = ({ uml, setUml }: Props) => (
  <textarea
    className={textAreaStyle}
    defaultValue={uml}
    onChange={(e) => {
      const wrappedUml = `@startuml\n${e.target.value}\n@enduml`;
      setUml(wrappedUml);
    }}
  />
);
const textAreaStyle =
  "bg-gray-900 border-2 border-gray-900 focus:border-0 focus:border-teal-800 h-48 h-full outline-none pl-6 px-3 py-3 text-gray-500 w-full";
