import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    prompt: "周六早上 8 点你醒了，哪个能让你立刻起床？",
    options: [
      { text: "约好的羽毛球局", effects: { social: 3, intensity: 1 } },
      { text: "一个人去江边跑步", effects: { social: -3, outdoor: 2 } },
      { text: "健身房上午没人，正适合练", effects: { social: -1, intensity: 2, outdoor: -2 } },
      { text: "再睡两小时，下午散散步", effects: { commit: -3, intensity: -2 } },
    ],
  },
  {
    id: 2,
    prompt: "第一次开始一项运动，你会先做什么？",
    options: [
      { text: "把全套装备买齐再开始", effects: { gear: 3 } },
      { text: "蹭朋友的卡先试试", effects: { commit: -2, gear: -2 } },
      { text: "直接开始，缺啥再买", effects: { gear: -1, intensity: 1 } },
      { text: "朋友圈先发起来，flag 立住", effects: { show: 3 } },
    ],
  },
  {
    id: 3,
    prompt: "刚跑完 5 公里，第一件事是？",
    options: [
      { text: "上传到 Keep / Strava", effects: { show: 2, commit: 2 } },
      { text: "发个朋友圈定位", effects: { show: 3 } },
      { text: "拉伸、喝水、回家洗澡", effects: { commit: 2, show: -2 } },
      { text: "找个店撸串去", effects: { social: 3, commit: -2 } },
    ],
  },
  {
    id: 4,
    prompt: "健身房看到镜子，你的第一反应？",
    options: [
      { text: "顺手拍个肌肉照", effects: { show: 3, gear: 1 } },
      { text: "检查动作是否标准", effects: { commit: 3 } },
      { text: "假装没看见，怕尴尬", effects: { social: -2, show: -3 } },
      { text: "看看今天穿得好不好看", effects: { gear: 2, show: 2 } },
    ],
  },
  {
    id: 5,
    prompt: "你最不能接受的运动方式是？",
    options: [
      { text: "一个人闷头练", effects: { social: 3 } },
      { text: "一群人挤在一起跟节奏", effects: { social: -3 } },
      { text: "没有计划随便练", effects: { commit: 3 } },
      { text: "又累又出汗", effects: { intensity: -3 } },
    ],
  },
  {
    id: 6,
    prompt: "你买运动装备的逻辑是？",
    options: [
      { text: "最贵的就是最好的", effects: { gear: 3 } },
      { text: "看朋友圈大家穿啥我穿啥", effects: { gear: 2, show: 1 } },
      { text: "能用就行，不讲究", effects: { gear: -3 } },
      { text: "二手平台淘性价比", effects: { gear: -1, commit: 1 } },
    ],
  },
  {
    id: 7,
    prompt: "「明天 5 点起来跑步」你的反应？",
    options: [
      { text: "早就起来了，拍朝霞最美", effects: { commit: 3, outdoor: 3 } },
      { text: "5 点？我才睡", effects: { commit: -3, outdoor: -2 } },
      { text: "看天气，下雨就不去", effects: { outdoor: -1 } },
      { text: "起来可以，但跑步机更好", effects: { outdoor: -3 } },
    ],
  },
  {
    id: 8,
    prompt: "比赛/对抗中你输了，第一反应是？",
    options: [
      { text: "摔东西、爆粗口", effects: { intensity: 3, social: -1 } },
      { text: "复盘哪里没做好", effects: { commit: 3 } },
      { text: "笑笑算了，下次再来", effects: { intensity: -2, commit: -2 } },
      { text: "「我今天状态不好」", effects: { show: 2 } },
    ],
  },
  {
    id: 9,
    prompt: "朋友邀你周末去户外露营徒步，你？",
    options: [
      { text: "装备清单已经列好了", effects: { outdoor: 3, gear: 2 } },
      { text: "去去去，主要为了拍照", effects: { outdoor: 1, show: 3 } },
      { text: "不行，我怕晒怕虫", effects: { outdoor: -3 } },
      { text: "看心情，临时决定", effects: { commit: -2 } },
    ],
  },
  {
    id: 10,
    prompt: "健身房里你最反感哪种人？",
    options: [
      { text: "占着器械只玩手机", effects: { commit: 2 } },
      { text: "一直照镜子拍照的", effects: { show: -3 } },
      { text: "大声打电话/喊叫的", effects: { social: -2 } },
      { text: "装备特别夸张的", effects: { gear: -2 } },
    ],
  },
  {
    id: 11,
    prompt: "你对「运动数据」的态度？",
    options: [
      { text: "不戴手环不算运动", effects: { commit: 3, gear: 2 } },
      { text: "看看就行，不较真", effects: { commit: -1 } },
      { text: "完全不在乎，凭感觉", effects: { commit: -3 } },
      { text: "数据是用来发朋友圈的", effects: { show: 3 } },
    ],
  },
  {
    id: 12,
    prompt: "周末你最可能出现在哪里？",
    options: [
      { text: "健身房或运动场", effects: { intensity: 2 } },
      { text: "山里 / 海边 / 户外", effects: { outdoor: 3 } },
      { text: "商场 / 咖啡店", effects: { intensity: -2, outdoor: -2 } },
      { text: "沙发上", effects: { commit: -3, intensity: -3 } },
    ],
  },
  {
    id: 13,
    prompt: "别人问「最近在练什么？」你的回答风格？",
    options: [
      { text: "详细汇报训练计划", effects: { commit: 3 } },
      { text: "「就...随便练练」实际练得很猛", effects: { show: -2, commit: 2 } },
      { text: "大谈巅峰期我多强", effects: { show: 3 } },
      { text: "「等我瘦下来一定...」", effects: { commit: -3 } },
    ],
  },
  {
    id: 14,
    prompt: "你买健身卡 / 报运动课的频率？",
    options: [
      { text: "每年办，每年只去几次", effects: { commit: -3 } },
      { text: "月卡按时续，每周必到", effects: { commit: 3 } },
      { text: "朋友拉我才办", effects: { social: 2, commit: -1 } },
      { text: "蹭朋友的卡，自己不办", effects: { gear: -3, commit: -2 } },
    ],
  },
  {
    id: 15,
    prompt: "你最享受的运动场景是？",
    options: [
      { text: "一个人戴耳机沉浸", effects: { social: -3 } },
      { text: "跟搭子互相加油", effects: { social: 2 } },
      { text: "一大群人一起跟节奏", effects: { social: 3 } },
      { text: "不运动最舒服", effects: { intensity: -3, commit: -2 } },
    ],
  },
  {
    id: 16,
    prompt: "选一个最像你的运动状态：",
    options: [
      { text: "三天打鱼两天晒网", effects: { commit: -3 } },
      { text: "雷打不动每天定点", effects: { commit: 3 } },
      { text: "心情好就练，心情差也不练", effects: { commit: -1 } },
      { text: "主要是发圈用", effects: { show: 3 } },
    ],
  },
  {
    id: 17,
    prompt: "你最在意运动后的什么？",
    options: [
      { text: "配速、心率、卡路里数据", effects: { commit: 3 } },
      { text: "出片好不好看", effects: { show: 3 } },
      { text: "累不累、爽不爽", effects: { intensity: 1 } },
      { text: "完事去吃啥喝啥", effects: { social: 2, commit: -2 } },
    ],
  },
  {
    id: 18,
    prompt: "在户外公共场所运动你？",
    options: [
      { text: "完全 OK，享受被看", effects: { show: 2, outdoor: 2 } },
      { text: "紧张，尽量避开人", effects: { social: -3 } },
      { text: "装备齐全显得专业", effects: { gear: 2 } },
      { text: "怕晒怕脏不去", effects: { outdoor: -3 } },
    ],
  },
  {
    id: 19,
    prompt: "你听到「不出汗等于没练」的反应？",
    options: [
      { text: "完全同意，必须练到瘫", effects: { intensity: 3 } },
      { text: "不一定，瑜伽也是运动", effects: { intensity: -1 } },
      { text: "出汗累，能少则少", effects: { intensity: -2 } },
      { text: "出汗了就该撸串补一补", effects: { social: 2, intensity: -1 } },
    ],
  },
  {
    id: 20,
    prompt: "给你三个月一定要练成的目标？",
    options: [
      { text: "全马 / 卧推 100kg / 倒立", effects: { commit: 3, intensity: 2 } },
      { text: "体脂下来 5%", effects: { commit: 2 } },
      { text: "朋友圈发够 30 条运动", effects: { show: 3 } },
      { text: "没目标，开心就好", effects: { commit: -2 } },
    ],
  },
  {
    id: 21,
    prompt: "别人说「你最近瘦了/壮了」，你的反应？",
    options: [
      { text: "装作不在意，内心狂喜", effects: { show: 2, intensity: 1 } },
      { text: "「是吗没感觉」其实自己天天照镜子", effects: { show: 1, commit: 2 } },
      { text: "「我练了三个月你才看出来！」", effects: { show: 3, social: 1 } },
      { text: "「假的，吃完晚饭就胖回去」", effects: { commit: -2 } },
    ],
  },
  {
    id: 22,
    prompt: "刷到健身网红视频你的反应？",
    options: [
      { text: "收藏起来回家试", effects: { commit: 2 } },
      { text: "「身材好，但动作没我标准」", effects: { show: 1, commit: 1 } },
      { text: "点赞收藏从来不练", effects: { commit: -3 } },
      { text: "顺手买了他卖的补剂", effects: { gear: 3 } },
    ],
  },
  {
    id: 23,
    prompt: "朋友圈别人秀肌肉/健身自拍你？",
    options: [
      { text: "自己也准备发一条", effects: { show: 3 } },
      { text: "默默点赞但不评论", effects: { social: -1 } },
      { text: "评论「卷死了卷死了」", effects: { social: 2 } },
      { text: "屏蔽掉，不想看", effects: { social: -2, show: -2 } },
    ],
  },
  {
    id: 24,
    prompt: "你对私教课的态度？",
    options: [
      { text: "必须上，自己练不到位", effects: { commit: 3, gear: 1 } },
      { text: "偶尔体验下让人纠正动作", effects: { commit: 1 } },
      { text: "太贵，YouTube 免费的更香", effects: { gear: -3, commit: 1 } },
      { text: "上私教主要为了发圈", effects: { show: 3 } },
    ],
  },
  {
    id: 25,
    prompt: "团课教练让你换搭档你？",
    options: [
      { text: "OK，刚好认识新人", effects: { social: 3 } },
      { text: "内心拒绝，表面配合", effects: { social: -2 } },
      { text: "直接说「我习惯一个人」", effects: { social: -3 } },
      { text: "默默觉得这教练事真多", effects: { social: -1 } },
    ],
  },
  {
    id: 26,
    prompt: "运动闹钟的态度？",
    options: [
      { text: "5:30 雷打不动，闹钟形同虚设", effects: { commit: 3, outdoor: 1 } },
      { text: "每天响 5 次最后还是没起", effects: { commit: -3 } },
      { text: "看心情，今天起得来就起", effects: { commit: -1 } },
      { text: "不设，到点会自己醒", effects: { commit: 1 } },
    ],
  },
  {
    id: 27,
    prompt: "体脂秤/手表/手环你？",
    options: [
      { text: "一应俱全，数据是命根", effects: { commit: 3, gear: 3 } },
      { text: "有但不怎么看", effects: { gear: 1 } },
      { text: "没有，凭感觉就行", effects: { gear: -2, commit: -1 } },
      { text: "买来主要为了发到群里炫", effects: { show: 3, gear: 1 } },
    ],
  },
  {
    id: 28,
    prompt: "朋友说「比比谁先到山顶」？",
    options: [
      { text: "我冲了", effects: { intensity: 3, outdoor: 2 } },
      { text: "慢慢爬，体验过程", effects: { intensity: -1, outdoor: 1 } },
      { text: "你们去吧，我在山脚等", effects: { intensity: -3, outdoor: -1 } },
      { text: "到山顶一起拍合照", effects: { show: 3, outdoor: 1 } },
    ],
  },
  {
    id: 29,
    prompt: "一个新运动突然火了（飞盘/匹克球/腰旗）你？",
    options: [
      { text: "第一批冲，装备买齐", effects: { gear: 3, social: 1 } },
      { text: "等热度退一点再玩", effects: { commit: 1 } },
      { text: "太装了，不玩", effects: { social: -1 } },
      { text: "朋友带就玩，不带不玩", effects: { social: 2 } },
    ],
  },
  {
    id: 30,
    prompt: "你的健身餐风格？",
    options: [
      { text: "计算每克蛋白质和碳水", effects: { commit: 3, gear: 2 } },
      { text: "大概控制下少吃米饭", effects: { commit: 1 } },
      { text: "完全不控制，练完照吃", effects: { commit: -2, social: 1 } },
      { text: "拍代餐/沙拉显得很自律", effects: { show: 3 } },
    ],
  },
  {
    id: 31,
    prompt: "雨天/雪天/雾霾天你的运动安排？",
    options: [
      { text: "室内场地照样练", effects: { commit: 2, outdoor: -2 } },
      { text: "直接休息一天", effects: { commit: -2 } },
      { text: "雨中跑步更帅", effects: { outdoor: 3, intensity: 2 } },
      { text: "在家做几个动作意思下", effects: { commit: -1 } },
    ],
  },
  {
    id: 32,
    prompt: "健身房看到一个明显比你强的人？",
    options: [
      { text: "默默偷学他动作", effects: { commit: 3 } },
      { text: "假装没看见低头练", effects: { social: -2 } },
      { text: "上去搭话问怎么练的", effects: { social: 3 } },
      { text: "内心暗自较劲", effects: { intensity: 2 } },
    ],
  },
  {
    id: 33,
    prompt: "你穿过最贵的一件运动装备是？",
    options: [
      { text: "没什么贵的，能用就行", effects: { gear: -3 } },
      { text: "几千块的运动表/装备很正常", effects: { gear: 3 } },
      { text: "都是别人送的 / 二手淘的", effects: { gear: -1 } },
      { text: "主要看图片好看不好看", effects: { show: 2, gear: 1 } },
    ],
  },
  {
    id: 34,
    prompt: "一个月没运动会让你？",
    options: [
      { text: "焦虑到睡不着", effects: { commit: 3 } },
      { text: "没啥感觉，本来也不常练", effects: { commit: -3 } },
      { text: "偶尔想念，但也就那样", effects: { commit: -1 } },
      { text: "体重一上来才开始焦虑", effects: { show: 1 } },
    ],
  },
  {
    id: 35,
    prompt: "朋友问你「健身为了什么」？",
    options: [
      { text: "为了健康活到 90", effects: { commit: 2 } },
      { text: "为了好看，谁不想被夸", effects: { show: 3 } },
      { text: "为了发泄/解压", effects: { intensity: 2 } },
      { text: "为了发圈/社交", effects: { show: 2, social: 2 } },
    ],
  },
  {
    id: 36,
    prompt: "运动受伤后你？",
    options: [
      { text: "休一个月再说", effects: { commit: 1 } },
      { text: "边休边研究康复训练", effects: { commit: 3 } },
      { text: "还能动就继续练", effects: { intensity: 3, commit: 1 } },
      { text: "朋友圈晒伤口配文「自律的代价」", effects: { show: 3 } },
    ],
  },
  {
    id: 37,
    prompt: "别人夸你运动有进步你？",
    options: [
      { text: "「哪有，还差很多」", effects: { commit: 2 } },
      { text: "「对吧！我练了 X 个月了！」", effects: { show: 3 } },
      { text: "把训练计划详细复述一遍", effects: { commit: 3 } },
      { text: "不好意思地笑笑", effects: { social: -1 } },
    ],
  },
  {
    id: 38,
    prompt: "团体运动场上你选什么位置？",
    options: [
      { text: "最显眼的，输赢都是焦点", effects: { show: 3, intensity: 2 } },
      { text: "配合型，传球助攻", effects: { social: 3 } },
      { text: "防守位，不抢风头", effects: { social: -1 } },
      { text: "板凳，随时上下场", effects: { intensity: -2, social: 1 } },
    ],
  },
  {
    id: 39,
    prompt: "看自己运动视频回放？",
    options: [
      { text: "反复看，找姿势问题", effects: { commit: 3 } },
      { text: "反复看，欣赏自己", effects: { show: 3 } },
      { text: "看一遍就关", effects: { show: -1 } },
      { text: "不录，丑死了", effects: { show: -3 } },
    ],
  },
  {
    id: 40,
    prompt: "朋友说「明天试个新运动」你？",
    options: [
      { text: "冲", effects: { intensity: 2, social: 2 } },
      { text: "听起来不错，研究下再决定", effects: { commit: 1 } },
      { text: "我手头训练计划还没完", effects: { commit: 3 } },
      { text: "不去，浪费时间", effects: { social: -2 } },
    ],
  },
];
