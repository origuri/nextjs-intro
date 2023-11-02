import { useRouter } from "next/router";
import * as React from "react";

function MovieDatail() {
  const router = useRouter();
  /* || []의 의미는 새로고침할 때 home은 서버사이드렌더링이기 때문에 
  아직 서버 쪽에서 로딩이 되지 않았는데 params를 찾으라고 하니 못찾은 것.
  그래서 router.query.params이 undefined일 때 잠깐 빈 배열을 넣어서 오류를 방지하느 것. 
*/

  const [title, id] = router.query.params || [];

  console.log("무비 디테일 라우터 -> ", router);

  return (
    <div>
      <h4>{title}</h4>
      <img src={`https://image.tmdb.org/t/p/w500/${router.query.img}`} />
      <h5>{router.query.overview}</h5>
    </div>
  );
}

export default React.memo(MovieDatail);

// export function getServerSideProps({ query: { img, overview } }) {
//   console.log("cts->", img);

//   return {
//     props: {},
//   };
// }
