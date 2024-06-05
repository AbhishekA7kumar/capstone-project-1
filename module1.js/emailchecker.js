
 export function emailisvalid(e){
    let reg=/[\w]+[\@][\w]+[\.][\w]{3}/

    let out=reg.test(e);

    return out;

}