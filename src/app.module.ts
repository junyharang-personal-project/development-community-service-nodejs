import {Module} from '@nestjs/common';
import { DevInqueryModule } from './dev-inquery/dev-inquery.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeORMConfig} from "./config/typeorm.config";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), DevInqueryModule, AuthModule],
})
export class AppModule {}
