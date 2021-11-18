import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../services/books.services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() name : string = "";
  @Input() desc : string = "";
  @Input() image : string = "";
  @Input() id : number = 0;
  modal : string = ""

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.modal = "modal-" + this.id
  }

  OnView(){

  }

  OnModify(f : NgForm){

  }

  OnDelete(){
    this.bookService.deleteBook(this.id)
    this.bookService.emitBooksSubject()
  }
}
