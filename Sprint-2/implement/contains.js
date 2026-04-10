function contains(Obj,key) {
    if(Obj === null || typeof Obj !== "object" || Array.isArray(Obj)) return false;
     return Object.prototype.hasOwnProperty.call(Obj, key);
}

module.exports = contains;
