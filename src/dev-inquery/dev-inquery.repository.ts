import {EntityRepository, Repository} from "typeorm";
import {DevInqueryEntity} from "./dev-inquery.entity";

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

}   // class 끝