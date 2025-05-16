import { Component, inject, Pipe, PipeTransform } from '@angular/core';
import { BookItemComponent } from "../book-item/book-item.component";
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
  bookList: any;
  bookService: BookService = inject(BookService)

  constructor() {
  }

  ngOnInit(): void {
    this.getAll()
    this.bookService.refreshRequired.subscribe((books) => {
      this.getAll();
  })
};

  getAll() {
    this.bookService.getAllBooks().subscribe(books => {
      this.bookList = books;
    })
  }


}
