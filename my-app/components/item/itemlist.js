
import useSWR from "swr";
import ItemCard from "./itemcard";

const fetcherItem = async (url) => {
    const response = await fetch(url).then((response) => response.json());
    return response;
  };






export default function ItemList() {

    const { data, error } = useSWR("/api/db/itemlist", fetcherItem, {
        refreshInterval: 30000,
      });
      if (error) {
        return <div>failed to load </div>;
      }
    
      if (!data) {
        return <div>loading...</div>;
      }


      return (
          <div className="ItemList">
           
            <p>LeaderBoard :</p>
            {data.map(({ name, desc, im_link }, i) => (
              <UserLeaderBoard key={i} name={name} desc={desc} im_uri={im_link} />
            ))}
          </div>
      );

    

}

