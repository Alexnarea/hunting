import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('criaturas')
@ApiTags('criaturas')
export class CreaturesController {
  constructor(private readonly creaturesService: CreaturesService) {}

  @Post()
  create(@Body() createCreatureDto: CreateCreatureDto) {
    return this.creaturesService.create(createCreatureDto);
  }

  @Get('extinct')
  findExtinct() {
    return this.creaturesService.findAllExtinct();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creaturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatureDto: UpdateCreatureDto) {
    return this.creaturesService.update(+id, updateCreatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creaturesService.remove(+id);
  }
}
