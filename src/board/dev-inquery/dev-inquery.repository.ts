import {EntityRepository, getConnection, Repository} from "typeorm";
import {DevInqueryEntity} from "./dev-inquery.entity";
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";

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

    /**
     * 게시글 등록 서비스
     * @param requestRegistDevInqueryDTO - 게시글 등록을 위한 게시글 내용 등을 담은 DTO
     * @see "https://orkhan.gitbook.io/typeorm/docs/update-query-builder"
     */

    async saveDevInqeury(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<DevInqueryEntity> {

        const { inqrySj, inqryCn } = requestRegistDevInqueryDTO;

        // TODO - Login 및 인가 처리 완료 시 inqryUserSn : 4 수정 필요
        const devInqry = this.create({ inqryUserSn: 4, inqrySj, inqryCn });

        await this.save(devInqry);

        return devInqry;

        // await getConnection()
        //     .createQueryBuilder()
        //     .insert()
        //     .into(DevInqueryEntity, [
        //         'inqrySj', 'inqryCn', 'fileSn', 'secretAt',
        //     ])
        //     .values([{
        //         inqrySj: requestRegistDevInqueryDTO.inqrySj,
        //         inqryCn: requestRegistDevInqueryDTO.inqryCn,
        //         fileSn: requestRegistDevInqueryDTO.fileSn,
        //         secretAt : requestRegistDevInqueryDTO.secretAt,
        //     }]).execute();
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