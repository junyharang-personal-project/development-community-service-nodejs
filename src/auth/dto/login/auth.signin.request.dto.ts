import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";

/**
 * 로그인 요청에 대한 DTO
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.11 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.11 최초 작성
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

export class AuthSigninRequestDto{

    @ApiProperty({ description : '회원 계정(ID)'})
    @IsNotEmpty() @IsString() @MinLength(4) @MaxLength(30)
    @Matches(/^[0-9a-zA-Z]+$/, {
        message : 'ID는 숫자, 영(소, 대)문자만 입력할 수 있습니다!'
    }) username : string;

    @ApiProperty({ description : '회원 비밀번호'})
    @IsNotEmpty() @IsString()
    @Matches(/^[A-Za-z\d$@!%*?&]{8,15}$/, {
        message : 'Password(비밀번호)는 영(소, 대)문자, 특수문자($@!%*?&)만 입력이 가능하고, 8 ~ 15글자 이내에 입력 해 주세요!'
    }) password : string;

}   // class 끝