
var fetch = require('node-fetch');
var chalk = require('chalk');
var readline = require('readline-sync')
const fs = require('async-file');

console.log(chalk.red(
    `
welcome to
    
 ______        __    __                                   
 /      |      /  |  /  |                                  
 $$$$$$/       $$ | /$$/  _______    ______   __   __   __ 
   $$ |        $$ |/$$/  /       \  /      \ /  | /  | /  |
   $$ |        $$  $$<   $$$$$$$  |/$$$$$$  |$$ | $$ | $$ |
   $$ |        $$$$$  \  $$ |  $$ |$$ |  $$ |$$ | $$ | $$ |
  _$$ |_       $$ |$$  \ $$ |  $$ |$$ \__$$ |$$ \_$$ \_$$ |
 / $$   |      $$ | $$  |$$ |  $$ |$$    $$/ $$   $$   $$/ 
 $$$$$$/       $$/   $$/ $$/   $$/  $$$$$$/   $$$$$/$$$$/  
                                            Your System                                                                                                                                                                               
   
`
))

function getSubdomain(){

    var url = readline.question('masukan url example facebook.com tanpa http/https : ')

    console.log("\n")
    console.log("======="+" "+"DOMAIN : "+url+" "+"=======")
    console.log("\n")
 
    fetch('http://35.197.130.171/?domain='+url,{
        method:'GET',
    })
    .then(response => response.json())
    .then(res => {
        res.data.map(datas => {
            console.log("=>"+" "+chalk.green(datas.id))
            fs.appendFile('result_subdomain.txt', `${datas.id} => found!\n`, 'utf-8');
        })
    })

    console.log("result saved => result_subdomain.txt")

}

return getSubdomain()