import { useState, useEffect } from "react";
import SimpleAlert from "./SimpleAlert";
import ListGroup from "./ListGroup";
import BootButton from "./BootButton";
import axios from "axios";

import { User } from "../../../types/models/User";

function CityPage() {
  const [alertMsg, setAlertMsg] = useState("");
  const [initUsers, setInitUsers] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      console.log(response.data);
      setInitUsers(response.data.map((data: User) => data.name));
    });
  }, []);

  return (
    <>
      {alertMsg && <SimpleAlert onClose={() => setAlertMsg("")}>{alertMsg}</SimpleAlert>}

      <ListGroup initItems={initUsers} heading="Users" clickSideEffect={(name: string) => setAlertMsg(name)} />

      <BootButton onClick={() => setAlertMsg("")} id="primary-button" disabled={false}>
        Clear
      </BootButton>
    </>
  );
}

export default CityPage;
