// This is the primary type of the post object that is returned from contenful.
export interface PostInterface {
  fields: Fields;
  metadata: Metadata;
  sys: Sys;
}
export interface Metadata {
  tags: any[];
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys4 {
  type: string;
  linkType: string;
  id: string;
}

export interface ContentType {
  sys: Sys4;
}

export interface Sys {
  space: Space;
  id: string;
  type: string;
  publishDate?: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface Metadata2 {
  tags: any[];
}

export interface Sys6 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space2 {
  sys: Sys6;
}

export interface Sys7 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment2 {
  sys: Sys7;
}

export interface Sys5 {
  space: Space2;
  id: string;
  type: string;
  publishDate: Date;
  updatedAt: Date;
  environment: Environment2;
  revision: number;
  locale: string;
}

export interface Image {
  width: number;
  height: number;
}

export interface Details {
  size: number;
  image: Image;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File;
}

export interface HeroImage {
  metadata: Metadata2;
  sys: Sys5;
  fields: Fields2;
}

export interface Metadata3 {
  tags: any[];
}

export interface Sys9 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space3 {
  sys: Sys9;
}

export interface Sys10 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment3 {
  sys: Sys10;
}

export interface Sys11 {
  type: string;
  linkType: string;
  id: string;
}

export interface ContentType2 {
  sys: Sys11;
}

export interface Sys8 {
  space: Space3;
  id: string;
  type: string;
  publishDate: Date;
  updatedAt: Date;
  environment: Environment3;
  revision: number;
  contentType: ContentType2;
  locale: string;
}

export interface Metadata4 {
  tags: any[];
}

export interface Sys13 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space4 {
  sys: Sys13;
}

export interface Sys14 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment4 {
  sys: Sys14;
}

export interface Sys12 {
  space: Space4;
  id: string;
  type: string;
  publishDate: Date;
  updatedAt: Date;
  environment: Environment4;
  revision: number;
  locale: string;
}

export interface Image3 {
  width: number;
  height: number;
}

export interface Details2 {
  size: number;
  image: Image3;
}

export interface File2 {
  url: string;
  details: Details2;
  fileName: string;
  contentType: string;
}

export interface Fields4 {
  title: string;
  description: string;
  file: File2;
}

export interface Image2 {
  metadata: Metadata4;
  sys: Sys12;
  fields: Fields4;
}

export interface Fields3 {
  name: string;
  title: string;
  company: string;
  shortBio: string;
  email: string;
  phone: string;
  facebook: string;
  twitter: string;
  github: string;
  image: Image2;
}

export interface Author {
  metadata: Metadata3;
  sys: Sys8;
  fields: Fields3;
}

export interface Fields {
  title: string;
  slug: string;
  heroImage: HeroImage;
  description: string;
  body: string;
  author: Author;
  publishDate: string;
  tags: string[];
}

export interface RootObject {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
