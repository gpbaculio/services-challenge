import jwt from "jsonwebtoken";

import { prisma } from "./query/types/ServiceRequestType.mjs";

export async function getUser(token) {
  if (!token) {
    return { user: null };
  }

  try {
    const decodedToken = jwt.verify(token.substring(7), process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });

    return { user };
  } catch (err) {
    return { user: null };
  }
}

export function generateToken(user) {
  return `Bearer ${jwt.sign({ id: user.id }, process.env.JWT_SECRET)}`;
}
