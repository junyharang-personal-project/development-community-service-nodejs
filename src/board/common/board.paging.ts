/**
 * 게시판 Paging 처리를 위한 Value Object
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
import {BoardCriteria} from "./board.criteria";

export class BoardPaging extends BoardCriteria {

    private _logger = new Logger('board.paging.ts');

    private _totalCount : number;        // 게시판 전체 Data 개수
    private _displayPageNum : 10;        // 게시판 화면에서 한번에 보여질 게시물 개

    private _startPage : number;         //  화면의 시작 번호
    private _endPage : number;           //  화면의 끝 번호
    private _prev : boolean;             //  Paging 이전 Button 활성화 여부
    private _next : boolean;             // Paging 다음 Button 활성화 여부
    private _pageStart : number;
    private _tempEndPage : number;       // 임시 Page 번호 저장


    get totalCount(): number {

        this._logger.log(`BoardCrteria를 상속한 BoardPaging의 totalCount Getter가 호출 되었습니다!`);

        return this._totalCount;
    }

    set totalCount(value: number) {

        this._logger.log(`BoardCrteria를 상속한 BoardPaging의 totalCount Setter가 호출 되었습니다!`);

        this._totalCount = value;

        this._logger.log(`BoardCrteria의 getPagetStart()를 호출한 반환값을 pageStart에 넣겠습니다!`);
        this._pageStart = super.getPageStart();
        this._logger.log(`pagingData()를 호출 하겠습니다!`);
        this.pagingData();
    }

    private pagingData() {

        this._logger.log(`BoardCrteria를 상속한 BoardPaging의 pagingData()가 호출 되었습니다!`);
        this._logger.log(`마지막 Page를 계산하겠습니다! (현재 Page 번호 / 화면에 보여질 Page 번호의 개수) * 화면에 보여질 Page 번호의 개수`);
        this._endPage = (Math.ceil(super.page / this._displayPageNum) * this._displayPageNum);

        this._logger.log(`시작 Page를 계산하겠습니다! (끝 Page 번호 - 화면에 보여질 Page 번호 개수) + 1`);
        this._startPage = (this._endPage - this._displayPageNum) + 1;

        this._tempEndPage = (Math.ceil(this.totalCount / super.perPageNum));

        if (this._endPage > this._tempEndPage) {
            this._endPage = this._tempEndPage;
        }   // if (this.endPage > this.tempEndPage) 끝

        this._logger.log(`이전 Button 생성 여부를 확인 하겠습니다! (시작 Page 번호가 1과 같으면 false 반환, 아니면 true 반환`);
        this._prev = this._startPage != 1;

        this._logger.log(`다음 Button 생성 여부를 확인 하겠습니다! (끝 Page번호 * 한 Page 당 보여줄 게시글의 개수가 총 게시글의 수보다 크거나, 같으면 false 반환, 아니면 true 반환`);
        this._next = this._endPage * super.perPageNum >= this.totalCount ? false : true;



    }   // pagingData() 끝

    get displayPageNum(): 10 {
        return this._displayPageNum;
    }

    set displayPageNum(value: 10) {
        this._displayPageNum = value;
    }

    get startPage(): number {
        return this._startPage;
    }

    set startPage(value: number) {
        this._startPage = value;
    }

    get endPage(): number {
        return this._endPage;
    }

    set endPage(value: number) {
        this._endPage = value;
    }

    get prev(): boolean {
        return this._prev;
    }

    set prev(value: boolean) {
        this._prev = value;
    }

    get next(): boolean {
        return this._next;
    }

    set next(value: boolean) {
        this._next = value;
    }

    get pageStart(): number {
        return this._pageStart;
    }

    set pageStart(value: number) {
        this._pageStart = value;
    }

    get tempEndPage(): number {
        return this._tempEndPage;
    }

    set tempEndPage(value: number) {
        this._tempEndPage = value;
    }
}   // class 끝