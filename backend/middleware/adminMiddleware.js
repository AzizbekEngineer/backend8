export const adminMiddleware = (req, res, next) => {
  if (req?.user?.role === "admin" || req?.user?.role === "owner") {
    next();
  } else {
    res.status(403).json({
      msg: "Ruxsat yoq",
      variant: "error",
      payload: null,
    });
  }
};
