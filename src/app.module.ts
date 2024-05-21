import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { UserModule } from './user/user.module';
import { RoleController } from './role/role.controller';
import { HeroService } from './hero/hero.service';
import { HeroModule } from './hero/hero.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, HeroModule, AuthModule],
  controllers: [AppController, RoleController],
  providers: [AppService],
})
export class AppModule {}
