import { PartialType } from '@nestjs/swagger';
import { CreateCreatureDto } from './create-creature.dto';

export class UpdateCreatureDto extends PartialType(CreateCreatureDto) {}
