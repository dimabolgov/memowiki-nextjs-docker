// // import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1>Hello World!!!</h1>
//     </div>
//   )
// }

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();
    // console.log(featuredEvents)
    return (
        <div>
            <h1>The home Page</h1>
            <EventList items={featuredEvents} />
        </div>
    );
}
