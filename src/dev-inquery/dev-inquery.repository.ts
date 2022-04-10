import {EntityRepository, Repository} from "typeorm";
import {DevInqueryEntity} from "./dev-inquery.entity";
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";
import {SecretAtStatus} from "./dev-inquery.secretat.status.enum";
import {Logger} from "@nestjs/common";

/**
 * Q&A 게시판 Repository
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

@EntityRepository(DevInqueryEntity)
export class DevInqueryRepository extends Repository<DevInqueryEntity> {

    // private logger = new Logger('dev-inquery.repository.ts');
    //
    // async createPublicDevInquery(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<DevInqueryEntity> {
    //     this.logger.log("DevInqueryRepository의 createPublicDevInquery(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto)가 동작하였습니다!")
    //     this.logger.log("요청으로 들어온 DTO에서 각 내용을 Control할 수 있게 각각의 상수형 변수를 만들겠습니다!");
    //     const { inqrySj, inqryCn } = requestRegistDevInqueryDTO;
    //
    //     this.logger.log("devInquery Entity에 create()를 이용하여 DTO에 입력된 값을 넣어주겠습니다!");
    //     const devInquery = this.create({
    //        inqrySj,
    //        inqryCn,
    //        secretAt : SecretAtStatus.PUBLIC,
    //     });
    //
    //     this.logger.log("Data Base에 Inseart문을 통해 해당 내용 저장 하겠습니다!");
    //     await this.save(devInquery);
    //
    //     this.logger.log("저장된 내용을 반환 하겠습니다!");
    //     return devInquery;
    // }   //
}   // class 끝