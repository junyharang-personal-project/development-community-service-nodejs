import {Injectable, InternalServerErrorException, Logger} from '@nestjs/common';
import {RequestRegistDevInqueryDto} from "./dto/request.regist-dev-inquery.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {DevInqueryRepository} from "./dev-inquery.repository";
import {CustomStringUtil} from "../../util/custom.string.util";

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

    private logger = new Logger('dev-inquery.service.ts');

    // @InjectRepository = 이 Service에서 BoardRepository를 이용한다고 선언.
    // 접근 제한자가 입력되면 boardRepository가 자동으로 프로퍼티(Member 변수)가 되어 이용할 수 있다.

    constructor(@InjectRepository(DevInqueryRepository) private devInquryRepository: DevInqueryRepository,) {}   // 생성자 끝

    /**
     * 게시글 등록 / 수정 서비스
     * @param devInquryVO - 게시글 등록을 위한 게시글 내용 등을 담은 DTO
     * @return Object - 서버 처리 여부에 해당 하는 Status Code 및 Data 반환을 위한 객체
     * @see ""
     */

    async devInquryInsert(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto): Promise<Object> {

        this.logger.log("DevInqueryService의 devInquryInsert(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto)가 호출 되었습니다!");

        const result = {
            code : 0,
            resultSn : 0,
        };

        try {

            this.logger.log("Client의 요청이 글 등록인지 수정인지 검사 하겠습니다!");

                this.logger.log(`Client의 요청이 글 등록으로 확인 되었습니다!`);
                console.log("requestRegistDevInqueryDTO 값 : ", requestRegistDevInqueryDTO);

                if (requestRegistDevInqueryDTO.secretAt === 'false') {

                    this.logger.log(`client의 요청 등록 글이 비밀글이 아닙니다! 공개글로 등록 합니다! ${requestRegistDevInqueryDTO.secretAt}`);

                    requestRegistDevInqueryDTO.secretAt = 'N';

                    } else {

                    this.logger.log(`client의 요청 등록 글이 비밀글 입니다! 비밀글로 등록 합니다! ${requestRegistDevInqueryDTO.secretAt}`);

                    requestRegistDevInqueryDTO.secretAt = 'Y';

                }   // if (requestRegistDevInqueryDTO.secretAt === "false") 끝

                this.logger.log(`client의 요청이 글 등록인지 수정인지 판단하기 위해 게시글 일련번호가 있는지 확인 하겠습니다! ${requestRegistDevInqueryDTO.inqrySn}`);
                // TODO : 등록 / 수정 Logic 분리 필요

                if (requestRegistDevInqueryDTO.inqrySn == null || requestRegistDevInqueryDTO.inqrySn == 0) {

                    const {inqrySj, inqryCn, inquryUserSn} = requestRegistDevInqueryDTO;

                    this.logger.log(`등록 요청 게시글 일련번호가 비어 있습니다! 게시글 등록을 수행 합니다! ${requestRegistDevInqueryDTO.inqrySn}`);

                    // TODO - 회원가입 및 로그인 로직 구현 뒤 아래 하드코딩 수정 필요
                    requestRegistDevInqueryDTO.inquryUserSn = 4;

                    this.logger.log(`등록 요청 게시글 일련번호가 비어 있습니다! 게시글 등록을 수행 합니다! ${requestRegistDevInqueryDTO.inqrySn}`);
                    this.logger.log(`devInquryRepository.save(requestRegistDevInqueryDTO)를 호출하여 Inseart Query를 DB에 날리겠습니다!`);

                    const devInqry = await this.devInquryRepository.saveDevInqeury(requestRegistDevInqueryDTO);

                    // const devInqry = this.devInquryRepository.create({inqrySj, inqryCn, inquryUserSn});
                    //
                    // await this.devInquryRepository.save(requestRegistDevInqueryDTO);

                    // this.logger.log(`DB 저장 뒤 반환 값 출력 : ${inqrySn}`);
                    this.logger.log(`Client Reponse를 위한 result Object에 DB 응답값 중 게시글 고유번호를 넣겠습니다!`);

                    result.resultSn = devInqry.inqrySn;

                }  else {

                    this.logger.log(`등록 요청 시글 일련번호가 존재 합니다! 게시글 수정을 수행 합니다! ${requestRegistDevInqueryDTO.inqrySn}`);
                    this.logger.log(`devInquryRepository.updatedevInqeury(requestRegistDevInqueryDTO)를 호출하여 DB에 수정 로직을 수행 하겠습니다!`);
                    await this.devInquryRepository.updateDevInqeury(requestRegistDevInqueryDTO);

                    this.logger.log(`Client Reponse를 위한 result Object에 요청으로 들어온 게시글 일련번호를 넣겠습니다!`);
                    result.resultSn = requestRegistDevInqueryDTO.inqrySn;

                }// if (CustomStringUtil.getString(requestRegistDevInqueryDTO.inqrySn) == "" || requestRegistDevInqueryDTO.inqrySn == 0) 끝

                this.logger.log(`Logic이 완료 되었으므로, 200 Code를 result에 넣겠습니다!`);
                result.code = 200;

        } catch (Exception) {

            this.logger.log(`게시글 등록 / 수정에 문제가 발생(권한 문제)하여 catch문이 실행 되었습니다!`);

            throw new InternalServerErrorException(`글 등록 / 수정 처리 중 문제가 발생하였습니다!`);

        }   // try-catch 끝

        return result;
    } // devInquryInsert(requestRegistDevInqueryDTO: RequestRegistDevInqueryDto) 끝
} // class 끝
