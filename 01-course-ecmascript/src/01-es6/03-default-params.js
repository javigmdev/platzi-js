function printUser(name, age, country) {
  var name = name || 'Tom';
  var age = age || 34;
  var country = country || 'UK';
  console.log(name, age, country);
}

printUser();
printUser('David', 15, 'Spain');

function printAdmin(name = 'Tom', age = 34, country = 'UK') {
  console.log(name, age, country);
}

printAdmin();
printAdmin('David', 15, 'Spain');
