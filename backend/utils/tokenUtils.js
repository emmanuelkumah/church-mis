import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  const token = jwt.sign(payload, "secretKey", {
    expiresIn: "1d", // Token will expire in 1 hour
  });

  return token;
};
