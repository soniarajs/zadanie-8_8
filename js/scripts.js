var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCase = animal.toUpperCase();
var textReplaced = text.replace('Papugi', animal);
var partOfText = text.slice(0,36);
console.log(textReplaced + animalUpperCase + partOfText);
