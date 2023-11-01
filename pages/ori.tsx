import Seo from "@/components/Seo";
import * as React from "react";

function Ori() {
  console.log("여기는 오리");

  return (
    <div>
      <Seo title="Ori" />
      <h1>ori!!</h1>
    </div>
  );
}
export default React.memo(Ori);
