const Page = () => {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((v) => v);

  return <div className="grid grid-cols-4"></div>;
};

export default Page;
