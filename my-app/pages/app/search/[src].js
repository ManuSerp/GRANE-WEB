import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SearchSeeker from '../../../components/admin/searchvisual'

export default function Home() {
  const router = useRouter();
  const { src } = router.query;
  console.log(src);
  return (
    <div className='main-home'>
      <Head>
        <title>GRANE</title>
        <meta name="description" content="Grane online app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <p> test : {src} </p>
        <SearchSeeker search={src}></SearchSeeker>
    
      
      </div>        

  


   
    </div>
  )
}
