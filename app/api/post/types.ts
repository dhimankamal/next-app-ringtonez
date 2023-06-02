export interface WordpressPostResponse {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: any[];
  yoast_head: string;
  fields: {
    file_size: string;
    file: string;
    view: string;
    download_count: string;
    premium: boolean;
    description: string;
  };
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    author: { embeddable: boolean; href: string }[];
    replies: { embeddable: boolean; href: string }[];
    "version-history": { count: number; href: string }[];
    "predecessor-version": { id: number; href: string }[];
    "wp:attachment": { href: string }[];
    "wp:term": { taxonomy: string; embeddable: boolean; href: string }[];
    curies: { name: string; href: string; templated: boolean }[];
  };
}
