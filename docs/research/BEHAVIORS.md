# BeFreed observed behaviors

## Navigation

- Fixed at the top of the viewport.
- Transparent at the top; individual controls use bordered or filled rounded rectangles.
- Dropdown arrows, search, Discord, language, and menu controls show hover feedback.
- On narrow screens the desktop navigation collapses to the logo and menu controls.

## Hero

- The white line field moves gently.
- Freedia floats slightly.
- Learner count resolves to `884,439`.
- The scroll control jumps to the first knowledge section.

## Knowledge cloud

- Tiles drift, scale, and change opacity in response to page scroll.
- The same visual field bridges both headings.
- Tiles are decorative and pointer-events are disabled.

## Audio topic selector

- Default active topic: “The 5 Love Languages”.
- Clicking a topic moves the white selected state to that pill.
- The cover, four-line ambient quote, and source count update.
- Verified alternate state: “The Charisma Myth” uses `podcast_4.png`, 22 sources, and the quote beginning “Quiet strength isn't about silence…”.
- Play toggles a local demo progress state.

## Feature panels

- Five alternating text/panel rows.
- Panel contents use looping micro-animations: generated prompt reveal, floating voices, learning-depth cards, two-party audio bubbles, and saved journal text.
- CTA buttons invert subtly on hover.

## Community and footer

- Portrait cards display a centered play control.
- Testimonial cards are static but have hover border/translate feedback.
- Download button and footer links are real anchors.

## Responsive

- Desktop composition is calibrated at 1440 × 900.
- Below 900 px, paired sections stack, typography scales down, and overflowing topic/video rows become horizontally scrollable.
- `prefers-reduced-motion` disables decorative loops and smooth scrolling.
