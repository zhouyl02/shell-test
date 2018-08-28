


//判断目录是否存在
var fs = require('fs') ;
var dirName = process.argv[2] ; //我传的参数是第3个

if (!dirName){
    console.log("error: dir exists");
}else{
    //创建目录      
    fs.mkdirSync("./" + dirName);
    process.chdir("./" + dirName);
    fs.mkdirSync('css');
    fs.mkdirSync('js');
    
    //在创建的目录中进行写操作
    fs.writeFileSync("./index.html", "<!DOCTYPE>\r\n<title>Hello</title>\r\n<h1>Hi</h1>");
    fs.writeFileSync("./css/style.css", "h1{color: red;}"); 
    fs.writeFileSync("./js/main.js", "var string = \"Hello World\"\r\nalert(string)");                               
    
    process.exit(0);
};
