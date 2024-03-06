import { useShortCutKey } from "./useShortCutKey";

const App = () => {
  const KeyShortCut = {
    keys: ["CMD", "k"],
    callbackFn: () => {
      alert("k");
    },
  };

  useShortCutKey(KeyShortCut);

  return <></>;
};

export default App;
