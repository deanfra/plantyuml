import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { useDebounce } from "./hooks/useDebounce";
import { Loading } from "./components/Loading";
import { Logo } from "./components/Logo";
import { SVG } from "./components/SVG";
import { UMLEditor } from "./components/UmlEditor";

const TEST_URL = "http://localhost:3001/svg";

const fetch = async (
  uml: string = "",
  setter: Dispatch<SetStateAction<string | undefined>>
): Promise<void> => {
  const output = await axios.post<string>(TEST_URL, { uml });
  setter(output.data);
};

const App = () => {
  const defaultValue = "Alice -> Bob: Gives 💰 to\nBob -> Patrick: Buys a 🏺";
  const [outputSVG, setOutputSVG] = useState<string>();
  const [uml, setUml] = useState<string>(defaultValue);

  useDebounce(() => {
    fetch(uml, setOutputSVG);
  }, [uml]);

  return (
    <>
      <div className="flex w-full bg-gray-100 min-h-screen h-auto">
        <div
          className="flex flex-col bg-gray-800 min-h-full pt-2"
          style={{ width: "30rem" }}
        >
          <Logo />
          <UMLEditor uml={uml} setUml={setUml} />
        </div>
        <div className="flex flex-col bg-slate-600 p-8">
          {(outputSVG && <SVG svg={outputSVG} />) || <Loading />}
        </div>
      </div>
    </>
  );
};

export default App;
