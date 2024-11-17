import Link from "next/link";
import styles from "../styles/book-info.module.css";

async function getBooks(id: string) {
  const response = await (
    await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${id}`
    )
  ).json();
  return response.results;
}

export default async function BooksInfo({ id }: { id: string }) {
  const booksInfo = await getBooks(id);
  const books = booksInfo.books;
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>{booksInfo.list_name}</h3>
      </div>

      <div className={styles.categories}>
        {books.map((book) => (
          <li key={book.rank} className={styles.category}>
            <img src={book.book_image} alt={book.title} />

            <div className={styles.bookInfo}>
              <h3>{book.title}</h3>
              <h5>{book.author}</h5>

              <Link
                href={`${book.amazon_product_url}`}
                target="_blank"
              >
                <span>Buy now &rarr;</span>
              </Link>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
