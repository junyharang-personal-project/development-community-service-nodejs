import {createParamDecorator, ExecutionContext, Logger} from "@nestjs/common";
import {User} from "../auth/user.entity";

/**
 * Client 인가 요청 시 Object 출력을 위한 Decorator
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.11 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.11 최초 작성
 * @See ""
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {

    let logger = new Logger('user.object.mng.decorator.js');

    logger.log(`Client의 인가 Request에 대한 Object 값 출력을 도와줄 GetUser가 호출 되었습니다!`);
    logger.log(`Client의 인가 Request에 대한 내용 Object 값을 상수형 변수 request에 담겠습니다!`);
    const request = ctx.switchToHttp().getRequest();

    logger.log(`Client의 인가 Request에 대한 내용 Object 값 중 user에 대한 내용만 반환하겠습니다!`);
    return request.user;

});