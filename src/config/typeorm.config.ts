import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db'); // /config/default.yaml의 db 부분

export const typeORMConfig: TypeOrmModuleOptions = {
    // process.env 설정은 AWS 등에 DB를 쓸 때,해당 환경변수로 가져오기 위함이다.
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,

    //Entities to be loaded for this connection
    // Entity를 이용해서 DB Table 생성. 그러므로, Entity 파일이 어디 있는지 설정 필요
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // true 값을 주면 application이 다시 실행 할 때, entity 안에 수정된 컬럼의 길이 Type 변경 등을 읽어 해당 Table을 Drop 하고, 다시 생성
    synchronize: dbConfig.synchronize,

    // synchronize: true,
};