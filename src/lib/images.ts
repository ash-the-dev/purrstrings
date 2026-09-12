export type EditorialImage = {
  src: string;
  alt: string;
};

export function unsplashPhoto(id: string, width = 1400) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "80",
    w: String(width),
  });

  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}
