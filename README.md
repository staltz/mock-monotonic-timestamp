# mock-monotonic-timestamp

Deterministic variant of [monotonic-timestamp](https://github.com/dominictarr/monotonic-timestamp) meant for tests and fixtures and other use cases.

## Installation

This is installed in an unusual way, because this package is meant to directly replace `monotonic-timestamp`, so you should pull it from the repository, not from npm. In your **package.json**, do this:

```diff
   // ...
   "dependencies": {
     "ssb-ebt": "^5.6.7",
     "ssb-friends": "^4.1.4",
     "ssb-invite": "^2.1.3",
+    "monotonic-timestamp": "staltz/mock-monotonic-timestamp",
     "ssb-lan": "^0.2.0",
     "ssb-logging": "^1.0.0",
     "ssb-markdown": "^6.0.4",
   }
   // ...
```

## How it works

The first timestamp will be always 1438787025000 (from the inaugural SSB message `%SABuw7mOMKT5E8g6vp7ZZl8cqJfsIPPF44QpFE6p6sA=.sha256`) and every following timestamp will be +2 minutes of the previous timestamp.

## License

MIT
