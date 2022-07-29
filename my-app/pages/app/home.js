import Head from 'next/head'
import Image from 'next/image'
import ItemList from '../../components/item/itemlist'
export default function Home() {
  return (
    <div className='main-home'>
      <Head>
        <title>GRANE</title>
        <meta name="description" content="Grane online app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='ItemList'>
        <div className='home-div-p'>        itemList :
</div>
        <ItemList></ItemList>

    
      
      </div>        

  


   
    </div>
  )
}
