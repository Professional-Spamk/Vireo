(() => {
  const canvas = document.getElementById("arena");
  const ctx = canvas.getContext("2d");
  const overlay = document.getElementById("game-overlay");
  const playButton = document.getElementById("play-button");
  const timerElement = document.getElementById("timer");
  const timerProgress = document.getElementById("timer-progress");
  const timerCard = document.querySelector(".timer-card");
  const statusElement = document.getElementById("arena-status");
  const scoreElements = [document.getElementById("score-one"), document.getElementById("score-two")];
  const WIDTH = 960;
  const HEIGHT = 540;
  const ROUND_SECONDS = 60;
  const keys = new Set();
  const stars = Array.from({ length: 95 }, () => ({
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    radius: Math.random() * 1.5 + 0.3,
    phase: Math.random() * Math.PI * 2
  }));
  const players = [
    { name: "Nova", x: 220, y: 270, radius: 19, score: 0, color: "#b69aff", dark: "#6749a9", glow: "rgba(172, 137, 255, .75)", hair: "#f0d7ff", dash: "KeyE", moves: ["KeyW", "KeyA", "KeyS", "KeyD"], dashTime: 0, dashCooldown: 0, trailClock: 0, facing: 1, bob: 0 },
    { name: "Vex", x: 740, y: 270, radius: 19, score: 0, color: "#65dafa", dark: "#226f9a", glow: "rgba(75, 211, 255, .72)", hair: "#a7f1ff", dash: "Enter", moves: ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"], dashTime: 0, dashCooldown: 0, trailClock: 0, facing: -1, bob: Math.PI }
  ];
  const coins = [];
  const particles = [];
  const rings = [];
  let mode = "ready";
  let remaining = ROUND_SECONDS;
  let coinClock = 0;
  let elapsed = 0;
  let previousTime = 0;

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = WIDTH * pixelRatio;
    canvas.height = HEIGHT * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function setOverlay(title, copy, buttonText, kicker) {
    document.getElementById("overlay-title").textContent = title;
    document.getElementById("overlay-copy").textContent = copy;
    document.getElementById("overlay-kicker").textContent = kicker;
    playButton.innerHTML = `${buttonText} <span aria-hidden="true">↗</span>`;
    overlay.classList.remove("is-hidden");
  }

  function formatTime(seconds) {
    const wholeSeconds = Math.ceil(seconds);
    const minutes = Math.floor(wholeSeconds / 60);
    return `${String(minutes).padStart(2, "0")}:${String(wholeSeconds % 60).padStart(2, "0")}`;
  }

  function updateScoreboard() {
    players.forEach((player, index) => {
      scoreElements[index].textContent = String(player.score);
    });
  }

  function spawnCoin() {
    if (coins.length >= 9) return;
    let position;
    for (let attempt = 0; attempt < 20; attempt += 1) {
      position = { x: 58 + Math.random() * (WIDTH - 116), y: 58 + Math.random() * (HEIGHT - 116) };
      if (coins.every((coin) => Math.hypot(coin.x - position.x, coin.y - position.y) > 66)) break;
    }
    coins.push({ ...position, phase: Math.random() * Math.PI * 2, spin: Math.random() * 2 });
  }

  function startGame() {
    players[0].x = 220;
    players[0].y = HEIGHT / 2;
    players[1].x = WIDTH - 220;
    players[1].y = HEIGHT / 2;
    players.forEach((player) => {
      player.score = 0;
      player.dashTime = 0;
      player.dashCooldown = 0;
      player.trailClock = 0;
    });
    coins.length = 0;
    particles.length = 0;
    rings.length = 0;
    for (let index = 0; index < 6; index += 1) spawnCoin();
    remaining = ROUND_SECONDS;
    coinClock = 0;
    elapsed = 0;
    keys.clear();
    updateScoreboard();
    timerElement.textContent = "01:00";
    timerProgress.style.width = "100%";
    timerCard.classList.remove("is-urgent");
    statusElement.textContent = "DUEL IN PROGRESS";
    overlay.classList.add("is-hidden");
    mode = "playing";
  }

  function endGame() {
    mode = "ended";
    keys.clear();
    statusElement.textContent = "ROUND COMPLETE";
    timerElement.textContent = "00:00";
    timerProgress.style.width = "0%";
    if (players[0].score === players[1].score) {
      setOverlay("A cosmic tie!", `Nova and Vex both collected ${players[0].score} ${players[0].score === 1 ? "coin" : "coins"}. Run it back for the tiebreaker.`, "PLAY AGAIN", "ROUND COMPLETE · TIE");
    } else {
      const winner = players[0].score > players[1].score ? players[0] : players[1];
      const rival = winner === players[0] ? players[1] : players[0];
      setOverlay(`${winner.name} takes the cup!`, `${winner.name} collected ${winner.score} coins to ${rival.name}'s ${rival.score}.`, "REMATCH", `ROUND COMPLETE · ${winner.name.toUpperCase()} WINS`);
    }
  }

  function addBurst(x, y, color, count = 14, speed = 145) {
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = speed * (0.25 + Math.random() * 0.75);
      particles.push({ x, y, vx: Math.cos(angle) * velocity, vy: Math.sin(angle) * velocity, life: 0.42 + Math.random() * 0.48, maxLife: 0.9, size: 1.5 + Math.random() * 3, color });
    }
  }

  function dashPlayer(player) {
    if (mode !== "playing" || player.dashCooldown > 0) return;
    const [up, left, down, right] = player.moves;
    let dx = Number(keys.has(right)) - Number(keys.has(left));
    let dy = Number(keys.has(down)) - Number(keys.has(up));
    if (dx === 0 && dy === 0) dx = player.facing;
    const length = Math.hypot(dx, dy) || 1;
    dx /= length;
    dy /= length;
    player.dashDirection = { x: dx, y: dy };
    player.dashTime = 0.17;
    player.dashCooldown = 1.1;
    player.trailClock = 0;
    addBurst(player.x, player.y, player.color, 9, 90);
  }

  function collectCoin(player, index) {
    const [coin] = coins.splice(index, 1);
    player.score += 1;
    updateScoreboard();
    const scoreElement = scoreElements[players.indexOf(player)];
    scoreElement.classList.remove("is-scored");
    void scoreElement.offsetWidth;
    scoreElement.classList.add("is-scored");
    addBurst(coin.x, coin.y, "#ffe18a", 19, 175);
    rings.push({ x: coin.x, y: coin.y, radius: 8, life: 0.42, color: "#ffe18a" });
    statusElement.textContent = `${player.name.toUpperCase()} SCORED A COIN`;
    window.setTimeout(() => {
      if (mode === "playing" && statusElement.textContent === `${player.name.toUpperCase()} SCORED A COIN`) statusElement.textContent = "DUEL IN PROGRESS";
    }, 850);
  }

  function updatePlayer(player, delta) {
    player.dashCooldown = Math.max(0, player.dashCooldown - delta);
    player.dashTime = Math.max(0, player.dashTime - delta);
    player.bob += delta * (player.dashTime > 0 ? 15 : 6);
    const [up, left, down, right] = player.moves;
    let dx = Number(keys.has(right)) - Number(keys.has(left));
    let dy = Number(keys.has(down)) - Number(keys.has(up));
    const length = Math.hypot(dx, dy) || 1;
    if (length > 1) {
      dx /= length;
      dy /= length;
    }
    if (dx !== 0) player.facing = Math.sign(dx);
    const dashDirection = player.dashTime > 0 ? player.dashDirection : null;
    const speed = player.dashTime > 0 ? 620 : 230;
    player.x += (dashDirection ? dashDirection.x : dx) * speed * delta;
    player.y += (dashDirection ? dashDirection.y : dy) * speed * delta;
    player.x = Math.max(37, Math.min(WIDTH - 37, player.x));
    player.y = Math.max(37, Math.min(HEIGHT - 37, player.y));

    if (player.dashTime > 0) {
      player.trailClock -= delta;
      if (player.trailClock <= 0) {
        player.trailClock = 0.024;
        particles.push({ x: player.x - dashDirection.x * 10, y: player.y - dashDirection.y * 10, vx: (Math.random() - 0.5) * 32, vy: (Math.random() - 0.5) * 32, life: 0.25, maxLife: 0.25, size: 4 + Math.random() * 4, color: player.color });
      }
    }
    for (let index = coins.length - 1; index >= 0; index -= 1) {
      if (Math.hypot(player.x - coins[index].x, player.y - coins[index].y) < player.radius + 13) collectCoin(player, index);
    }
  }

  function update(delta) {
    elapsed += delta;
    if (mode === "playing") {
      remaining = Math.max(0, remaining - delta);
      coinClock += delta;
      if (coinClock >= 1.05) {
        coinClock = 0;
        spawnCoin();
      }
      players.forEach((player) => updatePlayer(player, delta));
      timerElement.textContent = formatTime(remaining);
      timerProgress.style.width = `${(remaining / ROUND_SECONDS) * 100}%`;
      timerCard.classList.toggle("is-urgent", remaining <= 10);
      if (remaining <= 0) endGame();
    } else {
      players.forEach((player) => { player.bob += delta * 1.8; });
    }
    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.life -= delta;
      if (particle.life <= 0) {
        particles.splice(index, 1);
        continue;
      }
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.vx *= 0.985;
      particle.vy *= 0.985;
    }
    for (let index = rings.length - 1; index >= 0; index -= 1) {
      rings[index].life -= delta;
      rings[index].radius += 92 * delta;
      if (rings[index].life <= 0) rings.splice(index, 1);
    }
  }

  function drawBackground() {
    const background = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    background.addColorStop(0, "#14152c");
    background.addColorStop(0.52, "#101126");
    background.addColorStop(1, "#101b2c");
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const leftGlow = ctx.createRadialGradient(170, 270, 10, 170, 270, 290);
    leftGlow.addColorStop(0, "rgba(123,87,210,.18)");
    leftGlow.addColorStop(1, "rgba(123,87,210,0)");
    ctx.fillStyle = leftGlow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    const rightGlow = ctx.createRadialGradient(800, 270, 10, 800, 270, 290);
    rightGlow.addColorStop(0, "rgba(36,154,197,.15)");
    rightGlow.addColorStop(1, "rgba(36,154,197,0)");
    ctx.fillStyle = rightGlow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for (const star of stars) {
      ctx.globalAlpha = 0.24 + (Math.sin(elapsed * 1.4 + star.phase) + 1) * 0.23;
      ctx.fillStyle = star.radius > 1.2 ? "#e5dcff" : "#b5dffc";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.save();
    ctx.strokeStyle = "rgba(174,167,224,.045)";
    ctx.lineWidth = 1;
    for (let x = 30; x < WIDTH; x += 38) {
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, HEIGHT - 20);
      ctx.stroke();
    }
    for (let y = 24; y < HEIGHT; y += 38) {
      ctx.beginPath();
      ctx.moveTo(20, y);
      ctx.lineTo(WIDTH - 20, y);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(194,179,255,.18)";
    ctx.strokeRect(21, 21, WIDTH - 42, HEIGHT - 42);
    ctx.strokeStyle = "rgba(194,179,255,.35)";
    ctx.lineWidth = 2;
    const corner = 24;
    [[21, 21, 1, 1], [WIDTH - 21, 21, -1, 1], [21, HEIGHT - 21, 1, -1], [WIDTH - 21, HEIGHT - 21, -1, -1]].forEach(([x, y, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(x + dx * corner, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + dy * corner);
      ctx.stroke();
    });
    ctx.restore();

    const centerGlow = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 2, WIDTH / 2, HEIGHT / 2, 125);
    centerGlow.addColorStop(0, "rgba(173,151,255,.045)");
    centerGlow.addColorStop(1, "rgba(173,151,255,0)");
    ctx.fillStyle = centerGlow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  function drawCoin(coin) {
    const pulse = 1 + Math.sin(elapsed * 4 + coin.phase) * 0.08;
    const bob = Math.sin(elapsed * 2.4 + coin.phase) * 3;
    ctx.save();
    ctx.translate(coin.x, coin.y + bob);
    ctx.rotate(elapsed * 1.4 + coin.spin);
    ctx.shadowColor = "rgba(255,207,97,.82)";
    ctx.shadowBlur = 18 * pulse;
    const gradient = ctx.createRadialGradient(-4, -5, 1, 0, 0, 15);
    gradient.addColorStop(0, "#fff6be");
    gradient.addColorStop(0.45, "#ffd867");
    gradient.addColorStop(1, "#dd9633");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, 10.5 * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(255,252,205,.9)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, 7.3 * pulse, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#fff9ce";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✦", 0, 0.5);
    ctx.restore();
  }

  function drawPlayer(player) {
    const bob = Math.sin(player.bob) * 2.2;
    const dashScale = player.dashTime > 0 ? 1.12 : 1;
    ctx.save();
    ctx.translate(player.x, player.y + bob);
    if (player.dashTime > 0) {
      ctx.globalAlpha = 0.68;
      ctx.fillStyle = player.glow;
      ctx.beginPath();
      ctx.ellipse(-player.facing * 12, 0, 29, 13, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.shadowColor = player.glow;
    ctx.shadowBlur = player.dashTime > 0 ? 28 : 18;
    const aura = ctx.createRadialGradient(0, 3, 2, 0, 3, 31);
    aura.addColorStop(0, player.glow.replace(/[\d.]+\)$/, "0.19)"));
    aura.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(0, 3, 31, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.scale(dashScale, dashScale);

    ctx.fillStyle = "rgba(0,0,0,.32)";
    ctx.beginPath();
    ctx.ellipse(0, 23, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = player.color;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-11, 4);
    ctx.lineTo(-18, 12 + bob * 0.35);
    ctx.moveTo(11, 4);
    ctx.lineTo(17, 10 - bob * 0.35);
    ctx.stroke();
    ctx.fillStyle = player.dark;
    ctx.beginPath();
    ctx.moveTo(-13, 0);
    ctx.quadraticCurveTo(-14, 22, -9, 24);
    ctx.lineTo(9, 24);
    ctx.quadraticCurveTo(14, 16, 13, 0);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.moveTo(-7, 3);
    ctx.lineTo(0, 19);
    ctx.lineTo(7, 3);
    ctx.lineTo(4, 1);
    ctx.lineTo(0, 8);
    ctx.lineTo(-4, 1);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#f4d4c7";
    ctx.beginPath();
    ctx.ellipse(0, -9, 11, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = player.hair;
    ctx.beginPath();
    ctx.moveTo(-11, -11);
    ctx.quadraticCurveTo(-13, -24, -4, -26);
    ctx.lineTo(-7, -34);
    ctx.lineTo(1, -29);
    ctx.lineTo(7, -35);
    ctx.lineTo(8, -27);
    ctx.quadraticCurveTo(15, -20, 10, -9);
    ctx.lineTo(6, -14);
    ctx.lineTo(3, -7);
    ctx.lineTo(-1, -16);
    ctx.lineTo(-7, -8);
    ctx.lineTo(-8, -16);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = player.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(4, -9);
    ctx.lineTo(7, -9);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "600 11px 'Space Grotesk', sans-serif";
    ctx.fillStyle = "rgba(241,238,255,.92)";
    ctx.shadowColor = player.glow;
    ctx.shadowBlur = 9;
    ctx.fillText(player.name.toUpperCase(), player.x, player.y + 43 + bob);
    ctx.restore();
  }

  function drawEffects() {
    for (const ring of rings) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, ring.life / 0.42);
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = 2;
      ctx.shadowColor = ring.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    for (const particle of particles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, particle.life / particle.maxLife);
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function render() {
    drawBackground();
    coins.forEach(drawCoin);
    players.forEach(drawPlayer);
    drawEffects();
  }

  function frame(timestamp) {
    const delta = previousTime ? Math.min((timestamp - previousTime) / 1000, 0.04) : 0;
    previousTime = timestamp;
    update(delta);
    render();
    window.requestAnimationFrame(frame);
  }

  window.addEventListener("keydown", (event) => {
    const key = event.code;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", "Enter"].includes(key)) event.preventDefault();
    if (event.repeat) return;
    keys.add(key);
    if (key === players[0].dash) dashPlayer(players[0]);
    if (key === players[1].dash) dashPlayer(players[1]);
  });
  window.addEventListener("keyup", (event) => keys.delete(event.code));
  window.addEventListener("blur", () => keys.clear());
  playButton.addEventListener("click", startGame);
  window.addEventListener("resize", resizeCanvas);

  document.querySelectorAll(".touch-controls [data-key]").forEach((button) => {
    const key = button.dataset.key;
    const release = () => {
      keys.delete(key);
      button.classList.remove("is-pressed");
    };
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      keys.add(key);
      button.classList.add("is-pressed");
      if (key === players[0].dash) dashPlayer(players[0]);
      if (key === players[1].dash) dashPlayer(players[1]);
    });
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
  });

  resizeCanvas();
  window.requestAnimationFrame(frame);
})();
