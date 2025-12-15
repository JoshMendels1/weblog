---
layout: post.njk
title: "Interesting Read: The Twelve-Factor App"
date: 2024-12-16
description: "A methodology for building modern web applications"
---

Found this great resource: [The Twelve-Factor App](https://12factor.net/)

It's a methodology for building software-as-a-service apps that:

- Use declarative formats for setup automation
- Have a clean contract with the underlying operating system
- Are suitable for deployment on modern cloud platforms
- Minimize divergence between development and production
- Can scale up without significant changes

The twelve factors cover everything from codebase management to logs. Even if you don't follow all of them religiously, they're worth knowing about.

Particularly relevant in 2024 with containerization and cloud-native architectures being the norm.

## Key Takeaways

**Config**: Store config in the environment, never in code. This makes it easy to deploy the same code to multiple environments.

**Dependencies**: Explicitly declare and isolate dependencies. Don't rely on system-wide packages.

**Logs**: Treat logs as event streams. Don't manage log files yourself.

Worth bookmarking!
