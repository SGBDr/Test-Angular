import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/books.services';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  book : any = {
    'id' : 1,
    'image' : "https://via.placeholder.com/50",
    'desc' : "You and your name are true",
    'name' : "All In"
  }

  constructor(private bookService : BookService, private route : Router) { }

  ngOnInit(): void {
  }

  OnSubmit(form: NgForm){
    this.book['name'] = form.value['name']
    this.book['desc'] = form.value['desc']
    this.book['image'] = form.value['image']
    this.book['id'] = this.bookService.getLastId() + 1
    this.bookService.addBook(this.book)
    this.route.navigate(['/books'])
  }

}
