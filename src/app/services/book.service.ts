import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  private _refreshRequired = new Subject<void>();

  url = 'http://localhost:8080/api/v1/book';

  get refreshRequired() {
    return this._refreshRequired;
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
  }

  saveBook(book: Book) {
    return this.http.post<Book>(this.url, book).pipe(
      tap(() => {
        this._refreshRequired.next();
      })
    )
  }

  getBookById(id: Number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http
      .put<Book>(`${this.url}/${book.id}`, book).pipe(
        tap(() => {
          this._refreshRequired.next();
        })
      )
  }

  deleteBook(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(()=> {
        this._refreshRequired.next();
      })
    )
  }

  constructor() {}
}
