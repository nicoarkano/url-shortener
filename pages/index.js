import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home(){
 return(

    <div className={styles.container}>
       <head>
	 <title>URL Shortener</title>
	 <meta name="description" content="A url shortener create by nicoarkano use next-app and following a tutorial of carlos azaustre"/>
	 <link rel = 'icon' href='https://ucarecdn.com/ac1617ff-893d-49fe-945f-e10d2378cb56/favicon.png' />
       </head>
       <body>
	 <main className={styles.main}>
	   <h1 className={styles.title}> URL Shortener</h1>
	   <p className={styles.description}> Short yours URLs Here </p>
	   <div className={styles.grid}>
	     <form className={styles.card}>
		     <input type="text" className={styles.input} placeholder='insert your URL'/>
		     <button className={styles.button}>Short!</button>
	     </form>
	   </div>
	 </main>
       </body>


      </div>


      )
}
