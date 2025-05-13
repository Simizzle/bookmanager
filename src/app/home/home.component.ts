import { Component, inject } from '@angular/core';
import { BookItemComponent } from "../book-item/book-item.component";
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BookItemComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // bookList: Book[] = []
  bookList = new Set<Book>()
  bookService: BookService = inject(BookService)

  constructor() {
    this.bookList = this.bookService.getAllBooks()
  }
}
