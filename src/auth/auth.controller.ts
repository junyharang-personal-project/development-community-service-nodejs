import {Body, Controller, HttpStatus, Logger, Post, Res} from '@nestjs/common';
import {ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {User} from "./user.entity";
import express, {Request, Response} from "express";

/**
 * 회원 관련 Controller
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.10 회원 가입 기능 구현
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.1, 2022.04.10 회원 가입 기능 구현
 * @See ""
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@ApiTags('회원 인증 / 인가 API')
@Controller('api/user') export class AuthController {

    private logger = new Logger('auth.controller.ts');

    constructor(private authService : AuthService) { }   // 생성자 끝

    @ApiOperation({ summary : '회원 가입 API', description: '회원을 생성합니다.' })
    @ApiCreatedResponse({ description : '회원 가입 성공 하였습니다!'})

    @Post('/signup') async signUp(@Body() authcredentialDTO : AuthCredentialDto, @Res() res: Response) {

        this.logger.log("AuthController의 signUp(@Body() authcredentialDTO : AuthCredentialDto)이 동작 하였습니다!");
        this.logger.log(`Client에서 전달 된 값 : ${authcredentialDTO}`);
        this.logger.log(`authService.signUp(authcredentialDTO)를 호출하여 비즈니스 로직을 처리하겠습니다!`);

        const user : User = await this.authService.signUp(authcredentialDTO);

        return res.status(HttpStatus.CREATED).json(user);

    }   // signUp(@Body() authcredentialDTO : AuthCredentialDto) 끝

}  // class 끝