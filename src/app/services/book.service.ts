import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  url = 'http://localhost:8080/api/v1/book';

  getAllBooks(): Set<Book> {
    var bookList = new Set<Book>();
    const data = this.http.get<Book[]>(this.url).subscribe((books) => {
      books.forEach((item) => bookList.add(item));
    });
    return bookList;
  }

  saveBook(book: Book): Book | undefined {
    let savedBook: Book | undefined;
    this.http.post<Book>(this.url, book).subscribe((book) => {
      savedBook = book;
      console.log(savedBook)
    });

    console.log(savedBook);
    return savedBook;
  }

  getBookById(id: Number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  updateBook(book: Book): Book | undefined {
    let updatedBook: Book | undefined;
    this.http
      .put<Book>(this.url, book)
      .subscribe((book) => (updatedBook = book));
      console.log(updatedBook)
    return updatedBook;
  }

  deleteBook(id: Number): void {
    let message: string | undefined;
    this.http.delete<string>(`${this.url}/${id}`).subscribe((response) => {
      message = response;
    });

    console.log(message)
  }

  constructor() {}
}
