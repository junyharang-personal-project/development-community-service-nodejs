import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

/**
 * Swagger Config
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


export function swaggerConfig(app: INestApplication): void {

    const options = new DocumentBuilder()

        .setTitle("JUNY Company")
        .setDescription("<h1> 주니하랑 개인 프로젝트!! </h1> ")
        .setVersion("1.0.0")
        .build();

    const documnet = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('swagger-ui/index.html', app, documnet);

}   // swaggerConfig(app: INestApplication) 끝