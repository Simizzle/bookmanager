import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routeConfig: Routes = [
    {
        path:"",
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path:"addbook",
        component: AddBookComponent,
        title: "Add Book"
    },
    {
        path:"editbook/:id",
        component: EditBookComponent,
        title: "Edit Book"
    }
]

export default routeConfig;
