const profile = {
    name:'MinoriInada',
    age: 24,
    hobby:'watch Budaixi,Taiwanese puppet show',
    major:'Chinese Literature'
};

const keys = Object.keys(profile);

for(let i = 0; i < keys.length; i = i + 1){
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は" + value + "です。";
    console.log(profile[text])
}
