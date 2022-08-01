

import useSWR from "swr";


async function searchVisual(search) {
  const response = await fetch("https://grane-back.vercel.app/api/search", {
    method: "POST",
    body: JSON.stringify({ test: search }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}



function SearchSeeker({search}) {


  const { data, error } = useSWR({search}, searchVisual, {
    refreshInterval: 30000,
  });
  if (error) {
   
  console.error(error, error.stack);
  
    return <div>failed to load </div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }
    
 
  return (
    <div>
      <h1>SearchSeeker: {search} </h1>
        
      <div>{data}</div>
      </div>
  );
}

export default SearchSeeker;