import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

/**
 * 회원 가입 요청에 대한 DTO
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.10 최초 작성
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

export class AuthCredentialDto{

    @ApiProperty({ description : '회원 계정(ID)'})
    @IsNotEmpty() @IsString() username : string;

    @ApiProperty({ description : '회원 비밀번호'})
    @IsNotEmpty() @IsString() password : string;

    @ApiProperty({ description : '회원 별명'})
    @IsNotEmpty() @IsString() nickname : string;

    @ApiProperty({ description : '회원 Email'})
    @IsNotEmpty() @IsEmail() userEmail : string;

    @ApiProperty({ description : '회원 핸드폰 번호'})
    @IsNotEmpty() @IsString() userPhone : string;

}   // class 끝