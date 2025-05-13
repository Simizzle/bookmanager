import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';

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
    }
]

export default routeConfig;
