## webstorm ide tslint报错：不允许给变量名以下划线开头等
tslint.json增加配置项
```
"variable-name": {
  "options": [
    "ban-keywords",
    "check-format",
    "allow-leading-underscore",
    "allow-pascal-case"
  ]
}
```

## webstorm ide tslint报错：object access via string literals，即不允许obj['abc']
tslint.json增加配置项
```
"no-string-literal": false
```

## webstorm ide tslint报错： infer from a boolean literal，即推荐省略定义对象属性类型，由typescript通过初始赋值，自行推断属性类型
tslint.json修改配置项
```
"no-inferrable-types": [
  true,
  "ignore-params",
  "ignore-properties"  // 增加
]
```
