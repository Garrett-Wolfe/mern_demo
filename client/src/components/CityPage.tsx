import { useState } from "react";
import SimpleAlert from "./SimpleAlert";
import ListGroup from "./ListGroup";
import BootButton from "./BootButton";

function CityPage() {
  const [alertMsg, setAlertMsg] = useState("");

  return (
    <>
      {alertMsg && <SimpleAlert onClose={() => setAlertMsg("")}>{alertMsg}</SimpleAlert>}

      <ListGroup
        initItems={["Paris", "France", "New York"]}
        heading="Cities"
        initialActiveItem="Paris"
        clickSideEffect={(name: string) => setAlertMsg(name)}
      />

      <BootButton onClick={() => setAlertMsg("")} id="primary-button" disabled={false}>
        Clear
      </BootButton>
    </>
  );
}

export default CityPage;
