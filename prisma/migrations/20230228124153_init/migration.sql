-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" INTEGER NOT NULL,
    "confirmed" INTEGER NOT NULL,
    "unLocked" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT,
    "occupation" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers_institutions" (
    "id" SERIAL NOT NULL,
    "institution_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "teachers_institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "institution_type" INTEGER NOT NULL,
    "institution_name" TEXT NOT NULL,
    "cnpj_inep" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "school_type" INTEGER,
    "institution_email" TEXT,
    "institution_phone" TEXT,
    "registrant_name" TEXT NOT NULL,
    "registrant_email" TEXT NOT NULL,
    "registrant_occupation" TEXT,
    "registrant_whatsapp" TEXT NOT NULL,
    "registrant_status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "institution_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "themes" (
    "id" SERIAL NOT NULL,
    "theme" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "themes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "themes_essays" (
    "id" SERIAL NOT NULL,
    "theme_id" INTEGER NOT NULL,
    "essay_id" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "themes_essays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "essays" (
    "id" SERIAL NOT NULL,
    "institution_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "essay" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "essays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "illustrators" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "portfolio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "illustrators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "illustrations" (
    "id" SERIAL NOT NULL,
    "essay_id" INTEGER NOT NULL,
    "illustrator_id" INTEGER NOT NULL,
    "url_file" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "illustrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeacherInstitution" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ThemeEssay" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_id_key" ON "teachers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_user_id_key" ON "teachers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_institutions_id_key" ON "teachers_institutions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_institutions_institution_id_key" ON "teachers_institutions"("institution_id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_institutions_teacher_id_key" ON "teachers_institutions"("teacher_id");

-- CreateIndex
CREATE UNIQUE INDEX "institutions_id_key" ON "institutions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "institutions_user_id_key" ON "institutions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "institutions_institution_email_key" ON "institutions"("institution_email");

-- CreateIndex
CREATE UNIQUE INDEX "authors_id_key" ON "authors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "authors_institution_id_key" ON "authors"("institution_id");

-- CreateIndex
CREATE UNIQUE INDEX "themes_id_key" ON "themes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "themes_essays_id_key" ON "themes_essays"("id");

-- CreateIndex
CREATE UNIQUE INDEX "themes_essays_theme_id_key" ON "themes_essays"("theme_id");

-- CreateIndex
CREATE UNIQUE INDEX "themes_essays_essay_id_key" ON "themes_essays"("essay_id");

-- CreateIndex
CREATE UNIQUE INDEX "essays_id_key" ON "essays"("id");

-- CreateIndex
CREATE UNIQUE INDEX "essays_institution_id_key" ON "essays"("institution_id");

-- CreateIndex
CREATE UNIQUE INDEX "essays_author_id_key" ON "essays"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrators_id_key" ON "illustrators"("id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrators_user_id_key" ON "illustrators"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrations_id_key" ON "illustrations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrations_essay_id_key" ON "illustrations"("essay_id");

-- CreateIndex
CREATE UNIQUE INDEX "illustrations_illustrator_id_key" ON "illustrations"("illustrator_id");

-- CreateIndex
CREATE UNIQUE INDEX "_TeacherInstitution_AB_unique" ON "_TeacherInstitution"("A", "B");

-- CreateIndex
CREATE INDEX "_TeacherInstitution_B_index" ON "_TeacherInstitution"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ThemeEssay_AB_unique" ON "_ThemeEssay"("A", "B");

-- CreateIndex
CREATE INDEX "_ThemeEssay_B_index" ON "_ThemeEssay"("B");

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutions" ADD CONSTRAINT "institutions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "authors" ADD CONSTRAINT "authors_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "essays" ADD CONSTRAINT "essays_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "essays" ADD CONSTRAINT "essays_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "illustrators" ADD CONSTRAINT "illustrators_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "illustrations" ADD CONSTRAINT "illustrations_essay_id_fkey" FOREIGN KEY ("essay_id") REFERENCES "essays"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "illustrations" ADD CONSTRAINT "illustrations_illustrator_id_fkey" FOREIGN KEY ("illustrator_id") REFERENCES "illustrators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherInstitution" ADD CONSTRAINT "_TeacherInstitution_A_fkey" FOREIGN KEY ("A") REFERENCES "institutions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherInstitution" ADD CONSTRAINT "_TeacherInstitution_B_fkey" FOREIGN KEY ("B") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThemeEssay" ADD CONSTRAINT "_ThemeEssay_A_fkey" FOREIGN KEY ("A") REFERENCES "essays"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThemeEssay" ADD CONSTRAINT "_ThemeEssay_B_fkey" FOREIGN KEY ("B") REFERENCES "themes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
