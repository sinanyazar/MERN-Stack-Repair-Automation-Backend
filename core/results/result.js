class Result {
    static Result(result, data, message) {
        return {
            success: result,
            data: data,
            message: message
        }
    }
}

module.exports = Result;