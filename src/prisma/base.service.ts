import { PrismaService } from './prisma.service';

export class BaseService<T, CreateDto, UpdateDto> {
  constructor(private prisma: PrismaService, private model: { name: string }) {}

  async create(data: CreateDto): Promise<T> {
    return this.prisma[this.model.name].create({ data });
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this.model.name].findMany();
  }

  async findOne(id: string): Promise<T | null> {
    return this.prisma[this.model.name].findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateDto): Promise<T> {
    return this.prisma[this.model.name].update({ where: { id }, data });
  }

  async remove(id: string): Promise<T> {
    return this.prisma[this.model.name].delete({ where: { id } });
  }
}
