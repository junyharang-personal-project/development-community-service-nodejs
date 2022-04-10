import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {SecretAtStatus} from "./dev-inquery.secretat.status.enum";

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

    @PrimaryGeneratedColumn() inqrySn: number;

    @Column() inqryCn: string;
    @Column() secretAt: SecretAtStatus;     // 비밀글 여부
    @Column() answerAt: string;
    @Column() answerCn: string;
    @Column() answerDt: string;
    @Column() creatDt: string;
    @Column() updtDt: string;
    @Column() inqrySj: string;

}   // class 끝