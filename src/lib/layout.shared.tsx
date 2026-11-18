import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import { Badge } from '@/components/badge';
import { NavLockup } from '@/components/brand';
import { config, isExternal } from '@/lib/site';

const navLinks: LinkItemType[] = config.nav.map((link) => ({
  text: link.text,
  url: link.url,
  external: link.external ?? isExternal(link.url),
  // Exact match: /docs is a prefix of every other docs link.
  active: 'url',
}));

/** The header shared by the landing page and the docs. */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <NavLockup />
          {config.chip ? (
            <Badge label={config.chip.label} value={config.chip.value} icon={false} className="nav-chip" />
          ) : null}
        </>
      ),
    },
    links: [
      ...navLinks,
      { type: 'main', text: 'GitHub ↗', url: config.repo, external: true },
    ],
  };
}
