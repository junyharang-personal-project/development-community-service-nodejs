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

export class AuthDuplicateByUserNicknameDto {

    @ApiProperty({ description : '회원 별명'})
    @IsNotEmpty() @IsString() @MinLength(1) @MaxLength(30)
    @Matches(/^[0-9a-zA-Zㄱ-ㅎㅏ-ㅣ-가-힣]+$/, {
        message : '별명(NickName)은 숫자, 영(소, 대)문자, 한글만 입력 가능 합니다!'
    }) nickname : string;

}   // class 끝