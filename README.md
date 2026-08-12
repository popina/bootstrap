# Popina bootstrap

The public landing page and macOS developer bootstrap behind
[popina.sh](https://popina.sh).

```sh
curl -fsSL https://popina.sh/install | bash
```

The installer prepares a Mac for Popina web development:

- Homebrew, Git, GitHub CLI, mise, Node.js, and pnpm
- OrbStack and Google Cloud CLI
- optional Slack, Linear, and Visual Studio Code
- Popina CLI and its guided `popina init` flow

Mobile and Linux profiles are intentionally unavailable for now.

## Review before running

Read [`public/install`](./public/install), or inspect the deployed script:

```sh
curl -fsSL https://popina.sh/install | less
```

Installer options:

```text
--profile web       Select the supported web profile
--workspace PATH    Choose the projects directory
--skip-apps         Skip optional team applications
--skip-project      Install the machine toolchain only
--yes               Accept installer defaults
--help              Show help
```

Set `POPINA_CLI_VERSION` to override the tested CLI version pinned by the
installer.

## Development

```sh
mise install
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

## Validation

```sh
pnpm check
```
