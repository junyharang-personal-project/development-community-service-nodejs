import {EntityRepository, getConnection, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {ConflictException, InternalServerErrorException, Logger} from "@nestjs/common";
import {AuthDuplicateByUserIdDto} from "./dto/auth.duplicate-by-user-id.dto";
import {options} from "tsconfig-paths/lib/options";
import {AuthDuplicateByUserNicknameDto} from "./dto/auth.duplicate-by-user-nickname.dto";
import {AuthDuplicateByUserEmailDto} from "./dto/auth.duplicate-by-user-email.dto";
import {AuthDuplicateByUserPhoneNumberDto} from "./dto/auth.duplicate-by-user-phone-number.dto";

/**
 * 회원 관련 Repository
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

@EntityRepository(User) export class UserRepository extends Repository<User> {

    private logger = new Logger('user.repository.ts');

    /**
     * 회원 가입 전 등록된 ID 정보 인지 확인
     * @param authDuplicateByUserIdDto - 회원 가입 전 등록 되어 있는 ID 인지 확인을 위한 이용자 입력 정보 DTO
     * @return User - 해당 회원의 정보 반환
     * @see ""
     */

    async duplicateUserID(authDuplicateByUserIdDto: AuthDuplicateByUserIdDto) {

        this.logger.log("UserRepository의 duplicateUserID(authDuplicateByUserIdDto: AuthDuplicateByUserIdDto)이 호출 되었습니다!");
        this.logger.log(`Service로 부터 전달된 DTO 내용 : ${authDuplicateByUserIdDto.toString()}`);
        this.logger.log(`DB에 Select()문을 통해 해당 ID가 존재하는지 검사 하겠습니다!`);

        const { username } = authDuplicateByUserIdDto;

        this.logger.log(`username : ${username}`)

        const findByUserID = await this.findOne({
            where: { username : username}
        });

        this.logger.log(`DB에서 조회된 값 : ${findByUserID}`);

        if (findByUserID) {

            this.logger.log("이미 존재하는 ID 입니다! 409 Code와 함께 \"이미 존재하는 값 입니다!\" 반환 하겠습니다!")

            return {
                code: "409",
                messageKo: "이미 존재하는 값 입니다!",
                messageEn: "Conflict",
            };

        } else {

            this.logger.log("중복 되는 값이 없습니다! 200 Code와 함께 \"사용 가능!\" 반환 하겠습니다!");

            return {
                code: "200",
                messageKo: "사용 가능!",
                messageEn: "OK",
                data: findByUserID,
            };
        } // if (findByUserID === null || findByUserID === undefined) 끝
    }   // duplicateUserID(authDuplicateByUserIdDto: AuthDuplicateByUserIdDto) 끝

    /**
     * 회원 가입 전 등록된 별명 정보 인지 확인
     * @param userNickName - 회원 가입 전 등록 되어 있는 별명 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserNickName(userNickName: AuthDuplicateByUserNicknameDto) {

        this.logger.log("UserRepository의 duplicateUserNickName(userNickName: AuthDuplicateByUserNicknameDto)이 호출 되었습니다!");
        this.logger.log(`DB에 Select()문을 통해 해당 별명이 존재하는지 검사 하겠습니다!`);

        const { nickname } = userNickName;

        this.logger.log(`nickname : ${nickname}`)

        const findByUserNickName = await this.findOne({
            where: { nickname : nickname}
        });

        this.logger.log(`DB에서 조회된 값 : ${findByUserNickName}`);

        if (findByUserNickName) {

            this.logger.log("이미 존재하는 별명 입니다! 409 Code와 함께 \"이미 존재하는 값 입니다!\" 반환 하겠습니다!")

            return {
                code: "409",
                messageKo: "이미 존재하는 값 입니다!",
                messageEn: "Conflict",
            };

        } else {

            this.logger.log("중복 되는 값이 없습니다! 200 Code와 함께 \"사용 가능!\" 반환 하겠습니다!");

            return {
                code: "200",
                messageKo: "사용 가능!",
                messageEn: "OK",
                data: findByUserNickName,
            };
        } // if (findByUserNickName) 끝
    }   // duplicateUserNickName(userNickName: AuthDuplicateByUserNicknameDto) 끝

    /**
     * 회원 가입 전 등록된 Email 정보 인지 확인
     * @param authDuplicateByUserEmailDto - 회원 가입 전 등록 되어 있는 Email 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserEmail(authDuplicateByUserEmailDto: AuthDuplicateByUserEmailDto) {

        this.logger.log("UserRepository의 duplicateUserEmail(userEmail: AuthDuplicateByUserEmailDto)이 호출 되었습니다!");
        this.logger.log(`DB에 Select()문을 통해 해당 Email이 존재하는지 검사 하겠습니다!`);

        const { userEmail } = authDuplicateByUserEmailDto;

        this.logger.log(`userEmail : ${userEmail}`)

        const findByUserEmail = await this.findOne({
            where: { userEmail : userEmail}
        });

        this.logger.log(`DB에서 조회된 값 : ${findByUserEmail}`);

        if (findByUserEmail) {

            this.logger.log("이미 존재하는 별명 입니다! 409 Code와 함께 \"이미 존재하는 값 입니다!\" 반환 하겠습니다!")

            return {
                code: "409",
                messageKo: "이미 존재하는 값 입니다!",
                messageEn: "Conflict",
            };

        } else {

            this.logger.log("중복 되는 값이 없습니다! 200 Code와 함께 \"사용 가능!\" 반환 하겠습니다!");

            return {
                code: "200",
                messageKo: "사용 가능!",
                messageEn: "OK",
                data: findByUserEmail,
            };
        } // if (findByUserEmail) 끝
    }   // duplicateUserEmail(userEmail: AuthDuplicateByUserEmailDto) 끝

    /**
     * 회원 가입 전 등록된 핸드폰 번호 정보 인지 확인
     * @param userPhonNumber - 회원 가입 전 등록 되어 있는 Email 인지 확인을 위한 이용자 입력 정보 DTO
     * @return Object - 검색 결과에 대한 HTTP Code 등에 정보
     * @see ""
     */

    async duplicateUserPhoneNumber(userPhonNumber: AuthDuplicateByUserPhoneNumberDto) {

        this.logger.log("duplicateUserPhoneNumber(userPhonNumber: AuthDuplicateByUserPhoneNumberDto)이 호출 되었습니다!");
        this.logger.log(`DB에 Select()문을 통해 해당 Email이 존재하는지 검사 하겠습니다!`);

        const { userPhone } = userPhonNumber;

        this.logger.log(`userEmail : ${userPhone}`)

        const findByUserPhoneNumber = await this.findOne({
            where: { userPhone : userPhone}
        });

        this.logger.log(`DB에서 조회된 값 : ${findByUserPhoneNumber}`);

        if (findByUserPhoneNumber) {

            this.logger.log("이미 존재하는 핸드폰 번호 입니다! 409 Code와 함께 \"이미 존재하는 값 입니다!\" 반환 하겠습니다!")

            return {
                code: "409",
                messageKo: "이미 존재하는 값 입니다!",
                messageEn: "Conflict",
            };

        } else {

            this.logger.log("중복 되는 값이 없습니다! 200 Code와 함께 \"사용 가능!\" 반환 하겠습니다!");

            return {
                code: "200",
                messageKo: "사용 가능!",
                messageEn: "OK",
                data: findByUserPhoneNumber,
            };
        } // if (findByUserPhoneNumber) 끝
    }   // duplicateUserPhoneNumber(userPhonNumber: AuthDuplicateByUserPhoneNumberDto) 끝

    /**
     * 회원 가입 Method
     * @param authCredentialDTO - Cient에서 회원 가입을 위해 작성한 내용이 담긴 DTO
     * @see "https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"
     */

    async signUp(authCredentialDTO : AuthCredentialDto): Promise<User> {

        this.logger.log("UserRepository의 signUp(authCredentialDTO : AuthCredentialDto)이 호출 되었습니다!");
        this.logger.log(`Service로 부터 전달된 DTO 내용 : ${authCredentialDTO.toString()}`);
        this.logger.log("요청을 담은 DTO에 각 내용을 각각 상수형 변수에 담겠습니다!");
        const { username, password, nickname, userEmail, userPhone } = authCredentialDTO;

        this.logger.log("상수형 변수 user에 각각의 상수형 변수를 담아 주겠습니다!");
        const user = this.create({ username, password, nickname, userEmail, userPhone });

        this.logger.log("save()를 호출하여 user객체를 전달하고, 이를 통해 Data Base에 Insert Query를 날리겠습니다!");

        try {

            this.logger.log("정상 동작 완료 하였습니다!");
            return await this.save(user);

        } catch (error) {

            this.logger.log("회원 가입을 처리하는 도 중 문제가 발생하였습니다");
            this.logger.error(`Error 내용 : ${error}`);

            if (error.code === '23505') {
                throw new ConflictException('이미 가입된 ID 입니다!');
            }

            throw new InternalServerErrorException('Server에 문제가 발생하였습니다! 관리자에게 문의해 주세요!');

        } // try - catch 끝
    }   // signUp(authCredentialDTO : AuthCredentialDto) 끝
}   // class 끝