const isBrowser = () => typeof window !== "undefined";

export const viewItem = (itemName: string) => {
  if (!isBrowser()) return;

  window.gtag("event", "view_item", {
    items: [{ item_name: itemName }],
  });
};

export const viewBlogPost = (postTitle: string) => {
  if (!isBrowser()) return;

  window.gtag("event", "view_blog_post", {
    post_title: postTitle,
  });
};

export const clickAffiliateLink = (platform?: string, url?: string) => {
  if (!isBrowser()) return;

  window.gtag("event", "click_affiliate_link", {
    platform,
    url,
  });
};
