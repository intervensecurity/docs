import { type BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// Shared layout config used by both the marketing home and the docs section.
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="font-semibold tracking-tight">
        🛡️ Interven
      </span>
    ),
  },
  links: [
    { text: 'Docs', url: '/docs', active: 'nested-url' },
    { text: 'Console', url: 'https://app.intervensecurity.com', external: true },
    { text: 'Status', url: 'https://status.intervensecurity.com', external: true },
    { text: 'GitHub', url: 'https://github.com/intervensecurity', external: true },
  ],
};
