import Link from 'next/link';
import { ThemedImg, Wordmark } from '@/components/brand';
import { CopyButton } from '@/components/copy-button';
import { config, endpointBadges, isExternal } from '@/lib/site';

function Action({ text, url, primary }: { text: string; url: string; primary?: boolean }) {
  const external = isExternal(url);
  const className = primary ? 'button button-primary' : 'button';
  return external ? (
    <a href={url} className={className} rel="noreferrer noopener" target="_blank">
      {text} ↗
    </a>
  ) : (
    <Link href={url} className={className}>
      {text}
    </Link>
  );
}

export default function HomePage() {
  const [primary, secondary] = config.actions;
  return (
    <div className="landing">
      <section className="hero">
        <div className="label">
          Aiviarium{'  '}/{'  '}
          {config.area}
        </div>
        <div className="hero-row">
          <div>
            <h1 className="hero-wordmark">
              <Wordmark />
            </h1>
            <p className="hero-description">{config.description}</p>
            <div className="hero-badges">
              {endpointBadges().map((badge) => (
                <a key={badge.src} href={badge.href} rel="noreferrer noopener" target="_blank">
                  {/* eslint-disable-next-line @next/next/no-img-element -- drawn by the badge endpoint */}
                  <img src={badge.src} alt={badge.alt} height={22} />
                </a>
              ))}
            </div>
          </div>
          <ThemedImg src={config.assets.icon} alt="" width={128} height={128} className="hero-icon" />
        </div>
        <div className="actions">
          <Action {...primary} primary />
          <Action {...secondary} />
        </div>
        <div className="install">
          <small>{config.install.label}</small>
          <div className="install-line">
            <code>
              <span className="prompt" aria-hidden>
                ${' '}
              </span>
              {config.install.command}
            </code>
            <CopyButton text={config.install.command} />
          </div>
        </div>
        {config.features.length > 0 && (
          <div className="cards">
            {config.features.map((feature) => {
              const body = (
                <>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </>
              );
              return feature.url ? (
                <Link key={feature.title} href={feature.url} className="card card-link">
                  {body}
                </Link>
              ) : (
                <div key={feature.title} className="card">
                  {body}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
