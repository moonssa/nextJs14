import Link from "next/link";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

const API_URL = "https://books-api.nomadcoders.workers.dev/lists";
async function getLists() {
  const json = await (await fetch(API_URL)).json();
  return json.results;
}

export default async function Home() {
  const lists = await getLists();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>The New York Times Best Seller Explorer</h3>
      <div className={styles.categories}>
        {lists.map((item) => (
          <li key={item.list_name} className={styles.category}>
            <Link href={`/list/${item.list_name_encoded}`}>
              {item.list_name} &rarr;
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
