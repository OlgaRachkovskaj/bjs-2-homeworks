class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this.state = 100
    this.type = null
  }

fix() {
this.state *= 1.5;
  }
   
set state (number) {
  if (number < 0) {
    this._state = 0;
  }
    if (number >100) {
      this._state = 100;
} else {
  this._state = number;
}
}
 
get state (){
  return this._state;
}
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine"
  }
}

class Book extends PrintEditionItem {
  constructor(autor , name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book"
    this.author = autor 
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";  
  }
}

class FantasticBook extends Book{
  constructor(autor , name, releaseDate, pagesCount) {
  super(autor , name, releaseDate, pagesCount);
    this.type = "fantastic"
}
}

class DetectiveBook extends Book{
  constructor(autor , name, releaseDate, pagesCount) {
  super(autor , name, releaseDate, pagesCount);
    this.type = "detective"
}
}

class Library{
constructor(name,books){
  this.name = name;
  this.books = [];
 }

 addBook(book) {
  if (book.state > 30){
    this.books.push(book);
  }
}

findBookBy(type, value){
  return this.books.find(book => book[type] == value) || null;
}
 
giveBookByName(bookName) {
  const book = this.findBookBy('name', bookName);
  if (book) {
    this.books.splice(this.books.indexOf(book), 1);
  }
  return book;
}
}

class Student {
  constructor (name,  marks = {}) {
    this.name = name;
    this.marks = marks;
  }

addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
     }
    if (Object.keys(this.marks).length != 0) {
      if (this.marks.hasOwnProperty(subject)) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
      }
    } else {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
    }
}


getAverageBySubject(subject){
    if (this.marks[subject] == undefined) {
        return 0;  
    } else {
        let arr = this.marks[subject].reduce((a, b) =>  a + b / this.marks[subject].length, 0);
        return arr;
    }
}


getAverage(){
  let keys = Object.keys(this.marks);
      if (keys.length > 0) {
        let sum = keys.reduce((a, b) => a + this.getAverageBySubject(b), 0);
        return sum/keys.length; 
    } else {
        return 0;}
}

}