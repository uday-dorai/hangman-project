
let list =['hangman','apple','hangout','gamer'];
let str = list[Math.floor(Math.random()*3)];
let lose = 6;
let win =0;
let guesslist = [];
for(let i=0;i<str.length;i++){
    guesslist.push('_');
}

const linebreak = () => {
    console.log("*****************************************************************")
}
console.log('\n\n');
linebreak();
console.log("\n                    hangman game        ");
console.log("                   Guess the word     \n ")
linebreak();
console.log('\n\n');

                console.log(`  ____________`);
                console.log(`  |          |`);
                console.log(`  |`);
                console.log(`  |`);
                console.log(`  |`);
                console.log(` /|`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log('\n');

console.log("           " + guesslist);



process.stdin.on('data',function(input){
        let str1 =input.toString();
        let count =0;
        let count1 =0;
        for(let i=0;i<guesslist.length;i++){
            if(guesslist[i] == str1[0]){
                count1++;
                break;
            }
        }
        if(count1 == 0){
            for(let j=0;j<str.length;j++){
                if(str[j] == str1[0]){
                    guesslist[j] = str1[0];
                    win++;
                    count++;
                }
                
            }
        }
        
        if(count == 0){
            lose--;
        }
        
        console.log('\n')
        console.log(`           life left: ${lose}`);

        switch(lose){
            case 6:{
                console.log(`  ____________`);
                console.log(`  |          |`);
                console.log(`  |`);
                console.log(`  |`);
                console.log(`  |`);
                console.log(` /|`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                break;
            }
            case 5:{
                console.log(`  ______________`);
                console.log(`  |            |`);
                console.log(`  |          |*_*|`);
                console.log(`  |          |___|`);
                console.log(`  |`);
                console.log(`  | `);
                console.log(` /| `);
                console.log(` || `);
                console.log(` || `);
                console.log(` || `);
                console.log(` || `);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                break;
            }
            case 4:{
                console.log(`  ______________`);
                console.log(`  |            |`);
                console.log(`  |          |*_*|`);
                console.log(`  |          |___|`);
                console.log(`  |            |`);
                console.log(`  |            |`);
                console.log(` /|            |`);
                console.log(` ||            |`);
                console.log(` ||            |`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                break;
            }
            case 3:{
                console.log(`  ______________`);
                console.log(`  |            |`);
                console.log(`  |          |*_*|`);
                console.log(`  |          |___|`);
                console.log(`  |            |`);
                console.log(`  |          \\\ | `);
                console.log(` /|           \\\|`);
                console.log(` ||            |`);
                console.log(` ||            |`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                break;
            }
            case 2: {
                console.log(`  ______________`);
                console.log(`  |            |`);
                console.log(`  |          |*_*|`);
                console.log(`  |          |___|`);
                console.log(`  |            |`);
                console.log(`  |          \\\ | / `);
                console.log(` /|           \\\|/ `);
                console.log(` ||            |`);
                console.log(` ||            |`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                break;
            }
            case 1: {
                console.log(`  ______________`);
                console.log(`  |            |`);
                console.log(`  |          |*_*|`);
                console.log(`  |          |___|`);
                console.log(`  |            |`);
                console.log(`  |          \\\ | / `);
                console.log(` /|           \\\|/ `);
                console.log(` ||            |`);
                console.log(` ||            |`);
                console.log(` ||           / `);
                console.log(` ||          /`);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                break;
            }
            case 0: {
                console.log(`  ______________`);
                console.log(`  |            |`);
                console.log(`  |          |*_*|`);
                console.log(`  |          |___|`);
                console.log(`  |            |`);
                console.log(`  |          \\\ | /`);
                console.log(` /|           \\\|/`);
                console.log(` ||            |`);
                console.log(` ||            |`);
                console.log(` ||           / \\\ `);
                console.log(` ||          /   \\\ `);
                console.log(` ||`);
                console.log(` ||`);
                console.log(` ||`);
                linebreak();
            }
        }

        if(win == str.length){
            console.log("\t\t" + guesslist);
            console.log('\n\t\t you win');
            process.exit();
        }
        if(lose == 0){
            linebreak();
            console.log("\t\t\tsorry!...you lose\n\n");
            process.exit();
        }
        linebreak();
        console.log('\n');
        console.log('        '+guesslist);
    })