//custom function for manual error handler by user
export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.message = message;
    return error;
}