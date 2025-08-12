import { useState } from "react";
import "./App.css";
import BirthdayCard from "./components/Birthday";
import ClickButton from "./components/ClickButton";

function App() {
  const [showBirthdayCard, setShowBirthdayCard] = useState(false);

  return (
    <>
      {showBirthdayCard ? (
        <BirthdayCard />
      ) : (
        <ClickButton onClick={() => setShowBirthdayCard(true)} />
      )}
    </>
  );
}

export default App