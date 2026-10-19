// Centralised imagery for the marketing site.
// Indian-context photography: CC BY 2.0 from Flickr (credited on /credits) plus
// the Taj Mahal hero from Unsplash. Keeping URLs here keeps pages tidy and lets
// the credits page stay in sync with what the site actually uses.

export const IMAGES = {
  // Heritage hero (Unsplash licence, no attribution required)
  heritage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
  // Indian-context photography (Flickr, CC BY 2.0)
  festiveDiyas: "https://live.staticflickr.com/6049/6270321975_d1b0fb450c_b.jpg",   // Diwali diyas, girl
  diyaFlame: "https://live.staticflickr.com/5125/5339901677_8f1bfc891b_b.jpg",      // single diya flame
  bananaMarket: "https://live.staticflickr.com/2312/2279204706_551b4900d9_b.jpg",   // women at market stall
  teamIndia: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1400&q=80", // Indian startup team in a modern office (Unsplash licence, no attribution)
  vegMarket: "https://live.staticflickr.com/6240/6272158368_465c9e3403_b.jpg",      // street vegetable vendor
  spiceMarket: "https://live.staticflickr.com/7033/6684415299_a43c974160_b.jpg",    // spice bins
  classicalDance: "https://live.staticflickr.com/5235/13973992868_b704002640_b.jpg",// Bharatanatyam dancer
  handloomRug: "https://live.staticflickr.com/3227/2906764438_b3f8b13d71_b.jpg",    // handwoven chindi rug
  // Shivo for Business section
  bizTeam: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",   // team working together (Unsplash licence)
  bizSupply: "https://live.staticflickr.com/2186/1494590209_bdc1f95585_b.jpg",      // shipping containers (Flickr CC BY)
  bizTech: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",   // analytics dashboard (Unsplash licence)
  healthcare: "https://live.staticflickr.com/7512/29095583293_887bd07863_b.jpg",    // blood-pressure check (Flickr, Public Domain — no attribution)
  farmer: "https://live.staticflickr.com/46/136310496_216ff74e2f.jpg",             // farmer ploughing with oxen (Flickr CC BY)
  bizOwner: "https://images.pexels.com/photos/36317181/pexels-photo-36317181.jpeg?auto=compress&cs=tinysrgb&w=1200", // Indian kirana store owner (Pexels, no attribution)
} as const;

export type ImageCredit = {
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  source: string;
};

// CC BY 2.0 requires attribution. Listed on /credits and linked from the footer.
export const IMAGE_CREDITS: ImageCredit[] = [
  { title: "Diwali diyas", creator: "Partha Sarathi Sahana", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/22853208@N05/6270321975" },
  { title: "Diya flame", creator: "Rohit Chhiber", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/44898393@N08/5339901677" },
  { title: "Market stall", creator: "mckaysavage", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/56796376@N00/2279204706" },
  { title: "Street vegetable vendor", creator: "Arian Zwegers", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/arianzwegers/6272158368" },
  { title: "Indian spices", creator: "gajman", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/33223059@N05/6684415299" },
  { title: "Bharatanatyam dancer", creator: "Pabak Sarkar", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/122393034@N04/13973992868" },
  { title: "Handwoven rug", creator: "New Internationalist", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/newint/2906764438" },
  { title: "Taj Mahal", creator: "Unsplash", license: "Unsplash License", licenseUrl: "https://unsplash.com/license", source: "https://unsplash.com/photos/1524492412937-b28074a5d7da" },
  { title: "Shipping containers", creator: "photohome_uk", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/photohome_uk/1494590209" },
  { title: "Farmer ploughing", creator: "antkriz", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://www.flickr.com/photos/antkriz/136310496" },
];
