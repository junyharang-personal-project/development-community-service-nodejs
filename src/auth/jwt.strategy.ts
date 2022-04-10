import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "./user.repository";
import * as config from 'config';
import {User} from "./user.entity";

/**
 * JWT 관련 전략 설정
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.10 최초 작성
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@Injectable() export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectRepository(UserRepository) private userRepository : UserRepository) {
        super({
            seceretOrKey : process.env.JWT_SECRET || config.get('jwt.secret'),
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    } // 생성자 끝

    async validate(payload) {

        const { username } = payload;

        const user : User = await this.userRepository.findOne({ username });

        if (!User) {
            throw new UnauthorizedException();
        }

        return user;
    }
}