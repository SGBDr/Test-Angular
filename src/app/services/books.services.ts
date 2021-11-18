import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class BookService{

    bookSubject = new Subject<any[]>();

    books : any[] = []

    constructor(private httpclient: HttpClient){
      this.GetBooks()
      this.emitBooksSubject()
    }

    saveBooks() {
      this.httpclient
        .put('https://blog-b2-default-rtdb.europe-west1.firebasedatabase.app/books.json', this.books)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
      );
    }

    GetBooks() {
      this.httpclient
        .get<any[]>('https://blog-b2-default-rtdb.europe-west1.firebasedatabase.app/books.json')
        .subscribe(
          (response) => {
            this.books = response;
            this.emitBooksSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

    emitBooksSubject(){
        if(this.books == null)this.bookSubject.next([])
        else this.bookSubject.next(this.books.slice())
    }

    addBook(book : any[]){
        this.books.push(book)
        this.emitBooksSubject()
        this.saveBooks()
    }
    
    getBook(id: number){
      let i = -1;
      for(let b in this.books)if(this.books[b]['id'] === id)i = +b
      return this.books[i];
    }

    deleteBook(id : number){
        let i = -1;
        for(let b in this.books)if(this.books[b]['id'] === id)i = +b
        this.books.splice(i, 1)
        this.emitBooksSubject()
        this.saveBooks()
    }

    getLastId() : number{
      if(this.books == null ) return 0
      else return this.books[this.books.length - 1]['id'];
    }

    modifyBook(){
        this.emitBooksSubject()
        this.saveBooks()
    }


}