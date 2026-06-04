export type PackageCategory = "wedding" | "homecoming" | "pre-casual";

export type PackageTier = {
  id: string;
  name: string;
  price: number;
  currency: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

export const PACKAGE_CATEGORIES: { id: PackageCategory; label: string }[] = [
  { id: "wedding", label: "Wedding" },
  { id: "homecoming", label: "Homecoming" },
  { id: "pre-casual", label: "Pre-Casual" },
];

export const PACKAGES: Record<PackageCategory, PackageTier[]> = {
  wedding: [
    {
      id: "harmony",
      name: "Harmony",
      price: 100000,
      currency: "LKR",
      tagline:
        "An elegant entry into your wedding day — full coverage with all your precious moments expertly captured.",
      features: [
        "Up to 10 hours exclusive coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception coverage",
        "100 Thanking Cards",
        "All unedited raw images",
        "150 professionally edited high-resolution images",
      ],
    },
    {
      id: "reverie",
      name: "Reverie",
      price: 170000,
      currency: "LKR",
      tagline:
        "A timeless wedding collection with a beautiful heirloom album to relive every cherished moment.",
      features: [
        "Up to 10 hours exclusive coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception coverage",
        "1× 12×24 Wedding Album — 50 pages",
        "2× 16×24 Size Enlargements",
        "75 Thanking Cards",
        "All unedited raw images",
        "150 professionally edited high-resolution images",
      ],
    },
    {
      id: "timeless",
      name: "Timeless",
      price: 210000,
      currency: "LKR",
      tagline:
        "Wedding and pre-shoot combined — a complete love story told across two beautiful sessions.",
      features: [
        "Pre-Casual Shoot: up to 4 hours",
        "Custom theme session at your preferred location",
        "50 professionally retouched high-resolution images",
        "Up to 12 hours wedding coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception",
        "1× 12×12 Wedding Album — 50 pages",
        "2× 16×24 Size Enlargements",
        "100 Thanking Cards",
        "All unedited raw images",
        "200 professionally edited high-resolution images",
      ],
    },
    {
      id: "elegance",
      name: "Elegance",
      price: 210000,
      currency: "LKR",
      tagline:
        "Wedding coverage plus a homecoming shoot — two of life's most beautiful moments, one exquisite collection.",
      features: [
        "Homecoming Shoot: up to 2 hours",
        "Up to 12 hours wedding coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception",
        "1× 12×12 Wedding Album — 50 pages",
        "2× 16×24 Size Enlargements",
        "150 Thanking Cards",
        "All unedited raw images",
        "200 professionally edited high-resolution images",
      ],
    },
    {
      id: "lustre",
      name: "Lustre",
      price: 250000,
      currency: "LKR",
      tagline:
        "A premium wedding experience with a grand oversized album and a family heirloom — crafted for generations.",
      features: [
        "Up to 12 hours exclusive coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception",
        "1× 12×30 Wedding Album — 50 pages",
        "1× 10×20 Family Album — 30 pages",
        "2× 16×24 Size Enlargements",
        "150 Thanking Cards",
        "All unedited raw images",
        "200 professionally edited high-resolution images",
      ],
    },
    {
      id: "royal-romance",
      name: "Royal Romance",
      price: 250000,
      currency: "LKR",
      popular: true,
      tagline:
        "The complete wedding experience — photography, a cinematic highlight video, and a pre-shoot session to tell your full love story.",
      features: [
        "Pre-Casual Shoot: up to 4 hours",
        "Custom theme session at your preferred location",
        "50 professionally retouched high-resolution images",
        "Up to 12 hours wedding coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception",
        "1× 12×24 Wedding Album — 50 pages",
        "1× 10×20 Family Album — 30 pages",
        "2× 16×24 Size Enlargements",
        "100 Thanking Cards",
        "All unedited raw images",
        "200 professionally edited high-resolution images",
        "3–5 min Highlight Video (HD 1080P on Pendrive)",
      ],
    },
    {
      id: "allure",
      name: "Allure",
      price: 290000,
      currency: "LKR",
      tagline:
        "Our ultimate wedding package — every detail, every album, every memory. The pinnacle of Lov'Ceylon photography.",
      features: [
        "Pre-Casual Shoot with custom theme",
        "50 professionally retouched high-resolution images",
        "1× 10×20 Pre-Shoot Album — 50 pages",
        "Up to 12 hours wedding coverage",
        "Bride & Groom getting ready at hotel",
        "Main photo session at preferred location",
        "Wedding ceremony & reception",
        "1× 12×30 Wedding Album — 50 pages",
        "Mini Replica Album (mini copy of main album)",
        "1× 10×20 Family Album — 30 pages",
        "2× 16×24 Size Enlargements",
        "150 Thanking Cards",
        "All unedited raw images",
        "200 professionally edited high-resolution images",
      ],
    },
  ],
  homecoming: [
    {
      id: "whisper",
      name: "Whisper",
      price: 50000,
      currency: "LKR",
      tagline:
        "A beautiful homecoming session capturing your arrival in elegant, timeless photographs.",
      features: [
        "Homecoming Session",
        "2× 12×18 Size Enlargements",
        "All unedited raw images",
        "50 professionally edited high-resolution images",
      ],
    },
    {
      id: "mystique",
      name: "Mystique",
      price: 80000,
      currency: "LKR",
      tagline:
        "Homecoming shoot plus event coverage — your ceremony and reception preserved with artistry.",
      features: [
        "Homecoming Session",
        "HC Ceremony & Reception coverage",
        "2× 12×18 Size Enlargements",
        "100 Thanking Cards",
        "All unedited raw images",
        "100 professionally edited high-resolution images",
      ],
    },
    {
      id: "promise",
      name: "Promise",
      price: 100000,
      currency: "LKR",
      tagline:
        "The complete homecoming experience with a stunning album to treasure your special day forever.",
      features: [
        "Homecoming Session",
        "HC Ceremony & Reception coverage",
        "1× 10×20 HC Album — 30 pages",
        "100 Thanking Cards",
        "All unedited raw images",
        "100 professionally edited high-resolution images",
      ],
    },
  ],
  "pre-casual": [
    {
      id: "divine",
      name: "Divine",
      price: 25000,
      currency: "LKR",
      tagline:
        "A casual pre-shoot session — expressive, personal, and beautifully crafted at your chosen location.",
      features: [
        "Pre-Casual Session at your preferred location",
        "Custom theme styling",
        "All unedited raw images",
        "50 professionally edited high-resolution images",
      ],
    },
    {
      id: "infinite",
      name: "Infinite",
      price: 70000,
      currency: "LKR",
      tagline:
        "A premium pre-shoot experience with a beautiful album — your story before the big day, elegantly preserved.",
      features: [
        "Up to 4 hours exclusive coverage",
        "Custom theme session at your preferred location",
        "1× 10×20 Pre-Shoot Album — 30 pages",
        "All unedited raw images",
        "70 professionally edited high-resolution images",
      ],
    },
  ],
};
