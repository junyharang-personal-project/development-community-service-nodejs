import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "./user.repository";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {User} from "./user.entity";

/**
 * 회원 관련 Service
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.10 회원 가입을 위한 Method 구현
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.1, 2022.04.10 회원 가입을 위한 Method 구현
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@Injectable()
export class AuthService {

    private logger = new Logger('auth.service.ts');

    constructor(@InjectRepository(UserRepository) private userRepository : UserRepository) { }   // 생성자 끝

    /**
     * 회원 가입 Method
     * @param authCredentialDTO - Cient에서 회원 가입을 위해 작성한 내용이 담긴 DTO
     * @see "https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"
     */

    async signUp(authCredentialDTO : AuthCredentialDto, ): Promise<User> {

        this.logger.log(`AuthService의 signUp(authCredentialDTO : AuthCredentialDto)가 호출 되었습니다!`);
        this.logger.log(`Controller 부터 전달된 DTO 내용 : ${authCredentialDTO}`);
        this.logger.log(`userRepository.signUp(authCredentialDTO)을 호출하여 회원 가입 기능을 수행 하겠습니다!`);

        return this.userRepository.signUp(authCredentialDTO);

    }   // signUp(authCredentialDTO : AuthCredentialDto) 끝
} // class 끝
