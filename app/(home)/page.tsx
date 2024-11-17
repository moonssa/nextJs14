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
      <h3 className={styles.title}>
        The New York Times Best Seller Explorer
      </h3>

      <svg style={{ display: "none" }}>
        <defs>
          <filter id="roughen">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
            />
          </filter>
        </defs>
      </svg>

      <ul className={styles.categories}>
        {lists.map((item) => (
          <li
            key={item.list_name}
            className={`${styles.category} ${styles.svg_text}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 50"
              className={styles.svg_border}
            >
              <rect
                x="2"
                y="2"
                width="196"
                height="46"
                rx="8"
                ry="8"
                fill="none"
                stroke="black"
                strokeWidth="2"
                filter="url(#roughen)"
              />
            </svg>
            <Link href={`/list/${item.list_name_encoded}`}>
              {item.list_name} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  /*
    <div className={styles.container}>
      <h3 className={styles.title}>
        The New York Times Best Seller Explorer
      </h3>
      <ul className={styles.categories}>
        {lists.map((item) => (
          <li key={item.list_name} className={styles.svg_text}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 50"
              className={styles.svg_border}
            >
              <defs>
                <filter id="roughen">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.05"
                    numOctaves="3"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="5"
                  />
                </filter>
              </defs>
              <rect
                x="2"
                y="2"
                width="196"
                height="46"
                rx="8"
                ry="8"
                filter="url(#roughen)"
              />
            </svg>
            <Link href={`/list/${item.list_name_encoded}`}>
              {item.list_name} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
    */
  // );
}
/*
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
  */
