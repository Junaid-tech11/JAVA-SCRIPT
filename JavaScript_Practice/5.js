// Declare constants for the lengths of the three sides of a triangle

const side1 = 5;
const side2 = 6;
const side3 = 7;

// Calculate the semi-perimeter of the triangle
const perimeter = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));

// Log the calculated area to the console
console.log(area);