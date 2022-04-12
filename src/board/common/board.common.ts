import {BoardPaging} from "./board.paging";

/**
 * 게시판 공통 Value 처리를 위한 Value Object
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.12 최초 작성
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.0, 2022.04.12 최초 작성
 * @See ""
 * @see <a href=""></a>
 */

export class BoardCommon extends BoardPaging {

    private _rowNumber : string;     // 행 번호
    private _regDt : string;         // 등록 일시
    private _regId : string;         // 등록 ID
    private _regUserNm : string;     // 등록자 이름
    private _regIp : string;         // 등록 IP
    private _updtDt : string;        // 수정 일시
    private _updtId : string;        // 수정 ID
    private _updtUserNm : string;    // 수정자 이름
    private _updtIp : string;        // 수정 IP
    private _creatDt : string;       // 생성 일시

    private _crtrSn : number;        // 생성자 일련 번호
    private _updusrSn : number;      // 수정자 고유 번호

    get rowNumber(): string {
        return this._rowNumber;
    }

    set rowNumber(value: string) {
        this._rowNumber = value;
    }

    get regDt(): string {
        return this._regDt;
    }

    set regDt(value: string) {
        this._regDt = value;
    }

    get regId(): string {
        return this._regId;
    }

    set regId(value: string) {
        this._regId = value;
    }

    get regUserNm(): string {
        return this._regUserNm;
    }

    set regUserNm(value: string) {
        this._regUserNm = value;
    }

    get regIp(): string {
        return this._regIp;
    }

    set regIp(value: string) {
        this._regIp = value;
    }

    get updtDt(): string {
        return this._updtDt;
    }

    set updtDt(value: string) {
        this._updtDt = value;
    }

    get updtId(): string {
        return this._updtId;
    }

    set updtId(value: string) {
        this._updtId = value;
    }

    get updtUserNm(): string {
        return this._updtUserNm;
    }

    set updtUserNm(value: string) {
        this._updtUserNm = value;
    }

    get updtIp(): string {
        return this._updtIp;
    }

    set updtIp(value: string) {
        this._updtIp = value;
    }

    get creatDt(): string {
        return this._creatDt;
    }

    set creatDt(value: string) {
        this._creatDt = value;
    }

    get crtrSn(): number {
        return this._crtrSn;
    }

    set crtrSn(value: number) {
        this._crtrSn = value;
    }

    get updusrSn(): number {
        return this._updusrSn;
    }

    set updusrSn(value: number) {
        this._updusrSn = value;
    }


}   // class 끝