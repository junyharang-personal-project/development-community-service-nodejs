import {Body, Controller, Logger, Post, RequestMapping, UsePipes, ValidationPipe} from '@nestjs/common';
import {DevInqueryService} from "./dev-inquery.service";
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";

/**
 * Q&A 게시판 Controller
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.09 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.09 최초 작성
 * @See ""
 * @see <a href=""></a>
 */

@Controller('/api/support')
export class DevInqueryController {
   // private logger = new Logger('dev-inquery.controller.ts');
   //
   // constructor(private devInqueryService : DevInqueryService) {}   // 생성자 끝
   //
   // @UsePipes(ValidationPipe)  // 유효성 검사 기능을 위해 Pipe 선언
   // @Post() devInqryRegist(@Body() requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<Object>  {
   //
   //    this.logger.log("DevInqueryController의 devInqryRegist(@Body() requestRegistDevInqueryDTO: RequestRegistDevInqueryDto)가 호출 되었습니다!");
   //    this.logger.log(`Client에서 요청으로 들어온 값 : ${typeof requestRegistDevInqueryDTO}`)
   //
   //    return this.devInqueryService.devInquryInsert(requestRegistDevInqueryDTO);
   //
   // }  // devInqryRegist(@Body() requestRegistDevInqueryDTO: RequestRegistDevInqueryDto) 끝

}    // class 끝
