import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import { profiles } from './db/schema'; // ✅ เปลี่ยนจาก usersTable เป็น profiles

const db = drizzle(postgres(process.env.DATABASE_URL!));

async function main() {
  // ✅ เปลี่ยน Type และข้อมูลให้ตรงกับ profiles schema
  const user: typeof profiles.$inferInsert = {
    id: "00000000-0000-0000-0000-000000000001", // ต้องใส่ UUID เพราะใน schema ตั้งเป็น uuid().primaryKey()
    email: 'john@example.com',
    username: 'John',
  };

  await db.insert(profiles).values(user); // ✅ ใช้ profiles
  console.log('New profile created!');

  const allProfiles = await db.select().from(profiles);
  console.log('Getting all profiles: ', allProfiles);

  await db
    .update(profiles)
    .set({
      username: 'John Updated',
    })
    .where(eq(profiles.email, user.email));
  console.log('Profile updated!');

  await db.delete(profiles).where(eq(profiles.email, user.email));
  console.log('Profile deleted!');
}

main();