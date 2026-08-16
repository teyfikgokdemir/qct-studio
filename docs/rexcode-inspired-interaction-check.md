# RexCode-inspired interaction check

QCT Studio local preview: `http://127.0.0.1:4321/`

The header now exposes Home, About, Work, Services, Careers and Contact, with Work and Services as native button-controlled submenu groups. The Work panel contains `View Our Work` and `Talk to Our Team`; the Services panel retains the existing service destinations. The generated page includes two `data-submenu-toggle` controls and the new translated labels.

The hero remains a two-column composition: a strong left-aligned business headline and CTA pair, with the existing Balkan Signal Room on the right. The existing hero animation system already uses a staged entry and explicitly supports `prefers-reduced-motion`. The new work is focused on navigation hierarchy and panel styling rather than adding more heavy hero motion.

The build completed 77 localized pages. The built HTML audit reported 76 indexable files, 129 JSON-LD blocks, 2,787 internal links checked, and passed canonical, hreflang, metadata, structured-data and internal-link validation.

The open Work panel is rendered as a compact two-column surface under the header and exposes `View Our Work` and `Talk to Our Team`. The accessibility tree shows Work as a button and both panel destinations as links. Existing Services remains a separate button-controlled group, so the header now has two progressive-disclosure destinations without introducing a full-screen mega menu.
