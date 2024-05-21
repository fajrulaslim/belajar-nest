nest g source user
nest g controller user
nest g module user
nest g interface user
nest g service user

npx prisma migrate dev --name init
npx prisma studio