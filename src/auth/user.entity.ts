import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

/**
 * 회원 관련 Entity
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.10 최초 작성
 * @See ""
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@Entity('user')
@Unique(['username'])
export class User extends BaseEntity {

    @PrimaryGeneratedColumn() userId : number;

    @Column() username : string;                // 회원 계정(ID)
    @Column() password : string;                // 회원 비밀번호
    @Column() nickname : string;                // 회원 별명
    @Column() userEmail : string;               // 회원 Email
    @Column() userPhone : string;               // 회원 핸드폰 번호

} // class 끝