import {IsEmail, IsNotEmpty, IsString, Matches, Max, MaxLength, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

/**
 * 회원 가입 요청에 대한 DTO
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.10 유효성 검사를 위한 Decorator 추가
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 1.0.1, 2022.04.10 유효성 검사를 위한 Decorator 추가
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

export class AuthCredentialDto{

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

    @ApiProperty({ description : '회원 별명'})
    @IsNotEmpty() @IsString() @MinLength(1) @MaxLength(30)
    @Matches(/^[0-9a-zA-Zㄱ-ㅎㅏ-ㅣ-가-힣]+$/, {
        message : '별명(NickName)은 숫자, 영(소, 대)문자, 한글만 입력 가능 합니다!'
    }) nickname : string;

    @ApiProperty({ description : '회원 Email'})
    @IsNotEmpty() @IsEmail() @MinLength(1) @MaxLength(30)
    @Matches(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.([a-z]+)*$/, {
        message : 'Email은 Email 형식에 맞게 입력 해 주세요!'
    }) userEmail : string;

    @ApiProperty({ description : '회원 핸드폰 번호'})
    @IsNotEmpty() @IsString() @MinLength(10) @MaxLength(11)
    @Matches(/^01(?:0|1|[6-9])?(\d{3}|\d{4})?(\d{4})$/, {
        message : '핸드폰 번호는 번호만 입력 가능하고, 형식에 맞게 입력 해 주세요!'
    }) userPhone : string;



}   // class 끝