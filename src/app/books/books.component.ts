import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../services/books.services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books : any
  bookSubcription : Subscription | undefined;


  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.bookSubcription = this.bookService.bookSubject.subscribe(
      (b : any[]) => {
        this.books = b
      }
    )
    this.bookService.emitBooksSubject()
  }
  
  ngOnDestroy(){
    this.bookSubcription?.unsubscribe();
  }

}
