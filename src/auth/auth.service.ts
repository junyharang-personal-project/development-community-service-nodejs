import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "./user.repository";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {User} from "./user.entity";
import {AuthDuplicateByUserIdDto} from "./dto/auth.duplicate-by-user-id.dto";
import {AuthDuplicateByUserNicknameDto} from "./dto/auth.duplicate-by-user-nickname.dto";
import {AuthDuplicateByUserEmailDto} from "./dto/auth.duplicate-by-user-email.dto";
import {AuthDuplicateByUserPhoneNumberDto} from "./dto/auth.duplicate-by-user-phone-number.dto";

/**
 * 회원 관련 Service
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.10 회원 가입을 위한 Method 구현
 *    주니하랑, 1.0.2, 2022.04.10 중복 확인을 위한 Method 구현(ID, 별명, Email, 핸드폰 번호)
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.2, 2022.04.10 중복 확인을 위한 Method 구현(ID, 별명, Email, 핸드폰 번호)
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@Injectable()
export class AuthService {

    private logger = new Logger('auth.service.ts');

    constructor(@InjectRepository(UserRepository) private userRepository : UserRepository) { }   // 생성자 끝

    /**
     * 회원 가입 전 등록된 ID 정보 인지 확인
     * @param authDuplicateByUserIdDto - 회원 가입 전 등록 되어 있는 ID 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserID(authDuplicateByUserIdDto: AuthDuplicateByUserIdDto) {

        this.logger.log(`AuthService의 duplicateUserID(authDuplicateByUserIdDto: AuthDuplicateByUserIdDto)가 호출 되었습니다!`);
        this.logger.log(`Controller 부터 전달된 DTO 내용 : ${authDuplicateByUserIdDto}`);
        this.logger.log(`userRepository.duplicateUserID(authDuplicateByUserIdDto)을 호출하여 ID 중복 확인 기능을 수행 하겠습니다!`);

        const username = authDuplicateByUserIdDto;

        return await this.userRepository.duplicateUserID(username);

    }   // duplicateUserID(authDuplicateByUserIdDto: AuthDuplicateByUserIdDto) 끝

    /**
     * 회원 가입 전 등록된 별명 정보 인지 확인
     * @param authDuplicateByUserNicknameDto - 회원 가입 전 등록 되어 있는 별명 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserNickName(authDuplicateByUserNicknameDto: AuthDuplicateByUserNicknameDto) {

        this.logger.log(`AuthService의 duplicateUserNickName(authDuplicateByUserNicknameDto: AuthDuplicateByUserNicknameDto)가 호출 되었습니다!`);
        this.logger.log(`Controller 부터 전달된 DTO 내용 : ${authDuplicateByUserNicknameDto}`);
        this.logger.log(`userRepository.userRepository.duplicateUserNickName(userNickName)을 호출하여 별명 중복 확인 기능을 수행 하겠습니다!`);

        const userNickName = authDuplicateByUserNicknameDto;

        return await this.userRepository.duplicateUserNickName(userNickName);

    }  // duplicateUserNickName(authDuplicateByUserNicknameDto: AuthDuplicateByUserNicknameDto) 끝

    /**
     * 회원 가입 전 등록된 Email 정보 인지 확인
     * @param authDuplicateByUserEmailDto - 회원 가입 전 등록 되어 있는 Email 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserEmail(authDuplicateByUserEmailDto: AuthDuplicateByUserEmailDto) {

        this.logger.log(`AuthService의 duplicateUserEmail(authDuplicateByUserEmailDto: AuthDuplicateByUserEmailDto)가 호출 되었습니다!`);
        this.logger.log(`Controller 부터 전달된 DTO 내용 : ${authDuplicateByUserEmailDto}`);
        this.logger.log(`userRepository.userRepository.duplicateUserNickName(userNickName)을 호출하여 Email 중복 확인 기능을 수행 하겠습니다!`);

        const userEmail = authDuplicateByUserEmailDto;

        return await this.userRepository.duplicateUserEmail(userEmail);

    }   // duplicateUserEmail(authDuplicateByUserEmailDto: AuthDuplicateByUserEmailDto) 끝

    /**
     * 회원 가입 전 등록된 핸드폰 번호 정보 인지 확인
     * @param authDuplicateByUserEmailDto - 회원 가입 전 등록 되어 있는 Email 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserPhoneNumber(authDuplicateByUserPhoneNumberDto: AuthDuplicateByUserPhoneNumberDto) {

        this.logger.log(`AuthService의 duplicateUserPhoneNumber(authDuplicateByUserPhoneNumberDto: AuthDuplicateByUserPhoneNumberDto)가 호출 되었습니다!`);
        this.logger.log(`Controller 부터 전달된 DTO 내용 : ${authDuplicateByUserPhoneNumberDto}`);
        this.logger.log(`userRepository.duplicateUserID(authDuplicateByUserIdDto)을 호출하여 ID 중복 확인 기능을 수행 하겠습니다!`);

        const userPhonNumber = authDuplicateByUserPhoneNumberDto;

        return await this.userRepository.duplicateUserPhoneNumber(userPhonNumber);

    }   // duplicateUserPhoneNumber(authDuplicateByUserPhoneNumberDto: AuthDuplicateByUserPhoneNumberDto) 끝

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
