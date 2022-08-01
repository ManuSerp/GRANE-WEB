import { useRef } from "react";
import Link from "next/link";

import Router from 'next/router'


export default function Searchbar(){

    const searchInputRef = useRef();
  
    async function submitHandler(event) {
      event.preventDefault();
  
      const enteredSearch = searchInputRef.current.value;
      Router.push("/app/search/"+enteredSearch)
        
    }
  
    return (
      <section>
        <form onSubmit={submitHandler}>
          <div className="searchbar-div">

          <div>
            
            <input type="search" id="search" required ref={searchInputRef} />
          </div>
          <div>
            <button>search</button>
          </div>
          </div>
        </form>
      </section>
    );
  }