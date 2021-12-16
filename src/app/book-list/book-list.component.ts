import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
