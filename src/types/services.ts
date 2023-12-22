export interface Category {
  id: number;
  title: string;
  text_color: string;
  background_color: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  author: string;
  categories: Category[];
}
