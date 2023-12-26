// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  // Loader way
  const data = useLoaderData();

  // Normal way
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Alok-Pal")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }, []);

  return (
    <>
      <div className="text-3xl text-center m-4 bg-gray-400 text-white p-4">
        Github Followers : {data?.followers}
        <img style={{ width: 200 }} src={data.avatar_url} alt="" />
      </div>
    </>
  );
};

export default Github;

export const userDataLoader = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Alok-Pal");
    return res.json();
  } catch (error) {
    console.log("🚀 ~ file: Github.jsx:34 ~ userDataLoader ~ error:", error);
  }
};
