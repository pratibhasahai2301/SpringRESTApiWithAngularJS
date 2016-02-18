function isNullOrUndefined(element) {
    var isNull = false;
    if (typeof element === "undefined" || element === null || element === "" || element === "null" || element === "undefined") {
        isNull = true;
    }
    return isNull;
};