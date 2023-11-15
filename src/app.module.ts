import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthControllerController } from './auth-controller/auth-controller.controller';
import { UserControllerController } from './user-controller/user-controller.controller';
import { FileControllerController } from './file-controller/file-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthControllerController, UserControllerController, FileControllerController],
  providers: [AppService],
})
export class AppModule {}
