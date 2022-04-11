import {Body, Controller, HttpStatus, Logger, Post, Req, Res, UseGuards, ValidationPipe} from '@nestjs/common';
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {AuthCredentialDto} from "./dto/join/auth-credential.dto";
import {User} from "./user.entity";
import {Response} from "express";
import {AuthDuplicateByUserIdDto} from "./dto/join/auth.duplicate-by-user-id.dto";
import {AuthDuplicateByUserNicknameDto} from "./dto/join/auth.duplicate-by-user-nickname.dto";
import {AuthDuplicateByUserEmailDto} from "./dto/join/auth.duplicate-by-user-email.dto";
import {AuthDuplicateByUserPhoneNumberDto} from "./dto/join/auth.duplicate-by-user-phone-number.dto";
import {AuthSigninRequestDto} from "./dto/login/auth.signin.request.dto";
import {AuthGuard} from "@nestjs/passport";
import {GetUser} from "../custom/user.object.mng.decorator";

/**
 * 회원 관련 Controller
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.10 회원 가입 기능 구현
 *    주니하랑, 1.0.2, 2022.04.10 중복 확인을 위한 Method 구현(ID, 별명, Email, 핸드폰 번호)
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.2, 2022.04.10 중복 확인을 위한 Method 구현(ID, 별명, Email, 핸드폰 번호)
 * @See ""
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@ApiTags('회원 인증 / 인가 API')
@Controller('api/user') export class AuthController {

    private logger = new Logger('auth.controller.ts');

    constructor(private authService : AuthService) { }   // 생성자 끝

    @ApiOperation({ summary : 'ID 중복 확인 API', description: 'ID 중복 확인 서비스 입니다.' })
    @ApiCreatedResponse({ description : '중복된 회원이 없습니다!'})

    @Post('/duplicate/userid') async duplicateUserID(@Body(ValidationPipe) authDuplicateByUserIdDto : AuthDuplicateByUserIdDto, @Res() res: Response) {

        this.logger.log("AuthController의 duplicateUserID(@Body(ValidationPipe) authDuplicateByUserIdDto : AuthDuplicateByUserIdDto)이 동작 하였습니다!");
        this.logger.log(`authService.duplicateUserID(authDuplicateByUserIdDto)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const userIdDto : { messageKo: string; statusCode: number; data: User; messageEn: string } = await this.authService.duplicateUserID(authDuplicateByUserIdDto);

        return res.status(HttpStatus.OK).json(userIdDto);

    }   // duplicateUserID(@Body(ValidationPipe) authDuplicateByUserIdDto : AuthDuplicateByUserIdDto) 끝

    @ApiOperation({ summary : '별명 중복 확인 API', description: '별명 중복 확인 서비스 입니다.' })
    @ApiCreatedResponse({ description : '중복된 회원이 없습니다!'})

    @Post('/duplicate/nickname') async duplicateUserNickName(@Body(ValidationPipe) authDuplicateByUserNicknameDto : AuthDuplicateByUserNicknameDto, @Res() res: Response) {

        this.logger.log("AuthController의 duplicateUserNickName(@Body(ValidationPipe) authDuplicateByUserNicknameDto : AuthDuplicateByUserNicknameDto)이 동작 하였습니다!");
        this.logger.log(`authService.duplicateUserNickName(duplicateByUserNicknameDto)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const UserNicknameDTO : { messageKo: string; statusCode: number; data: User; messageEn: string } = await this.authService.duplicateUserNickName(authDuplicateByUserNicknameDto);

        return res.status(HttpStatus.OK).json(UserNicknameDTO);

    }   // duplicateUserNickName(@Body(ValidationPipe) authDuplicateByUserNicknameDto : AuthDuplicateByUserNicknameDto) 끝

    @ApiOperation({ summary : 'Email 중복 확인 API', description: 'Email 중복 확인 서비스 입니다.' })
    @ApiCreatedResponse({ description : '중복된 회원이 없습니다!'})

    @Post('/duplicate/email') async duplicateUserEmail(@Body(ValidationPipe) authDuplicateByUserEmailDto : AuthDuplicateByUserEmailDto, @Res() res: Response) {

        this.logger.log("AuthController의 duplicateUserEmail(@Body(ValidationPipe) authDuplicateByUserEmailDto : AuthDuplicateByUserEmailDto)이 동작 하였습니다!");
        this.logger.log(`authService.duplicateUserNickName(duplicateByUserNicknameDto)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const UserEmailDTO : { messageKo: string; statusCode: number; data: User; messageEn: string } = await this.authService.duplicateUserEmail(authDuplicateByUserEmailDto);

        return res.status(HttpStatus.OK).json(UserEmailDTO);

    }   // duplicateUserEmail(@Body(ValidationPipe) authDuplicateByUserEmailDto : AuthDuplicateByUserEmailDto) 끝

    @ApiOperation({ summary : '핸드폰 번호 중복 확인 API', description: '핸드폰 번호 중복 확인 서비스 입니다.' })
    @ApiCreatedResponse({ description : '중복된 회원이 없습니다!'})

    @Post('/duplicate/phone-number') async duplicateUserPhoneNumber(@Body(ValidationPipe) authDuplicateByUserPhoneNumberDto : AuthDuplicateByUserPhoneNumberDto, @Res() res: Response) {

        this.logger.log("AuthController의 duplicateUserPhoneNumber(@Body(ValidationPipe) authDuplicateByUserPhoneNumberDto : AuthDuplicateByUserPhoneNumberDto)이 동작 하였습니다!");
        this.logger.log(`authService.duplicateUserNickName(duplicateByUserNicknameDto)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const UserPhoneNumberDTO : { messageKo: string; statusCode: number; data: User; messageEn: string } = await this.authService.duplicateUserPhoneNumber(authDuplicateByUserPhoneNumberDto);

        return res.status(HttpStatus.OK).json(UserPhoneNumberDTO);

    }   // duplicateUserPhoneNumber(@Body(ValidationPipe) authDuplicateByUserPhoneNumberDto : AuthDuplicateByUserPhoneNumberDto) 끝

    @ApiOperation({ summary : '회원 가입 API', description: '회원을 생성합니다.' })
    @ApiCreatedResponse({ description : '회원 가입 성공 하였습니다!'})

    @Post('/signup') async signUp(@Body(ValidationPipe) authcredentialDTO : AuthCredentialDto, @Res() res: Response) {

        this.logger.log("AuthController의 signUp(@Body(ValidationPipe) authcredentialDTO : AuthCredentialDto, @Res() res: Response)이 동작 하였습니다!");
        this.logger.log(`Client에서 전달 된 값 : ${authcredentialDTO}`);
        this.logger.log(`authService.signUp(authcredentialDTO)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const user : { messageKo: string; statusCode: number; data: User; messageEn: string } = await this.authService.signUp(authcredentialDTO);

        return res.status(HttpStatus.CREATED).json(user);

    }   // signUp(@Body() authcredentialDTO : AuthCredentialDto) 끝

    @ApiOperation({ summary : 'Login API', description: '회원 인증 처리를 합니다.' })
    @ApiCreatedResponse({ description : 'Login 성공 하였습니다!'})
    
    @Post('/signin')
    async signIn(@Body(ValidationPipe) authSignInRequestDTO: AuthSigninRequestDto, @Res() res: Response) {

        this.logger.log("AuthController의 signIn(@Body(ValidationPipe) authSignInRequestDTO : AuthSigninRequestDto, @Res() res: Response)이 동작 하였습니다!");
        this.logger.log(`Client에서 전달 된 값 : ${authSignInRequestDTO}`);
        this.logger.log(`authService.signUp(authcredentialDTO)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const loginUser: { messageKo: string; messageEn: string; accessToken: string; statusCode: number } = await this.authService.signIn(authSignInRequestDTO);

        return res.status(HttpStatus.OK).json(loginUser);

    }   // signIn(@Body(ValidationPipe) authSignInRequestDTO: AuthSigninRequestDto, @Res() res: Response) 끝

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: User) {
        // console.log('요청으로 들어온 값을 확인 합니다. 요청 값 : ', req);
        console.log('요청으로 들어온 값을 확인 합니다. 요청 값의 회원 정보 : ', user);
    }   // test(@GetUser() user: User) 끝

}  // class 끝