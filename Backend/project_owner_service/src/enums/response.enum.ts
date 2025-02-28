const errorCode = {
  // Server error
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    resCode: "INTERNAL_SERVER_ERROR",
    message: "Internal server error!"
  },

  // Invalid request (invalid data form)
  BAD_REQUEST: {
    statusCode: 400,
    resCode: "BAD_REQUEST",
    message: "Bad request!"
  },

  // Unauthorized errors (Authentication issues)
  MISSING_AUTHENTICATION: {
    statusCode: 401,
    resCode: "MISSING_AUTHENTICATION",
    message: "Missing authentication token!"
  },
  INVALID_AUTHENTICATION: {
    statusCode: 401,
    resCode: "INVALID_AUTHENTICATION",
    message: "Invalid authentication. Please login again!"
  },
  TOKEN_EXPIRED: {
    statusCode: 401,
    resCode: "TOKEN_EXPIRED",
    message: "Token expired. Please login again!"
  },

  // Permission errors
  FORBIDDEN: {
    statusCode: 403,
    resCode: "FORBIDDEN",
    message: "You do not have permission to access this action!"
  },
  LIMIT_REACHED: {
    statusCode: 403,
    resCode: "LIMIT_REACHED",
    message: "You have reached your current plan limit. Please upgrade your plan to increase your limit!"
  },
  PRIVATE_RESOURCE: {
    statusCode: 403,
    resCode: "PRIVATE_RESOURCE",
    message: "The linked account or service is private. Please make it public to proceed!"
  },

  // Resource errors
  NOT_FOUND: {
    statusCode: 404,
    resCode: "NOT_FOUND",
    message: "Resource not found!"
  },
  CONFLICT: {
    statusCode: 409,
    resCode: "CONFLICT",
    message: "Conflict detected! The resource already exists or has conflicting changes."
  },

  // Validation errors
  UNPROCESSABLE_ENTITY: {
    statusCode: 422,
    resCode: "UNPROCESSABLE_ENTITY",
    message: "The request was well-formed but contains semantic errors."
  },

  // Rate limiting / Too many requests
  TOO_MANY_REQUESTS: {
    statusCode: 429,
    resCode: "TOO_MANY_REQUESTS",
    message: "Too many requests. Please slow down and try again later."
  },
};


const successCode = {
  SUCCESS: {
    statusCode: 200,
    resCode: "SUCCESS",
    message: "Success!"
  },
  CREATED: {
    statusCode: 201,
    resCode: "CREATED",
    message: "Created!"
  }
}

export { errorCode, successCode }