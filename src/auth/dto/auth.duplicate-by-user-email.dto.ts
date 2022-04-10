import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, Matches, MaxLength, MinLength} from "class-validator";

/**
 * 회원 가입 전 Email 주소 중복 확인 및 입력값 유효성 검사 위해 사용될 DTO
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.10 최초 작성
 * @See ""
 * @see <a href=""></a>
 */

export class AuthDuplicateByUserEmailDto {

    @ApiProperty({ description : '회원 Email'})
    @IsNotEmpty() @IsEmail() @MinLength(1) @MaxLength(30)
    @Matches(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.([a-z]+)*$/, {
        message : 'Email은 Email 형식에 맞게 입력 해 주세요!'
    }) userEmail : string;

}   // class 끝