import { useRef } from "react";

import {Routes, Route, useNavigate} from 'react-router-dom';


export default function Searchbar(){

    const searchInputRef = useRef();
  
    async function submitHandler(event) {
      event.preventDefault();
  
      const enteredSearch = searchInputRef.current.value;
      return {
        redirect: {
          destination: "http://localhost:3000/app/search/"+{enteredSearch},
          permanent: false,
        },
      };
        
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