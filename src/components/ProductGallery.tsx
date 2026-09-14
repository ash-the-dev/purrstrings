"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaPendingPanel } from "@/components/MediaPendingPanel";
import type { EditorialImage } from "@/lib/images";
import type { EditorialVideo } from "@/data/featured-picks";

type ProductGalleryProps = {
  images: EditorialImage[];
  videos?: EditorialVideo[];
  /** When true, owner/demo video appears above the still gallery. */
  leadWithVideo?: boolean;
  /** Honest pending state — not a fake product photo. */
  needsMedia?: boolean;
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
  needsMedia = false,
}: ProductGalleryProps) {
  const realImages = images.filter((image) => !image.src.startsWith("/brand/"));
  const galleryImages = needsMedia
    ? realImages.length > 0
      ? realImages
      : []
    : images;
  const [active, setActive] = useState(0);
  const current = galleryImages[active] ?? galleryImages[0];
  const videoBlock = <VideoStack videos={videos} />;
  const showPendingPanel = needsMedia && galleryImages.length === 0;

  return (
    <div>
      {leadWithVideo && videos.length > 0 ? (
        <div className="mb-8">{videoBlock}</div>
      ) : null}

      {showPendingPanel ? (
        <MediaPendingPanel variant="detail" />
      ) : current ? (
        <div className="relative aspect-[4/5] overflow-hidden bg-black/5 sm:aspect-[4/3]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-contain bg-white"
          />
          {needsMedia ? (
            <span className="absolute inset-x-0 bottom-0 bg-foreground/90 px-3 py-2.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.16em] text-background">
              More house photos coming
            </span>
          ) : null}
        </div>
      ) : null}

      {galleryImages.length > 1 ? (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {galleryImages.map((image, index) => (
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
