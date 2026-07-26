---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# C 版首页

## Scope and mode

- Primary target: `app/page.tsx`
- Mode: Read
- This is the approved scientific microfilm composition and the only version in scope.

## Audience and job

The note author and curious general readers need to move from a nine-era overview into individual events, people, consequences, and tensions without losing their place in history.

## Content and constraints

- Source of truth: the merged personal reading-note manuscript.
- Preserve nine eras, 52 main and child nodes, three lanes, important people or groups, and the non-timeline analytical framework.
- Present the work as a personal reading synthesis, not a verified encyclopedia.
- Desktop may use three columns; mobile must become one reading flow with an accessible detail sheet.

## Chosen direction

Scientific microfilm atlas room. A narrow era index anchors the left, a tall three-lane time film occupies the center, and a luminous reading pane on the right explains the selected event. Graphite and smoked navy create the room; projected off-white creates the reading surface; vermilion is the only accent.

The memorable moment is focus transfer: selecting an event lights the relevant science, technology, and civilization rails, then the right pane resolves its turning point, people, effects, and tension.

Approved composition: `.impeccable/mocks/timeline-compositions-abc.png`, panel C.

## Asset inventory

| Ingredient | Medium | Decision |
| --- | --- | --- |
| Three-lane timeline and causal states | Semantic HTML and CSS | Produce |
| Era index and filters | Semantic HTML controls | Produce |
| Reading pane and tabs | Semantic HTML and React state | Produce |
| Microfilm grain | Generated raster texture | Produce at `public/microfilm-grain.png` |
| Historic portraits | None in C version | Omit until provenance and rights exist |
| Icons | Text controls first; one consistent library only if needed | Avoid unnecessary icon chrome |

## Scope boundary

Alternative compositions are out of scope. Preserve the approved microfilm reader and its durable content model.
