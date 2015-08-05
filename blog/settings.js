//用于保存该博客工程的配置信息，比如数据库的连接信息。

	 
module.exports = {
	cookieSecret:'myblog',	//cookieSecret 用于 Cookie 加密与数据库无关，我们留作后用。
	db:'blog',				//db 是数据库的名称，
	host:'localhost',		//host 是数据库的地址，
	port:27017				//port是数据库的端口号，
};