import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey(), // เชื่อมกับ id ใน supabase.auth.users
  email: text("email").notNull(),
  username: text("username"),
  createdAt: timestamp("created_at").defaultNow(),
}); 