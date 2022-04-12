import {Logger} from "@nestjs/common";

/**
 * 문자열 관련 처리를 위한 공통 Class
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


export class CustomStringUtil {

    logger = new Logger('custom.string.util.js');
    private static logger: Logger;

    /**
     * 생성자를 private으로 지정하여 new 키워드로의 instance 생성을 방지한다.
     */

    private constructor() {

        this.logger.log(`CustomStringUtil의 생성자가 호출되었습니다!`);

    }   // 생성자 끝

    /**
     * 첫번째 매개변수 값이 NULL인지 확인하고, NULL이면 빈 값을 반환하고, 아니라면 첫번째 인자 반환
     */

    public static getString(str : Object): string {

        this.logger.log(`CustomStringUtil의 getString()가 호출되었습니다!`);
        this.logger.log(`매개 변수가 Null인지 확인하고, Null이라면 빈 값을 반환하고, 아니라면 매개 변수 그대로 반환하겠습니다!`);
        this.logger.log(`NVL(str, "")을 호출 합니다!`);

        return CustomStringUtil.NVL(str, "");

    }   // getString(str : Object) 끝

    private static NVL(str: Object, req: string) {

        this.logger.log(`CustomStringUtil의 NVL(str: Object, s: string)이 호출 되었습니다!`);
        this.logger.log(`해당 Method는 SQL의 NVL()과 동일한 작업을 수행 합니다!`);

        this.logger.log(`첫번째 매개 변수 str : ${str} 이 null이면 두번째 매개 변수 req : ${req}로 치환하고, 아니면 "null" 문바열을 반환 하겠습니다! `);

        return str == null ? req : 'null';
    }   // NVL(str: Object, req: string) 끝

    // getString(Object str) 끝



    /**
     * @param str 문자열
     * @param str 문자열이 null일 경우
     * @param req 문자열로 대체
     * @return String 문자열이 null일 경우 대체 문자열, 그 외에는 문자열 그대로
     */



}   // class 끝