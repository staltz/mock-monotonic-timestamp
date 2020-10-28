# mock-monotonic-timestamp

Deterministic variant of [monotonic-timestamp](https://github.com/dominictarr/monotonic-timestamp) meant for tests and fixtures and other use cases.

## Installation

This is installed in an unusual way, because this package is meant to directly replace `monotonic-timestamp`, so you should pull it from the repository, not from npm. **We assume that you depend transitively, not directly, to monotonic timestamp**. Your installation will vary whether you're using `npm` or `pnpm`.

### Using npm install

**First run `npm install` to make sure package-lock.json** exists, then change your project's **package.json** like this:

```diff
   // ...
   "scripts": {
+    "preinstall": "npx npm-force-resolutions",
     "test": "tape test/*"
   },
   "dependencies": {
     "ssb-ebt": "^5.6.7",
     "ssb-friends": "^4.1.4",
     "ssb-invite": "^2.1.3",
     "ssb-lan": "^0.2.0",
     "ssb-logging": "^1.0.0",
     "ssb-markdown": "^6.0.4",
   },
+  "resolutions": {
+    "monotonic-timestamp": "staltz/mock-monotonic-timestamp"
+  },
   // ...
```

### Using pnpm install

Just change your **package.json** like this:

```diff
   // ...
   "dependencies": {
     "ssb-ebt": "^5.6.7",
     "ssb-friends": "^4.1.4",
     "ssb-invite": "^2.1.3",
     "ssb-lan": "^0.2.0",
     "ssb-logging": "^1.0.0",
     "ssb-markdown": "^6.0.4",
   },
+  "pnpm": {
+    "overrides": {
+      "monotonic-timestamp": "staltz/mock-monotonic-timestamp"
+    }
+  }
   // ...
```

### Supporting both

Just make both changes as described above.

## How it works

The first timestamp will be always 1438787025000 (from the inaugural SSB message `%SABuw7mOMKT5E8g6vp7ZZl8cqJfsIPPF44QpFE6p6sA=.sha256`) and every following timestamp will be +2 minutes of the previous timestamp.

## License

MIT
