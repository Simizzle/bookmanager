import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BookService } from '../services/book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, RouterModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  bookService: BookService = inject(BookService)
  form = new FormGroup({});
  model: any = {}

  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props: {
        label: 'Book title',
        placeholder: 'Enter title',
        required: true,
      }
    },
    {
      key: 'author',
      type: 'input',
      props: {
        label: 'Author',
        placeholder: 'Enter author',
        required: true,
    }
  },
  {
    key: 'description',
    type: 'input',
    props: {
      label: 'Description',
      placeholder: 'Enter description',
      required: true,
  }
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
    required: true
  },
},
{
  key: 'imgUrl',
  type: 'input',
  props: {
    label: 'Image URL',
    placeholder: 'Image URL',
    required: true,
}
},
  ];

  onSubmit(model: any) {
    this.bookService.saveBook(model)    
  }
}
