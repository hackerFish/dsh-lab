# Contributing

Thank you for helping make dsh-lab better. Four ways to contribute — choose one:

## 1. Request a test

Want to get a plugin into the hands-on testing queue? Open an issue titled `[test-request] <plugin name>` and include:

- The repository or npm link;
- A one-sentence description of the problem it solves;
- Why you think it's worth testing (e.g. "there are many similar plugins but nobody has verified them").

We test in queue order and publish a report (following the four-gate protocol in [METHODOLOGY.md](docs/METHODOLOGY.md)).

## 2. Hands-on testing mismatch feedback

You reproduced a report but got a different result? Open an issue titled `[repro-mismatch] <plugin name>`; it must include:

- Your reproduction commands and full logs;
- Your DSH / pnpm / node versions;
- The specific gate that disagrees with the report.

After we re-test: if the result is confirmed as an outdated report → update the report and keep an erratum record; if the result cannot be reproduced → explain the environment difference in the issue.

## 3. Tutorial corrections / new tutorials

Submit a PR directly. Requirements:

- **Original**: we do not accept text lifted from any other repository, directory, or blog. Translated content must cite its source and confirm permission.
- Verifiable facts: for anything involving commands or behavior, attach your local verification output or note the version.
- Chinese-first, with English kept for proper nouns.

## 4. Roadmap suggestions

Have ideas for the design of Phase 2 (compatibility matrix) or Phase 3 (arena)? Open an issue titled `[roadmap] ...`. We especially welcome: matrix data-structure suggestions, arena scoring-criteria suggestions, and CI/tool code you're willing to contribute.

---

## Bottom line

- Honesty first: never write "verified" for anything you haven't tested.
- Criticize the behavior, not the person: when criticizing a plugin, criticize only reproducible behavior — don't attack the author.
- Safety boundary: this repository is a testing record, **not a security endorsement**; don't publish unverified security promises here.
