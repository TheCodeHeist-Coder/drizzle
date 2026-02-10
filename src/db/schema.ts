

import { pgTable, serial,varchar, text, timestamp, integer } from "drizzle-orm/pg-core";




export const users = pgTable('users', {
    id: integer("id").primaryKey(),
    name: varchar("name" ,{length: 255}).notNull(),
    userName: varchar("username", {length: 255}).unique(),
    password: text("password").notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
    phoneNumber: varchar("phone_number", {length:255}),
    deletedAt: timestamp("deleted_at").defaultNow().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
    
})
