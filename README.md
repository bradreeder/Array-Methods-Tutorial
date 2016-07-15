# Array-Methods-Tutorial

I've created a series of video-tutorials to accompany this library. If you plan to follow them I'd strongly
recommend not reading the source code here first as the tutorials will include exercises that will involve writing some of the array methods yourself.

##What

This is a library of Javascript Array methods that tries to recreate the basic functionality of
the Array iteration methods in javascript.

It currently includes: `_map`, `_forEach`, `_find`, `_findIndex`, `_filter`, `_every`, `_some`,
`_reduce`, and `_reduceRight`.

My array methods are not polyfills for the real methods. There are a number of edge cases the real
ones handle that I've avoided handling for sake of capturing the basic idea of these methods as simply
as possible.

##Why

Primarily for my own education on array methods, higher-order functions, and callbacks.

I figured the best way to understand array methods would be to try to re-write what they do in my own words.
If I can then explain what I've done to someone else, then even better.

##How

I studied the MDN article for each respective method and tried to recreate its
basic functionality as best as I could from the description it gives.

I then tested my methods against the examples given in these articles.

##Resources

To see what the Array methods really look like study the sections titled 'Polyfill'
in the MDN articles below:

* [Eloquent JS -- Chapter 5: Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)
* [Underscore js: Annotated Source](http://underscorejs.org/docs/underscore.html)
* [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [MDN: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN: find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [MDN: findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
* [MDN: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [MDN: every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* [MDN: some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* [MDN: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [MDN: reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

##Stretch goals

* Write tests for each of the functions I've written and use the tdd method to perfect them.
* Go through the steps of making this into a real library.
* Study the underscore.js annotated library thoroughly and try to recreate some of its unique methods here.
* Build upon my library with more array methods.
