const BLOG_FEED_URL = "https://blog.sadhan.ch/rss.xml";

function decodeHtml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function getTag(xml, tag) {
  const match = xml.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );

  return match?.[1] ? decodeHtml(match[1]) : "";
}

export async function onRequestGet() {
  try {
    const response = await fetch(BLOG_FEED_URL, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "sadhan.ch blog feed",
      },
    });

    if (!response.ok) {
      return Response.json(
        {
          error: "Unable to retrieve the blog feed.",
        },
        {
          status: 502,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const xml = await response.text();

    const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/i);

    if (!itemMatch) {
      return Response.json(
        {
          error: "No blog posts were found in the feed.",
        },
        {
          status: 502,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const item = itemMatch[1];

    const post = {
      title: getTag(item, "title"),
      description: getTag(item, "description").slice(0, 180),
      link: getTag(item, "link"),
      category: getTag(item, "category"),
    };

    if (!post.title || !post.link) {
      return Response.json(
        {
          error: "The latest blog post is missing required information.",
        },
        {
          status: 502,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    return Response.json(
      post,
      {
        headers: {
          "Cache-Control":
            "public, max-age=0, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (error) {
    console.error("Blog feed error:", error);

    return Response.json(
      {
        error: "Unable to retrieve the Support Engineering Blog feed.",
      },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
