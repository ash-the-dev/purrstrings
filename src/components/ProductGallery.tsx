"use client";

import Image from "next/image";
import { useState } from "react";
import type { EditorialImage } from "@/lib/images";
import type { EditorialVideo } from "@/data/featured-picks";

type ProductGalleryProps = {
  images: EditorialImage[];
  videos?: EditorialVideo[];
  /** When true, owner/demo video appears above the still gallery. */
  leadWithVideo?: boolean;
};

function VideoStack({ videos }: { videos: EditorialVideo[] }) {
  if (!videos.length) return null;

  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <figure key={video.src}>
          {video.label ? (
            <figcaption className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em]">
              {video.label}
            </figcaption>
          ) : null}
          <video
            className="h-auto w-full bg-black"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </figure>
      ))}
    </div>
  );
}

export function ProductGallery({
  images,
  videos = [],
  leadWithVideo = false,
}: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) {
    return null;
  }

  const videoBlock = <VideoStack videos={videos} />;

  return (
    <div>
      {leadWithVideo && videos.length > 0 ? (
        <div className="mb-8">{videoBlock}</div>
      ) : null}

      <div className="relative aspect-[4/5] overflow-hidden bg-black/5 sm:aspect-[4/3]">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-contain bg-white"
        />
      </div>

      {images.length > 1 ? (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <li key={`${image.src}-${index}`} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={active === index}
                className={`relative block h-20 w-16 overflow-hidden bg-black/5 sm:h-24 sm:w-20 ${
                  active === index ? "outline outline-2 outline-foreground" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {!leadWithVideo && videos.length > 0 ? (
        <div className="mt-8">{videoBlock}</div>
      ) : null}
    </div>
  );
}
