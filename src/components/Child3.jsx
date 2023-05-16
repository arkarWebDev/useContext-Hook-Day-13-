import React, { useContext } from "react";
import { FirstContext } from "../FirstContext";

const Child3 = () => {
  const { userName, liveIn } = useContext(FirstContext);

  return (
    <section>
      <div>Child3</div>
      <div>
        form child 3
        <br />
        {userName}
        {liveIn}
      </div>
    </section>
  );
};

export default Child3;
