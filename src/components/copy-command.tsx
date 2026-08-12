'use client'

import { useState } from 'react'

type CopyCommandProps = {
  command: string
}

type CopyState = 'idle' | 'copied' | 'error'

export function CopyCommand({ command }: CopyCommandProps) {
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(command)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
  }

  const buttonLabel = copyState === 'copied' ? 'Copied' : 'Copy'
  const statusMessage =
    copyState === 'copied'
      ? 'Install command copied to clipboard.'
      : copyState === 'error'
        ? 'Could not copy. Select the command and copy it manually.'
        : ''

  return (
    <div className="command-shell">
      <div className="command-line">
        <span aria-hidden="true" className="command-prompt">
          $
        </span>
        <code translate="no">{command}</code>
      </div>
      <button className="copy-button" type="button" onClick={handleCopy}>
        {copyState === 'copied' ? (
          <svg aria-hidden="true" viewBox="0 0 20 20">
            <path d="m4.5 10.5 3.2 3.2 7.8-8" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 20 20">
            <rect x="6" y="6" width="9" height="9" rx="2" />
            <path d="M13 6V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
          </svg>
        )}
        <span>{buttonLabel}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {statusMessage}
      </span>
    </div>
  )
}
