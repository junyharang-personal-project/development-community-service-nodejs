import {EntityRepository, getConnection, Repository} from "typeorm";
import {DevInqueryEntity} from "./dev-inquery.entity";
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";
import {AnswerAtStatus} from "./dev-inquery.answer.status.enum";

/**
 * Q&A 게시판 Repository
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.14 등록 / 수정 Logic 수정
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.1, 2022.04.14 등록 / 수정 Logic 수정
 * @See ""
 * @see <a href=""></a>
 */

@EntityRepository(DevInqueryEntity)
export class DevInqueryRepository extends Repository<DevInqueryEntity> {

    /**
     * 게시글 등록 서비스
     * @param requestRegistDevInqueryDTO - 게시글 등록을 위한 게시글 내용 등을 담은 DTO
     * @see "https://orkhan.gitbook.io/typeorm/docs/update-query-builder"
     */

    async saveDevInqeury(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<DevInqueryEntity> {

        const { inqrySj, inqryCn, secretAt} = requestRegistDevInqueryDTO;

        // TODO - Login 및 인가 처리 완료 시 inqryUserSn : 4 수정 필요
        const devInqry = this.create({ inqryUserSn: 4, inqrySj, inqryCn, secretAt, answerAt: AnswerAtStatus.NOTANSWER });

        await this.save(devInqry);

        return devInqry;

    }   // saveDevInqeury(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto) 끝

    /**
     * 게시글 수정 서비스
     * @param requestRegistDevInqueryDTO - 게시글 수정을 위한 게시글 내용 등을 담은 DTO
     * @see "https://orkhan.gitbook.io/typeorm/docs/update-query-builder"
     */

    async updateDevInqeury(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto) {
        await getConnection()
            .createQueryBuilder()
            .update(DevInqueryEntity)
            .set({
                inqrySj : requestRegistDevInqueryDTO.inqrySj,
                inqryCn : requestRegistDevInqueryDTO.inqryCn,
            })
            .where("inqrySn = :inqrySn", {inqrySn : requestRegistDevInqueryDTO.inqrySn})
            .execute();
    }   // updatedevInqeury(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto) 끝

}   // class 끝