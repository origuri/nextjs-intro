import Navbar from "./Navbar";
import * as React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  let title = "";
  console.log("여기는 레이아수");

  return (
    <>
      <Navbar />
      {/* _app.tsx에서 호출한 페이지가 children으로 들어옴
        ex) index.tsx, ori.tsx */}
      <div>{children}</div>
    </>
  );
}
export default React.memo(Layout);
