# Problem

A sequence of well-formed parentheses is one in which every opening parenthesis has a corresponding closing parenthesis, the order is correct,
and at no point does a closing parenthesis appear before its matching opening parenthesis in the sequence.

## Definition and Properties
A string of parentheses is well-formed if:

- Every opening `(` is eventually matched by a closing `)`.
- At any point when reading the string left to right, the number of `)` does not exceed the number of `(`.
- All types of brackets (such as (), {}, []) must be properly stacked and closed in nested expressions.​
- The string is balanced, meaning total number of ( equals total number of `)` and the nesting is proper.​

## Examples of Well-Formed Parentheses

### For one pair (n=1):

```
()
```

### For two pairs (n=2):

```
(())

()()
```

### For three pairs (n=3):

```
((()))

(()())

(())()

()(())

()()()
```

## Question:

Given a number `n` (0 < n <= 1000), calculate the exact number of possible well formed parentheses consist of n pair (string length = 2n)

Example:
input: n=1 -> output: 1
input: n=2 -> output: 2
input: n=3 -> output: 5
