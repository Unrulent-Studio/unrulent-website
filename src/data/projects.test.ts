import assert from "node:assert/strict";
import { test } from "node:test";
import { projects } from "./projects.ts";

test("projects data loads and has at least one entry", () => {
  assert.ok(Array.isArray(projects));
  assert.ok(projects.length > 0);
});

test("every project has required fields with non-empty strings", () => {
  for (const project of projects) {
    assert.ok(project.slug, "slug must be set");
    assert.ok(project.title, "title must be set");
    assert.ok(project.description, "description must be set");
    assert.ok(
      project.status === "in-development" || project.status === "live",
      `unexpected status: ${project.status}`,
    );
  }
});

test("slugs are unique", () => {
  const slugs = projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("projects without a public page yet omit url", () => {
  for (const project of projects) {
    if (project.status === "in-development") {
      assert.equal(
        project.url,
        undefined,
        `${project.slug} is in development but has a url set`,
      );
    }
  }
});
