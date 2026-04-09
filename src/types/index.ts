// ===== Vantage Publishers Type Definitions =====

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  category: string;
  level: string;
  subject: string;
  rating: number;
  reviewCount: number;
  description: string;
  isbn: string;
  publisher: string;
  edition: string;
  pageCount: number;
  language: string;
  inStock: boolean;
  format: BookFormat[];
  tags: string[];
  highlights?: string[];
}

export type BookFormat = 'paperback' | 'ebook';

export interface CartItem {
  book: Book;
  quantity: number;
  format: BookFormat;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bookCount: number;
}

export interface OrderItem {
  id: string;
  customer: string;
  initials: string;
  items: string;
  total: string;
  status: 'dispatched' | 'processing' | 'delivered' | 'pending';
}

export interface StatCard {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
