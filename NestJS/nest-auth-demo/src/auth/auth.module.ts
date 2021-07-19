import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  // FOR SESSION STORAGE ADD .register({session:true})  TO PassportModule 
  // and add SessionSerializer to the providers
  imports: [UsersModule , PassportModule,JwtModule.register({
    secret:'SECRET',
    signOptions: {expiresIn: '60s'},
  })],
  providers: [AuthService , LocalStrategy,jwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
