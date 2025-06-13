//break and continue statements

let v =0;
while (v < 5) {
    // if (v === 3) {
    //     break; // exit the loop when v is 3
    // }
    if (v === 2) {
        b++;
        continue; // skip the rest of the loop when b is 2
    }
    console.log(v);
    v++;
}