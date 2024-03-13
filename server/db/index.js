/*
const { Pool } = require("pg");
const db = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://localhost:5432/34a-classroom_manager",
});
*/

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function query(sql, params, callback) {
  //return db.query(sql, params, callback);
}

const init = async()=> {
  await prisma.student.deleteMany({});
  await prisma.instructor.deleteMany({});
  const moe = await prisma.instructor.create({ data: { username: 'moe', password: 'moe_pw'}});
  const larry = await prisma.student.create({ data: { name: 'larry', cohort: '123', instructorid: moe.id}});
  const instructors = await prisma.instructor.findMany({}); 
  const students = await prisma.student.findMany({}); 
  prisma.instructor.findUnique({ where: {username: 'moe'}});
  console.log(instructors, students);
} 

module.exports = { query, prisma, init };
