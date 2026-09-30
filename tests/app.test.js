"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { articles, categories, getVisibleArticles } = require("../app.js");

test("the preview includes a useful mix of editorial categories", function () {
  assert.equal(articles.length, 6);
  assert.deepEqual(new Set(articles.map(function (article) { return article.category; })), new Set(categories.slice(1)));
});

test("latest stories are ordered by publication date", function () {
  const result = getVisibleArticles(articles, { feed: "latest", category: "All stories" });
  assert.equal(result[0].id, "cities-after-dark");
  assert.equal(result[result.length - 1].id, "public-gardens");
});

test("trending mode ranks stories independently of publication date", function () {
  const result = getVisibleArticles(articles, { feed: "trending", category: "All stories" });
  assert.equal(result[0].id, "cities-after-dark");
  assert.equal(result[1].id, "small-ai-labs");
  assert.ok(result[1].date < result[0].date);
});

test("category and case-insensitive search filters can be combined", function () {
  const result = getVisibleArticles(articles, {
    feed: "latest",
    category: "Culture",
    query: "CITY",
    savedIds: []
  });
  assert.deepEqual(result.map(function (article) { return article.id; }), ["cities-after-dark"]);
});

test("saved mode only returns bookmarked stories", function () {
  const result = getVisibleArticles(articles, {
    feed: "saved",
    category: "All stories",
    savedIds: ["small-ai-labs", "missing-story"]
  });
  assert.deepEqual(result.map(function (article) { return article.id; }), ["small-ai-labs"]);
});

test("search matches story titles, excerpts, categories, and authors", function () {
  for (const query of ["car-free", "Maya Chen", "CULTURE"]) {
    assert.ok(getVisibleArticles(articles, { feed: "latest", category: "All stories", query }).length > 0, query);
  }
});
