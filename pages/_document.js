import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
       <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet"/>        

     
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head> 
      <body>
        <Main />
        <NextScript/>
        <div id="portal"></div>
        <div id="portal2"></div>
      </body>

    </Html>
   
  )
}


