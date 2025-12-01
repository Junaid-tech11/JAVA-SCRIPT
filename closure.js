    // // Here is the full notes of the Closure:: -

    //     1. Eg: -
    //         function x() {
    //             var a = 7;
    //             function y() {
    //                 console.log(a);
    //             }
    //             y();
    //         }
    // x();

    // Output: 7

    // Closure: Scope
    // Closure(x)
    // a: 7 
    // Closure basically means that a function bind together with its lexical environment.Or function along with its lexical scope is known as Closure.
    // The function y() was bonded to the variables of function x(). That is, y() forms a closure and it has access to it's parent's lexical scope.
    // Closure in JS is a form of lexical scoping used to preserve variables from the outer scope(x()) of a function in the inner scope of a function (y()). 
    // ** A closure is the combination of a function bundled together(enclosed) with references to its surrounding state(the lexical environment).In other words, a closure gives you access to an outer function's scope from an inner function. In JS, closures are created every time a function is created, at function creation time.

    // 2. In JS, we can assign function to variables.
    //     Eg : -
    //         function a() {
    //             var x = 9;
    //             var b = function y() {
    //                 console.log(x);
    //             }
    //             b();
    //         }
    // a();


    // Output: 9

    // 3. Functions can also be passed as arguments for another function.
    //     Eg : -
    //         function x(y) {
    //             var a = 9;
    //             console.log(y);
    //             y();
    //         }
    // x(function y() {
    //     console.log("hello world");
    // });

    // 4. Functions can also be returned from another function.
    // Eg: -
    //     function x() {
    //         var a = 7;
    //         function y() {
    //             console.log(a);
    //         }
    //         return y;
    //     }
    // var z = x();

    // 5. Eg: -
    //     function x() {
    //         var a = 7;
    //         function y() {
    //             console.log(a);
    //         }
    //         return y;
    //     }
    // var z = x();
    // console.log(z);

    // Output: f y() {
    //     console.log(a);
    // }
    // * Note that here y() was never called, it is just simply being returned by x.So, "z" actually contains the whole body of y().

    //     Eg : -
    //         function x() {
    //             var a = 7;
    //             function y() {
    //                 console.log(a);
    //             }
    //             return y;
    //         }
    // x();
    // var z = x();
    // z();

    // Output: 7

    //     * Even though, after the function x() finishes executing and it is nowhere residing in the call stack, it's execution context is also deleted. So, how is "z" able to find the value of "a". It is because when functions are returned, they still remember where they came from, they still remember the values of variables they have access to. We know that y() in its closure contains the reference to "a". So, when y() was returned, not only a function is returned, it's closure or lexical scope is also returned.So, this is how JS engine was able to find the value of "a", because "a" was residing in the closure of y(). 

    // 6.   function x() {
    //     var a = 7;
    //     function y() {
    //         console.log(a);
    //     }
    //     a = 100;
    //     return y;
    // }
    // x();
    // var z = x();
    // z();

    // Output: 100

    // 7. function z() {
    //     var b = 100;
    //     function x() {
    //         var a = 7;
    //         function y() {
    //             console.log(a, b);
    //         }
    //         y();
    //     }
    //     x();
    // }
    // z();

    // Output: 7 100

    // Memory Picture:

    // Scope:
    // Closure(x)
    // a: 7
    // Closure(z)
    // b: 100

    //     * y() forms a closure along with the the scope of x() and z().And that's why it remembers the values of "a" and "b". 

    // Eg:
    // function z() {
    //     var b = 100;
    //     function x() {
    //         var a = 7;
    //         function y() {
    //             console.log(a, b);
    //         }
    //         return y;
    //     }
    //     return x;
    // }
    // var p = z();
    // var t = p();
    // t();

    // // Output: 7 100

    // // 8. Uses of closures:
    // // A.Module Design Pattern
    // // B.Currying
    // // C.Maintaining state in async world
    // // D.setTimeouts
    // // E.Iterators