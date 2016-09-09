function myFunction(){
  console.log("My context is this", this);
}

var person = {
  name: 'brack',
  stuff: 'foo',
  bar: 'fuz',
  method:myFunction
};

//person.method();

var sally = {
  name: 'sally',
  nickname: 'rally',
  age: '27'
}

myFunction.call(sally);
//
