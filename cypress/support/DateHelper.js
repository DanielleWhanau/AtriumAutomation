export function futureDateString() {
    var today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toLocaleDateString("ca-ES");
}

export function futureUSDateString() {
    var today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toLocaleDateString();
}