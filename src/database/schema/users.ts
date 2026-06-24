import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const classTable = mysqlTable('class_table', {
    id: int().primaryKey(),
    grade: int().notNull(),
    class: varchar({ length: 20 }).notNull()
});
