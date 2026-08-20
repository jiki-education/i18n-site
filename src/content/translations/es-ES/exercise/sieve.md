---
lang: "es-ES"
type: "exercise"
slug: "sieve"
title: "Criba de Eratóstenes"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/sieve"
en_md5: "0766bba12d556bf7d718bb5315b41883"
governance_sha: "16f805d"
content_version: "afef109b367b"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"implementSieve.name","english":"Implement the Sieve","target":null},{"key":"implementSieve.description","english":"Write a function called sieve that takes a number and returns a list of all prime numbers up to and including that number, using the Sieve of Eratosthenes algorithm.","target":null}]},{"name":"scenarios","rows":[{"key":"sieveNoPrimesUnderTwo.name","english":"No primes under two","target":null},{"key":"sieveNoPrimesUnderTwo.description","english":"There are no prime numbers less than 2.","target":null},{"key":"sieveFirstPrime.name","english":"Find first prime","target":null},{"key":"sieveFirstPrime.description","english":"The first prime number is 2.","target":null},{"key":"sievePrimesUpTo10.name","english":"Find primes up to 10","target":null},{"key":"sievePrimesUpTo10.description","english":"Find prime numbers up to 10.","target":null},{"key":"sieveLimitIsPrime.name","english":"Limit is prime","target":null},{"key":"sieveLimitIsPrime.description","english":"Find prime numbers up to a limit that is itself prime.","target":null},{"key":"sievePrimesUpTo100.name","english":"Find primes up to 100","target":null},{"key":"sievePrimesUpTo100.description","english":"Find all prime numbers up to 100.","target":null}]},{"name":"hints","rows":[{"key":"basicIdea.question","english":"What's the basic idea of the sieve?","target":null},{"key":"basicIdea.answer","english":"Write down every number from 2 up to your limit. Take 2. It's prime, but cross out all its multiples (4, 6, 8, and so on). Move to the next unmarked number (3). It's prime, so cross out all its multiples. Repeat. Anything still unmarked at the end is prime.","target":null},{"key":"representMarked.question","english":"How do I represent 'marked' or 'unmarked'?","target":null},{"key":"representMarked.answer","english":"A dictionary keyed by the number, with a true or false value for 'marked'. Looking up `marked[n]` tells you whether n has been struck off.","target":null},{"key":"crossOutMultiples.question","english":"How do I cross out the multiples of a number?","target":null},{"key":"crossOutMultiples.answer","english":"Loop through the multiples (n*2, n*3, n*4, ...) up to the limit, marking each one in your dictionary as not prime.","target":null},{"key":"collectAnswer.question","english":"How do I collect the answer at the end?","target":null},{"key":"collectAnswer.answer","english":"After the marking phase, loop from 2 to the limit. For any number that's still unmarked, `push()` it onto the result list.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null}]}]}]
---

You bought a big box of random computer parts at a garage sale. You've started putting the parts together to build custom computers.

You want to test the performance of different combinations of parts, and decide to create your own benchmarking program to see how your computers compare. You choose the famous "Sieve of Eratosthenes" algorithm, an ancient algorithm, but one that should push your computers to the limits.

A prime number is a number larger than 1 that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11, and 13 are prime numbers. By contrast, 6 is not a prime number as it is not only divisible by 1 and itself, but also by 2 and 3.

To use the Sieve of Eratosthenes, first, write out all the numbers from 2 up to and including your given number. Then, follow these steps:

1. Find the next unmarked number (skipping over marked numbers). This is a prime number.
2. Mark all the multiples of that prime number as not prime.

Repeat the steps until you've gone through every number. At the end, all the unmarked numbers are prime.

Note: The Sieve of Eratosthenes marks off multiples of each prime using addition (repeatedly adding the prime) or multiplication (directly computing its multiples), rather than checking each number for divisibility.

Create a function called <define>`sieve`</define> that takes a number as its input, and returns a list of all the prime numbers less than or equal to that number.
