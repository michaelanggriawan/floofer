# Migration `20200515224332-initiate-database-from-schema-prisma`

This migration has been generated at 5/15/2020, 10:43:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Preference" AS ENUM ('CAT', 'DOG', 'ALL');

CREATE TYPE "Active" AS ENUM ('ACTIVE', 'INACTIVE');

CREATE TYPE "category" AS ENUM ('CAT', 'DOG');

CREATE TYPE "gender" AS ENUM ('MALE', 'FEMALE');

CREATE TYPE "Status" AS ENUM ('LIKED', 'DISLIKED', 'MATCH');

CREATE TYPE "User_type" AS ENUM ('USER', 'PET');

CREATE TABLE "public"."User" (
"address" text   ,"city" text   ,"details" text   ,"email" text  NOT NULL ,"id" text  NOT NULL ,"name" text  NOT NULL ,"password" text  NOT NULL ,"phoneNum" text  NOT NULL ,"photo" text   ,"preference" "Preference" NOT NULL DEFAULT 'ALL',
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Pet" (
"active" "Active" NOT NULL ,"age" integer  NOT NULL ,"bio" text  NOT NULL ,"breed" text  NOT NULL ,"category" "category" NOT NULL DEFAULT 'DOG',"gender" "gender" NOT NULL DEFAULT 'MALE',"id" text  NOT NULL ,"name" text  NOT NULL ,"user_id" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Photo" (
"id" text  NOT NULL ,"pet_id" text  NOT NULL ,"photo_url" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Match" (
"id" text  NOT NULL ,"pet_id" text  NOT NULL ,"status" "Status" NOT NULL ,"user_id" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Notification" (
"date" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" text  NOT NULL ,"message" text  NOT NULL ,"pet_id" text   ,"ser_type" "User_type" NOT NULL DEFAULT 'USER',"user_id" text   ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

CREATE UNIQUE INDEX "User.phoneNum" ON "public"."User"("phoneNum")

CREATE UNIQUE INDEX "Photo.photo_url" ON "public"."Photo"("photo_url")

ALTER TABLE "public"."Pet" ADD FOREIGN KEY ("user_id")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Photo" ADD FOREIGN KEY ("pet_id")REFERENCES "public"."Pet"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Match" ADD FOREIGN KEY ("pet_id")REFERENCES "public"."Pet"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Match" ADD FOREIGN KEY ("user_id")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Notification" ADD FOREIGN KEY ("user_id")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Notification" ADD FOREIGN KEY ("pet_id")REFERENCES "public"."Pet"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200515224332-initiate-database-from-schema-prisma
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,96 @@
+// This is your Prisma schema file,
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id          String      @id @default(cuid())
+  name        String
+  email       String      @unique
+  password    String
+  phoneNum    String      @unique
+  city        String?
+  address     String?
+  details     String?
+  photo       String?
+  preference  Preference  @default(ALL)
+}
+
+enum Preference{
+  CAT
+  DOG
+  ALL
+}
+
+model Pet{
+  id        String    @id @default(cuid())
+  name      String
+  category  category  @default(DOG)
+  gender    gender    @default(MALE)
+  breed     String
+  bio       String
+  age       Int
+  photo     Photo[]
+  owner     User      @relation(fields:[user_id] , references: [id]) 
+  user_id   String
+  active    Active
+}
+
+model Photo{
+  id        String  @id @default(cuid())
+  photo_url String  @unique
+  pet       Pet     @relation(fields: [pet_id], references: [id])
+  pet_id    String
+}
+
+enum Active{
+  ACTIVE
+  INACTIVE
+}
+
+enum category{
+  CAT
+  DOG
+}
+
+enum gender{
+  MALE
+  FEMALE
+}
+
+model Match{
+  id          String    @id @default(cuid())
+  pet         Pet       @relation(fields: [pet_id], references: [id])
+  pet_id      String
+  user        User      @relation(fields:[user_id] , references: [id]) 
+  user_id     String
+  status      Status
+}
+
+enum Status{
+  LIKED
+  DISLIKED
+  MATCH
+}
+
+model Notification{
+  id        String       @id @default(cuid())
+  ser_type  User_type    @default(USER)
+  user      User?        @relation(fields:[user_id] , references: [id]) 
+  user_id   String?
+  pet       Pet?         @relation(fields: [pet_id], references: [id])
+  pet_id    String?
+  message   String
+  date      DateTime     @default(now())
+}
+
+enum User_type{
+  USER
+  PET
+}
```


