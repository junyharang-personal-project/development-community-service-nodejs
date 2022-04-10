import {Injectable, Logger} from '@nestjs/common';
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {DevInqueryRepository} from "./dev-inquery.repository";
import {DevInqueryEntity} from "./dev-inquery.entity";
import e from "express";

/**
 * Q&A 게시판 Service
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

@Injectable()
export class DevInqueryService {
    //
    // private logger = new Logger('dev-inquery.service.ts');
    //
    // // @InjectRepository = 이 Service에서 BoardRepository를 이용한다고 선언.
    // // 접근제한자가 입력되면 boardRepository가 자동으로 프로퍼티(Member 변수)가 되어 이용할 수 있다.
    //
    // constructor(@InjectRepository(DevInqueryRepository) private devInquryRepository: DevInqueryRepository,) {
    // }   // 생성자 끝
    //
    // async devInquryInsert(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<Object> {
    //
    //     this.logger.log("DevInqueryService의 devInquryInsert(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto)가 호출 되었습니다!");
    //
    //
    //     try {
    //
    //         this.logger.log("Client의 요청이 글 등록인지 수정인지 검사 하겠습니다!");
    //         if (requestRegistDevInqueryDTO.inqrySn === null || requestRegistDevInqueryDTO.inqrySn === undefined || requestRegistDevInqueryDTO.inqrySn === "") {
    //
    //             this.logger.log(`Client의 요청이 글 등록으로 확인 되었습니다! ${requestRegistDevInqueryDTO.inqrySn}`);
    //
    //             if (requestRegistDevInqueryDTO.secretAt === "false") {
    //
    //                 this.logger.log(`client의 요청이 공개글로 확인 되었습니다! ${requestRegistDevInqueryDTO.secretAt}`);
    //
    //                 return this.devInquryRepository.createPublicDevInquery(requestRegistDevInqueryDTO);
    //
    //                 } else {
    //
    //             }   // if (requestRegistDevInqueryDTO.secretAt === "false") 끝
    //
    //
    //         }   // if (requestRegistDevInqueryDTO.inqrySn !== null || requestRegistDevInqueryDTO.inqrySn !== undefined || requestRegistDevInqueryDTO.inqrySn !== "") 끝
    //
    //     } catch (Exception e) {
    //
    //     }
    //
    //
    // }
}
