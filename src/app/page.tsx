import { CopyCommand } from '../components/copy-command'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'

const installCommand = 'curl -fsSL https://popina.sh/install | bash'

const setupSteps = [
  {
    number: '01',
    title: 'Prepare your Mac',
    description:
      'Installs Homebrew, mise, the required command-line tools, and the team apps you choose.',
  },
  {
    number: '02',
    title: 'Pin the toolchain',
    description:
      'Configures the exact Node.js and pnpm versions Popina expects, then installs the Popina CLI.',
  },
  {
    number: '03',
    title: 'Guide the project setup',
    description:
      'Creates your workspace and hands over to popina init for access, secrets, and local database setup.',
  },
]

export default function HomePage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Popina developer setup · macOS
            </p>
            <h1 id="hero-title">From new Mac to first commit.</h1>
            <p className="hero-description">
              One guided command installs the tools, configures the project,
              and gets you ready to build Popina.
            </p>

            <CopyCommand command={installCommand} />

            <p className="command-note">
              Always review scripts before running them.{' '}
              <a href="/review">Read this one</a>.
            </p>
          </div>

          <div className="terminal" aria-label="Example setup progress">
            <div className="terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>Popina setup</p>
            </div>
            <div className="terminal-body">
              <p className="terminal-muted">Welcome to Popina.</p>
              <p>
                <span className="terminal-check">✓</span> macOS detected
              </p>
              <p>
                <span className="terminal-check">✓</span> Developer tools ready
              </p>
              <p>
                <span className="terminal-check">✓</span> Popina CLI installed
              </p>
              <p className="terminal-active">
                <span>→</span> Starting guided project setup
                <span className="terminal-cursor" aria-hidden="true" />
              </p>
            </div>
          </div>
        </section>

        <section className="profiles" aria-labelledby="profiles-title">
          <div className="section-heading">
            <p className="section-kicker">Choose your setup</p>
            <h2 id="profiles-title">Start with your developer profile.</h2>
          </div>

          <div className="profile-grid">
            <article className="profile-card profile-card-active">
              <div className="profile-meta">
                <span className="profile-icon" aria-hidden="true">
                  &lt;/&gt;
                </span>
                <span className="availability availability-ready">Available</span>
              </div>
              <h3>Web developer</h3>
              <p>
                Full setup for the pragma-web monorepo, local services, secrets,
                and daily development tools.
              </p>
              <span className="profile-platform">macOS · Apple Silicon or Intel</span>
            </article>

            <article
              className="profile-card profile-card-disabled"
              aria-disabled="true"
              aria-describedby="mobile-profile-status"
            >
              <div className="profile-meta">
                <span className="profile-icon" aria-hidden="true">
                  ◇
                </span>
                <span
                  className="availability availability-later"
                  id="mobile-profile-status"
                >
                  Coming later
                </span>
              </div>
              <h3>Mobile developer</h3>
              <p>
                Flutter, mobile SDKs, simulators, signing, and the pragma-pos
                workspace will join this flow later.
              </p>
              <span className="profile-platform">Not selectable yet</span>
            </article>
          </div>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div className="section-heading process-heading">
            <p className="section-kicker">What happens</p>
            <h2 id="process-title">Transparent at every step.</h2>
            <p>
              The installer checks before changing anything and skips tools that
              are already ready.
            </p>
          </div>

          <ol className="step-list">
            {setupSteps.map((step) => (
              <li key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
