(function (global) {
  "use strict";

  const articles = [
    {
      id: "cities-after-dark",
      category: "Culture",
      title: "The cities finding a second life after dark",
      excerpt: "From late-night libraries to car-free streets, a new generation of urban planners is rethinking who gets to use the city after sunset.",
      author: "Maya Chen",
      role: "Urban affairs correspondent",
      date: "2026-09-30",
      readTime: 7,
      trendScore: 98,
      artwork: "night",
      paragraphs: [
        "For years, the measure of a successful downtown was a familiar one: busy at lunch, quiet by nine. That pattern is changing. Across the world, neighborhoods are experimenting with a more generous idea of the evening—one that belongs to residents, workers, and visitors alike.",
        "In Copenhagen, a library that stays open late has become an informal living room for students and shift workers. In Seoul, organizers are testing quieter, safer streets where cafés, small venues, and public spaces can stay welcoming well past the dinner rush. These are modest changes, but together they challenge a deeply held assumption about how cities should work.",
        "The shift is as much about access as it is about nightlife. Late-opening public services make a difference to people whose schedules do not fit a nine-to-five day. Better lighting, more frequent transit, and protected walking routes make that invitation feel real—not just symbolic.",
        "There is no single blueprint. Residents in each place are asking different questions about noise, safety, and who benefits from a more active evening. The most promising experiments start with those conversations, then measure success in the everyday details: a shorter, safer walk home; a public space that feels like it belongs to everyone."
      ],
      quote: "A city does not close when the office lights go out. It simply changes hands."
    },
    {
      id: "small-ai-labs",
      category: "Technology",
      title: "Why the next big AI idea might come from a very small lab",
      excerpt: "Independent research teams are finding room to experiment by building around a simpler principle: do more with less.",
      author: "Jonah Patel",
      role: "Technology editor",
      date: "2026-09-29",
      readTime: 6,
      trendScore: 91,
      artwork: "technology",
      paragraphs: [
        "The loudest story in artificial intelligence is still one of scale: larger models, larger budgets, larger data centers. But away from the headlines, a quieter group of independent teams is asking whether the next useful idea needs any of that.",
        "Small research groups are choosing narrower problems and open methods. They can test a hypothesis quickly, share what failed, and build tools that run on hardware people already own. That makes their work less spectacular to announce—and more accessible to use.",
        "The approach does not replace frontier research. Instead, it fills in the middle: helping a local newsroom sort documents, or giving a small clinic a better way to organize routine work. These are practical gains, not magic tricks, and they depend on careful evaluation.",
        "For now, the strongest advantage of a small lab may be the freedom to change direction. When a team is not committed to a giant training run, it can spend more time finding out whether a problem is worth solving at all."
      ],
      quote: "The most useful model is not always the biggest one. Sometimes it is the one a team can actually understand."
    },
    {
      id: "ocean-mapping",
      category: "Science",
      title: "A clearer map of the ocean is changing what we protect",
      excerpt: "New public surveys reveal marine habitats in remarkable detail—and give conservation teams better questions to ask.",
      author: "Amara Okafor",
      role: "Science writer",
      date: "2026-09-28",
      readTime: 8,
      trendScore: 84,
      artwork: "ocean",
      paragraphs: [
        "Most of the ocean floor is still poorly mapped. That gap is more than a blank patch on a chart: it makes it harder for communities and scientists to understand where fragile habitats lie, or how quickly a local ecosystem is changing.",
        "A growing collection of shared surveys is beginning to fill in those details. Better sonar, low-cost sensors, and collaboration with coastal researchers have produced maps that can distinguish seagrass beds, reefs, and areas of shifting sediment with far more confidence.",
        "The maps are not a verdict on where conservation should happen. They are a starting point for conversations with fishers, coastal residents, and researchers whose knowledge cannot be captured by a sensor. Used well, that evidence can help communities compare options before a decision is made.",
        "Researchers say the most meaningful measure of progress is not a complete map, but a map that is useful to people on the water. Making the data open and understandable may matter as much as collecting it."
      ],
      quote: "A better map does not make the decision for us. It lets more people take part in making it."
    },
    {
      id: "workweek-reset",
      category: "Business",
      title: "The four-day week is growing up",
      excerpt: "After the early experiments, businesses are getting more specific about what makes a shorter week work—and what does not.",
      author: "Elliot James",
      role: "Work and business reporter",
      date: "2026-09-27",
      readTime: 5,
      trendScore: 76,
      artwork: "business",
      paragraphs: [
        "The first wave of shorter-workweek trials was often framed as a simple swap: fewer hours, same pay, same output. As more organizations experiment, the conversation has become more practical. The calendar is only one part of the design.",
        "Teams that report the smoothest transitions tend to start by looking at the work itself. They shorten meetings, agree on when a message can wait, and give employees clearer control over blocks of focused time. Without those changes, the same workload simply gets compressed.",
        "There is no universal formula. A small studio, a hospital ward, and a customer-support desk face very different scheduling constraints. Some employers are trying staggered days off; others are testing shorter daily hours instead of a single three-day weekend.",
        "That variety is useful. It shifts the debate from whether every workplace should adopt the same policy to a better question: what arrangement helps this team do good work without sacrificing recovery?"
      ],
      quote: "A shorter week works best when you redesign the work—not just the calendar."
    },
    {
      id: "slow-travel",
      category: "Travel",
      title: "The art of taking the scenic route",
      excerpt: "A slower kind of travel is gaining ground—not as an escape from planning, but a more thoughtful way to arrive.",
      author: "Leila Foster",
      role: "Travel contributor",
      date: "2026-09-26",
      readTime: 4,
      trendScore: 69,
      artwork: "travel",
      paragraphs: [
        "The fastest way between two places is easy to find. The more interesting question is what happens if the journey itself becomes part of the trip. More travelers are looking for routes that leave room for a detour, a long lunch, or a few unplanned hours in a smaller town.",
        "That does not have to mean going off-grid or spending weeks on the road. A regional train, a walkable neighborhood, and one fewer stop can change the rhythm of a weekend away. The goal is less about distance than attention.",
        "Local businesses often benefit when visitors stay a little longer and travel beyond a single landmark. But responsible slow travel also means recognizing that a neighborhood is home before it is a destination. Listening to residents is a good place to start.",
        "A scenic route might take more time. It can also make a short break feel less like a checklist—and leave travelers with a better sense of the places they passed through."
      ],
      quote: "Sometimes the best part of going somewhere is learning how to get there."
    },
    {
      id: "public-gardens",
      category: "Culture",
      title: "What a neighborhood garden can teach a city",
      excerpt: "Shared green spaces are creating unexpected connections between food, local history, and community care.",
      author: "Sofia Alvarez",
      role: "Culture writer",
      date: "2026-09-25",
      readTime: 6,
      trendScore: 63,
      artwork: "garden",
      paragraphs: [
        "A community garden may start with a few raised beds and a patch of borrowed land. What happens next is less predictable: neighbors share seeds, recipes, and the stories behind both; a quiet corner becomes a place people plan around.",
        "These spaces are not a substitute for public parks or reliable access to affordable food. They are one small way to bring those questions into a shared, visible place. That can make it easier to spot what a neighborhood needs and who has ideas for improving it.",
        "Some gardens keep a record of what used to grow on the block. Others pair younger gardeners with older residents, or lend tools to anyone who wants to try. The best ones remain flexible because the people using them shape what comes next.",
        "A garden cannot solve every urban challenge. But it can help a community practice something cities need more of: making a useful thing together, slowly, and in public."
      ],
      quote: "A shared space is not just somewhere to meet. It is something people learn to look after together."
    }
  ];

  const categories = ["All stories", "Business", "Culture", "Science", "Technology", "Travel"];
  const storageKey = "vireo-saved-articles";
  const categoryIcons = {
    Business: "↗",
    Culture: "✳",
    Science: "◉",
    Technology: "⌘",
    Travel: "⌁"
  };

  function getVisibleArticles(source, filters) {
    const query = (filters.query || "").trim().toLocaleLowerCase();
    return source.filter(function (article) {
      const categoryMatches = !filters.category || filters.category === "All stories" || article.category === filters.category;
      const queryMatches = !query || [article.title, article.excerpt, article.category, article.author]
        .some(function (value) { return value.toLocaleLowerCase().includes(query); });
      const savedMatches = filters.feed !== "saved" || (filters.savedIds || []).includes(article.id);
      return categoryMatches && queryMatches && savedMatches;
    }).sort(function (a, b) {
      if (filters.feed === "trending") return b.trendScore - a.trendScore;
      return b.date.localeCompare(a.date);
    });
  }

  const publicApi = { articles: articles, categories: categories, getVisibleArticles: getVisibleArticles };
  if (typeof module !== "undefined" && module.exports) module.exports = publicApi;
  if (typeof document === "undefined") return;

  const app = document.getElementById("app");
  const search = document.getElementById("search");
  const status = document.getElementById("status");
  const dateLabel = document.getElementById("edition-date");
  const state = { feed: "latest", category: "All stories", query: "", activeArticle: null, savedIds: [] };

  function announce(message) {
    status.textContent = "";
    window.requestAnimationFrame(function () { status.textContent = message; });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function dateText(value, options) {
    return new Intl.DateTimeFormat("en", options || { month: "short", day: "numeric" }).format(new Date(value + "T12:00:00"));
  }

  function readSavedIds() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
      return Array.isArray(stored) ? stored.filter(function (id) { return articles.some(function (article) { return article.id === id; }); }) : [];
    } catch (error) {
      announce("Saved stories could not be restored from this browser.");
      return [];
    }
  }

  function saveBookmarks() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state.savedIds));
      return true;
    } catch (error) {
      announce("Your saved story is available for this visit, but could not be stored in this browser.");
      return false;
    }
  }

  function isSaved(id) {
    return state.savedIds.includes(id);
  }

  function bookmarkButton(article, compact) {
    const saved = isSaved(article.id);
    return '<button class="bookmark-button' + (compact ? " compact" : "") + (saved ? " is-saved" : "") + '" type="button" data-bookmark="' + escapeHtml(article.id) + '" aria-label="' + (saved ? "Remove from saved stories" : "Save story") + '" aria-pressed="' + saved + '"><svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5.5 3.5h9a1 1 0 0 1 1 1v12l-5.5-3.8-5.5 3.8v-12a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg><span class="visually-hidden">' + (saved ? "Saved" : "Save") + "</span></button>";
  }

  function cover(article, className) {
    return '<div class="story-art art-' + escapeHtml(article.artwork) + " " + className + '" aria-hidden="true"><span class="art-sun"></span><span class="art-shape art-shape-one"></span><span class="art-shape art-shape-two"></span><span class="art-shape art-shape-three"></span><span class="art-caption">' + escapeHtml(article.category) + '</span></div>';
  }

  function articleCard(article) {
    return '<article class="story-card">' +
      '<div class="card-art-wrap"><button class="art-link" type="button" data-open="' + escapeHtml(article.id) + '" aria-label="Read: ' + escapeHtml(article.title) + '">' + cover(article, "card-art") + "</button>" + bookmarkButton(article, true) + "</div>" +
      '<div class="card-meta"><span>' + escapeHtml(article.category) + '</span><span class="meta-dot" aria-hidden="true">·</span><span>' + article.readTime + " min read</span></div>" +
      '<button class="story-title-button" type="button" data-open="' + escapeHtml(article.id) + '"><h3>' + escapeHtml(article.title) + "</h3></button>" +
      '<p class="card-excerpt">' + escapeHtml(article.excerpt) + "</p>" +
      '<div class="card-byline"><span class="author-avatar">' + escapeHtml(article.author.split(" ").map(function (part) { return part[0]; }).join("")) + '</span><span>' + escapeHtml(article.author) + '</span><span class="meta-dot" aria-hidden="true">·</span><time datetime="' + article.date + '">' + dateText(article.date) + "</time></div>" +
      "</article>";
  }

  function categoryPicker() {
    return '<div class="category-picker" role="group" aria-label="Browse by category">' + categories.map(function (category) {
      const active = state.category === category;
      return '<button type="button" class="category-chip' + (active ? " is-active" : "") + '" data-category="' + escapeHtml(category) + '" aria-pressed="' + active + '">' +
        (category === "All stories" ? '<span aria-hidden="true">✳</span>' : '<span aria-hidden="true">' + categoryIcons[category] + "</span>") + escapeHtml(category) + "</button>";
    }).join("") + "</div>";
  }

  function featureCard(article) {
    return '<section class="featured-story" aria-labelledby="featured-title">' +
      '<button class="featured-art-link" type="button" data-open="' + escapeHtml(article.id) + '" aria-label="Read featured story: ' + escapeHtml(article.title) + '">' + cover(article, "featured-art") + "</button>" +
      '<div class="featured-copy"><div class="eyebrow"><span class="eyebrow-rule"></span> THE BIG READ <span class="eyebrow-rule"></span></div>' +
      '<div class="featured-meta"><span class="category-label">' + escapeHtml(article.category) + '</span><span class="meta-dot" aria-hidden="true">·</span><span>' + article.readTime + ' min read</span></div>' +
      '<button class="feature-title-button" type="button" data-open="' + escapeHtml(article.id) + '"><h2 id="featured-title">' + escapeHtml(article.title) + "</h2></button>" +
      '<p class="featured-excerpt">' + escapeHtml(article.excerpt) + '</p>' +
      '<div class="featured-bottom"><div class="byline"><span class="author-avatar large">' + escapeHtml(article.author.split(" ").map(function (part) { return part[0]; }).join("")) + '</span><span><strong>' + escapeHtml(article.author) + '</strong><small>' + escapeHtml(article.role) + '</small></span></div>' +
      '<button class="read-link" type="button" data-open="' + escapeHtml(article.id) + '">Read story <span aria-hidden="true">↗</span></button></div></div>' +
      '<span class="featured-index" aria-hidden="true">01 <span>/ 06</span></span></section>';
  }

  function renderHome() {
    const visible = getVisibleArticles(articles, state);
    const isFiltered = state.category !== "All stories" || state.query || state.feed === "saved";
    const heading = state.feed === "saved" ? "Your reading list" : state.feed === "trending" ? "The stories people are reading" : state.query ? "Search results" : state.category !== "All stories" ? state.category : "A little more to know";
    const subheading = state.feed === "saved" ? "Keep the stories you want to come back to." : state.feed === "trending" ? "A few stories worth talking about right now." : state.query ? 'Stories matching "' + escapeHtml(state.query) + '"' : "Fresh perspectives for a more informed day.";
    const issueDate = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date()).toLocaleUpperCase();
    let content = '<div class="content-shell"><section class="welcome-row"><div><p class="section-kicker">' + issueDate + ' <span class="kicker-sparkle" aria-hidden="true">✳</span></p><h1>A clearer view<br class="mobile-break"> of the news.</h1><p class="welcome-description">The stories behind the story, picked for curious minds.</p></div><div class="welcome-aside"><span class="welcome-icon" aria-hidden="true">✳</span><span>Thoughtful reads.<br>Zero noise.</span></div></section>' +
      categoryPicker();

    if (!visible.length) {
      content += '<section class="empty-state"><span class="empty-icon" aria-hidden="true">⌕</span><h2>' + (state.feed === "saved" && !state.query && state.category === "All stories" ? "Your reading list is ready" : "No stories found") + "</h2><p>" +
        (state.feed === "saved" && !state.query && state.category === "All stories" ? "Save a story you love and it will be waiting here." : "Try another search or choose a different category.") +
        '</p><button type="button" class="text-button" data-reset>Explore all stories <span aria-hidden="true">→</span></button></section>';
    } else {
      if (!isFiltered && state.feed !== "trending") content += featureCard(visible[0]);
      const cards = !isFiltered && state.feed !== "trending" ? visible.slice(1) : visible;
      content += '<section class="story-section"><div class="section-heading"><div><p class="section-kicker">' + (state.feed === "saved" ? "KEPT FOR LATER" : state.feed === "trending" ? "MOST READ" : "THE LATEST") + '</p><h2>' + heading + '</h2><p>' + subheading + '</p></div><span class="story-count">' + visible.length + (visible.length === 1 ? " STORY" : " STORIES") + "</span></div>" +
        '<div class="story-grid">' + cards.map(articleCard).join("") + "</div></section>";
    }
    content += '<p class="sample-disclaimer">You’re reading a Vireo preview. These sample stories are editorial examples, not live news.</p></div>';
    app.innerHTML = content;
    updateNavigation();
  }

  function renderArticle(article, moveFocus) {
    if (!article) {
      state.activeArticle = null;
      renderHome();
      return;
    }
    const paragraphs = article.paragraphs.map(function (paragraph, index) {
      const quote = index === 2 ? '<blockquote><span class="quote-mark" aria-hidden="true">“</span><p>' + escapeHtml(article.quote) + "</p></blockquote>" : "";
      return "<p>" + escapeHtml(paragraph) + "</p>" + quote;
    }).join("");
    app.innerHTML = '<div class="content-shell reader-shell"><button class="back-link" type="button" data-back><span aria-hidden="true">←</span> Back to stories</button>' +
      '<article class="reader"><header class="reader-header"><div class="reader-category">' + escapeHtml(article.category) + '<span class="meta-dot" aria-hidden="true">·</span>' + article.readTime + ' min read</div>' +
      '<h1 id="reader-title" tabindex="-1">' + escapeHtml(article.title) + '</h1><p class="reader-deck">' + escapeHtml(article.excerpt) + '</p>' +
      '<div class="reader-byline"><div class="byline"><span class="author-avatar large">' + escapeHtml(article.author.split(" ").map(function (part) { return part[0]; }).join("")) + '</span><span><strong>' + escapeHtml(article.author) + '</strong><small>' + escapeHtml(article.role) + ' <span aria-hidden="true">·</span> <time datetime="' + article.date + '">' + dateText(article.date, { year: "numeric", month: "long", day: "numeric" }) + "</time></small></span></div>" +
      '<div class="reader-actions">' + bookmarkButton(article, false) + '<button class="share-button" type="button" data-share="' + escapeHtml(article.id) + '"><svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M4 10.5v4A2.5 2.5 0 0 0 6.5 17h7a2.5 2.5 0 0 0 2.5-2.5v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Share</span></button></div></div></header>' +
      cover(article, "reader-art") + '<div class="reader-prose">' + paragraphs + '</div><div class="article-end"><span aria-hidden="true">✳</span><p>That’s the story for now.</p><span class="article-end-rule"></span></div></article>' +
      '<section class="more-stories"><div class="section-heading"><div><p class="section-kicker">KEEP EXPLORING</p><h2>More thoughtful reads.</h2></div></div><div class="story-grid">' + getVisibleArticles(articles, { feed: "latest", category: "All stories", savedIds: [] }).filter(function (item) { return item.id !== article.id; }).slice(0, 3).map(articleCard).join("") + "</div></section></div>";
    updateNavigation();
    if (moveFocus) document.getElementById("reader-title").focus();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function updateNavigation() {
    document.querySelectorAll("[data-feed]").forEach(function (button) {
      const active = button.dataset.feed === state.feed;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  function syncRoute() {
    const previousArticle = state.activeArticle;
    const id = window.location.hash.slice(1);
    const article = articles.find(function (item) { return item.id === id; });
    state.activeArticle = article ? article.id : null;
    if (article) renderArticle(article, true);
    else {
      renderHome();
      if (previousArticle) restoreArticleFocus(previousArticle);
    }
  }

  function openArticle(id, trigger) {
    const article = articles.find(function (item) { return item.id === id; });
    if (!article) return;
    state.activeArticle = id;
    window.history.pushState({ vireoArticleNavigation: true }, "", "#" + encodeURIComponent(id));
    renderArticle(article, true);
    if (trigger) state.articleOpenerId = id;
  }

  function restoreArticleFocus(id) {
    const opener = Array.from(app.querySelectorAll("[data-open]")).find(function (button) {
      return button.dataset.open === id;
    });
    if (opener) opener.focus();
    else app.focus();
  }

  function closeArticle() {
    if (window.history.state && window.history.state.vireoArticleNavigation) {
      window.history.back();
      return;
    }
    const articleId = state.activeArticle;
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    state.activeArticle = null;
    renderHome();
    if (articleId) restoreArticleFocus(articleId);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function toggleBookmark(id, trigger) {
    if (isSaved(id)) {
      state.savedIds = state.savedIds.filter(function (savedId) { return savedId !== id; });
      const persisted = saveBookmarks();
      announce(persisted ? "Story removed from your reading list." : "Story removed for this visit.");
    } else {
      state.savedIds = state.savedIds.concat(id);
      const persisted = saveBookmarks();
      announce(persisted ? "Story saved to your reading list." : "Story saved for this visit.");
    }
    if (state.activeArticle) renderArticle(articles.find(function (article) { return article.id === state.activeArticle; }));
    else renderHome();
    if (state.activeArticle) {
      const bookmark = Array.from(app.querySelectorAll("[data-bookmark]")).find(function (button) {
        return button.dataset.bookmark === id;
      });
      if (bookmark) bookmark.focus();
    } else if (trigger && state.feed === "saved" && !isSaved(id)) {
      app.focus();
    } else if (trigger) {
      const bookmark = Array.from(app.querySelectorAll("[data-bookmark]")).find(function (button) {
        return button.dataset.bookmark === id;
      });
      if (bookmark) bookmark.focus();
    }
  }

  async function shareArticle(id) {
    const article = articles.find(function (item) { return item.id === id; });
    if (!article) return;
    const shareData = { title: article.title, text: article.excerpt, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        announce("Story shared.");
      } catch (error) {
        if (error.name !== "AbortError") announce("The story could not be shared from this browser.");
      }
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        announce("Story link copied.");
      } catch (error) {
        announce("The story link could not be copied from this browser.");
      }
    } else {
      announce("Sharing is not available in this browser.");
    }
  }

  app.addEventListener("click", function (event) {
    const target = event.target instanceof Element ? event.target.closest("button") : null;
    if (!target) return;
    if (target.dataset.open) openArticle(target.dataset.open, target);
    else if (target.dataset.back !== undefined) closeArticle();
    else if (target.dataset.bookmark) toggleBookmark(target.dataset.bookmark, target);
    else if (target.dataset.share) shareArticle(target.dataset.share);
    else if (target.dataset.category) {
      state.category = target.dataset.category;
      renderHome();
      const categoryButton = Array.from(app.querySelectorAll("[data-category]")).find(function (button) {
        return button.dataset.category === state.category;
      });
      if (categoryButton) categoryButton.focus();
      announce(state.category + " selected.");
    } else if (target.dataset.reset !== undefined) {
      state.feed = "latest";
      state.category = "All stories";
      state.query = "";
      search.value = "";
      renderHome();
      search.focus();
    }
  });

  document.querySelector(".primary-nav").addEventListener("click", function (event) {
    const target = event.target instanceof Element ? event.target.closest("[data-feed]") : null;
    if (!target) return;
    state.feed = target.dataset.feed;
    state.category = "All stories";
    state.query = "";
    search.value = "";
    if (state.activeArticle) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      state.activeArticle = null;
    }
    renderHome();
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  search.addEventListener("input", function () {
    state.query = search.value;
    state.feed = state.feed === "saved" ? "saved" : "latest";
    if (state.activeArticle) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      state.activeArticle = null;
    }
    renderHome();
  });

  document.querySelector(".brand").addEventListener("click", function (event) {
    event.preventDefault();
    state.feed = "latest";
    state.category = "All stories";
    state.query = "";
    state.activeArticle = null;
    search.value = "";
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    renderHome();
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Escape" && document.activeElement === search) {
      search.value = "";
      state.query = "";
      renderHome();
      search.blur();
    }
  });

  window.addEventListener("popstate", syncRoute);
  window.addEventListener("hashchange", syncRoute);
  dateLabel.textContent = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(new Date());
  state.savedIds = readSavedIds();
  syncRoute();
})(typeof window !== "undefined" ? window : globalThis);
