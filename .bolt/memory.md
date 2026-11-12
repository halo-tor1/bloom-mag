# Project memory

## Product intent & audience

- Website featuring a gallery with titled subsections (e.g., "Scholarship Exam").
- Owner manages photos by dropping files into `public/images`; site renders them automatically.

## Brand personality & voice

- Helpful, instructional tone; gives concrete file-name and folder guidance for non-developer workflows.

## Visual design & UX direction

- Gallery organized into named sections; each section has a gallery card and a dedicated page.
- Image assets stored in `public/images`.
- File naming convention: kebab-case section slug + numeric suffix (e.g., `scholarship-exam-1.jpg`).
- Components expect fixed file names; additional photos require updating the configured list.

## Decisions, constraints & rationale

- "Scholarship Exam" added as a gallery subsection with four initial image slots.
- Prescribed exact filenames (`scholarship-exam-1.jpg` … `scholarship-exam-4.jpg`) so uploads work without code changes.
- Rationale: keep owner workflow simple—upload named files, no manual edits needed.
- Default development framework assumed (DEFAULT_TO_DEV).

## Open questions & assumptions

- Assumption: project serves `public/images` statically and gallery reads from a configured list, not filesystem scanning.
- Assumption: four photos is the initial batch; more can be added later by updating names.
- Unknown: exact framework/version, gallery component implementation details, and whether sections are data-driven or hardcoded.
- Unknown: whether user will upload via chat or manually place files.