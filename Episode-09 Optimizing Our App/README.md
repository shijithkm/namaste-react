# What i learned from Episode-09 Optimizing your app ?

# Single Responsibility

- Reusable
- Maintainable
- Testable

# Custom Hooks

- Understand the contract
- Input cardId
- Output Card Details
- eg. moving API logic from componenet
- const cardDetails = useCardDetails(cardId);

# Use Online status hook

- https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

# Optimize Performance

- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- All above are same logic

- const CardDetails = lazy(() => import("./src/componenets/CardDetails"));
- <Suspense fallback="<h1>Loading...</h1>"><CardDetails /></Suspense>
