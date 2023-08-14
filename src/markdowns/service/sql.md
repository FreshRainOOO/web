# 终端调试

```shell
链接数据库
mysql -u root -p

 查看数据库版本
select version();

退出mysql数据库的连接
exit或quit

显示所有的数据库
show databases;

创建数据库
create database [if not exists]数据库名 [default charset utf8 collate utf8_general_ci];
简写
create database 数据库名 character set utf-8;

切换到要操作的数据库
use 数据库名;

查看当前选择的数据库
select database();

查看当前数据库中的所有表
show tables;

创建表
CREATE TABLE [IF NOT EXISTS] 表名(
	列名 列类型(长度) 约束 默认值,
  	列名 列类型(长度) 约束 默认值,
  	...
);

查看表结构
desc 表名;

```

# 约束

默认值：default

非空约束：not null

唯一性约束：unique

主键约束：primary key

外键约束：foreign key 主从表,从表的外键时主表的主键

# 查询数据

```sql
select {columns}
  from {table|view|other select}
  [where 查询条件]
  [group by 分组条件]
  [having 分组后再限定]
  [order by 排序]
```

## 简单查询

指定列名`select 列名,列名 from 表名` 如果查询表中所有的字段，使用\*。
指定别名 `select 列名 as 别名,列名 别名 from 表名`

## 条件查询

select 检索列 from 表名 where 筛选条件

### 比较

等于 =
大于 >
小于 <
大于等于 >=
小于等于 <=
不等于 != 或 <>
`select * from stus where age>30;`

### 逻辑

and, && (与)
or, || (或)
not, !(非)
`select * from stus where age>30 and sex='女';`

### 模糊查询

%表示任意多个字符（0-多个）
\_(下划线)表示任意一个字符
查询姓名中含有'张'的`select * from stus name like '%张%';`
查询姓名是两个字符的: `select * from stus where name like '张__';`

### 区间查询

in 表示在一个离散的非连续的范围中查找
查找 id 的值等于 1 或 3 或 4 的: `select * from stus where id in (1,3,4);`

between...and...
表示在一个连续的区间中查找.
查找 id 的值在 3 到 7 之间的:`select * from stus where id between 3 and 7;`

### NULL 判断

is NULL 用来判断某列是否为空. 注意: NULL 用小写也是可以的.

## 排序

升序(asc) `select * from stus order by age;`

降序(desc) `select * from stus order by age asc;`

多种排序规则 可以先按照一定规则来排序, 当碰到相同的情况下, 按照第二种规则来排序,
先按照年龄升序排序, 如果年龄相等再按照 id 的降序排序.`select * from stus order by age asc,id desc;`

## 聚合函数

sum(), max(), min(), avg(), count()  
和 最大值 最小值 平均数 统计有多少行

## 分组查询

按照某列分组 `select sex from  stus group by sex;`
按照多列分组 `select name, sex from stus group by name,sex;`
分组后使用聚合函数`select sex,count(*) from stus group by sex;`

> 注意：
> 如果没有分组，那么组函数(max,min,avg,count....)作用在整张表上。
> 如果有分组，组函数作用在分组后的数据上。
> 在写 select 子句中列，如果没有在组函数里，那么就要在 group by 后边。

select a，b，count(c),sum(d) from 表 group by a,b;

### 分组后限定查询：having

二次筛选：二次筛选是指分组后再对数据进行筛选. 需要使用 having 子句来完成.
`select 列名 from  表名 group by 列名 having 条件`
having 子句的和 where 子句的用法类似，都是用于限定条件。

> 对比：

> 1. where 和 having 后面都是跟条件
> 2. where 是对表中的数据的原始筛选
> 3. having 是对 group by 的结果的二次筛选
> 4. having 必须配合 group by 使用, 一般也会跟着聚合函数一起使用
> 5. 可以先有 where, 后面跟着 group by 和 having

> 区别和结论： 1.语法上：在 having 中使用组函数(max,min,avg,count...),而 where 后不能用组函数。 2.执行上：where 是先过滤再分组。having 是先分组再过滤。
> 例如：把男或女的个数超过 6 的过滤出来

## 分页查询

`select * from 表名 limit start,count;`
查询起始行为第 5 行，一共查询 3 行`select * from stus limit 4, 3;`

## 内置函数

### 字符串函数

查看字符的 ascii 码值 ascii(str)，str 是空串时返回 0 `select ascii('a');`
查看 ascii 码值对应的字符 char(数字) `select char(97);`
拼接字符串 concat(str1,str2...)`select concat(12,34,'ab');`
包含字符个数 length(str)`select length('abc');`
截取字符串 `select substring('abc123',2,3);` left(str,len) right(str,len) substring(str,pos,len)

