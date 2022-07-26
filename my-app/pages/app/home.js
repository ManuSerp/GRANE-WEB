import Head from 'next/head'
import Image from 'next/image'
import ItemCard from '../../components/item/itemcard'
export default function Home() {
  return (
    <div >
      <Head>
        <title>GRANE</title>
        <meta name="description" content="Grane online app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='ItemList'>
      
        <ItemCard name="test" desc="test desc" im_uri="/img/sermatek.png"/>
        <ItemCard name="test" desc="test desc" im_uri="/img/sermatek.png"/>
        <ItemCard name="test" desc="test desc" im_uri="/img/sermatek.png"/>



    
      
      </div>        

  


   
    </div>
  )
}
