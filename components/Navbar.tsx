import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

function NavBar() {
  console.log("여기는 나브바 ");

  const path = usePathname();

  console.log(path);
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link className={path === "/" ? "active" : ""} href={"/"}>
          <span>Home</span>
        </Link>

        <p />

        <Link className={path === "/ori" ? "active" : ""} href={"/ori"}>
          <span>ori</span>
        </Link>
      </div>

      <style jsx>{`
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }

        nav div {
          display: flex;
          gap: 10px;
        }

        span {
          font-weight: bolder;
        }
      `}</style>
    </nav>
  );
}

export default React.memo(NavBar);
