import {EntityRepository, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {Logger} from "@nestjs/common";

/**
 * 회원 관련 Repository
 * <pre>
 * <b>History:</b>
 *    주니하랑, 1.0.0, 2022.04.10 최초 작성
 *    주니하랑, 1.0.1, 2022.04.10 회원 가입을 위한 Method 구현
 * </pre>
 *
 * @author 주니하랑
 * @version 1.0.1, 2022.04.10 회원 가입을 위한 Method 구현
 * @see <a href="https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"></a>
 */

@EntityRepository(User) export class UserRepository extends Repository<User> {

    private logger = new Logger('user.repository.ts');

    /**
     * 회원 가입 Method
     * @param authCredentialDTO - Cient에서 회원 가입을 위해 작성한 내용이 담긴 DTO
     * @see "https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4"
     */

    async signUp(authCredentialDTO : AuthCredentialDto): Promise<User> {

        this.logger.log("UserRepository의 signUp(authCredentialDTO : AuthCredentialDto)이 호출 되었습니다!");
        this.logger.log(`Service로 부터 전달된 DTO 내용 : ${authCredentialDTO}`);
        this.logger.log("요청을 담은 DTO에 각 내용을 각각 상수형 변수에 담겠습니다!");
        const { username, password, nickname, userEmail, userPhone } = authCredentialDTO;

        this.logger.log("상수형 변수 user에 각각의 상수형 변수를 담아 주겠습니다!");
        const user = this.create({ username, password, nickname, userEmail, userPhone });

        this.logger.log("save()를 호출하여 user객체를 전달하고, 이를 통해 Data Base에 Insert Query를 날리겠습니다!");
        return await this.save(user);

    }   // signUp(authCredentialDTO : AuthCredentialDto) 끝

}   // class 끝