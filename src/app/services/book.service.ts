import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book'
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

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
    this.http.post<Book>(this.url, book).subscribe(
      book => {
        savedBook = book
  });
  return savedBook;
}

getBookById(id: Number) : Observable<Book> {
  var book: Book | undefined;
  return this.http.get<Book>(`${this.url}/${id}`);
    // return book;
}

updateBook(book: Book): Book | undefined {
  let updatedBook: Book | undefined;
  this.http.put<Book>(this.url, book).subscribe(
    book => updatedBook = book
  )
  return updatedBook;
}

  constructor() { }
}
