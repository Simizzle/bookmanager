import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})

export class BookItemComponent {
  @Input() bookItem!: Book;
}
