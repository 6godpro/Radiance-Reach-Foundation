import { client } from "./sanityClient";
import { SanityEventType } from "./sanityTypes";

export const previewImages = [
  "/src/assets/december_outreach1.jpg",
  "/src/assets/december_outreach10.jpg",
  "/src/assets/december_outreach11.jpg",
  "/src/assets/december_outreach12.jpg",
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
