
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

    var siheaders = { 
        'x-session-hash' : '16961ee14a95fae7bbfe69587dcca2adf647b7022e88ec6167edec568e4c69d3' 
    };
    console.log("\n")
    console.log("======="+" "+"DOMAIN : "+url+" "+"=======")
    console.log("\n")
 
    fetch('http://35.197.130.171/?domain='+url,{
        method:'GET',
        headers:siheaders,
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