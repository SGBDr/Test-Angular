import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/books.services';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {
  
  book = {'name' : '', 'desc' : '', 'image' : ''}

  constructor(private bookService : BookService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.book = this.bookService.getBook(+this.route.snapshot.params['id']);
  }

  getBook(id : number){

  }

}
