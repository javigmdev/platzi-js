const fruits = () => {
  if (true) {
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';

    fruit2 = 'Orange';
    console.log(`let - can be reassigned: ${fruit2}`);
    console.log(`const - can't be reassigned`);
    // fruit3 = 'Lemon'; // TypeError: Assignment to constant variable.
  }
  console.log(`Function scope:  ${fruit1}`);
  // console.log(`Block scope:  ${fruit2}`); // ReferenceError: fruit2 is not defined
  // console.log(`Block scope:  ${fruit3}`); // ReferenceError: fruit3 is not defined
};

fruits();
