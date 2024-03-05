import { useShortCutKey } from "./useShortCutKey";

const App = () => {
  const KeyShortCut = {
    keys: ["alt", "."],
    callbackFn: () => {
      alert("k");
    },
  };

  useShortCutKey(KeyShortCut);

  return <></>;
};

export default App;
