export interface BlogPost {
  title: string;
  description: string;
  link: string;
  published: string;
  category: string;
}

const BLOG_FEED_URL = "https://blog.sadhan.ch/rss.xml";

export async function getLatestBlogPost(): Promise<BlogPost | null> {
  try {
    const response = await fetch(BLOG_FEED_URL);

    if (!response.ok) {
      console.warn(
        `Unable to fetch blog RSS feed: ${response.status} ${response.statusText}`,
      );

      return null;
    }

    const xml = await response.text();

    const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/i);

    if (!itemMatch) {
      console.warn("No RSS items found in the blog feed.");

      return null;
    }

    const item = itemMatch[1];

    const getTag = (tag: string): string => {
      const match = item.match(
        new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
      );

      return match?.[1]?.trim() ?? "";
    };

    const decodeHtml = (value: string): string => {
      return value
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
    };

    const title = decodeHtml(getTag("title"));
    const description = decodeHtml(getTag("description")).slice(0, 180);
    const link = decodeHtml(getTag("link"));
    const published = getTag("pubDate");
    const category = decodeHtml(getTag("category"));

    if (!title || !link) {
      console.warn("Latest blog post is missing a title or link.");

      return null;
    }

    return {
      title,
      description,
      link,
      published,
      category,
    };
  } catch (error) {
    console.warn("Unable to retrieve the Support Engineering Blog feed.", error);

    return null;
  }
}