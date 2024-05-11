import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreaturesService {
  constructor(private prisma: PrismaService){}

  create(createCreatureDto: CreateCreatureDto){
    return this.prisma.creature.create({data: createCreatureDto});
  }

  findAll() {
    return this.prisma.creature.findMany({ where: { extinct: false} });
  }

  findOne(id: number) {
    return this.prisma.creature.findUnique({ where: { id }});
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.prisma.creature.update({
      where: {id},
      data: updateCreatureDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: {id}});
  }
}
