import {Body, Controller, Logger, Post, RequestMapping, UsePipes, ValidationPipe} from '@nestjs/common';
import {DevInqueryService} from "./dev-inquery.service";
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";

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

@ApiTags('Q&A 게시판 API')
@Controller('api/support') export class DevInqueryController {
   private logger = new Logger('dev-inquery.controller.ts');

   constructor(private devInqueryService : DevInqueryService) {}   // 생성자 끝

    /**
     * 게시글 등록 / 수정 서비스
     * @param requestRegistDevInqueryDTO - 게시글 등록을 위한 게시글 내용 등을 담은 DTO
     * @return Object - 서버 처리 여부에 해당 하는 Status Code 및 Data 반환을 위한 객체
     * @see ""
     */

   @ApiOperation({ summary : 'Q&A 게시판 글 등록', description: '게시글 등록 서비스 입니다.' })
   @ApiCreatedResponse({ description : '정상 등록 되었습니다!'})

   @UsePipes(ValidationPipe)  // 유효성 검사 기능을 위해 Pipe 선언
   @Post('devInqury') devInqryRegist(@Body() requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<Object>  {

      this.logger.log(`DevInqueryController의 devInqryRegist(@Body() requestRegistDevInqueryDTO: RequestRegistDevInqueryDto)가 호출 되었습니다!`);
      this.logger.log(`Client에서 요청으로 들어온 값 : ${typeof requestRegistDevInqueryDTO}`)

      return this.devInqueryService.devInquryInsert(requestRegistDevInqueryDTO);

   }  // devInqryRegist(@Body() requestRegistDevInqueryDTO: RequestRegistDevInqueryDto) 끝

}    // class 끝
