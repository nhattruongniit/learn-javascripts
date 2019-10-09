# Ebook Javascript: The Definitive Guide - 6th Edition - David Flanagan

# 3/ Types, Values, and Variables

## primitive types & object types

- primitive types: number, string, boolean truth values, null, undefined

- object types: object

## mutable & immutable types

- mutable: object, array

- immutable: number, boolean, null, undefined

## Javascript variables are untyped

- global scope: it declared outside of a function

- function scope: it declared inside of a function

## Numbers

- All numbers in javascript are <b>floating-point</b> values (64-bit).

- A number appears directly in javascript program. It's called a <b><i>number literal</i></b>

## Integer literals

- Math.pow(2,53) // => 9007199254740992: 2 to the power 53
- Math.round(.6) // => 1.0: round to the nearest integer
- Math.ceil(.6) // => 1.0: round up to an integer
- Math.floor(.6) // => 0.0: round down to an integer
- Math.abs(-5) // => 5: absolute value
- Math.max(x,y,z) // Return the largest argument
- Math.min(x,y,z) // Return the smallest argument
- Math.random() // Pseudo-random number x where 0 <= x < 1.0
- Math.PI // π: circumference of a circle / diameter
- Math.E // e: The base of the natural logarithm
- Math.sqrt(3) // The square root of 3
- Math.pow(3, 1/3) // The cube root of 3
- Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
- Math.log(10) // Natural logarithm of 10
- Math.log(100)/Math.LN10 // Base 10 logarithm of 100
- Math.log(512)/Math.LN2 // Base 2 logarithm of 512
- Math.exp(3) // Math.E cubed

## Dates and Times

- var then = new Date(2010, 0, 1); // The 1st day of the 1st month of 2010
- var later = new Date(2010, 0, 1, // Same day, at 5:10:30pm, local time
- 17, 10, 30);
- var now = new Date(); // The current date and time
- var elapsed = now - then; // Date subtraction: interval in milliseconds
- later.getFullYear() // => 2010
- later.getMonth() // => 0: zero-based months
- later.getDate() // => 1: one-based days
- later.getDay() // => 5: day of week. 0 is Sunday 5 is Friday.
- later.getHours() // => 17: 5pm, local time
- later.getUTCHours() // hours in UTC time; depends on timezone
- later.toString() // => "Fri Jan 01 2010 17:10:30 GMT-0800 (PST)"
- later.toUTCString() // => "Sat, 02 Jan 2010 01:10:30 GMT"
- later.toLocaleDateString() // => "01/01/2010"
- later.toLocaleTimeString() // => "05:10:30 PM"
- later.toISOString() // => "2010-01-02T01:10:30.000Z"; ES5 only

## Boolean values

- False: undefined, null, 0, -0, NaN, " " (empty string)
