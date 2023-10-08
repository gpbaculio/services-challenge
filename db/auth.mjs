import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { prisma } from "./query/index.mjs";

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

export async function authenticate(plainTextPassword, userPassword) {
  try {
    const isValid = await bcrypt.compare(plainTextPassword, userPassword);

    return isValid;
  } catch (err) {
    return false;
  }
}
