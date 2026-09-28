# 🐍 Snake Game

A classic Snake game built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no libraries. The board is generated dynamically from the browser window size, and your high score is saved locally so it survives page refreshes.

<!-- Add a screenshot or GIF here, e.g.: -->
<!-- ![Snake Game Screenshot](./assets/screenshot.png) -->

**Repository:** [github.com/gauravsri26/Snake_Game_In_JS](https://github.com/gauravsri26/Snake_Game_In_JS)

**Live Demo:** [Play the game here](https://unrivaled-basbousa-cd874e.netlify.app/)

---

## ✨ Features

- **Dynamic board** — grid rows and columns are calculated from the available screen size (30px cells), so the game fits your window
- **Score tracking** — current score updates every time the snake eats food
- **Persistent high score** — saved in `localStorage`, so it's still there after you close the tab
- **Game timer** — live in-game timer shown alongside your score
- **Start and Game Over modals** — clean overlay screens with blurred backdrop
- **Restart without reloading** — jump straight back into a new round
- **Wall collision detection** — hitting the edge ends the game
- **Themed with CSS variables** — colors, spacing, and radii are all defined in `:root`, so restyling takes a few edits

## 🛠️ Tech Stack

| Layer     | Technology                                   |
|-----------|----------------------------------------------|
| Structure | HTML5                                        |
| Styling   | CSS3 (Flexbox, Grid, custom properties)      |
| Logic     | JavaScript (ES6+), DOM, `localStorage`   |

## 🎮 How to Play

1. Click **Start Game**.
2. Use the **arrow keys** to steer the snake.
3. Eat the pink food to grow and score a point.
4. Avoid running into the walls.
5. Beat your high score, then hit **Restart Game** to go again.

| Key | Action     |
|-----|------------|
| ⬆️  | Move up    |
| ⬇️  | Move down  |
| ⬅️  | Move left  |
| ➡️  | Move right |

## 🚀 Getting Started

Want to just play? Open the [live demo](https://unrivaled-basbousa-cd874e.netlify.app/). To run it locally, no build step or dependencies are needed.

```bash
# 1. Clone the repository
git clone https://github.com/gauravsri26/Snake_Game_In_JS.git

# 2. Go into the project folder
cd Snake_Game_In_JS

# 3. Open index.html in your browser
```

You can double-click `index.html`, or use an extension like **Live Server** in VS Code.

## 📁 Project Structure

```
Snake_Game_In_JS/
├── index.html    # Page structure: scoreboard, board, modals
├── style.css     # Layout, theme variables, board and modal styling
└── script.js     # Game loop, movement, food, scoring, timer, restart
```

## 🧠 How It Works

- **Board generation:** on load, the script divides the board's width and height by the block size to get the number of columns and rows, then creates one `div` per cell and stores it in a lookup keyed by `"row-col"`.
- **Game loop:** `setInterval` calls `renderSnake()` every 300ms. Each tick computes the new head position from the current direction, checks for collisions, and updates the cells.
- **Snake representation:** the snake is an array of `{x, y}` segments. Moving = add a new head with `unshift` and remove the tail with `pop`. Eating = keep the tail, so the snake grows.
- **Rendering:** the game toggles CSS classes (`fill` for the snake, `food` for the food) on the cell elements instead of redrawing a canvas.
- **High score:** compared against the current score whenever food is eaten, and written to `localStorage`.

## 🔮 Planned Improvements

- Prevent instant reversal (e.g. pressing left while moving right)
- Make sure food never spawns on top of the snake
- Speed increases as the score goes up
- Pause / resume
- Touch and swipe controls for mobile
- WASD key support
- Sound effects and difficulty levels

## 🤝 Contributing

Suggestions and pull requests are welcome. Fork the repo, create a feature branch, and open a PR.

## 👤 Author

**Gaurav** — [@gauravsri26](https://github.com/gauravsri26)

---

⭐ If you liked this project, consider giving the repo a star!
