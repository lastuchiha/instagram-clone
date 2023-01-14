export default function checkUserExits(uid, array) {
    return array.filter(id => id === uid).length ? true : false;
}