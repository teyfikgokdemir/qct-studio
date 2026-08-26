# QCT Motion Browser Findings

- 390x844: Hero heading, supporting copy and CTA remain readable above the fold. Mobile menu button is visible. Cookie consent overlays the lower viewport but does not affect hero layout or horizontal overflow.
- 1440x900: Desktop hero maintains a strong two-column composition with clear CTA hierarchy and a stable visual panel. No visible jank, excessive motion, or horizontal overflow was observed in the captured render.
- Automated browser smoke checks reported no page errors or console errors at either viewport.

- 768x1024: The tablet/mobile layout keeps the hero copy and preview panel in a readable vertical flow. The cookie banner overlaps lower content as an existing consent UI, not as a motion/layout regression.
- 1280x1100: The desktop breakpoint preserves the two-column hero and stable card geometry. CTA hierarchy remains clear; no excessive movement or clipping is visible in the captured render.
