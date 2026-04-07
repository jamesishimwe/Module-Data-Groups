function dedupe(list) {
    let listWithoutDuplicates = [];
    for (let i = 0; i < list.length; i++) {
        if(listWithoutDuplicates.includes(list[i]) === false) {
            listWithoutDuplicates.push(list[i]);
        }
    }
    return listWithoutDuplicates;
}
module.exports = dedupe;