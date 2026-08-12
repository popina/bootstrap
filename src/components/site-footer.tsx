import { GitHubIcon } from './github-icon'
import { PopinaMark } from './popina-mark'

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <PopinaMark />
        <span>Built for the people building Popina.</span>
      </div>
      <nav aria-label="Footer navigation" className="footer-links">
        <a href="/review">Review</a>
        <a href="https://knowledge.popina.com">Docs</a>
        <a className="source-link" href="https://github.com/popina/bootstrap">
          <GitHubIcon />
          <span>GitHub</span>
        </a>
      </nav>
    </footer>
  )
}
