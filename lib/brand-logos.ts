export type LogoAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  frame: { x: number; y: number; width: number; height: number };
};

// Keep the supplied artwork intact. Frames exclude only the surrounding blank
// canvas, with a small safety margin so that fine strokes remain visible.
export const brandLogos = {
  original: {
    src: '/logos/01-original.png', alt: '#01 ORIGINAL', width: 5906, height: 5906,
    frame: { x: 605, y: 1428, width: 4696, height: 3217 },
  },
  park: {
    src: '/logos/01-park.png', alt: '#01 park hair&∞', width: 1079, height: 784,
    frame: { x: 0, y: 0, width: 1079, height: 784 },
  },
  antiques: {
    src: '/logos/otto-antiques.png', alt: 'OttO ANTIQUES', width: 3544, height: 3544,
    frame: { x: 551, y: 1223, width: 2442, height: 1084 },
  },
  clothing: {
    src: '/logos/08-old-clothes.png', alt: '08 old clothing', width: 3544, height: 3544,
    frame: { x: 566, y: 1289, width: 2484, height: 965 },
  },
  otton: {
    src: '/logos/otton.png', alt: 'まるいち おっとん', width: 3544, height: 3544,
    frame: { x: 773, y: 773, width: 1998, height: 1998 },
  },
  paradise8: {
    src: '/logos/paradise8.jpg', alt: '株式会社PARADISE8', width: 1280, height: 1280,
    frame: { x: 77, y: 98, width: 1130, height: 1130 },
  },
  shana: {
    src: '/logos/shana.jpg', alt: '訪問美容 Shana', width: 1536, height: 1024,
    frame: { x: 180, y: 80, width: 1196, height: 850 },
  },
} satisfies Record<string, LogoAsset>;
