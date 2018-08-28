
#判断目录是否存在
if [ -d $1 ]; then
    echo 'error: dir exists'
    exit

else
    #创建目录
    mkdir $1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js
    #在创建的目录中进行写操作
    echo -e " <!DOCTYPE>\r\n<title>Hello</title>\r\n<h1>Hi</h1>" > index.html
    echo  "h1{color: red;}" > ./css/style.css
    echo -e "var string = \"Hello World\"\r\nalert(string)" > js/main.js
    exit
fi