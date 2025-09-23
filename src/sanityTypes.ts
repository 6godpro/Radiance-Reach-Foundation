export type SanityImageAsset = {
  _ref: string;
  _type: "reference";
};

export type PhotoType = {
  asset: SanityImageAsset;
};

export type SanityEventType = {
  title: string;
  images: PhotoType[];
};
