import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepository} from "./user.repository";
import {JwtModule} from "@nestjs/jwt";

import * as config from 'config';
import {PassportModule} from "@nestjs/passport";

const jwtConfig = config.get('jwt');

/**
 * 회원 관련 Moduel
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.11 JWT Module Import
 *    주니하랑, 1.0.2, 2022.04.11 Passport Module Import
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.2, 2022.04.11 Passport Module Import
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@Module({

  // forFeture()는 해당 Module안에 매개 변수 값을 등록하기 위해 사용
  imports : [
      PassportModule.register({ defaultStrategy: 'jwt'}),
      JwtModule.register({
        secret : process.env.JWT_SECRET || jwtConfig.secret,
        signOptions: { expiresIn : jwtConfig.expiresIn }
      }), // JwtModule.register 끝
      TypeOrmModule.forFeature([UserRepository])
  ],  // imports[] 끝
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
