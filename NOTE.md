nest g source user
nest g module user
nest g controller user
nest g service user
nest g interface user

nest g module auth
nest g controller auth
nest g service auth

npx prisma migrate dev --name init
npx prisma studio