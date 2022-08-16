// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
	const examples = await prisma.example.findMany();
	res.status(200).json(examples);
};

export default examples;

// // src/pages/api/trpc/[trpc].ts
// import { createNextApiHandler } from "@trpc/server/adapters/next";
// import { appRouter } from "../../../server/router";
// import { createContext } from "../../../server/router/context";

// // export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext: createContext,
// });
