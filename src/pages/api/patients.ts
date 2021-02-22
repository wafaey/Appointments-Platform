import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const patients = await prisma.patient.findMany();

  res.status(200).json(patients);
};
