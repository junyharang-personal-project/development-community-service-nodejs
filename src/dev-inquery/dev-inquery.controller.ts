import { Controller } from '@nestjs/common';
import {DevInqueryService} from "./dev-inquery.service";

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

@Controller('dev-inquery')
export class DevInqueryController {
   constructor(private devInqueryService : DevInqueryService) {}   // 생성자 끝
}    // class 끝
