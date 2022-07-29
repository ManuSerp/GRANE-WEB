import Head from 'next/head'
import Image from 'next/image'
import SearchSeeker from '../../components/admin/searchvisual'

export default function Home() {
  return (
    <div className='main-home'>
      <Head>
        <title>GRANE</title>
        <meta name="description" content="Grane online app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        
        <SearchSeeker></SearchSeeker>

    
      
      </div>        

  


   
    </div>
  )
}
