import { Module } from '@nestjs/common';
import { DevInqueryController } from './dev-inquery.controller';
import { DevInqueryService } from './dev-inquery.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DevInqueryRepository} from "./dev-inquery.repository";

/**
 * Q&A 게시판 Module
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

@Module({
  imports : [TypeOrmModule.forFeature([DevInqueryRepository])],
  controllers : [DevInqueryController],
  providers : [DevInqueryService]
})
export class DevInqueryModule {}
