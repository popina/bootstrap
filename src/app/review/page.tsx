import { readFile } from 'node:fs/promises'
import path from 'node:path'

import type { Metadata } from 'next'
import { codeToHtml } from 'shiki'

import { CopyCommand } from '../../components/copy-command'
import { GitHubIcon } from '../../components/github-icon'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'

const installCommand = 'curl -fsSL https://popina.sh/install | bash'
const installerPath = path.join(process.cwd(), 'public', 'install')

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Review the Popina Installer',
  description:
    'Read the exact macOS developer setup script served by popina.sh/install.',
  alternates: { canonical: '/review' },
  openGraph: {
    type: 'website',
    url: 'https://popina.sh/review',
    title: 'Review the Popina Installer',
    description:
      'Read the exact macOS developer setup script served by popina.sh/install.',
  },
}

const changeGroups = [
  {
    number: '01',
    title: 'Packages',
    description:
      'Installs Homebrew when needed, then mise, Git, GitHub CLI, OrbStack, and Google Cloud CLI.',
  },
  {
    number: '02',
    title: 'Applications',
    description:
      'Offers Slack, Linear, and Visual Studio Code. You can decline them or pass --skip-apps.',
  },
  {
    number: '03',
    title: 'Configuration',
    description:
      'Adds mise activation to ~/.zshrc, pins Node.js and pnpm, and installs the tested Popina CLI.',
  },
  {
    number: '04',
    title: 'Workspace',
    description:
      'Offers to create ~/Workspace and launches popina init. Pass --skip-project to defer it.',
  },
]

export default async function ReviewPage() {
  const installer = await readFile(installerPath, 'utf8')
  const displayInstaller = installer.trimEnd()
  const highlightedInstaller = await codeToHtml(displayInstaller, {
    lang: 'bash',
    theme: 'github-dark-default',
    transformers: [
      {
        name: 'accessible-line-numbers',
        line(node, lineNumber) {
          node.children.unshift({
            type: 'element',
            tagName: 'span',
            properties: {
              ariaHidden: 'true',
              className: ['line-number'],
            },
            children: [{ type: 'text', value: String(lineNumber) }],
          })
        },
      },
    ],
  })
  const lineCount = displayInstaller.split('\n').length

  return (
    <div className="site-shell review-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader currentPage="review" />

      <main className="review-main" id="main-content">
        <section className="review-hero" aria-labelledby="review-title">
          <div>
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Exact production installer
            </p>
            <h1 id="review-title">Read Every Line Before You Run It.</h1>
          </div>
          <div className="review-intro">
            <p>
              This is the exact Bash script returned by{' '}
              <code translate="no">popina.sh/install</code>. The readable page
              is highlighted at build time; your terminal still receives plain
              text.
            </p>
            <CopyCommand command={installCommand} />
            <div className="review-actions">
              <a href="/install">Open Raw Script</a>
              <a href="https://github.com/popina/bootstrap/blob/main/public/install">
                <GitHubIcon />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </section>

        <section className="review-summary" aria-labelledby="changes-title">
          <div className="review-summary-heading">
            <p className="section-kicker">What Changes</p>
            <h2 id="changes-title">A Setup You Can Understand.</h2>
            <p>
              The script checks first, skips what is ready, asks before optional
              steps, and never removes installed tools.
            </p>
          </div>

          <ol className="change-grid">
            {changeGroups.map((group) => (
              <li key={group.number}>
                <span className="step-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="script-section" aria-labelledby="script-title">
          <div className="script-heading">
            <div>
              <p className="section-kicker">Source</p>
              <h2 id="script-title">The Exact Installer.</h2>
            </div>
            <p>
              Bash · {lineCount} lines · macOS web profile
            </p>
          </div>

          <div
            className="highlighted-script"
            dangerouslySetInnerHTML={{ __html: highlightedInstaller }}
            translate="no"
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
