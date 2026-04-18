# @elitechwiz-ai/local

EliTechWiz-Ai Local Sandbox Client - Execute commands on your local machine from EliTechWiz-Ai.

## Installation

```bash
npx @elitechwiz-ai/local@latest --token YOUR_TOKEN
```

Or install globally:

```bash
npm install -g @elitechwiz-ai/local
elitechwiz-ai-local --token YOUR_TOKEN
```

## Usage

```bash
npx @elitechwiz-ai/local@latest --token hsb_abc123 --name "My Laptop"
```

Commands run directly on your host OS. The client connects to EliTechWiz-Ai and relays commands in real-time.

## Options

| Option             | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `--token TOKEN`    | Authentication token from EliTechWiz-Ai Settings (required) |
| `--name NAME`      | Connection name shown in EliTechWiz-Ai (default: hostname)  |
| `--convex-url URL` | Override backend URL (for development)                 |
| `--help, -h`       | Show help message                                      |

## Getting Your Token

1. Go to [EliTechWiz-Ai Settings](https://elitechwiz-ai.co/settings)
2. Navigate to the "Agents" tab
3. Click "Generate Token" or copy your existing token

## Security

Commands run directly on your OS without any isolation. Only connect machines you trust and control. The client auto-terminates after 1 hour of inactivity.

## License

MIT
