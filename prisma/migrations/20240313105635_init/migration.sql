-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cohort" VARCHAR(100) NOT NULL,
    "instructorid" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_username_key" ON "Instructor"("username");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_instructorid_fkey" FOREIGN KEY ("instructorid") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
