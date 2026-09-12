import type { Metadata } from "next";
import { SongClient } from "../../song/SongClient";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function fetchYoutubeMetadata(id: string): Promise<{ title: string; artist: string }> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      const rawTitle = data.title || "";
      const author = data.author_name || "A1 Swaara";
      
      if (rawTitle.includes(" - ")) {
        const parts = rawTitle.split(" - ");
        return {
          artist: parts[0].trim(),
          title: parts.slice(1).join(" - ").replace(/\(Official.*?\)|\[Official.*?\]/gi, "").trim(),
        };
      }
      return {
        title: rawTitle.replace(/\(Official.*?\)|\[Official.*?\]/gi, "").trim(),
        artist: author,
      };
    }
  } catch (e) {
    console.error("Failed to fetch oEmbed metadata", e);
  }
  return { title: "Now Playing", artist: "A1 Swaara" };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { id } = await params;
  const sParams = await searchParams;

  let title = typeof sParams.title === "string" ? sParams.title : "";
  let artist = typeof sParams.artist === "string" ? sParams.artist : "";

  if (!title || !artist) {
    const fetched = await fetchYoutubeMetadata(id);
    if (!title) title = fetched.title;
    if (!artist) artist = fetched.artist;
  }

  const thumb =
    typeof sParams.thumb === "string"
      ? sParams.thumb
      : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  const pageTitle = `${title} — ${artist} | A1 Swaara`;
  const description = `Listen to ${title} by ${artist} on A1 Swaara. Stream in 320 kbps Ultra Lossless Audio with zero ads and synced karaoke lyrics.`;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      title: `${title} — ${artist}`,
      description: description,
      siteName: "A1 Swaara",
      type: "music.song",
      images: [
        {
          url: thumb,
          width: 800,
          height: 800,
          alt: `${title} — ${artist}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${artist}`,
      description: description,
      images: [thumb],
    },
  };
}

export default async function ShortSongPage({ params, searchParams }: Props) {
  const { id } = await params;
  const sParams = await searchParams;

  let title = typeof sParams.title === "string" ? sParams.title : "";
  let artist = typeof sParams.artist === "string" ? sParams.artist : "";
  const thumb = typeof sParams.thumb === "string" ? sParams.thumb : undefined;

  if (!title || !artist) {
    const fetched = await fetchYoutubeMetadata(id);
    if (!title) title = fetched.title;
    if (!artist) artist = fetched.artist;
  }

  return <SongClient id={id} title={title} artist={artist} thumb={thumb} />;
}
