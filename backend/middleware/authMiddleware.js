import { UnauthenticatedError } from "../errors/customError.js";
import { verifyToken } from "../utils/tokenUtils.js"; // Function to verify the token
// This middleware would typically check for a valid token in the request headers

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies; // Assuming the token is stored in cookies
  if (!token) throw new UnauthenticatedError("Authentication token is missing");
  try {
    const { userId, role } = await verifyToken(token); // Function to verify the token
    req.user = { userId, role }; // Attach user information to the request object
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication token is missing");
  }
};
