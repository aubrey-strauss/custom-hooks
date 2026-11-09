# Notes for README / Reflections

Things that were hard while building this lab, and what I learned from them.

## `itemsOnCurrentPage` and `Math.min` (Phase 9)

**What was hard:** On the last page, the page might not be full (95 items, 10 per page,
so page 10 only has 5). My first try was `Math.min(totalItems, startIndex)`, which gave **90**
instead of 5.

**Why it went wrong:** The comma in `Math.min( , )` separates two *choices*, and it picks the smaller one.
I gave it `totalItems` (95) and `startIndex` (90) as two separate choices, so it picked 90.
What I actually needed was the *items left* (`totalItems - startIndex` = 5) compared against `itemsPerPage` (10).

**What I learned:** Inside `Math.min(a, b)`, each slot can be a whole calculation, not just one variable.
Put the math in the slot (`totalItems - startIndex`) and use the comma only to separate the two choices.

## `startIndex` (Phase 9)

**What was hard:** Turning "the first item on this page" into a formula. I tried using `useState` and `Math.` for it at first.

**What I learned:**
- `useState` is only for values the hook has to *remember* and that change (like `currentPage`).
  Values that can be worked out from other values (`totalPages`, `startIndex`) are just a plain `const` with math.
- Indexes start at 0, so the trick is counting how many pages come *before* this one:
  `(currentPage - 1) * itemsPerPage`. The parentheses make the subtraction happen first.
- A line can only have one `=`. Leftover text from an earlier try broke the line.
