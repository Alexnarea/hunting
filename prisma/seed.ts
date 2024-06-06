import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  const creature1 = await prisma.creature.upsert({
    where: { name: 'Dodo' },
    update: {},
    create: {
      name: 'Dodo',
      description: 'A flightless bird that was native to the island of Mauritius.',
      lastSee: '1681 on the island of Mauritius',
      countLastSee: 0,
      extinct: true,
    },
  });

  const creature2 = await prisma.creature.upsert({
    where: { name: 'Woolly Mammoth' },
    update: {},
    create: {
      name: 'Woolly Mammoth',
      description: 'A large, hairy elephant-like mammal that lived during the Pleistocene epoch.',
      lastSee: '4,000 years ago in Siberia',
      countLastSee: 0,
      extinct: true,
    },
  });

  console.log({ creature1, creature2 });
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
  
    await prisma.$disconnect();
  });
