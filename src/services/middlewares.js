const throwingError = (status, warning) => {
    const error = new Error();
    error.status = status;
    error.warning = warning;
    throw error;
};

module.exports = {
    throwingError,
};
