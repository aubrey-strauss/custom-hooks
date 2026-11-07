# TODO — Custom Hooks Implementation (Lab 2, M10)

Just the tasks. Check things off as you go: change `[ ]` to `[x]`.

**Approach: top-down, screen first, then make it work.**

1. Build both demo screens as placeholders (fake values, buttons that do nothing).
2. Create both hooks as "fake" versions that return placeholder values, and connect them to the screens.
3. Make `useDebounce` real first (it's small and teaches `useEffect` cleanup).
4. Make `usePagination` real one value at a time.
5. Test the edge cases last, because they poke at everything else.

**Grading:** 40 points. `usePagination` (15), `useDebounce` (15), Demo components (10).
To get "Excellent": every return value works, edge cases are handled (0 items, bad page numbers, delay changes),
`useEffect` has the right dependencies and a `clearTimeout` cleanup, and the demos show off every feature.

## Phase 0: Setup

- [ ] Create the GitHub repo (`custom-hooks`)
- [ ] In the `2026-RTT-44` folder, scaffold a Vite + React + TypeScript project named `custom-hooks`
- [ ] `cd custom-hooks`
- [ ] `npm install`
- [ ] `npm run dev` and see the Vite demo page in the browser
- [ ] `git init`, connect the GitHub repo (`git remote add origin ...`)
- [ ] First commit + push

## Phase 1: Clean up + folders

- [ ] Delete the Vite demo code in `App.tsx`
- [ ] Clear out the demo styles in `App.css` (keep the file, empty it)
- [ ] Delete leftover demo images in `src/assets/`
- [ ] Create a `components/` folder in `src` (for the demo screens)
- [ ] Create a `hooks/` folder in `src` (for the custom hooks)
- [ ] Commit + push

## Phase 2: Screen structure (placeholders, nothing works yet)

- [ ] Create `components/PaginationDemo.tsx` (returns a simple placeholder)
- [ ] Create `components/DebounceSearchDemo.tsx` (returns a simple placeholder)
- [ ] `App.tsx` shows both components, with a "Lab 10.2: Custom Hooks" heading
- [ ] Add the Pagination layout with fake values:
  - [ ] Heading "Pagination Demo" + "Page 1 of 10" (typed in, not real yet)
  - [ ] A short list of fake items ("Item 1", "Item 2", "Item 3")
  - [ ] Previous and Next buttons (no `onClick` yet)
  - [ ] A few page number buttons: 1, 2, 3
  - [ ] An "info" area for the extra hook values: startIndex, endIndex, itemsOnCurrentPage, canPrevPage, canNextPage
- [ ] Add the Debounce layout with fake values:
  - [ ] Heading "Debounce Search Demo"
  - [ ] A text input ("Search...")
  - [ ] "Current input:" and "Debounced value:" lines (empty for now)
  - [ ] A delay dropdown (0 / 500 / 1000 / 2000 ms)
- [ ] Check it: both screens show up in the browser
- [ ] Commit + push

## Phase 3: Fake hooks (connect the pipes)

- [ ] Create `hooks/useDebounce.ts`: takes `value` and `delay` (default 500), just returns `value` for now
- [ ] Create `hooks/usePagination.ts`: takes `{ totalItems, itemsPerPage, initialPage }` (defaults 10 and 1),
      returns an object with all 10 values set to placeholders
- [ ] Import each hook into its demo component and call it
- [ ] Check it: no red errors, screens still show up
- [ ] Commit + push

## Phase 4: Debounce demo input (real data)

- [ ] Add `useState` for `searchTerm`, starting at `""`
- [ ] Connect the input to `searchTerm` (`value` + `onChange`)
- [ ] Add `useState` for `delay`, starting at 500, and connect the dropdown
- [ ] Pass `searchTerm` and `delay` into `useDebounce`
- [ ] Show `searchTerm` on the "Current input:" line and the hook's result on "Debounced value:"
- [ ] Check it: both lines match exactly as you type (expected for now, the hook isn't real yet)
- [ ] Commit + push

## Phase 5: Make `useDebounce` real (`useEffect` + cleanup)

- [ ] Inside the hook, add `useState` for `debouncedValue`, starting at `value`
- [ ] Return `debouncedValue` instead of `value`
- [ ] Add a `useEffect` that starts a `setTimeout`
- [ ] When the timer finishes, save `value` into `debouncedValue`
- [ ] Dependency array: re-run when `value` OR `delay` changes
- [ ] Put a `console.log` inside the timer, type fast, and watch what happens without cleanup
- [ ] Cleanup function: cancel the waiting timer (`clearTimeout`)
- [ ] Check it: "Debounced value" only updates after you stop typing
- [ ] Check it: switching the delay dropdown changes how long it waits
- [ ] Remove the test `console.log` from the hook
- [ ] Commit + push

## Phase 6: Fake search (in the demo)

- [ ] Add a second `useEffect` in `DebounceSearchDemo` that runs when the debounced value changes
- [ ] Log `Searching for: [debouncedValue]` to the console
- [ ] Skip the log when the search box is empty
- [ ] Check it: type "apple" fast → only ONE "Searching for: apple" log
- [ ] Commit + push

## Phase 7: Pagination demo data

- [ ] Make a fake list of 100 items (`Array.from`) in `PaginationDemo`
- [ ] Pass `items.length` into `usePagination` as `totalItems`
- [ ] Commit + push

## Phase 8: `totalPages` + `currentPage`

- [ ] In the hook: calculate `totalPages` with `Math.ceil`
- [ ] In the hook: add `useState` for `currentPage`, starting at `initialPage`
- [ ] Return the real values instead of the placeholders
- [ ] Show them in "Page X of Y"
- [ ] Check it: 100 items → "Page 1 of 10"
- [ ] Commit + push

## Phase 9: Index math (which items are on this page)

- [ ] Calculate `startIndex` (work it out on paper: page 1 → 0, page 2 → 10)
- [ ] Calculate `itemsOnCurrentPage` (the last page may not be full)
- [ ] Calculate `endIndex` (0-based, the LAST item on the page)
- [ ] In the demo: show only this page's items with `.slice()` (watch out: slice's end number is NOT included)
- [ ] Show the real values in the "info" area
- [ ] Check it: page 1 shows Item 1–10, startIndex 0, endIndex 9, itemsOnCurrentPage 10
- [ ] Commit + push

## Phase 10: Moving between pages

- [ ] Calculate `canNextPage` and `canPrevPage` (true/false)
- [ ] Write `nextPage` and `prevPage` (use the previous value: `prev => ...`)
- [ ] Connect them to the Next / Previous buttons with `onClick`
- [ ] Disable Previous when `canPrevPage` is false, and Next when `canNextPage` is false
- [ ] Write `setPage(pageNumber)` and keep the page between 1 and `totalPages` ("clamping")
- [ ] Make the page number buttons real (one for every page) and connect them to `setPage`
- [ ] Highlight the current page's button
- [ ] Check it: Previous is greyed out on page 1, Next is greyed out on the last page
- [ ] Commit + push

## Phase 11: Edge cases

- [ ] Add a "Total items" dropdown to the demo (0, 7, 25, 95, 100)
- [ ] Add an "Items per page" dropdown (5, 10, 20)
- [ ] 95 items → the last page shows 5 items
- [ ] 0 items → decide what `totalPages`, `currentPage`, and `endIndex` should be, and show "No items"
- [ ] `itemsPerPage` of 0 → don't divide by zero
- [ ] Add test buttons: `setPage(999)` and `setPage(-5)` → nothing breaks
- [ ] Go to the last page, then shrink "Total items" → you land on a page that exists
- [ ] Commit + push

## Phase 12: Test everything

- [ ] Click through every feature in both demos one more time
- [ ] Open the browser console: no red React errors
- [ ] Remove leftover `console.log`s you don't need (keep the "Searching for:" one)
- [ ] Commit + push

## Phase 13: Submission

- [ ] README.md (description, both hooks, install/run steps)
- [ ] Make sure the repo is public
- [ ] Final push, submit the GitHub link on Canvas
