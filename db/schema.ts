import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const blogPosts = sqliteTable("blog_posts", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  publishedDate: text("published_date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  imageUrl: text("image_url"),
  s3AssetUrl: text("s3_asset_url"),
});

export const bookReviews = sqliteTable("book_reviews", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  publishedDate: text("published_date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  imageUrl: text("image_url"),
  s3AssetUrl: text("s3_asset_url"),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  githubUrl: text("github_url").notNull(),
  websiteUrl: text("website_url"),
});

export const videos = sqliteTable("videos", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  uploadedDate: text("uploaded_date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  s3VideoUrl: text("s3_video_url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
});

export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey(),
  postId: integer("post_id").notNull(),
  postType: text("post_type").notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const postCategories = sqliteTable("post_categories", {
  id: integer("id").primaryKey(),
  postId: integer("post_id").notNull(),
  postType: text("post_type").notNull(),
  categoryId: integer("category_id").notNull(),
});

// Type inference
export type InsertBlogPost = typeof blogPosts.$inferInsert;
export type SelectBlogPost = typeof blogPosts.$inferSelect;

export type InsertBookReview = typeof bookReviews.$inferInsert;
export type SelectBookReview = typeof bookReviews.$inferSelect;

export type InsertProject = typeof projects.$inferInsert;
export type SelectProject = typeof projects.$inferSelect;

export type InsertVideo = typeof videos.$inferInsert;
export type SelectVideo = typeof videos.$inferSelect;

export type InsertComment = typeof comments.$inferInsert;
export type SelectComment = typeof comments.$inferSelect;

export type InsertCategory = typeof categories.$inferInsert;
export type SelectCategory = typeof categories.$inferSelect;

export type InsertPostCategory = typeof postCategories.$inferInsert;
export type SelectPostCategory = typeof postCategories.$inferSelect;
