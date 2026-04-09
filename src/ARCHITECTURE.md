# Source Layer Boundaries

## core

- Evaluation engine
- Assertion runtime
- Result aggregation

## adapters

- Model providers
- External integrations (MCP, tracing, cloud APIs)

## apps

- CLI command entrypoints
- Web UI adapter layer

## Rule

`apps -> core -> adapters` is allowed.  
`adapters -> apps` is not allowed.
