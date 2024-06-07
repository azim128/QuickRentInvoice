export const success = (
  res,
  message = "Success",
  data = {},
  statusCode = 200
) => {
  res.status(statusCode).json({
    status: "success",
    statusCode: statusCode,
    message,
    data,
  });
};

export const error = (res, error, statusCode = 500) => {
  console.log(error, res);
  res.status(statusCode).json({
    status: "fail",
    statusCode: error.statusCode,
    message: error.message || "An error occurred",
  });
};
