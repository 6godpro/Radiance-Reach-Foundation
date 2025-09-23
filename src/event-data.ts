import { client } from "./sanityClient";
import { SanityEventType } from "./sanityTypes";

export const previewImages = [
  "/images/december_outreach1.jpg",
  "/images/december_outreach10.jpg",
  "/images/december_outreach11.jpg",
  "/images/december_outreach12.jpg",
];

export const fetchEvents = async () => {
  try {
    const res = await client.fetch<SanityEventType[]>(
      "*[_type == 'event']{title,'images': *[_type == 'photo' && references(^._id)][0].image[]{asset}}"
    );
    return res ?? [];
  } catch (err) {
    console.error("Failed to fetch photos:", err);
  }
};
