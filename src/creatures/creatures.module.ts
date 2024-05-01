import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CreaturesController],
  providers: [CreaturesService],
  imports: [PrismaModule],
})
export class CreaturesModule {}
