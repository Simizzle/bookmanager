import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-item',
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})

export class BookItemComponent {
  @Input() bookItem!: Book;
}
