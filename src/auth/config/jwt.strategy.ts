import {Injectable, Logger, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "../user.repository";
import * as config from 'config';
import {User} from "../user.entity";

const jwtConfig = config.get('jwt');

/**
 * JWT 검증 및 인가 처리 담당
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.11 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.11 최초 작성
 * @See "https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"
 */

@Injectable() export class JwtStrategy extends PassportStrategy(Strategy) {

    private logger = new Logger('jwt.strategy.ts');

    constructor(@InjectRepository(UserRepository) private userRepository : UserRepository) {

        super({ secretOrKey : jwtConfig.secret, jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() });

        this.logger.log(`PassportStrategy(Strategy)를 상속한 JwtStrategy의 생성자(constructor(@InjectRepository(UserRepository) private userRepository : UserRepository))가 호출 되었습니다!`);
    }   // 생성자 끝

    /**
     * JWT 유효성 검사 Method
     * @param payload - JWT `Payload` 객체
     * @see "https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"
     */

    async validate(payload) {

        this.logger.log(`PassportStrategy(Strategy)를 상속한 JwtStrategy의 validate(payload)가 호출 되었습니다! 매개변수로 들어온 값 : ${payload}`);
        this.logger.log(`Client에서 전달된 JWT 'Payload'에서 회원 ID 값을 추출하기 위한 상수형 변수를 선언 합니다.`);
        const { username } = payload;

        this.logger.log(`userRepository.findOne()으로 회원 ID를 전달하여 존재하는 회원인지 Data Base을 이용하여 확인 하겠습니다!`);
        const user : User = await this.userRepository.findOne({
        select: ["userId", "username", "userEmail"],
        where: {username : username }
    });

        this.logger.log(`Data Base에서 조회된 값이 존재하는지 검증하겠습니다!`);
        if (!user) {

            this.logger.log(`존재하지 않는 회원 입니다! 401 Error를 반환하겠습니다!`);
            throw new UnauthorizedException('존재하지 않는 회원 입니다!');

        }   // if (!user) 끝

        this.logger.log(`Data Base에서 조회된 값이 존재합니다! 해당 회원 정보를 반환하겠습니다!`);
        return user;

    }   // validate(payload) 끝

}   // class 끝