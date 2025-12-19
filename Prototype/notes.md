here's what happens behind the scenes when the (new) keyword is
used:

A new object is created: The new Keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created objects gets linked to the prototype property of the constructor function. This means that is has access to properties and methods defined on the constructor's prototype.

The constructor is called: tThe constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified arguments and this bound to the newly created object. If n explicit return value is specified from the constructor. JS assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function
has been called, if it doesn't return a non-primitive value (object,array ,function,etc.), the newly created object is returned
