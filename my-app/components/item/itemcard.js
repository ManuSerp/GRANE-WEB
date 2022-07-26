import Image from "next/image";


export default function ItemCard({ name, desc, im_uri }) {

  
  return (
    <div className="ItemCard" id={"ItemCard-" + name}>
        <div>
        <h1>
            {name}
        </h1>

        </div>
        <div className="itemcard-row">
            <div className="ic-row1">
            <Image src={im_uri} width={100} height={100} />


            </div>
            <div className="ic-row2">
            
            <p>{desc}</p>
            
            </div>
        



        </div>

    </div>
  );
}