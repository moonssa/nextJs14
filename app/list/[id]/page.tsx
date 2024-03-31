import { Suspense, useState } from "react";
import BooksInfo from "../../../components/book-info";

export default function Books({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h3>Book List</h3>
      <Suspense fallback={<h3> Loading Movie Info ...</h3>}>
        <BooksInfo id={id} />
      </Suspense>
    </div>
  );
}
