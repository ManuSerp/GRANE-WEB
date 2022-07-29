import { useState, useRef } from "react";

async function searchVisual(search) {
  const response = await fetch("https://grane-back.vercel.app/api/search", {
    method: "POST",
    body: JSON.stringify({ test: "Bonjour ceci est un test" }),
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

function SearchSeeker() {
  const [resEnd, setRes] = useState();
  const searchInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredSearch = searchInputRef.current.value;

    // optional: Add validation

    try {
      const result_q = await searchVisual(enteredSearch);
      setRes(JSON.stringify(result_q));
      //alert(result_q.coins.eur);
    } catch (error) {
      console.log(error);
      setRes("ERROR");
    }
  }

  return (
    <section>
      <h1>SearchSeeker</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="search">search</label>
          <input type="search" id="search" required ref={searchInputRef} />
        </div>
        <div>
          <button>search</button>
        </div>
      </form>
      <div>{resEnd}</div>
    </section>
  );
}

export default SearchSeeker;