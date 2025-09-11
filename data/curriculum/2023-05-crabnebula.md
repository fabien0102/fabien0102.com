---
date: June 2023 - August 2024
title: Senior FullStack Engineer - CrabNebula
keywords:
  - rust
  - solidjs
  - rspc
  - typescript
---

Startup created by the team behind [the tauri project](https://v2.tauri.app), our goal was to create a new platform to make publishing desktop applications easy. This involved packaging, signing and make the app available on market (with auto-update).

As a FullStack Engineer, I was part of the bootstrap of the platform, using Rust in the backend and SolidJS in the frontend.

First experience with Rust for me, my first challenge was to find a communication layer to keep the type safety from end to end. We picked [rspc](https://www.rspc.dev/), it was risky since this was in alpha state, but no regrets, the DX was amazing!

The frontend was straight forward, I’ve crafted almost everything in this area, making sure it stays accessible and modular so it’s easy to iterate. A good example to illustrate this, was to have a simple type-safe router (not available in solid ecosystem at this time). Doing this, we avoid any dead routes & had auto-completion on the parameters 😊.