去除空格
`select trim('  bar   ');`
`select trim(leading 'x' FROM 'xxxbarxxx');`
trim([方向 remstr from str)返回从某侧删除 remstr 后的字符串 str，方向词包括 both、leading、trailing，表示两侧、左、右

返回由 n 个空格字符组成的一个字符串 space(n) `返回由n个空格字符组成的一个字符串space(n)`

替换字符串 replace(str,from_str,to_str) `select replace('abc123','123','def');`
大小写转换` select lower('aBcD');` `select upper('aBcD'); `

### 数学函数

求绝对值 abs(n)`select abs(-32);`
求 m 除以 n 的余数 mod(m,n)，同运算符%` select mod(10,3);` `select 10%3; `
地板 floor(n)，表示不大于 n 的最大整数 `select floor(2.3);`
天花板 ceiling(n)，表示不小于 n 的最大整数`select ceiling(2.3);`
求四舍五入值 round(n,d)，n 表示原数，d 表示小数位置，默认为 0`select round(1.6);`
求 x 的 y 次幂 pow(x,y) `select pow(2,3);`
获取圆周率 PI()`select PI();`
随机数 rand()，值为 0-1.0 的浮点数`select rand();`

### 日期时间函数

获取子值 `select year('2016-12-21');` year 可换成时分秒
当前日期时间 now()`select now();`

## 多表查询

TODO:没看懂 QAQ

## 子查询

TODO:没看懂 QAQ

## 总结

完整的 select 语句书写：

```sql
select {columns}
  from {table|view|other select}
  [where 查询条件]
  [group by 分组条件]
  [having 分组后再限定]
  [order by 排序]


select distinct *
from 表名
where ....
group by ... having ...
order by ...
limit start,count
```

执行顺序：

```sql
from 表名
where ...
group by ...
having ...
select distinct*..
order by ...
limit start,count
```

# 实例

https://zhuanlan.zhihu.com/p/43289968
https://www.bilibili.com/video/BV1q4411G7Lw
![表关联关系](./%E8%A1%A8%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB.png)

## 查询课程编号为"01"的课程比"02"的课程成绩高的所有同学的学号

### sql

```sql
SELECT a.s_id "s_no",c.s_name ,a.s_score "01",b.s_score "02" FROM
(SELECT s_id,c_id,s_score from score WHERE c_id="01") as a
inner JOIN
(SELECT s_id,c_id,s_score from score WHERE c_id ='02' ) as b on a.s_id = b.s_id
INNER JOIN student as c on c.s_id = a.s_id
WHERE a.s_score > b.s_score
```

### 备注

```
这段 SQL 查询语句用于从名为 "score" 的表中选择学生的成绩，并返回学生的学号（s_no）、姓名（s_name）、科目 "01" 的成绩和科目 "02" 的成绩。查询结果经过限制条件，只返回科目 "01" 的成绩高于科目 "02" 的成绩的学生信息。

可以将查询语句分为以下几个部分：

子查询（a）：从 "score" 表中选择科目 "01" 的成绩，返回学生的学号、科目编号和对应的成绩。
子查询（b）：从 "score" 表中选择科目 "02" 的成绩，返回学生的学号、科目编号和对应的成绩。
INNER JOIN 连接：将子查询（a）和子查询（b）根据学生的学号进行连接，获取同一学生在科目 "01" 和科目 "02" 的成绩。
INNER JOIN 连接：将连接的结果与名为 "student" 的表根据学生的学号进行连接，获取学生的学号、姓名以及科目 "01" 和科目 "02" 的成绩。
WHERE 子句：限制条件为只返回科目 "01" 的成绩高于科目 "02" 的成绩的学生信息。
这种查询方式可以用来比较学生在不同科目上的成绩，并筛选出科目 "01" 成绩高于科目 "02" 的学生。
```

## 查询平均成绩大于 60 分的学生的学号和平均成绩

### sql

```sql
SELECT s_id ,AVG(s_score)
FROM score
GROUP BY s_id HAVING AVG(s_score) > 60
```

### 解释

```
GROUP BY s_id 表示将结果按照学生ID进行分组。这将使相同学生ID的记录合并在一起，以便计算该学生的平均分数。
GROUP BY 就是将一个“数据集”划分成若干个“小区域”，然后针对若干个“小区域”进行数据处理。
```

## 查询所有学生的学号,姓名,选课数,总成绩

### sql

```sql
SELECT a.s_id ,a.s_name ,COUNT(b.c_id),
sum(case WHEN b.s_score is null then 0 else b.s_score END)
from student as a
LEFT JOIN score as b ON a.s_id = b.s_id
GROUP BY s_id ,a.s_name
```

```解释
inner join: 返回交集
left join: 是返回右边全部记录,右表不满足匹配条件的记录返回对应行返回null
这段 SQL 查询语句是用于查询学生表 student 和成绩表 score 的数据，并根据学生的 s_id 进行分组。下面是查询的解释：

SELECT a.s_id, a.s_name, COUNT(b.c_id), SUM(case WHEN b.s_score is null then 0 else b.s_score END)

该部分指定需要返回的列：学生的 s_id，s_name，以及计算的结果。
COUNT(b.c_id) 统计了每个学生对应的成绩数目。
SUM(case WHEN b.s_score is null then 0 else b.s_score END) 对每个学生的成绩进行求和。它分两部分处理：
case WHEN b.s_score is null then 0 else b.s_score END 是一个条件表达式，如果成绩为 null，则返回 0，否则返回成绩本身。
SUM() 函数对每个学生的成绩进行求和。
FROM student as a LEFT JOIN score as b ON a.s_id = b.s_id

student as a 表示将学生表重命名为 a，以便在查询中引用。
LEFT JOIN 表示使用左连接，也就是将学生表 student 与成绩表 score 进行连接。
ON a.s_id = b.s_id 表示连接条件，即以学生表的 s_id 列与成绩表的 s_id 列进行关联。
GROUP BY s_id, a.s_name

GROUP BY 子句根据 s_id 和 a.s_name 对结果进行分组，以便对每个组进行汇总。
因此，以上 SQL 查询语句将返回每个学生的学生ID，学生姓名，对应的成绩数目以及成绩的总和。
```

## 查询姓 "张" 的老师个数

```sql
SELECT COUNT(t_id)
FROM teacher
WHERE t_name LIKE "张%"
```

## 没学过 '张三' 老师课学生的学号,姓名

方法一:嵌套过多,不推荐

```sql
SELECT s_id,s_name from student
  WHERE s_id not in (
  SELECT s_id FROM score
    WHERE c_id = (
    SELECT c_id FROM course
      WHERE t_id =(
      SELECT t_id FROM teacher
       WHERE t_name ='张三'
      )
    )
)
```

方法二:

```sql
SELECT s_id , s_name FROM student
WHERE s_id not in (
SELECT s_id from score as s
INNER JOIN course as c on s.c_id = c.c_id
INNER JOIN teacher as t on c.t_id = t.t_id
WHERE t.t_name ='张三'
)
```

## 查询学过 '张三' 老师所教所有课程的同学的学号,姓名

```sql
SELECT st.s_id ,st.s_name
 FROM student as st
 INNER JOIN score as s on s.s_id = st.s_id
 INNER JOIN course as c on c.c_id = s.c_id
 INNER JOIN teacher as t ON t.t_id = c.t_id
 WHERE t.t_name ='张三'
 ORDER BY st.s_id
```

## 查询学过编号为 '01' 的课程并且也学过编号为 '02' 的课程的学生的学号,姓名

```sql
SELECT s_id,s_name  FROM student
WHERE s_id IN
(
SELECT a.s_id
 FROM (SELECT s_id FROM score WHERE c_id = '01') as a
INNER JOIN
(SELECT s_id FROM score WHERE c_id = '02') as b
on a.s_id = b.s_id
)
```

## 查询所有课程小于 60 分的同学

```sql
SELECT a.s_id
FROM
(
SELECT s_id ,count(c_id) as cnt
FROM score
WHERE s_score < 60
GROUP BY s_id
) as  a
INNER JOIN
(
SELECT s_id ,count(c_id) as cnt FROM score
GROUP BY s_id
 ) as b on a.s_id = b.s_id
 WHERE a.cnt = b.cnt
```

```备注
看学生小于 60 分的课程 与 学生学习的课程总数 是否相同
```

## 查询没有学全所有课的学生 学号 姓名

```sql
SELECT st.s_id,st.s_name
FROM student as st
LEFT JOIN score as sc on st.s_id = sc.s_id
GROUP BY st.s_id HAVING COUNT(DISTINCT sc.c_id) < (SELECT COUNT(DISTINCT c_id) FROM course)
```

## 查询至少有一门课与学号为 01 得到学生所学课程 相同 的学生的学号和姓名

```sql
SELECT  a.s_id from student as a
INNER JOIN (
SELECT DISTINCT s_id FROM score
WHERE c_id in (
SELECT c_id FROM score
WHERE s_id = '01'
) and s_id !='01'
) as b on a.s_id = b.s_id
```

## 查询两门及其以上不合格课程的同学 的学号,姓名及其平均成绩

```sql
SELECT  a.s_id ,a.s_name,AVG(s_score) from student as a
INNER JOIN score as b
on a.s_id = b.s_id
WHERE a.s_id in (
SELECT s_id FROM score
WHERE s_score < 60
GROUP BY s_id HAVING COUNT(DISTINCT c_id ) >=2
)
GROUP BY s_id,s_name
```
