-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "unLocked" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registrants" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "whatapp" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "registers" (
    "id" SERIAL NOT NULL,
    "school_id" INTEGER NOT NULL,
    "registrant_id" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "schools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "school_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "redactions" (
    "id" SERIAL NOT NULL,
    "school_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "redaction" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "theme" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "illustrators" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "whatapp" TEXT NOT NULL,
    "portifolio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "redaction_id" INTEGER NOT NULL,
    "illustrator_id" INTEGER NOT NULL,
    "url_file" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE INDEX "users_id_idx" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "registrants_id_key" ON "registrants"("id");

-- CreateIndex
CREATE UNIQUE INDEX "registrants_user_id_key" ON "registrants"("user_id");

-- CreateIndex
CREATE INDEX "registrants_id_idx" ON "registrants"("id");

-- CreateIndex
CREATE UNIQUE INDEX "registers_id_key" ON "registers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "registers_school_id_key" ON "registers"("school_id");

-- CreateIndex
CREATE UNIQUE INDEX "registers_registrant_id_key" ON "registers"("registrant_id");

-- CreateIndex
CREATE INDEX "registers_id_idx" ON "registers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "schools_id_key" ON "schools"("id");

-- CreateIndex
CREATE UNIQUE INDEX "schools_email_key" ON "schools"("email");

-- CreateIndex
CREATE INDEX "schools_id_idx" ON "schools"("id");

-- CreateIndex
CREATE UNIQUE INDEX "authors_id_key" ON "authors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "authors_school_id_key" ON "authors"("school_id");

-- CreateIndex
CREATE INDEX "authors_id_idx" ON "authors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_id_key" ON "categories"("id");

-- CreateIndex
CREATE INDEX "categories_id_idx" ON "categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "redactions_id_key" ON "redactions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "redactions_school_id_key" ON "redactions"("school_id");

-- CreateIndex
CREATE UNIQUE INDEX "redactions_category_id_key" ON "redactions"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "redactions_author_id_key" ON "redactions"("author_id");

-- CreateIndex
CREATE INDEX "redactions_id_idx" ON "redactions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrators_id_key" ON "illustrators"("id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrators_user_id_key" ON "illustrators"("user_id");

-- CreateIndex
CREATE INDEX "illustrators_id_idx" ON "illustrators"("id");

-- CreateIndex
CREATE UNIQUE INDEX "media_id_key" ON "media"("id");

-- CreateIndex
CREATE UNIQUE INDEX "media_redaction_id_key" ON "media"("redaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "media_illustrator_id_key" ON "media"("illustrator_id");

-- CreateIndex
CREATE INDEX "media_id_idx" ON "media"("id");

-- AddForeignKey
ALTER TABLE "registrants" ADD CONSTRAINT "registrants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registers" ADD CONSTRAINT "registers_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registers" ADD CONSTRAINT "registers_registrant_id_fkey" FOREIGN KEY ("registrant_id") REFERENCES "registrants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "authors" ADD CONSTRAINT "authors_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "redactions" ADD CONSTRAINT "redactions_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "redactions" ADD CONSTRAINT "redactions_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "redactions" ADD CONSTRAINT "redactions_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "illustrators" ADD CONSTRAINT "illustrators_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_redaction_id_fkey" FOREIGN KEY ("redaction_id") REFERENCES "redactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_illustrator_id_fkey" FOREIGN KEY ("illustrator_id") REFERENCES "illustrators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
