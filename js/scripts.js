var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCase = animal.toUpperCase();
var textReplaced = text.replace('Papugi', animalUpperCase);
var partOfText = textReplaced.slice(0, textReplaced.length / 2);
console.log(partOfText);
