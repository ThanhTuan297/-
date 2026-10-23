/* ===== BƯỚC 1: DÁN NGUYÊN VĂN TEXT 1-500 VÀO GIỮA 2 DẤU ` DƯỚI ĐÂY (xóa mục mẫu) ===== */
const RAW = `
1
爱
ài
yêu, thích
HSK 1
2
爱好
àihào
sở thích
HSK 1
3
八
bā
số 8
HSK 1
4
爸爸｜爸
bàba｜bà
bố, ba, cha
HSK 1
5
吧
ba
nào, nhé, chứ, đi (trợ từ)
HSK 1
6
白
bái
trắng
HSK 1
7
白天
báitiān
ban ngày
HSK 1
8
百
bǎi
một trăm
HSK 1
9
班
bān
lớp
HSK 1
10
半
bàn
một nửa
HSK 1
11
半年
bàn nián
nửa năm
HSK 1
12
半天
bàn tiān
nửa ngày
HSK 1
13
帮
bāng
giúp đỡ
HSK 1
14
帮忙
bāng//máng
giúp đỡ
HSK 1
15
包
bāo
bao, cái túi; gói, bọc
HSK 1
16
包子
bāozi
bánh bao
HSK 1
17
杯
bēi
cốc, ly
HSK 1
18
杯子
bēizi
cốc, chén, ly
HSK 1
19
北
běi
bắc
HSK 1
20
北边
běibiān
phía Bắc
HSK 1
21
北京
Běijīng
Bắc Kinh
HSK 1
22
本
běn
cuốn, quyển, tập
HSK 1
23
本子
běn zi
vở, cuốn vở
HSK 1
24
比
bǐ
so, so với
HSK 1
25
别
bié
đừng, không được
HSK 1
26
别的
biéde
cái khác
HSK 1
27
别人
bié·rén
người khác, người ta
HSK 1
28
病
bìng
bệnh
HSK 1
29
病人
bìngrén
bệnh nhân
HSK 1
30
不大
bú dà
nhỏ, không lớn
HSK 1
31
不对
búduì
không đúng
HSK 1
32
不客气
bú kèqi
không có gì
HSK 1
33
不用
búyòng
không cần
HSK 1
34
不
bù
không
HSK 1
35
菜
cài
đồ ăn, món ăn
HSK 1
36
差
chà
thiếu, kém
HSK 1
37
茶
chá
trà
HSK 1
38
常
cháng
thường
HSK 1
39
常常
chángcháng
thường thường
HSK 1
40
唱
chàng
hát
HSK 1
41
唱歌
chànggē
hát, ca hát
HSK 1
42
车
chē
xe
HSK 1
43
车票
chēpiào
vé xe
HSK 1
44
车上
chē shang
trên xe
HSK 1
45
车站
chēzhàn
bến xe
HSK 1
46
吃
chī
ăn
HSK 1
47
吃饭
chī//fàn
ăn cơm
HSK 1
48
出
chū
ra, xuất
HSK 1
49
出来
chūlái
xuất hiện, đi ra
HSK 1
50
出去
chūqù
ra, ra ngoài
HSK 1
51
穿
chuān
mặc
HSK 1
52
床
chuáng
giường, đệm
HSK 1
53
次
cì
lần
HSK 1
54
从
cóng
từ, qua, theo
HSK 1
55
错
cuò
sai
HSK 1
56
打
dǎ
đánh, bắt
HSK 1
57
打车
dǎchē
bắt xe
HSK 1
58
打电话
dǎ diànhuà
gọi điện
HSK 1
59
打开
dǎkāi
mở, mở ra
HSK 1
60
打球
dǎ qiú
chơi bóng
HSK 1
61
大
dà
to, lớn
HSK 1
62
大学
dàxué
đại học
HSK 1
63
大学生
dàxuéshēng
sinh viên đại học
HSK 1
64
到
dào
đến, tới
HSK 1
65
得到
dédào
đạt được, nhận được
HSK 1
66
地
de
biểu thị từ trước nó là trạng
ngữ
HSK 1
67
的
de
(biểu thị sự sở hữu) của
HSK 1
68
等
děng
đợi, chờ
HSK 1
69
地
dì
đất, lục địa; trái đất
HSK 1
70
地点
dìdiǎn
địa điểm, nơi chốn
HSK 1
71
地方
dìfang
nơi, địa phương
HSK 1
72
地上
dìshang
trên mặt đất
HSK 1
73
地图
dìtú
bản đồ
HSK 1
74
弟弟| 弟
dìdi|dì
em trai
HSK 1
75
第（第二）
dì（dì-èr）
thứ ... (số thứ tự)
HSK 1
76
点
diǎn
ít, chút, hơi
HSK 1
77
电
diàn
điện, pin.
HSK 1
78
电话
diànhuà
điện thoại
HSK 1
79
电脑
diànnǎo
máy tính
HSK 1
80
电视
diànshì
truyền hình; TV
HSK 1
81
电视机
diànshìjī
(chiếc) TV
HSK 1
82
电影
diànyǐng
điện ảnh, phim (nói chung)
HSK 1
83
电影院
diànyǐngyuàn
rạp chiếu phim
HSK 1
84
东
dōng
đông
HSK 1
85
东边
dōngbian
phía đông
HSK 1
86
东西
dōngxi
đồ đạc, đồ, vật
HSK 1
87
动
dòng
động, chạm
HSK 1
88
动作
dòngzuò
động tác, hoạt động
HSK 1
89
都
dōu
đều
HSK 1
90
读
dú
đọc
HSK 1
91
读书
dú//shū
đọc sách
HSK 1
92
对
duì
đúng
HSK 1
93
对不起
duìbuqǐ
xin lỗi
HSK 1
94
多
duō
Nhiều
(đại từ nghi vấn) bao nhiêu
HSK 1
95
多少
duōshǎo
bao nhiêu
HSK 1
96
饿
è
đói
HSK 1
97
儿子
érzi
con trai
HSK 1
98
二
èr
số 2
HSK 1
99
饭
fàn
cơm
HSK 1
100
饭店
fàndiàn
quán ăn/ nhà hàng
HSK 1
101
房间
fángjiān
căn phòng
HSK 1
102
房子
fángzi
căn nhà/ căn hộ
HSK 1
103
放
fàng
thả, đặt, để
HSK 1
104
放假
fàng//jià
nghỉ, nghỉ định kỳ
HSK 1
105
放学
fàng//xué
tan học
HSK 1
106
飞
fēi
bay
HSK 1
107
飞机
fēijī
máy bay
HSK 1
108
非常
fēicháng
vô cùng, hết sức, rất
HSK 1
109
分
fēn
phút
HSK 1
110
风
fēng
gió
HSK 1
111
干
gān
khô
HSK 1
112
干净
gānjìng
sạch sẽ
HSK 1
113
干
gàn
làm
HSK 1
114
干什么
gànshénme
làm gì đó
HSK 1
115
高
gāo
cao
HSK 1
116
高兴
gāoxìng
vui vẻ, vui mừng
HSK 1
117
告诉
gàosù
nói, kể lại
HSK 1
118
哥哥｜哥
gēge｜gē
anh trai
HSK 1
119
歌
gē
bài hát
HSK 1
120
个
gè
cái
HSK 1
121
给
gěi
cho
HSK 1
122
跟
gēn
và, cùng
HSK 1
123
工人
gōngrén
công nhân, người lao động nói
chung
HSK 1
124
工作
gōngzuò
công việc
HSK 1
125
关（动）
guān
đóng
HSK 1
126
关上
guānshàng
khép vào
HSK 1
127
贵
guì
đắt
HSK 1
128
国
guó
đất nước, nước nhà, Tổ quốc
HSK 1
129
国家
guójiā
đất nước, Quốc Gia
HSK 1
130
国外
guó wài
nước ngoài
HSK 1
131
过
guò
(đi) qua, (bước) qua
HSK 1
132
还
hái
vẫn, còn
HSK 1
133
还是
háishi
hay là
HSK 1
134
还有
hái yǒu
còn có, còn nữa là
HSK 1
135
孩子
háizi
đứa trẻ, con (tôi)
HSK 1
136
汉语
Hànyǔ
(ngôn ngữ) tiếng Trung
HSK 1
137
汉字
Hànzì
chữ Hán
HSK 1
138
好
hǎo
tốt, đẹp
HSK 1
139
好吃
hǎochī
ngon
HSK 1
140
好看
hǎokàn
đẹp, xinh, hay
HSK 1
141
好听
hǎotīng
êm tai, du dương, dễ nghe
HSK 1
142
好玩儿
hǎowánr
(chơi) vui
HSK 1
143
号
hào
ngày
HSK 1
144
喝
hē
uống
HSK 1
145
和
hé
và
HSK 1
146
很
hěn
rất
HSK 1
147
后
hòu
sau
HSK 1
148
后边
hòubian
phía sau
HSK 1
149
后天
hòutiān
ngày kia
HSK 1
150
花
huā
đóa hoa
HSK 1
151
话
huà
lời nói
HSK 1
152
坏
huài
xấu, hỏng
HSK 1
153
还
huán
trả
HSK 1
154
回
huí
quay lại, về
HSK 1
155
回答
huídá
trả lời
HSK 1
156
回到
huídào
quay về
HSK 1
157
回家
huí jiā
về nhà
HSK 1
158
回来
huí//·lái
về, quay về (hướng gần)
HSK 1
159
回去
huí//·qù
về, quay về (hướng xa)
HSK 1
160
会
huì
sẽ, biết làm
HSK 1
161
火车
huǒchē
xe lửa
HSK 1
162
机场
jīchǎng
sân bay
HSK 1
163
机票
jīpiào
vé máy bay
HSK 1
164
鸡蛋
jīdàn
trứng gà
HSK 1
165
几
jǐ
mấy, vài
HSK 1
166
记
jì
nhớ
HSK 1
167
记得
jìde
ghi nhớ
HSK 1
168
记住
jìzhù
nhớ kĩ
HSK 1
169
家
jiā
nhà
HSK 1
170
家里
jiā lǐ
trong nhà
HSK 1
171
家人
jiārén
người nhà, người trong gia
đình
HSK 1
172
间
jiān
giữa
HSK 1
173
见
jiàn
gặp, thấy
HSK 1
174
见面
jiàn//miàn
gặp mặt
HSK 1
175
教
jiāo
dạy
HSK 1
176
叫（动）
jiào
gọi, kêu
HSK 1
177
教学楼
jiàoxuélóu
khu nhà dạy học
HSK 1
178
姐姐｜姐
jiějie｜jiě
chị gái
HSK 1
179
介绍
jièshào
giới thiệu
HSK 1
180
今年
jīnnián
năm nay
HSK 1
181
今天
jīntiān
ngày hôm nay
HSK 1
182
进
jìn
vào
HSK 1
183
进来
jìn//·lái
bước vào (lại gần chỗ người
nói)
HSK 1
184
进去
jìn//·qù
bước vào (chỗ đó đi, xa người
nói)
HSK 1
185
九
jiǔ
số 9
HSK 1
186
就
jiù
đã; lập tức, ngay
HSK 1
187
觉得
juéde
cảm thấy
HSK 1
188
开
kāi
mở
HSK 1
189
开车
kāi//chē
lái xe
HSK 1
190
开会
kāi//huì
mở họp, họp
HSK 1
191
开玩笑
kāi wánxiào
nói đùa
HSK 1
192
看
kàn
nhìn, xem, ngắm
HSK 1
193
看病
kàn//bìng
khám bệnh
HSK 1
194
看到
kàndào
nhìn thấy
HSK 1
195
看见
kàn//jiàn
nhìn thấy
HSK 1
196
考
kǎo
thi
HSK 1
197
考试
kǎo//shì
kì thi
HSK 1
198
渴
kě
khát
HSK 1
199
课
kè
tiết (học)
HSK 1
200
课本
kèběn
sách giáo khoa
HSK 1
201
课文
kèwén
bài khóa, bài đọc
HSK 1
202
口
kǒu
lượng chỉ người trong gia đình
HSK 1
203
块
kuài
tệ (đơn vị tiền tệ)
HSK 1
204
快
kuài
nhanh
HSK 1
205
来
lái
đến, tới
HSK 1
206
来到
láidào
đến
HSK 1
207
老
lǎo
già, cũ, cổ
HSK 1
208
老人
lǎorén
người già
HSK 1
209
老师
lǎoshī
thầy, cô giáo
HSK 1
210
了
le
trợ từ biểu thị sự thay đổi
HSK 1
211
累
lèi
mệt mỏi
HSK 1
212
冷
lěng
lạnh
HSK 1
213
里
lǐ
trong, bên trong
HSK 1
214
里边
lǐbian
phía trong
HSK 1
215
两
liǎng
hai
HSK 1
216
零|0
líng|0
số 0
HSK 1
217
六
liù
số 6
HSK 1
218
楼
lóu
tầng, lầu
HSK 1
219
楼上
lóu shàng
tầng trên
HSK 1
220
楼下
lóu xià
tầng dưới
HSK 1
221
路
lù
đường xá
HSK 1
222
路口
lùkǒu
giao lộ, đường giao nhau, ngã
ba đường
HSK 1
223
路上
lùshang
trên đường
HSK 1
224
妈妈｜妈
māma｜mā
mẹ
HSK 1
225
马路
mǎlù
đường cái, đường quốc lộ
HSK 1
226
马上
mǎshàng
lập tức, ngay
HSK 1
227
吗
ma
từ để hỏi
HSK 1
228
买
mǎi
mua
HSK 1
229
慢
màn
chậm, từ từ
HSK 1
230
忙
máng
bận, bận rộn
HSK 1
231
毛
máo
lượng từ
HSK 1
232
没
méi
không
HSK 1
233
没关系
méi guānxi
không sao
HSK 1
234
没什么
méi shénme
không có gì
HSK 1
235
没事儿
méi//shìr
không có việc gì
HSK 1
236
没有
méi·yǒu
không có
HSK 1
237
妹妹｜妹
mèimei｜mèi
em gái
HSK 1
238
门
mén
cửa
HSK 1
239
门口
ménkǒu
cửa, cổng
HSK 1
240
门票
ménpiào
vé vào cửa
HSK 1
241
们（朋友们
men（péngyǒumen）
từ chỉ số nhiều
HSK 1
242
米饭
mǐfàn
cơm
HSK 1
243
面包
miànbāo
bánh mì
HSK 1
244
面条儿
miàntiáor
mì sợi
HSK 1
245
名字
míngzi
tên
HSK 1
246
明白
míngbai
biết, hiểu
HSK 1
247
明年
míngnián
năm sau, năm tới
HSK 1
248
明天
míngtiān
ngày mai
HSK 1
249
拿
ná
lấy, cầm
HSK 1
250
哪
nǎ
nào
HSK 1
251
哪里
nǎ·lǐ
đâu, ở đâu, ở chỗ nào
HSK 1
252
哪儿
nǎr
đâu, ở đâu
HSK 1
253
哪些
nǎxiē
những ... nào
HSK 1
254
那（代）
nà
kia, ấy, vậy, vậy thì
HSK 1
255
那边
nàbiān
bên kia
HSK 1
256
那里
nà·lǐ
ở đó, nơi đó
HSK 1
257
那儿
nàr
ở đó, nơi đó
HSK 1
258
那些
nàxiē
những ... ấy, những kia
HSK 1
259
奶
nǎi
sữa
HSK 1
260
奶奶
nǎinai
bà nội, bà
HSK 1
261
男
nán
nam (giới tính nam)
HSK 1
262
男孩儿
nánháir
bạn bé
HSK 1
263
男朋友
nánpéngyǒu
bạn trai
HSK 1
264
男人
nánrén
con trai, đàn ông
HSK 1
265
男生
nánshēng
nam sinh, học sinh nam
HSK 1
266
南
nán
nam
HSK 1
267
南边
nánbian
phía nam
HSK 1
268
难
nán
khó
HSK 1
269
呢
ne
đâu, thế, nhỉ, vậy...
HSK 1
270
能
néng
có thể
HSK 1
271
你
nǐ
anh, chị, bạn, ...
HSK 1
272
你们
nǐmen
các anh, các chị, các bạn
HSK 1
273
年
nián
năm
HSK 1
274
您
nín
ngài, ông, bà (thể hiện sự kính
trọng)
HSK 1
275
牛奶
niúnǎi
sữa bò
HSK 1
276
女
nǚ
nữ (giới tính nữ)
HSK 1
277
女儿
nǚ'ér
con gái
HSK 1
278
女孩儿
nǚháir
cô bé
HSK 1
279
女朋友
nǚpéngyǒu
bạn gái
HSK 1
280
女人
nǚrén
con gái, phụ nữ
HSK 1
281
女生
nǚshēng
nữ sinh, học sinh nữ
HSK 1
282
旁边
pángbiān
bên cạnh
HSK 1
283
跑
pǎo
chạy
HSK 1
284
朋友
péngyǒu
bạn, bạn bè
HSK 1
285
票
piào
vé, phiếu
HSK 1
286
七
qī
số 7
HSK 1
287
起
qǐ
dậy
HSK 1
288
起床
qǐ//chuáng
thức dậy, ngủ dậy
HSK 1
289
起来
qǐ//·lái
ngồi dậy, đứng đậy, thức dậy
HSK 1
290
汽车
qìchē
ôtô, xe hơi
HSK 1
291
前
qián
trước
HSK 1
292
前边
qiánbian
phía trước
HSK 1
293
前天
qiántiān
hôm kia, hôm trước
HSK 1
294
钱
qián
tiền
HSK 1
295
钱包
qiánbāo
ví tiền
HSK 1
296
请
qǐng
mời
HSK 1
297
请假
qǐng//jià
xin nghỉ phép
HSK 1
298
请进
qǐng jìn
mời vào
HSK 1
299
请问
qǐngwèn
xin hỏi
HSK 1
300
请坐
qǐng zuò
mời ngồi
HSK 1
301
球
qiú
quả bóng
HSK 1
302
去
qù
đi
HSK 1
303
去年
qùnián
năm ngoái, năm vừa rồi
HSK 1
304
热
rè
nóng
HSK 1
305
人
rén
người
HSK 1
306
认识
rènshi
biết, quen
HSK 1
307
认真
rènzhēn
nghiêm túc, chăm chỉ
HSK 1
308
日
rì
ngày
HSK 1
309
日期
rìqī
ngày (xác định)
HSK 1
310
肉
ròu
thịt
HSK 1
311
三
sān
số 3
HSK 1
312
山
shān
núi
HSK 1
313
商场
shāngchǎng
trung tâm thương mại
HSK 1
314
商店
shāngdiàn
tiệm tạp hóa, cửa hàng
HSK 1
315
上
shàng
trên
HSK 1
316
上班
shàng//bān
đi làm
HSK 1
317
上边
shàngbiān
bên trên
HSK 1
318
上车
shàngchē
lên xe
HSK 1
319
上次
shàngcì
lần trước
HSK 1
320
上课
shàngkè
vào lớp, đi học
HSK 1
321
上网
shàngwǎng
lên mạng
HSK 1
322
上午
shàngwǔ
buổi sáng
HSK 1
323
上学
shàngxué
(đang) đi học
HSK 1
324
少
shǎo
ít, thiếu
HSK 1
325
谁
shéi
ai
HSK 1
326
身上
shēnshang
trên người
HSK 1
327
身体
shēntǐ
cơ thể, sức khỏe
HSK 1
328
什么
shénme
cái gì
HSK 1
329
生病
shēngbìng
đổ bệnh, bị ốm
HSK 1
330
生气
shēngqì
tức giận
HSK 1
331
生日
shēngrì
ngày sinh nhật
HSK 1
332
十
shí
số 10
HSK 1
333
时候
shíhòu
thời gian, lúc
HSK 1
334
时间
shíjiān
thời gian
HSK 1
335
事
shì
chuyện, việc
HSK 1
336
试
shì
thử
HSK 1
337
是
shì
thì. là
HSK 1
338
是不是
shìbùshì
có phải hay không
HSK 1
339
手
shǒu
tay
HSK 1
340
手机
shǒujī
điện thoại di động
HSK 1
341
书
shū
sách
HSK 1
342
书包
shūbāo
cặp sách
HSK 1
343
书店
shūdiàn
cửa hàng sách, tiệm sách
HSK 1
344
树
shù
cây
HSK 1
345
水
shuǐ
nước
HSK 1
346
水果
shuǐguǒ
nước hoa quả. nước ép
HSK 1
347
睡
shuì
ngủ
HSK 1
348
睡觉
shuìjiào
ngủ
HSK 1
349
说
shuō
nói
HSK 1
350
说话
shuōhuà
nói, trò chuyện
HSK 1
351
四
sì
số 4
HSK 1
352
送
sòng
tặng, đưa cho
HSK 1
353
岁
suì
tuổi
HSK 1
354
他
tā
anh ấy, ông ấy (ngôi 3 chỉ
nam)
HSK 1
355
他们
tāmen
các anh ấy, bọn họ (nam)
HSK 1
356
她
tā
cô ấy, bà ấy (ngôi 3 chỉ nữ)
HSK 1
357
她们
tāmen
các cô ấy
HSK 1
358
太
tài
quá
HSK 1
359
天
tiān
trời
HSK 1
360
天气
tiānqì
thời tiết
HSK 1
361
听
tīng
nghe
HSK 1
362
听到
tīngdào
nghe thấy
HSK 1
363
听见
tīngjiàn
nghe thấy
HSK 1
364
听写
tīngxiě
nghe viết
HSK 1
365
同学
tóngxué
bạn học
HSK 1
366
图书馆
túshūguǎn
thư viện
HSK 1
367
外
wài
ngoài
HSK 1
368
外边
wàibiān
bên ngoài
HSK 1
369
外国
wàiguó
nước ngoài
HSK 1
370
外语
wàiyǔ
tiếng nước ngoài, ngoại ngữ
HSK 1
371
玩儿
wánr
chơi
HSK 1
372
晚
wǎn
buổi tối, muộn
HSK 1
373
晚饭
wǎnfàn
cơm tối, bữa tối
HSK 1
374
晚上
wǎnshang
buổi tối
HSK 1
375
网上
wǎng shang
trên mạng
HSK 1
376
网友
wǎngyǒu
bạn trên mạng
HSK 1
377
忘
wàng
quên
HSK 1
378
忘记
wàngjì
quên, quên mất
HSK 1
379
问
wèn
hỏi
HSK 1
380
我
wǒ
tôi, tớ, bạn (ngôi thứ nhất)
HSK 1
381
我们
wǒmen
chúng ta (nhiều người)
HSK 1
382
五
wǔ
số 5
HSK 1
383
午饭
wǔfàn
bữa trưa
HSK 1
384
西
xī
tây
HSK 1
385
西边
xībian
phía tây
HSK 1
386
洗
xǐ
rửa
HSK 1
387
洗手间
xǐshǒujiān
nhà vệ sinh
HSK 1
388
喜欢
xǐhuān
thích, được yêu thích
HSK 1
389
下（名、动
xià
xuống dưới bên dưới
HSK 1
390
下班
xià//bān
tan làm
HSK 1
391
下边
xiàbian
bên dưới
HSK 1
392
下车
xià chē
xuống xe
HSK 1
393
下次
xià cì
lần kế tiếp, lần sau
HSK 1
394
下课
xià//kè
tan học
HSK 1
395
下午
xiàwǔ
buổi chiều
HSK 1
396
下雨
xià yǔ
đổ mưa
HSK 1
397
先
xiān
trước
HSK 1
398
先生
xiānsheng
quý ông (gọi tôn kính)
HSK 1
399
现在
xiànzài
hiện tại, bây giờ
HSK 1
400
想
xiǎng
muốn, suy nghĩ
HSK 1
401
小
xiǎo
nhỏ, bé
HSK 1
402
小孩儿
xiǎoháir
trẻ em
HSK 1
403
小姐
xiǎojiě
tiểu thư, cô, em
HSK 1
404
小朋友
xiǎopéngyǒu
trẻ em, bạn nhỏ
HSK 1
405
小时
xiǎoshí
tiếng, giờ đồng hồ
HSK 1
406
小学
xiǎoxué
bậc tiểu học
HSK 1
407
小学生
xiǎoxuéshēng
học sinh tiểu học
HSK 1
408
笑
xiào
cười
HSK 1
409
写
xiě
viết
HSK 1
410
谢谢
xièxie
cảm ơn
HSK 1
411
新
xīn
mới
HSK 1
412
新年
xīnnián
năm mới
HSK 1
413
星期
xīngqī
tuần, thứ
HSK 1
414
星期日
xīngqīrì
chủ nhật
HSK 1
415
星期天
xīngqītiān
chủ nhật
HSK 1
416
行
xíng
được, ổn
HSK 1
417
休息
xiūxi
nghỉ ngơi
HSK 1
418
学
xué
học
HSK 1
419
学生
xué·shēng
học sinh, sinh viên
HSK 1
420
学习
xuéxí
học tập
HSK 1
421
学校
xuéxiào
trường học
HSK 1
422
学院
xuéyuàn
học viện
HSK 1
423
要（动）
yào
muốn, cần, phải
HSK 1
424
爷爷
yéye
ông nội, ông
HSK 1
425
也
yě
cũng
HSK 1
426
页
yè
trang
HSK 1
427
一
yī
số 1
HSK 1
428
衣服
yīfu
quần áo
HSK 1
429
医生
yīshēng
bác sĩ
HSK 1
430
医院
yīyuàn
bệnh viện
HSK 1
431
一半
yíbàn
một nửa
HSK 1
432
一会儿
yíhuìr
một chốc, một lát
HSK 1
433
一块儿
yíkuàir
cùng nơi, cùng chỗ, cùng nhau
HSK 1
434
一下儿
yíxiàr
một lát, một lúc
HSK 1
435
一样
yíyàng
giống nhau, như nhau
HSK 1
436
一边
yìbiān
một bên, một mặt
HSK 1
437
一点儿
yìdiǎnr
một chút
HSK 1
438
一起
yìqǐ
cùng
HSK 1
439
一些
yìxiē
một ít, một chút
HSK 1
440
用
yòng
dùng, sử dụng
HSK 1
441
有
yǒu
có
HSK 1
442
有的
yǒude
có
HSK 1
443
有名
yǒu//míng
nổi tiếng
HSK 1
444
有时候｜有时
yǒushíhou｜y
có lúc
HSK 1
445
有（一）些
yǒu（yì）xiē
có một tí
HSK 1
446
有用
yǒuyòng
có ích, có tác dụng
HSK 1
447
右
yòu
bên phải
HSK 1
448
右边
yòubian
phía bên phải
HSK 1
449
雨
yǔ
mưa
HSK 1
450
元
yuán
đồng (đơn vị tiền tệ)
HSK 1
451
远
yuǎn
xa
HSK 1
452
月
yuè
mặt trăng, tháng
HSK 1
453
再
zài
lại
HSK 1
454
再见
zàijiàn
hẹn gặp lại/ Tạm biệt
HSK 1
455
在
zài
đang, ở tại
HSK 1
456
在家
zàijiā
ở nhà
HSK 1
457
早
zǎo
sớm
HSK 1
458
早饭
zǎofàn
bữa sáng
HSK 1
459
早上
zǎoshàng
buổi sáng
HSK 1
460
怎么
zěnme
làm sao, thế nào
HSK 1
461
站（名）
zhàn
bến, trạm
HSK 1
462
找
zhǎo
tìm
HSK 1
463
找到
zhǎodào
tìm thấy
HSK 1
464
这
zhè
này, đây
HSK 1
465
这边
zhèbiān
bên này
HSK 1
466
这里
zhè·lǐ
nơi đây
HSK 1
467
这儿
zhèr
đây
HSK 1
468
这些
zhèxiē
những cái này
HSK 1
469
着
zhe

HSK 1
470
真
zhēn
thật là
HSK 1
471
真的
zhēnde
Thật ư? Thật đó!
HSK 1
472
正（副）
zhèng
khéo, chính,...
HSK 1
473
正在
zhèngzài
đang
HSK 1
474
知道
zhī·dào
biết
HSK 1
475
知识
zhīshì
kiến thức
HSK 1
476
中
zhōng
giữa
HSK 1
477
中国
Zhōngguó
nước Trung Quốc
HSK 1
478
中间
zhōngjiān
giữa
HSK 1
479
中文
Zhōngwén
(văn tự) Tiếng Trung
HSK 1
480
中午
zhōngwǔ
buổi trưa
HSK 1
481
中学
zhōngxué
cấp Trung học
HSK 1
482
中学生
zhōngxuéshēn
học sinh Trung học
HSK 1
483
重
zhòng
nặng
HSK 1
484
重要
zhòngyào
quan trọng
HSK 1
485
住
zhù
ở tại
HSK 1
486
准备
zhǔnbèi
chuẩn bị
HSK 1
487
桌子
zhuōzi
cái bàn
HSK 1
488
字
zì
chữ, chữ viết, văn tự
HSK 1
489
子（桌子）
zi（zhuōzi）
cái
HSK 1
490
走
zǒu
đi
HSK 1
491
走路
zǒu//lù
đi đường, đi bộ
HSK 1
492
最
zuì
nhất, số một
HSK 1
493
最好
zuìhǎo
tốt nhất
HSK 1
494
最后
zuìhòu
cuối cùng, sau cùng
HSK 1
495
昨天
zuótiān
hôm qua
HSK 1
496
左
zuǒ
bên trái
HSK 1
497
左边
zuǒbiān
bên trái
HSK 1
498
坐
zuò
ngồi
HSK 1
499
坐下
zuòxià
ngồi xuống
HSK 1
500
做
zuò
làm
HSK 1
`;
/* ===== HẾT PHẦN DỮ LIỆU ===== */

