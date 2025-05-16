import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@Component({
  selector: 'app-edit-book',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    RouterModule,
  ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  book: Book | undefined;
  bookService: BookService = inject(BookService);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {
    const bookId = Number(this.route.snapshot.params['id']);
    this.bookService.getBookById(bookId).subscribe((data) => {
      this.book = data;
      this.model = this.book;
    });
  }

  form = new FormGroup({});

  options: FormlyFormOptions = {};

  model: any;

  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props: {
        label: 'Title',
        required: true,
      },
    },
    {
      key: 'author',
      type: 'input',
      props: {
        label: 'Author',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'input',
      props: {
        label: 'Description',
        required: true,
      },
    },
    {
      key: 'genre',
      type: 'select',
      props: {
        label: 'Genre',
        options: [
          { label: 'Romance', value: 'Romance' },
          { label: 'Science Fiction', value: 'Science_fiction' },
          { label: 'Fantasy', value: 'Fantasy' },
          { label: 'Biography', value: 'Biography' },
          { label: 'Education', value: 'Education' },
        ],
        required: true,
      },
    },
    {
      key: 'imgUrl',
      type: 'input',
      defaultValue: 'This is a default value',
      props: {
        label: 'Image URL',
        required: true,
      },
    },
  ];

  onSubmit(model: any) {
    this.bookService.updateBook(model);
    this.router.navigate(["/"])
  }

  onDeleteClicked() {
    this.bookService.deleteBook(this.model?.id)
    console.log(this.book?.id)
  }
}
