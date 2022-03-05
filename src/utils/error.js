function error(message, status) {
  const error = new Error(message)

  if (status) {
    error.statusCode = status
  }
  return error
}

module.exports = error