/* ====== DỮ LIỆU ====== */
function parseRaw(t) {
  const out = []; let buf = [];
  t.split(/\r?\n/).forEach(l => {
    if (/^HSK\s*\d\s*$/.test(l.trim())) {
      while (buf.length && !buf[0].trim()) buf.shift();
      if (buf.length >= 3 && /^\d+$/.test(buf[0].trim()))
        out.push({ id: +buf[0].trim(), word: buf[1].trim(), pinyin: buf[2].trim(), meaning: buf.slice(3).join(' ').replace(/\s+/g, ' ').trim() });
      buf = [];
    } else buf.push(l);
  });
  return out;
}
const V = parseRaw(RAW)
  .sort((a, b) => a.id - b.id);
const clean = w => w.replace(/[（(].*$/, '').trim();
const first = w => clean(w).split(/[｜|]/)[0].trim();
const showWord = w => clean(w).replace(/\s*[｜|]\s*/g, ' | ');
const byId = id => V.find(v => v.id === id);
const partItems = n => V.filter(v => v.id > (n - 1) * 100 && v.id <= n * 100);
const $ = s => document.querySelector(s);
const view = h => { $('#view').innerHTML = h; window.scrollTo(0, 0); };
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ====== ÂM THANH ====== */
function speakId(id) {
  const v = byId(id);
  if (!v || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(first(v.word));
  u.lang = 'zh-CN'; u.rate = 0.85;
  speechSynthesis.speak(u);
}
const speakBtn = id => `<button onclick="speakId(${id})" title="Nghe phát âm" class="speak-btn">🔊</button>`;

/* ====== DARK MODE ====== */
function toggleDarkMode() {
  const dark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  $('#theme-icon').innerText = dark ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  $('#theme-icon').innerText = '☀️';
}

/* ====== ĐĂNG NHẬP ====== */
function handleLogin(e) {
  e.preventDefault();
  if ($('#username').value.trim() === '030106' && $('#password').value.trim() === '030106') {
    sessionStorage.setItem('isLoggedIn', 'true'); route();
  } else $('#login-error').classList.remove('hidden');
}
function logout() { sessionStorage.removeItem('isLoggedIn'); location.hash = '#/'; route(); }
function renderLogin() {
  view(`<div class="max-w-sm mx-auto custom-card p-8 rounded-3xl shadow-xl mt-8">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-red-100 dark:bg-red-950 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 font-extrabold text-xl">HSK</div>
      <h2 class="text-2xl font-bold">Đăng Nhập</h2>
    </div>
    <form onsubmit="handleLogin(event)" class="space-y-4">
      <input id="username" required placeholder="Tài khoản" class="w-full p-3 custom-sub rounded-xl text-sm">
      <input id="password" type="password" required placeholder="Mật khẩu" class="w-full p-3 custom-sub rounded-xl text-sm">
      <p id="login-error" class="text-xs text-red-500 font-semibold hidden">Tài khoản hoặc mật khẩu không chính xác.</p>
      <button class="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm">Đăng Nhập</button>
    </form></div>`);
}

/* ====== ROUTER ====== */
function route() {
  const logged = sessionStorage.getItem('isLoggedIn') === 'true';
  $('#nav').classList.toggle('hidden', !logged);
  if (!logged) return renderLogin();
  const h = location.hash.replace(/^#\/?/, '').split('/');
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === h[0]));
  if (!h[0]) return renderHome();
  if (h[0] === 'hsk1') {
    if (!h[1]) return renderParts();
    return h[3] === 'quiz' ? renderSetup(+h[2]) : renderList(+h[2]);
  }
  renderPlaceholder(h[0].toUpperCase());
}
addEventListener('hashchange', route);
route();

/* ====== TRANG CHỦ / DANH MỤC ====== */
function renderHome() {
  const card = (tag, name, count, desc, href, btn) => `
    <div class="custom-card p-6 rounded-3xl shadow-sm flex flex-col justify-between">
      <div><div class="flex justify-between items-center mb-3">
        <span class="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-600 text-white uppercase">${tag}</span>
        <span class="text-xs text-slate-500">${count} Từ vựng</span></div>
        <h3 class="text-xl font-bold mb-1">${name}</h3>
        <p class="text-sm text-slate-500 mb-5">${desc}</p></div>
      <a href="${href}" class="block text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm">${btn} →</a></div>`;
  view(`<div class="text-center mb-8"><h1 class="text-3xl md:text-4xl font-extrabold mb-2">Lựa Chọn Cấp Độ Học Từ Vựng</h1>
    <p class="text-sm text-slate-500">Chọn trình độ HSK phù hợp để bắt đầu luyện tập.</p></div>
    <div class="grid md:grid-cols-2 gap-5">
      ${card('Cơ bản', 'HSK 1', 500, 'Dành cho mấy con gà', '#/hsk1', 'Tôi gà -.-')}
      ${card('Sơ cấp', 'HSK 2', 1272, 'Cái này khó lắm đấy, làm được không?', '#/hsk2', 'Bố m đẳng cấp')}
      <div class="md:col-span-2 md:w-1/2 md:mx-auto">${card('Trung cấp', 'HSK 3', 2245, 'Sắp có', '#/hsk3', 'Xem')}</div>
    </div>`);
}
function renderPlaceholder(name) {
  view(`<div class="text-center py-20"><h1 class="text-3xl font-extrabold mb-2">${name}</h1><p class="text-slate-500">Nội dung sắp có.</p>
    <a href="#/" class="inline-block mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-xl text-sm">Về Trang Chủ</a></div>`);
}
function renderParts() {
  const cards = [1, 2, 3, 4, 5].map(n => {
    const c = partItems(n).length;
    return `<div class="custom-card p-6 rounded-3xl shadow-sm">
      <h3 class="text-xl font-bold">Phần ${n}</h3>
      <p class="text-sm text-slate-500 mb-5">Từ ${(n - 1) * 100 + 1} - ${n * 100}${c < 100 ? ` (đã có ${c})` : ''}</p>
      ${c ? `<a href="#/hsk1/p/${n}" class="block text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm">Xem danh sách</a>`
          : `<span class="block text-center py-3 bg-slate-300 dark:bg-slate-700 text-slate-500 font-bold rounded-xl text-sm">Sắp có</span>`}</div>`;
  }).join('');
  view(`<div class="text-center mb-8"><h1 class="text-3xl md:text-4xl font-extrabold mb-2">Danh Mục Từ Vựng HSK 1</h1>
    <p class="text-sm text-slate-500">Chọn phần từ vựng để bắt đầu học và làm bài tập</p></div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">${cards}</div>`);
}

/* ====== DANH SÁCH TỪ ====== */
function renderList(n) {
  const items = partItems(n);
  if (!items.length) return renderParts();
  view(`<a href="#/hsk1" class="text-xs font-semibold text-slate-500 hover:text-red-600">← Quay lại danh mục</a>
    <div class="flex flex-wrap justify-between items-center gap-3 my-4">
      <h1 class="text-2xl md:text-3xl font-extrabold text-red-600">Phần ${n}: Từ ${(n - 1) * 100 + 1} - ${n * 100}</h1>
      <a href="#/hsk1/p/${n}/quiz" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm">Làm trắc nghiệm →</a></div>
    <div class="custom-card rounded-2xl divide-y" style="--tw-divide-opacity:1">
      ${items.map(v => `<div class="flex items-center gap-3 p-3 border-b" style="border-color:var(--border-color)">
        <span class="w-9 text-xs text-slate-400">#${v.id}</span>${speakBtn(v.id)}
        <div class="w-28 md:w-36"><div class="text-xl font-bold">${showWord(v.word)}</div><div class="text-xs text-red-600 dark:text-red-400 font-semibold">${v.pinyin}</div></div>
        <div class="text-sm flex-1">${v.meaning || '—'}</div></div>`).join('')}
    </div>`);
}

/* ====== QUIZ ====== */
let Q = null;
function renderSetup(n) {
  const items = partItems(n);
  if (!items.length) return renderParts();
  const groups = [];
  for (let g = 0; g < 5; g++) {
    const arr = items.slice(g * 20, g * 20 + 20);
    if (arr.length) groups.push({ arr, label: `Nhóm ${g + 1} (${arr[0].id} - ${arr[arr.length - 1].id})`, sub: `Từ "${first(arr[0].word)}" đến "${first(arr[arr.length - 1].word)}"` });
  }
  const radio = (i, label, sub) => `<label class="flex items-center p-3.5 custom-sub rounded-2xl cursor-pointer hover:border-red-400">
    <input type="radio" name="grp" value="${i}" ${i === '0' ? 'checked' : ''} class="w-4 h-4 accent-red-600"><div class="ml-3">
    <span class="block font-semibold text-sm">${label}</span><span class="block text-xs text-slate-400">${sub}</span></div></label>`;
  view(`<a href="#/hsk1/p/${n}" class="text-xs font-semibold text-slate-500 hover:text-red-600">← Quay lại danh sách</a>
    <h1 class="text-2xl md:text-3xl font-extrabold text-red-600 text-center my-4">Trắc Nghiệm HSK 1 (Phần ${n}: Từ ${(n - 1) * 100 + 1} - ${n * 100})</h1>
    <div class="custom-card rounded-3xl shadow-xl p-5 md:p-8 space-y-6">
      <div class="text-center"><h2 class="text-2xl font-bold">Cấu hình bài luyện tập</h2></div>
      <div><p class="text-sm font-semibold mb-3">1. Chọn nhóm từ vựng cần ôn:</p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          ${groups.map((g, i) => radio(String(i), g.label, g.sub)).join('')}
          ${radio('all', `Tất cả (${items[0].id} - ${items[items.length - 1].id})`, `Gộp chung ${items.length} từ`)}
        </div></div>
      <div class="grid md:grid-cols-2 gap-4">
        <div><p class="text-sm font-semibold mb-2">2. Số lượng câu hỏi:</p>
          <select id="qcount" class="w-full p-3 custom-sub rounded-xl text-sm font-medium">
            <option value="10">Luyện nhanh (10 câu)</option><option value="20" selected>Bộ 20 câu (Theo nhóm)</option><option value="all">Toàn bộ từ trong nhóm đã chọn</option></select></div>
        <div><p class="text-sm font-semibold mb-2">3. Thứ tự câu hỏi:</p>
          <div class="grid grid-cols-2 gap-2">
            <label class="flex items-center justify-center p-3 custom-sub rounded-xl cursor-pointer"><input type="radio" name="ord" value="seq" checked class="accent-red-600"><span class="ml-2 text-xs font-semibold">Theo thứ tự</span></label>
            <label class="flex items-center justify-center p-3 custom-sub rounded-xl cursor-pointer"><input type="radio" name="ord" value="rand" class="accent-red-600"><span class="ml-2 text-xs font-semibold">Ngẫu nhiên</span></label></div></div></div>
      <button onclick="startQuiz(${n})" class="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg">Bắt Đầu Ôn Tập →</button>
    </div>`);
}
function startQuiz(n) {
  const items = partItems(n);
  const g = document.querySelector('input[name=grp]:checked').value;
  let pool = g === 'all' ? items : items.slice(+g * 20, +g * 20 + 20);
  pool = pool.filter(v => v.meaning);
  if (document.querySelector('input[name=ord]:checked').value === 'rand') pool = shuffle([...pool]);
  const c = $('#qcount').value;
  if (c !== 'all') pool = pool.slice(0, +c);
  beginQuiz(n, pool);
}
function beginQuiz(n, list) { Q = { n, list, i: 0, ok: 0, bad: 0, wrong: [], done: false }; renderQuestion(); }
function renderQuestion() {
  const q = Q.list[Q.i]; Q.done = false;
  const others = [...new Set(V.filter(v => v.meaning).map(v => v.meaning))].filter(m => m !== q.meaning);
  Q.choices = shuffle([q.meaning, ...shuffle(others).slice(0, 3)]);
  const pct = ((Q.i + 1) / Q.list.length) * 100;
  view(`<div class="custom-card rounded-3xl shadow-xl p-5 md:p-8 space-y-5">
    <div class="flex justify-between text-sm text-slate-500"><span>Tiến trình: <b class="text-red-600">${Q.i + 1}</b>/<b>${Q.list.length}</b></span>
      <span><b class="text-emerald-500">● Đúng: ${Q.ok}</b> &nbsp; <b class="text-rose-500">● Sai: ${Q.bad}</b></span></div>
    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"><div class="bg-red-600 h-2 rounded-full" style="width:${pct}%"></div></div>
    <div class="custom-sub rounded-3xl text-center py-10 px-4 relative">
      <span class="absolute top-4 left-4 px-2.5 py-1 bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 text-xs font-bold rounded-lg">HSK 1</span>
      <span class="absolute top-4 right-4 text-xs font-bold text-slate-400">#${q.id}</span>
      <div class="flex items-center justify-center gap-3"><h3 class="text-5xl md:text-6xl font-extrabold">${showWord(q.word)}</h3>${speakBtn(q.id)}</div>
      <p id="pinyin" class="text-2xl text-red-600 dark:text-red-400 font-semibold mt-3 h-8 opacity-0 transition-opacity">${q.pinyin}</p></div>
    <div id="opts" class="grid md:grid-cols-2 gap-3">
      ${Q.choices.map((c, i) => `<button onclick="pick(${i})" class="opt w-full p-4 text-left border rounded-2xl custom-sub hover:border-red-400 flex items-center">
        <span class="badge w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0">${'ABCD'[i]}</span>
        <span class="font-semibold">${c}</span></button>`).join('')}</div>
    <div id="fb" class="hidden p-4 rounded-2xl flex items-center justify-between gap-3"></div></div>`);
  speakId(q.id);
}
function pick(i) {
  if (Q.done) return; Q.done = true;
  const q = Q.list[Q.i], right = Q.choices.indexOf(q.meaning), okAns = i === right;
  document.querySelectorAll('.opt').forEach((b, k) => {
    b.disabled = true;
    const paint = (col) => { b.classList.add(`border-${col}-500`, `bg-${col}-100`, `text-${col}-900`, 'dark:bg-' + col + '-950', 'dark:text-' + col + '-200'); b.querySelector('.badge').className = `badge w-8 h-8 rounded-xl bg-${col}-500 text-white flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0`; };
    if (k === right) paint('emerald'); else if (k === i) paint('rose');
  });
  $('#pinyin').classList.remove('opacity-0');
  if (okAns) Q.ok++; else { Q.bad++; Q.wrong.push(q); }
  const col = okAns ? 'emerald' : 'rose', last = Q.i + 1 >= Q.list.length;
  const fb = $('#fb');
  fb.className = `p-4 rounded-2xl flex items-center justify-between gap-3 bg-${col}-50 dark:bg-${col}-950/50 border border-${col}-300 dark:border-${col}-800`;
  fb.innerHTML = `<div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-${col}-500 text-white flex items-center justify-center text-lg">${okAns ? '✓' : '✕'}</div>
    <div><p class="font-bold text-${col}-800 dark:text-${col}-300">${okAns ? 'Chính xác!' : 'Chưa chính xác!'}</p>
    <p class="text-xs text-slate-500">${okAns ? 'Nghĩa' : 'Đáp án đúng là'}: ${q.meaning}</p></div></div>
    <button onclick="nextQ()" class="px-6 py-2.5 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-sm">${last ? 'Xem kết quả' : 'Tiếp Tục'} →</button>`;
}
function nextQ() { Q.i++; Q.i < Q.list.length ? renderQuestion() : renderResult(); }
function renderResult() {
  const pct = Math.round((Q.ok / Q.list.length) * 100);
  view(`<div class="custom-card rounded-3xl shadow-xl p-5 md:p-8 space-y-6">
    <div class="text-center"><h2 class="text-3xl font-extrabold">Hoàn Thành Đợt Luyện Tập!</h2></div>
    <div class="grid grid-cols-3 gap-3 text-center">
      <div class="rounded-2xl p-4 bg-red-50 dark:bg-red-950/30"><span class="block text-[11px] font-bold text-red-600 uppercase">Tỉ lệ đúng</span><b class="text-3xl text-red-600">${pct}%</b></div>
      <div class="rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/30"><span class="block text-[11px] font-bold text-emerald-600 uppercase">Câu đúng</span><b class="text-3xl text-emerald-600">${Q.ok}</b></div>
      <div class="rounded-2xl p-4 bg-rose-50 dark:bg-rose-950/30"><span class="block text-[11px] font-bold text-rose-500 uppercase">Câu sai</span><b class="text-3xl text-rose-600">${Q.bad}</b></div></div>
    <div><div class="flex justify-between items-center mb-2"><h3 class="font-bold text-sm">⚠ Danh sách từ cần lưu ý:</h3>
      ${Q.wrong.length ? `<button onclick="retryWrong()" class="px-3.5 py-1.5 bg-red-600 text-white font-bold rounded-lg text-xs">Ôn lại riêng câu sai</button>` : ''}</div>
      <div class="max-h-60 overflow-y-auto custom-sub rounded-2xl">
      ${Q.wrong.length ? Q.wrong.map(w => `<div class="p-3 flex items-center gap-3 border-b" style="border-color:var(--border-color)">${speakBtn(w.id)}
        <div class="w-32"><b class="text-lg">${showWord(w.word)}</b> <span class="text-xs text-red-600 font-semibold">[${w.pinyin}]</span></div><span class="text-sm flex-1">${w.meaning}</span></div>`).join('')
        : '<p class="p-6 text-center text-slate-400 text-sm">Tuyệt vời! Bạn không sai câu nào.</p>'}</div></div>
    <div class="flex flex-col sm:flex-row gap-3">
      <button onclick="beginQuiz(Q.n, Q.list)" class="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm">Làm Lại Đợt Này</button>
      <a href="#/hsk1/p/${Q.n}/quiz" class="flex-1 py-3.5 custom-sub font-semibold rounded-xl text-sm text-center">Thay Đổi Tùy Chọn</a></div></div>`);
}
function retryWrong() { beginQuiz(Q.n, shuffle([...Q.wrong])); }
