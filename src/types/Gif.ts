export interface Gifs {
  data: IGif[];
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}

export interface RandomGif {
  data: IGif;
  pagination: {
    offset: number;
  };
}

export interface GifID {
  data: IGif;
}

export interface IGif {
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  user: IUser;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: GiphyImages;
  title: string;
  isPressed: boolean;
  alt_text?: string;
}

export interface GiphyImages {
  original: GiphyImageFormat;
  fixed_height: GiphyImageFormat;
  fixed_width: GiphyImageFormat;
}

export interface GiphyImageFormat {
  url: string;
  width: string;
  height: string;
}

export interface IUser {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: boolean;
}

export interface favoriteState {
  items: IGif[];
}
