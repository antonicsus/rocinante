# [Rocinante](https://fabritsius.github.io/rocinante/)

state: _any development is currently paused_

### About

This project is supposed to become a game. At the same time I am not planning to become a game developer, so this project is not aligned with my Goal at the moment. I don't think I will find time to complete it in the nearest future and add all features which exist in my head.

You can read about what I was planning for this project at the time, but even now it has some value. First of all the space isn't just an enormous cloud of dots and isn't generated randomly when you fly, instead it is divided into areas. If you goal is to create Google Maps competitor, this repo is a reasonable place to start (far from the best place though). The other type of value this project currently has, but will lose eventually, is philosophical. The space is mostly empty: there is no asteroids, enemies with guns, or even planets for the most part. So you can say that current version of the game is the most realistic and helps to show space the way it really looks😁

### TODO:

- [x] Add basic features and host it with GitHub Pages
- [ ] Add asteroids and collision detection (create lose condition)
- [ ] Add weapons and explosions
- [ ] Add other ships controlled by AI

### Ideas

Each ships will have a DNA (list of parameters). This list will include weapon damage and accuracy, thrust and max speed, shields capacity and more. The idea is that by destroying other ship you can pick what's left from it and improve your stats. The improvement is only possible if destroyed ship parameter is better than yours. Weaker ships don't help you to upgrade. The core idea of the game is similar to what _[Agar.io](http://agar.io/)_ or _[slither.io](http://slither.io)_ has, but size of the ship (or amount of ships) stays the same.
