import { GitHubIcon } from './github-icon'
import { PopinaMark } from './popina-mark'

export type SiteHeaderProps = {
  currentPage?: 'home' | 'review'
}

export function SiteHeader({ currentPage = 'home' }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a
        aria-label="Popina developer setup home"
        className="brand"
        href="/"
      >
        <span className="brand-mark">
          <PopinaMark />
        </span>
        <span translate="no">popina.sh</span>
      </a>

      <nav aria-label="Primary navigation">
        <a
          aria-current={currentPage === 'review' ? 'page' : undefined}
          href="/review"
        >
          Review script
        </a>
        <a href="https://knowledge.popina.com">Docs</a>
        <a className="source-link" href="https://github.com/popina/bootstrap">
          <GitHubIcon />
          <span>Source</span>
        </a>
      </nav>
    </header>
  )
}
