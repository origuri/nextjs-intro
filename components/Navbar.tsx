import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

function NavBar() {
  const path = usePathname();

  console.log(path);
  return (
    <nav>
      <Link className={path === "/" ? "active" : ""} href={"/"}>
        Home
      </Link>

      <p />

      <Link className={path === "/ori" ? "active" : ""} href={"/ori"}>
        {" "}
        ori
      </Link>

      <style jsx global>{`
        nav {
          background-color: tomato;
        }

        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}

export default React.memo(NavBar);
