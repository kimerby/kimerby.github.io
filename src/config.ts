export const SITE = {
  website: "https://kimerby.github.io/",
  author: "김어비",
  profile: "https://kimerby.github.io/",
  desc: "Product Manager & Creator",
  title: "Kimerby | 김어비",
  logo: "/images/profile/film.jpeg", // 헤더 로고 이미지 (정사각형 권장)
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ko",
  timezone: "Asia/Seoul",
} as const;
