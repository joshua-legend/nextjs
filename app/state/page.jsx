"use client";

const Page = () => {
  const test = () => {
    alert("다까먹음 ㅎㅎ");
  };
  const abc = () => {
    console.log("수업 언제끝나!");
  };

  // 페이지 /quiz
  // button 태그 nextjs 내용 만들고
  // 클릭하면 알럿으로 nextjs 할만함!

  return (
    <>
      <button onClick={test}>0</button>
      <button onClick={abc}>수업</button>
    </>
  );
};

export default Page;
