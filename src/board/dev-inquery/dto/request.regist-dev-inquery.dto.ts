import {IsEmpty, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {BoardCommon} from "../../common/board.common";

/**
 * Q&A 게시판 글 등록 / 수정 요청 DTO
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

export  class RequestRegistDevInqueryDto extends BoardCommon{

    // @IsNotEmpty() : 빈 값이 들어오면 Exception 반환(유효성 검사)
    private _inqrySn : number;                   // 게시글 고유 번호(글 수정일 때 필요)
    @IsNotEmpty() @IsString() private _inqrySj : string;     // 게시글 제목
    @IsNotEmpty() @IsString() private _inqryCn : string;     // 게시글 내용
    @IsNotEmpty() @IsString() private _secretAt : string;    // 게시글 비밀글 여부 (비밀글 : 'Y', 공개글 : 'N')

    private _fileSn : number;                                 // 파일 일련 번호
    // private _crtrSn : number;


    private _inquryUserSn : number;

    constructor(inqrySn: number, inqrySj: string, inqryCn: string, secretAt: string, inquryUserSn: number, fileSn : number) {
        super();
        this._inqrySn = inqrySn;
        this._inqrySj = inqrySj;
        this._inqryCn = inqryCn;
        this._secretAt = secretAt;
       this._inquryUserSn = inquryUserSn;
       this._fileSn = fileSn;
    }   // 생성자 끝

    get inqrySn(): number {
        return this._inqrySn;
    }

    set inqrySn(value: number) {
        this._inqrySn = value;
    }

    get inqrySj(): string {
        return this._inqrySj;
    }

    set inqrySj(value: string) {
        this._inqrySj = value;
    }

    get inqryCn(): string {
        return this._inqryCn;
    }

    set inqryCn(value: string) {
        this._inqryCn = value;
    }

    get secretAt(): string {
        return this._secretAt;
    }

    set secretAt(value: string) {
        this._secretAt = value;
    }

    get inquryUserSn(): number {
        return this._inquryUserSn;
    }

    set inquryUserSn(value: number) {
        this._inquryUserSn = value;
    }

    get fileSn(): number {
        return this._fileSn;
    }

    set fileSn(value: number) {
        this._fileSn = value;
    }
}   // class 끝