import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book'
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private http = inject(HttpClient)

  // bookList: Book[] = []

  url="http://localhost:8080/api/v1/book"

  getAllBooks(): Set<Book> {
    var bookList = new Set<Book>()
    const data = this.http.get<Book[]>(this.url).subscribe(books => {
      books.forEach((item) => bookList.add(item))
    });
    return bookList;
  }

  saveBook(book: Book): Book | undefined{
  let savedBook: Book | undefined;
    const data = this.http.post<Book>(this.url, book).subscribe(
      book => {
        savedBook = book
  });

  console.log(savedBook)
  return savedBook;
}

  constructor() { }
}
