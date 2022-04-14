import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {AnswerAtStatus} from "./dev-inquery.answer.status.enum";

/**
 * Q&A 게시판 Model(Entity)
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

@Entity() export class DevInqueryEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    // @PrimaryColumn('INQRY_SN')
    inqrySn: number;      // 게시글 일련번호

    @Column() inqryUserSn : number;                 // 문의 작성자 일련번호
    @Column() fileSn : number;                       // 첨부 파일 일련번호

    @Column() inqrySj : string;                      // 문의 게시글 제목
    @Column() inqryCn : string;                      // 문의 게시글 내용

    @Column() secretAt : string;                    // 비밀글 여부

    @Column() answerAt : AnswerAtStatus;             // 답변 여부
    @Column() answerCn : string;                     // 답변 내용
    @Column() answerDt : string;                     // 답변 일시
    @Column() answerUserSn : number;                 // 답변 작성자 일련 번호
    @Column() @CreateDateColumn() creatDt: string;                       // 작성 일시
    @Column() @UpdateDateColumn() updtDt: string;                        // 수정 일시


}   // class 끝