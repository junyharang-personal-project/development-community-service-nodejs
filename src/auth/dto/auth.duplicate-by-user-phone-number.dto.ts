import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";

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

export class AuthDuplicateByUserPhoneNumberDto {

    @ApiProperty({ description : '회원 핸드폰 번호'})
    @IsNotEmpty() @IsString() @MinLength(10) @MaxLength(11)
    @Matches(/^01(?:0|1|[6-9])?(\d{3}|\d{4})?(\d{4})$/, {
        message : '핸드폰 번호는 번호만 입력 가능하고, 형식에 맞게 입력 해 주세요!'
    }) userPhone : string;

}   // class 끝