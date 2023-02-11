function Student (name, gender, age, marks = []) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = marks;
}

const student1 = new Student("Anna", "women", 27);
const student2 = new Student("Anton", "men", 25);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function(marks) {
    if(this.marks === undefined){
        this.marks = [...marks];   
    } else {
        this.marks.push(marks);
    }
}

Student.prototype.addMarks = function(...marks){
    if(this.marks === undefined){
        this.marks = undefined;   
    } else {
        this.marks = this.marks.concat(marks);
    }
}

Student.prototype.getAverage = function(){
    if(this.marks === undefined){
        return 0;
    } else {
      return this.marks.reduce( ( a, v ) => a + v/this.marks.length , 0) 
    }
}

 Student.prototype.exclude = function(reason){
    delete this.subject;
    delete this.marks;
    this.excluded  = reason; 
}

