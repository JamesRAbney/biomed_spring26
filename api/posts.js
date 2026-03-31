import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      limit: 3,
      order: "-sys.createdAt",
    });

    const posts = response.items.map((entry) => {
      const title = entry.fields.title ?? "";
      const slug = entry.fields.slug ?? "";
      const summary = entry.fields.summary ?? "";
      const imageUrl = entry.fields.images?.fields?.file?.url
        ? `https:${entry.fields.images.fields.file.url}`
        : "";

      return {
        title,
        slug,
        summary,
        imageUrl,
        url: `https://blog.introbiomedicalimaging.org/posts/${slug}`,
      };
    });

    return res.status(200).json({ posts });
  } catch (error) {
    console.error("Contentful error:", error);
    return res.status(500).json({
      error: "Failed to fetch posts",
      details: error.message,
    });
  }
}