import { CacheModule, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { User } from "src/entities/User";
import { HandleBarService } from "src/shared/services/handlebar.service";
import { DatabaseModule } from "../database/database.module";
import { userRepository } from "../database/repository.database.provider";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        DatabaseModule,
        CacheModule.registerAsync({
            imports:[],
            inject:[],
            useFactory: async (configService : ConfigService) => ({
                store: redisStore,
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT,
                ttl: process.env.CACHE_TTL
            })
        })
    ],
    controllers: [
        UserController,
    ],
    providers: [
            UserService,
            userRepository,
            HandleBarService,
        ],
    exports: [UserService]
})
export class UserModule {

}