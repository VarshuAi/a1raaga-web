import type { Metadata } from "next";
import { SongClient } from "./SongClient";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const title = typeof params.title === "string" ? params.title : "Now Playing";
  const artist = typeof params.artist === "string" ? params.artist : "A1 Swaara";
  const thumb = typeof params.thumb === "string" ? params.thumb : undefined;
  const id = typeof params.id === "string" ? params.id : undefined;

  const displayThumb =
    thumb ||
    (id
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : "https://swaara.app/og.png");

  const pageTitle = `${title} • ${artist} — A1 Swaara`;
  const description = `Listen to "${title}" by ${artist} on A1 Swaara. Stream in 320 kbps Ultra Lossless Audio with zero ads and synced karaoke lyrics.`;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      title: `${title} • ${artist}`,
      description: description,
      siteName: "A1 Swaara",
      type: "music.song",
      images: [
        {
          url: displayThumb,
          width: 800,
          height: 800,
          alt: `${title} - ${artist}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} • ${artist}`,
      description: description,
      images: [displayThumb],
    },
  };
}

export default async function SongPage({ searchParams }: Props) {
  const params = await searchParams;
  const id = typeof params.id === "string" ? params.id : undefined;
  const title = typeof params.title === "string" ? params.title : undefined;
  const artist = typeof params.artist === "string" ? params.artist : undefined;
  const thumb = typeof params.thumb === "string" ? params.thumb : undefined;

  return <SongClient id={id} title={title} artist={artist} thumb={thumb} />;
}
