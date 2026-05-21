import type { Question } from "../types";

/**
 * 40 道题 = MBTI 4 维 × 5 + 运动 4 维 × 5
 *
 * Q1-5    EI（外向 vs 内向）
 * Q6-10   SN（实感 vs 直觉）
 * Q11-15  TF（思考 vs 情感）
 * Q16-20  JP（判断 vs 感知）
 * Q21-25  intensity 强度
 * Q26-30  commit 投入度
 * Q31-35  show 表演欲
 * Q36-40  outdoor 户外偏好
 *
 * 分值惯例：±3 强烈倾向 / ±2 明显 / ±1 略有
 * MBTI 维度：正数偏 E/N/F/P，负数偏 I/S/T/J
 * 运动维度（注意：题里加分代表"更高"，但人格定义那边是 0-10，
 *           计算时会做归一化，这里就当作 -3~+3 的相对影响来填）
 */

export const questions: Question[] = [
  // ============================================================
  // EI 维度（Q1-5）
  // ============================================================
  {
    id: 1,
    prompt: "周末早上 8 点你被闹钟吵醒，下列哪个最能让你立刻起床？",
    options: [
      { text: "约好的羽毛球局——朋友等着我", effects: { mbti: { EI: 3 } } },
      { text: "一个人去江边跑步，难得清静", effects: { mbti: { EI: -3 } } },
      { text: "新上的瑜伽课，试个没体验过的", effects: { mbti: { SN: 2 }, sport: { intensity: -1 } } },
      { text: "再睡两小时，下午随便逛逛", effects: { sport: { commit: -2, intensity: -2 } } },
    ],
  },
  {
    id: 2,
    prompt: "在健身房训练，你最常的状态是？",
    options: [
      { text: "戴着耳机自己练，谁都不想搭理", effects: { mbti: { EI: -3 } } },
      { text: "跟旁边人聊两句、互相借个杠铃片", effects: { mbti: { EI: 2 } } },
      { text: "约固定搭子一起练，没他就不来", effects: { mbti: { EI: 3 } } },
      { text: "看心情，有时聊有时不聊", effects: { mbti: { JP: 1 } } },
    ],
  },
  {
    id: 3,
    prompt: "团课结束后你会做什么？",
    options: [
      { text: "立刻冲去找教练问下次的课表", effects: { mbti: { EI: 3 }, sport: { commit: 1 } } },
      { text: "默默卷起垫子第一个溜走", effects: { mbti: { EI: -3 } } },
      { text: "跟新认识的小姐妹加微信约下次", effects: { mbti: { EI: 2, TF: 1 } } },
      { text: "拉伸十分钟再走，懒得跟人寒暄", effects: { mbti: { EI: -2 } } },
    ],
  },
  {
    id: 4,
    prompt: "一件事卡住了你拿不准（比如该不该报半马），你的第一反应是？",
    options: [
      { text: "拉群聊一聊，听听大家怎么说", effects: { mbti: { EI: 3 } } },
      { text: "自己先想清楚，想透了再跟人讲", effects: { mbti: { EI: -3 } } },
      { text: "找一个最懂的朋友单独私聊", effects: { mbti: { EI: -1, TF: 1 } } },
      { text: "刷刷小红书、知乎看别人经验", effects: { mbti: { SN: 1 } } },
    ],
  },
  {
    id: 5,
    prompt: "新办的健身房第一天，你会？",
    options: [
      { text: "主动找前台和教练自我介绍一圈", effects: { mbti: { EI: 3 } } },
      { text: "戴上耳机直接开练，假装是老会员", effects: { mbti: { EI: -3 } } },
      { text: "在角落观察一圈再决定怎么动", effects: { mbti: { EI: -2, JP: -1 } } },
      { text: "拉个朋友陪着一起去，壮个胆", effects: { mbti: { EI: 1, TF: 1 } } },
    ],
  },

  // ============================================================
  // SN 维度（Q6-10）
  // ============================================================
  {
    id: 6,
    prompt: "教练给了你一份训练计划，你的第一反应是？",
    options: [
      { text: "按表执行，每个动作组数都不差", effects: { mbti: { SN: -3, JP: -1 } } },
      { text: "大概看看思路，具体动作我自己改", effects: { mbti: { SN: 3, JP: 1 } } },
      { text: "先问为什么这么安排，原理懂了再练", effects: { mbti: { SN: 2, TF: -2 } } },
      { text: "今天心情好就练，心情不好就改天", effects: { mbti: { JP: 2 } } },
    ],
  },
  {
    id: 7,
    prompt: "跟朋友聊一次很爽的运动经历，你会怎么描述？",
    options: [
      { text: "10 公里 52 分 30 秒，心率均值 165", effects: { mbti: { SN: -3 } } },
      { text: "跑到一半感觉自己快飞起来了", effects: { mbti: { SN: 3, TF: 1 } } },
      { text: "在江边看到一只白鹭，超治愈", effects: { mbti: { SN: 2, TF: 2 } } },
      { text: "练完那一身汗，整个人都通透了", effects: { mbti: { SN: -1, TF: 1 } } },
    ],
  },
  {
    id: 8,
    prompt: "选一个新运动尝试，你更可能选哪个？",
    options: [
      { text: "传统经典的——跑步、游泳、撸铁", effects: { mbti: { SN: -3 }, sport: { commit: 1 } } },
      { text: "新潮的——匹克球、Padel、攀岩", effects: { mbti: { SN: 3 }, sport: { outdoor: 1 } } },
      { text: "玄一点的——颂钵、太极、气功", effects: { mbti: { SN: 3, TF: 2 } } },
      { text: "看朋友在玩什么我就跟着玩什么", effects: { mbti: { EI: 1, JP: 1 } } },
    ],
  },
  {
    id: 9,
    prompt: "学一个新动作（比如硬拉），你的方式是？",
    options: [
      { text: "看教学视频，一步一步对着镜子学", effects: { mbti: { SN: -3 } } },
      { text: "找教练或者老手现场带一遍", effects: { mbti: { SN: -2, EI: 1 } } },
      { text: "自己上手试几次，慢慢找感觉", effects: { mbti: { SN: 3, JP: 1 } } },
      { text: "看到别人怎么练就大概模仿", effects: { mbti: { SN: -1, JP: 1 } } },
    ],
  },
  {
    id: 10,
    prompt: "如果让你给自己定一个运动目标，你会选？",
    options: [
      { text: "今年内卧推突破 100 公斤", effects: { mbti: { SN: -3, JP: -1 } } },
      { text: "三年后跑下一个山地越野", effects: { mbti: { SN: 3 }, sport: { outdoor: 2 } } },
      { text: "练出能让我自己满意的身材", effects: { mbti: { SN: 2, TF: 2 } } },
      { text: "保持每周动一动就行，不立 flag", effects: { mbti: { JP: 2 }, sport: { commit: -1 } } },
    ],
  },

  // ============================================================
  // TF 维度（Q11-15）
  // ============================================================
  {
    id: 11,
    prompt: "选健身房，你最看重哪个？",
    options: [
      { text: "性价比、器械全不全、距离近不近", effects: { mbti: { TF: -3 } } },
      { text: "氛围好不好、教练人怎么样", effects: { mbti: { TF: 3 } } },
      { text: "装修风格、出片度", effects: { mbti: { TF: 1 }, sport: { show: 2 } } },
      { text: "朋友推荐谁我就办谁的", effects: { mbti: { EI: 2, TF: 2 } } },
    ],
  },
  {
    id: 12,
    prompt: "队友打球总是失误，你会？",
    options: [
      { text: "直接指出哪里有问题，下次改", effects: { mbti: { TF: -3 } } },
      { text: "拍拍他『没事没事，下一个』", effects: { mbti: { TF: 3 } } },
      { text: "先安慰，然后认真讨论问题", effects: { mbti: { TF: 1 } } },
      { text: "心里默默吐槽，表面不动声色", effects: { mbti: { EI: -2, TF: -1 } } },
    ],
  },
  {
    id: 13,
    prompt: "比赛输了一场，你回家路上想的是？",
    options: [
      { text: "复盘哪几个球处理得不对", effects: { mbti: { TF: -3, JP: -1 } } },
      { text: "队友看起来挺难过的，得安慰下", effects: { mbti: { TF: 3 } } },
      { text: "下次训练要加强哪几块短板", effects: { mbti: { TF: -2 }, sport: { commit: 2 } } },
      { text: "输了就输了，去吃顿好的算了", effects: { mbti: { JP: 2 } } },
    ],
  },
  {
    id: 14,
    prompt: "看到健身房有人占着器械玩手机，你的反应？",
    options: [
      { text: "直接上去说『你还练吗？不练我用』", effects: { mbti: { EI: 2, TF: -3 } } },
      { text: "心里很烦但不好意思说，去练别的", effects: { mbti: { EI: -1, TF: 3 } } },
      { text: "在旁边明显地等，让他自觉", effects: { mbti: { TF: -1, EI: -1 } } },
      { text: "礼貌问一句『还有几组呀』", effects: { mbti: { TF: 2 } } },
    ],
  },
  {
    id: 15,
    prompt: "你更欣赏的运动伙伴是？",
    options: [
      { text: "能力强、动作标准、能带飞我", effects: { mbti: { TF: -3 } } },
      { text: "态度真诚、彼此鼓励、有商有量", effects: { mbti: { TF: 3 } } },
      { text: "有自己一套方法、独立不啰嗦", effects: { mbti: { EI: -2, TF: -1 } } },
      { text: "好玩、有梗、运动完一起撸串", effects: { mbti: { EI: 2, JP: 1 } } },
    ],
  },

  // ============================================================
  // JP 维度（Q16-20）
  // ============================================================
  {
    id: 16,
    prompt: "下周末有空，你的运动安排？",
    options: [
      { text: "周一就把日程排好，几点干嘛清清楚楚", effects: { mbti: { JP: -3 } } },
      { text: "到了周末看心情和天气，临时决定", effects: { mbti: { JP: 3 } } },
      { text: "大致定个方向，细节再说", effects: { mbti: { JP: 1 } } },
      { text: "等朋友约我，没人约就在家躺", effects: { mbti: { EI: 1, JP: 2 } } },
    ],
  },
  {
    id: 17,
    prompt: "你的运动包/装备是什么状态？",
    options: [
      { text: "分类收纳，每样东西有固定位置", effects: { mbti: { JP: -3, SN: -1 } } },
      { text: "全塞在一起，要用了再翻", effects: { mbti: { JP: 3 } } },
      { text: "看起来乱但我自己知道在哪", effects: { mbti: { SN: 2, JP: 2 } } },
      { text: "经常找不到东西，又要去买新的", effects: { mbti: { JP: 2 }, sport: { commit: -1 } } },
    ],
  },
  {
    id: 18,
    prompt: "教练改课时间，你的反应是？",
    options: [
      { text: "很烦，整个一周节奏都被打乱了", effects: { mbti: { JP: -3 } } },
      { text: "哦好的，反正我本来也没固定计划", effects: { mbti: { JP: 3 } } },
      { text: "重新规划一下，调到合适时间", effects: { mbti: { JP: -1, TF: -1 } } },
      { text: "干脆不去了，找个借口请假", effects: { mbti: { JP: 1 }, sport: { commit: -2 } } },
    ],
  },
  {
    id: 19,
    prompt: "立了一个运动 flag（比如减脂打卡 30 天），第 15 天你的状态？",
    options: [
      { text: "雷打不动，今天累成狗也要打卡", effects: { mbti: { JP: -3 }, sport: { commit: 3 } } },
      { text: "断断续续，能打就打不能就算", effects: { mbti: { JP: 3 }, sport: { commit: -1 } } },
      { text: "已经放弃了，flag 是用来立的不是用来达成的", effects: { mbti: { JP: 2 }, sport: { commit: -3 } } },
      { text: "完成度大概 70%，自己还算满意", effects: { mbti: { JP: -1 } } },
    ],
  },
  {
    id: 20,
    prompt: "出去旅游，运动这件事你怎么处理？",
    options: [
      { text: "提前查好酒店健身房，每天保持训练", effects: { mbti: { JP: -3 }, sport: { commit: 2 } } },
      { text: "到当地再说，看到啥玩啥", effects: { mbti: { JP: 3 }, sport: { outdoor: 1 } } },
      { text: "旅游就是休息，运动放一边", effects: { mbti: { JP: 1 }, sport: { commit: -2 } } },
      { text: "带跑鞋就行，想跑了就出去转一圈", effects: { mbti: { JP: 2 }, sport: { outdoor: 1 } } },
    ],
  },

  // ============================================================
  // intensity 强度维度（Q21-25）
  // ============================================================
  {
    id: 21,
    prompt: "一次理想的运动应该是什么样的？",
    options: [
      { text: "练到瘫在地上爬不起来才叫练过", effects: { sport: { intensity: 3 } } },
      { text: "微微出汗、身体打开就够了", effects: { sport: { intensity: -3 } } },
      { text: "有点累但不痛苦，刚刚好", effects: { sport: { intensity: 1 } } },
      { text: "重要的是开心，强度无所谓", effects: { sport: { intensity: -2, show: 1 } } },
    ],
  },
  {
    id: 22,
    prompt: "力量训练时你怎么选重量？",
    options: [
      { text: "每次都加 2.5 公斤，挑战极限", effects: { sport: { intensity: 3, commit: 1 } } },
      { text: "用自己刚好做完 12 个的重量", effects: { sport: { intensity: 1 } } },
      { text: "不太重，做着轻松就行", effects: { sport: { intensity: -3 } } },
      { text: "看心情，今天能上多少上多少", effects: { sport: { intensity: 1 }, mbti: { JP: 2 } } },
    ],
  },
  {
    id: 23,
    prompt: "运动中流汗这件事你怎么看？",
    options: [
      { text: "没汗等于没练，越湿越爽", effects: { sport: { intensity: 3 } } },
      { text: "微微出汗就行，大汗淋漓难受", effects: { sport: { intensity: -2 } } },
      { text: "尽量别出太多汗，妆容会花", effects: { sport: { intensity: -3, show: 2 } } },
      { text: "出汗这事还好，不刻意追求也不躲", effects: { sport: { intensity: 0 } } },
    ],
  },
  {
    id: 24,
    prompt: "看到健身房有 HIIT 课和瑜伽课同时开课，你选哪个？",
    options: [
      { text: "必须 HIIT，越虐越爽", effects: { sport: { intensity: 3 } } },
      { text: "瑜伽，慢慢拉伸最舒服", effects: { sport: { intensity: -3 } } },
      { text: "都不选，自己练自由", effects: { mbti: { EI: -2 } } },
      { text: "看哪个朋友多就去哪个", effects: { mbti: { EI: 2 } } },
    ],
  },
  {
    id: 25,
    prompt: "竞技/对抗类运动（比如打比赛、跟人 1v1）你的态度？",
    options: [
      { text: "巨爱，越激烈越上头", effects: { sport: { intensity: 3 }, mbti: { TF: -2 } } },
      { text: "可以接受，但赢不赢无所谓", effects: { sport: { intensity: 1 } } },
      { text: "不喜欢，运动是放松不是较劲", effects: { sport: { intensity: -3 }, mbti: { TF: 2 } } },
      { text: "看对手是谁，认识的就来玩玩", effects: { sport: { intensity: 0 }, mbti: { EI: 1 } } },
    ],
  },

  // ============================================================
  // commit 投入度维度（Q26-30）
  // ============================================================
  {
    id: 26,
    prompt: "你现在每周运动几次？",
    options: [
      { text: "5 次以上，不练身体反而难受", effects: { sport: { commit: 3, intensity: 1 } } },
      { text: "稳定 3-4 次，是固定日程", effects: { sport: { commit: 2 } } },
      { text: "1-2 次，能动就动", effects: { sport: { commit: -1 } } },
      { text: "想起来才练，可能一个月一次", effects: { sport: { commit: -3 } } },
    ],
  },
  {
    id: 27,
    prompt: "运动时受了点小伤（比如拉伤、扭到脚），你会？",
    options: [
      { text: "立刻就医、找康复师，认真处理", effects: { sport: { commit: 3 }, mbti: { SN: -2 } } },
      { text: "贴个膏药继续练，硬挺过去", effects: { sport: { commit: 2, intensity: 2 } } },
      { text: "休息一周，等不疼了再说", effects: { sport: { commit: 0 } } },
      { text: "正好借机休息一个月", effects: { sport: { commit: -3 } } },
    ],
  },
  {
    id: 28,
    prompt: "你给自己的运动设过长期目标吗？",
    options: [
      { text: "有，3 年规划清晰：减脂→塑形→比赛", effects: { sport: { commit: 3 }, mbti: { JP: -2 } } },
      { text: "有大方向，但具体目标随时调整", effects: { sport: { commit: 1 }, mbti: { JP: 1 } } },
      { text: "没目标，能坚持下去就不错了", effects: { sport: { commit: -1 } } },
      { text: "目标？我连下周练不练都不知道", effects: { sport: { commit: -3 }, mbti: { JP: 2 } } },
    ],
  },
  {
    id: 29,
    prompt: "Keep / 小米手环 / Apple Watch / Strava，你用得最多的是？",
    options: [
      { text: "全都用，数据每天都看，月度分析必做", effects: { sport: { commit: 3 }, mbti: { SN: -2 } } },
      { text: "戴手表记录一下，偶尔翻翻", effects: { sport: { commit: 1 } } },
      { text: "下载过，但没怎么打开过", effects: { sport: { commit: -1 } } },
      { text: "完全不记录，靠感觉就行", effects: { sport: { commit: -3 }, mbti: { JP: 2 } } },
    ],
  },
  {
    id: 30,
    prompt: "运动装备坏了/旧了，你的处理方式？",
    options: [
      { text: "马上买新的，影响训练就是大事", effects: { sport: { commit: 2 } } },
      { text: "认真做功课、查测评，挑最合适的", effects: { sport: { commit: 3 }, mbti: { SN: -2 } } },
      { text: "凑合用呗，能用就行", effects: { sport: { commit: -2 } } },
      { text: "正好换最新款，装备永远走在前面", effects: { sport: { commit: 1, show: 2 } } },
    ],
  },

  // ============================================================
  // show 表演欲维度（Q31-35）
  // ============================================================
  {
    id: 31,
    prompt: "运动完你会发朋友圈/小红书吗？",
    options: [
      { text: "每次必发，没发等于没练", effects: { sport: { show: 3 }, mbti: { EI: 1 } } },
      { text: "状态好/出片的时候发一下", effects: { sport: { show: 1 } } },
      { text: "几乎不发，运动是自己的事", effects: { sport: { show: -3 }, mbti: { EI: -2 } } },
      { text: "偶尔发，但仅 close friends 可见", effects: { sport: { show: 0 }, mbti: { EI: -1 } } },
    ],
  },
  {
    id: 32,
    prompt: "健身房里有面大镜子，你的反应？",
    options: [
      { text: "每组之间必须照一下，看充血效果", effects: { sport: { show: 3 } } },
      { text: "用来确认动作标准的，纯功能性", effects: { sport: { show: -1 }, mbti: { SN: -2 } } },
      { text: "尽量避开，不想看到自己练得多难看", effects: { sport: { show: -3 } } },
      { text: "顺便拍几张训练视频回放", effects: { sport: { show: 2, commit: 1 } } },
    ],
  },
  {
    id: 33,
    prompt: "有人夸你『身材真好』，你的反应是？",
    options: [
      { text: "很爽，今天又值了", effects: { sport: { show: 3 } } },
      { text: "嘴上谦虚，心里美滋滋", effects: { sport: { show: 2 } } },
      { text: "尬笑一下，赶紧换话题", effects: { sport: { show: -3 }, mbti: { EI: -2 } } },
      { text: "认真告诉对方我怎么练的", effects: { sport: { show: 1 }, mbti: { TF: -1 } } },
    ],
  },
  {
    id: 34,
    prompt: "拍训练视频这件事你怎么看？",
    options: [
      { text: "经常拍，回放看动作+发社交平台", effects: { sport: { show: 3, commit: 1 } } },
      { text: "拍来检查动作，不会发出去", effects: { sport: { show: 0, commit: 2 }, mbti: { SN: -1 } } },
      { text: "不拍，怕被别人看到笑话", effects: { sport: { show: -3 } } },
      { text: "我是别人镜头里的素材，从来不拍自己", effects: { sport: { show: -1 } } },
    ],
  },
  {
    id: 35,
    prompt: "买新的运动装备（鞋、瑜伽服、手表），你最在意什么？",
    options: [
      { text: "颜值/上身效果/出片度", effects: { sport: { show: 3 }, mbti: { TF: 1 } } },
      { text: "性能/品牌口碑/性价比", effects: { sport: { show: -2 }, mbti: { TF: -2, SN: -1 } } },
      { text: "限量/小众/没人撞款", effects: { sport: { show: 2 }, mbti: { SN: 2 } } },
      { text: "能用就行，不挑", effects: { sport: { show: -3, commit: -1 } } },
    ],
  },

  // ============================================================
  // outdoor 户外偏好维度（Q36-40）
  // ============================================================
  {
    id: 36,
    prompt: "同样是跑步，你更愿意？",
    options: [
      { text: "户外，江边、公园、山路，越野越好", effects: { sport: { outdoor: 3 } } },
      { text: "跑步机，恒温恒湿、追剧不耽误", effects: { sport: { outdoor: -3 } } },
      { text: "操场塑胶跑道，平稳但不憋", effects: { sport: { outdoor: 1 } } },
      { text: "都行，看天气和心情", effects: { sport: { outdoor: 0 }, mbti: { JP: 1 } } },
    ],
  },
  {
    id: 37,
    prompt: "今天下大雨，你原计划要去户外运动，怎么办？",
    options: [
      { text: "照常去，雨中跑步更带劲", effects: { sport: { outdoor: 3, intensity: 1 } } },
      { text: "改室内活动，不强求", effects: { sport: { outdoor: 0 } } },
      { text: "今天不动了，下雨适合在家躺", effects: { sport: { outdoor: -2, commit: -1 } } },
      { text: "提前看天气预报就改时间了", effects: { sport: { outdoor: -1 }, mbti: { JP: -2 } } },
    ],
  },
  {
    id: 38,
    prompt: "听到『露营+徒步』的周末计划，你的反应？",
    options: [
      { text: "立刻报名，最爱这种行程", effects: { sport: { outdoor: 3 }, mbti: { EI: 1 } } },
      { text: "可以试试，但希望条件别太艰苦", effects: { sport: { outdoor: 1 } } },
      { text: "感觉累+脏，更想去 spa", effects: { sport: { outdoor: -3, intensity: -1 } } },
      { text: "看一起去的是谁，朋友靠谱就去", effects: { mbti: { EI: 1, TF: 1 } } },
    ],
  },
  {
    id: 39,
    prompt: "夏天去海边/山里度假，你的状态？",
    options: [
      { text: "起飞，每天泡水/爬山/晒太阳", effects: { sport: { outdoor: 3, intensity: 1 } } },
      { text: "白天出去玩，晚上回酒店休息", effects: { sport: { outdoor: 1 } } },
      { text: "主要待在酒店，偶尔出去拍照", effects: { sport: { outdoor: -2, show: 2 } } },
      { text: "我宁愿去逛街/逛展，户外没兴趣", effects: { sport: { outdoor: -3 } } },
    ],
  },
  {
    id: 40,
    prompt: "在公共场合（公园、广场、操场）运动你自在吗？",
    options: [
      { text: "完全自在，越多人围观越来劲", effects: { sport: { outdoor: 2, show: 3 } } },
      { text: "无所谓，习惯了就没感觉", effects: { sport: { outdoor: 1 } } },
      { text: "会有点不好意思，但能克服", effects: { sport: { outdoor: 0, show: -1 } } },
      { text: "非常尴尬，只在私密空间运动", effects: { sport: { outdoor: -3, show: -3 }, mbti: { EI: -1 } } },
    ],
  },
];
