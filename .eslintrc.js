module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
        'semi': [2,'never'],
        'indent': [2, 4],               // 缩进距离
        'comma-dangle': [2, 'never'], //是否允许对象中出现结尾逗号
        'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}], //函数名称前是否有空格
        'no-cond-assign': 2, //条件语句的条件中不允许出现赋值运算符
        'no-constant-condition': 2, //条件语句的条件中不允许出现恒定不变的量
        'no-dupe-args': 2, //函数定义的时候不允许出现重复的参数
        'no-dupe-keys': 2, //对象中不允许出现重复的键
        'no-duplicate-case': 2, //switch语句中不允许出现重复的case标签
        'no-empty': 2, //不允许出现空的代码块
        'no-ex-assign': 2, //在try catch语句中不允许重新分配异常变量
        'no-func-assign': 2, //不允许重新分配函数声明
        'no-invalid-regexp': 2, //不允许在RegExp构造函数里出现无效的正则表达式
        'no-irregular-whitespace': 2, //不允许出现不规则的空格
        'no-regex-spaces': 2, //正则表达式中不允许出现多个连续空格
        'no-sparse-arrays': 2, //数组中不允许出现空位置
        'no-unreachable': 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
        'block-scoped-var': 2, //将变量声明放在合适的代码块里
        'complexity': 1, //限制条件语句的复杂度
        'eqeqeq': [2, 'smart'], //比较的时候使用严格等于
        'no-eval': 2, //不允许使用eval()
        'no-extend-native': 2, //不允许扩展原生对象
        'no-extra-bind': 2, //不允许不必要的函数绑定
        'no-fallthrough': 2, //不允许switch按顺序全部执行所有case
        'no-implied-eval': 2, //不允许使用隐式eval()
        'no-iterator': 2, //不允许使用__iterator__属性
        'no-lone-blocks': 2, //不允许不必要的嵌套代码块
        'no-loop-func': 2, //不允许在循环语句中进行函数声明
        'no-multi-spaces': 2, //不允许出现多余的空格
        'no-redeclare': 2, //不允许变量重复声明
        'no-with': 2, //不允许使用with语句
        'strict': [2, 'function'], //使用严格模式
        'no-shadow-restricted-names': 2, //js关键字和保留字不能作为函数名或者变量
        'max-len': [2, 180], //一行最大长度，单位为字符
	}
}