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

  // Missing authentication token 
  AUTHENTICATION: {
    statusCode: 401,
    resCode: "MISSING_AUTHENTICATION",
    message: "Missing authentication token!"
  }, 

  // Invalid authentication
  INVALID_AUTHENTICATION: {
    statusCode: 401,
    resCode: "INVALID_AUTHENTICATION",
    message: "Invalid authentication. Please login again!"
  },

  // Token expired
  TOKEN_EXPIRED: {
    statusCode: 401,
    resCode: "TOKEN_EXPIRED",
    message: "Token expired. Please login again!"
  },

  // without permission
  NON_PERMISSION: {
    statusCode: 403,
    resCode: "NON_PERMISSION",
    message: "You do not have permission to access this action!"
  },

  // Not found
  NOT_FOUND: {
    statusCode: 404,
    resCode: "NOT_FOUND",
    message: "Not found!"
  },

  // already have
  CONFLICT: {
    statusCode: 409,
    resCode: "CONFLICT",
    message: "Conflict!"
  }
}

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