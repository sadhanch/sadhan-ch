/**
 * Support Engineering Blog integration.
 *
 * Purpose:
 * Fetch the first item from the blog's RSS feed at build time so the
 * homepage can surface the most recently published article.
 */

export interface BlogPost {
  title: string;
  description: string;
  link: string;
  category: string;
}
