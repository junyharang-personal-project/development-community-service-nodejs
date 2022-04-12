/**
 * 페이징 처리를 위한 페이징 계산식 Class
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.03.09 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.03.09 최초 작성
 * @See ""
 * @see <a href=""></a>
 */
import {Logger} from "@nestjs/common";

export class BoardCriteria {

    private logger = new Logger('board.criteria.ts');

    private _page : number;          // 현제 Page 번호
    private _perPageNum : number;    // Page 당 보여줄 게시글 개수

    constructor() {

        this.logger.log(`BoardCriteria의 생성자가 호출 되었습니다! 현재 Page번호를 1로 초기화 하고, Page 당 보여줄 개수를 10으로 초기화 하겠습니다!`);

        this._page = 1;
        this._perPageNum = 10;
    }   // 생성자 끝

    public get page(): number {
        return this._page;
    }

    set page(value: number) {

        this.logger.log(`BoardCriteria의 Setter Page()가 호출 되었습니다! 현재 Page 번호가 0보다 작은지 검사하겠습니다!`);
        if (this._page <= 0) {

            this.logger.log(`검사 결과 현재 Page 번호가 0보다 작거나 같습니다. 1로 변경 하겠습니다!`);

            this._page = 1;
        }   // if (this._page <= 0) 끝

        this.logger.log(`검사 결과 현재 Page 번호가 0보다 작거나 같지 않습니다. 현재 Page 번호 그대로 Property 입력 하겠습니다!`);

        this._page = value;
    }

    get perPageNum(): number {

        this.logger.log(`BoardCriteria의 Getter perPageNum()가 호출 되었습니다! Page 당 보여줄 게시글의 개수를 계산 합니다.(perPageNum : getter, setter`);

        return this._perPageNum;
    }

    set perPageNum(value: number) {

        this.logger.log(`BoardCriteria의 Setter perPageNum()가 호출 되었습니다! Page 당 보여줄 게시글의 개수를 계산 합니다.(perPageNum : getter, setter`);
        this.logger.log(`최초 Page 당 보여줄 개수를 cnt 변수에 넣어주겠습니다.`);
        let cnt = this._perPageNum;

        this.logger.log(`Page 당 보여줄 개수가 cnt 변수와 같은지 확인하겠습니다!`);
        if (this._perPageNum != cnt) {
            this.logger.log(`Page 당 보여줄 개수가 cnt 변수와 같지 않습니다! Page 당 보여줄 개수를 그대로 Property 입력하겠습니다!`);
            this._perPageNum = value;
        }   // if (this._perPageNum != cnt) 끝

        this.logger.log(`Page 당 보여줄 개수가 cnt 변수와 같습니다! cnt 변수값을 Property 입력하겠습니다!`);
        this._perPageNum = cnt;
    }

    public getPageStart(): number {

        this.logger.log(`BoardCriteria의 getPageStart()가 호출 되었습니다! 특정 Page의 범위를 구하겠습니다! (현재 Page의 게시글 시작 번호)!`);
        // 0 ~ 10, 10 ~ 20

        return (this._page -1) * this._perPageNum;

    }   // getPageStart() 끝

}   // class 끝