const chineseTexts = [
  [ // Difficulty 1
    "太阳每天从东方升起。",
    "我喜欢阅读各种书籍。",
    "她是我最好的朋友。",
    "我们每天一起踢足球。",
    "猫正在床上睡觉。",
    "他喜欢听音乐。",
    "你能帮我一下吗？",
    "春天百花盛开。",
    "我早餐吃了烤面包。",
    "这是一个简单的句子。"
  ],
  [ // Difficulty 2
    "雨刚停，我们就离开了家。",
    "她为今晚的派对买了一条新裙子。",
    "快速的棕色狐狸跳过了懒惰的狗。",
    "我喜欢夏天在山里徒步旅行。",
    "学习新技能既有趣又有意义。",
    "小男孩在公园里弄丢了他的红气球。",
    "他们计划下个月去巴黎旅行。",
    "烤箱里烤蛋糕的香味十分诱人。",
    "我妹妹收养了一只小小的白色猫咪。",
    "他花了一下午修理他的旧自行车。"
  ],
  [ // Difficulty 3
    "五彩斑斓的蝴蝶在盛开的花丛间优雅地飞舞。",
    "漫长的一天结束后，她捧着一杯热茶在沙发上放松。",
    "他每天练习钢琴的毅力令人敬佩。",
    "古老的遗迹揭示了一个早已被遗忘的文明秘密。",
    "她仔细地画风景，捕捉每一个微小的细节。",
    "这本书如此引人入胜，他一口气读完了它。",
    "城市的灯光在平静的水面上闪烁，像天上的星星。",
    "他的世界邮票收藏非常令人印象深刻。",
    "尽管天气寒冷，马拉松选手们依然坚持不懈地奔跑。",
    "一封神秘的信件寄来，没有署名也没有地址。"
  ],
  [ // Difficulty 4
    "在繁忙的城市中心，一家安静的咖啡馆提供了一个宁静的避风港。",
    "工程师夜以继日地工作，设计出一座可以抵御地震的桥梁。",
    "当太阳沉入地平线时，天空变成了绚丽的橙色和粉色。",
    "她在明天的重要演讲前，小心翼翼地整理了自己的笔记。",
    "侦探拼凑出线索，慢慢揭开案件背后的真相。",
    "尽管遇到重重困难，小团队还是提前完成了他们的雄心壮志。",
    "森林里充满了鸟鸣和树叶沙沙的声音。",
    "他创新的解决问题方法让他获得了广泛的赞誉。",
    "经过多年的努力，她终于在社区里开了一家自己的面包店。",
    "演讲者的优雅与鼓舞人心的话语吸引了所有观众。"
  ],
  [ // Difficulty 5
    "主人公穿越未知的荒野，旅程充满了危险和发现。",
    "在埃尔姆伍德的小镇上，奇怪的事件开始让居民不安。",
    "艺术博物馆的最新展览展示了文艺复兴时期的杰作。",
    "她的刺绣作品错综复杂，展现了一个生机勃勃的花园。",
    "科学家进行了多次实验，以验证她开创性理论的准确性。",
    "这部小说复杂的人物和交织的情节让读者着迷，直到最后一页。",
    "暴风雨中，船员们表现出了非凡的技能和团队合作精神。",
    "厨师的招牌菜将意想不到的口味结合在一起，创造出烹饪杰作。",
    "在满天星空下，露营者围着熊熊的篝火讲故事并欢笑。",
    "他对正义的不懈追求使他既赢得了钦佩，也结下了一些敌人。"
  ],
  [ // Difficulty 6
    "科学家的发现为人类大脑的复杂运作提供了新的见解。",
    "在高楼林立的都市中，一个隐秘的花园为居民提供了宁静的避难所。",
    "这份用古老文字书写的手稿，隐藏着一笔失落的宝藏的秘密。",
    "她的信表达了难以用言语形容的深切情感。",
    "乐团演奏的交响乐获得了观众如雷的掌声与起立喝彩。",
    "登山者克服了看似不可逾越的挑战，最终成功登顶。",
    "这部电影惊艳的摄影效果将观众带入了一个完全不同的世界。",
    "通过缜密的计划和坚定的决心，创业者成功创立了自己的公司。",
    "当宇宙飞船穿越黑暗的虚空时，宇航员们准备执行他们的大胆任务。",
    "年轻诗人的感人诗句捕捉到了人类经验的真实本质。"
  ],
  [ // Difficulty 7
    "在一个古朴的海滨小镇，关于幽灵灯塔守护者的传说世代相传。",
    "教授关于量子力学的讲座既启发人心又极具挑战性。",
    "海洋深处，五彩斑斓的珊瑚礁孕育着令人惊叹的海洋生物多样性。",
    "建筑师的设计完美融合了现代美学与传统元素。",
    "芭蕾舞演员优雅而精准的表演让观众叹为观止。",
    "回忆录详细讲述了作者惊心动魄的经历以及最终的胜利。",
    "这个庞大的图书馆收藏了令人印象深刻的珍贵书籍与手稿。",
    "故事的突然反转揭示了两位主角之间的隐藏联系。",
    "这个环保倡议旨在减少浪费并推广可持续生活方式。",
    "冒险家的日志记录了他与多样文化的相遇以及令人叹为观止的自然景观。"
  ],
  [ // Difficulty 8
    "被誉为医学领域的重大突破，这一发现为新的治疗方法开辟了道路。",
    "随着野火迅速蔓延，消防员们不分昼夜地工作以保护房屋并疏散居民。",
    "小说家的文字丰富而生动，主题细腻，吸引了全球的读者。",
    "一张复杂的地下隧道网络连接了这座城市的历史地标。",
    "外交官巧妙的谈判避免了一场潜在的冲突，并促进了合作的新纪元。",
    "科学家以不屈不挠的态度追求她的假设，尽管屡遭挫折与质疑。",
    "盛大的化装舞会在一座宏伟的庄园内举行，成为城中热议的话题。",
    "他对可再生能源的创新方法为他赢得了备受推崇的奖项。",
    "探险家的旅程穿越未知的领域，他的记录激励了无数后来者。",
    "厨师的获奖美食以其微妙的风味平衡和丰富的口感而闻名。"
  ],
  [ // Difficulty 9
    "在熙熙攘攘的集市中，一位工匠展示了制作精美陶器的传统技艺。",
    "剧作家的作品巧妙地将历史事件与感人的个人叙述交织在一起。",
    "雄心勃勃的城市更新项目旨在振兴被忽视的社区，同时保护其文化遗产。",
    "一组研究人员展开了一项大胆的探险，以研究气候变化对极地地区的影响。",
    "扣人心弦的法庭剧探讨了正义、道德与人类判断的局限性。",
    "钟表匠的工艺精湛，其精美作品的每个细节都令人赞叹。",
    "她的演讲措辞优雅，充满信念，激励了观众采取行动。",
    "这项突破性的技术有望彻底改变行业并重新定义可能性。",
    "当乐团达到高潮时，音乐厅充满了几乎触手可及的能量。",
    "选集呈现了多样的声音，每一种都以独特的视角探讨人类的境况。"
  ],
  [ // Difficulty 10
    "雪落在阴晦的中部平原的每一片土地上，落在没有树木的山丘上，轻轻地落在艾伦沼地上，再往西，轻轻地落进山农河面汹涌澎湃的黑浪之中。",
    "他听着雪花隐隐约约地飘落，慢慢地睡着了，雪花穿过宇宙轻轻地落下，就像他们的结局似的，落到所有的生者和死者身上。",
    "在这片深邃的丛林之中，每一片叶子都在讲述着一个远古未解的秘密，那些秘密随着风声飘散到未知的角落。",
    "城市的霓虹灯在夜幕下宛如星河流淌，人群穿梭，似乎每个灵魂都在追逐着自己的光芒却又失落于无尽的黑暗。",
    "人类的智慧虽堪称万物之灵，但在广袤无垠的宇宙面前，我们的认知不过是宇宙深渊的一点微光，渺小却不容忽视。",
    "大雨滂沱之夜，他撑着一把破旧的伞，行走在那条泥泞不堪的小道上，脚下溅起的水花仿佛将他拉回到那个充满记忆的过去。",
    "战场上的硝烟未曾完全散去，士兵们的眼神中夹杂着胜利的欣喜与战争的残酷，历史将在这一刻镌刻下深刻的印记。",
    "海浪拍打着礁石，激起千层雪白的浪花，而在这永不停息的节奏中，隐藏着自然无声的韵律，令人心生敬畏。",
    "他花费了数十年的时光，只为解开一个无人能解的谜题，那谜底究竟是智慧的巅峰，还是一场心灵的救赎，尚无人知晓。",
    "夜色如墨，天穹之上繁星点点，而在这寂静的夜晚，远处传来一声孤寂的钟响，仿佛在为世人敲响一曲无言的警钟。"
  ]
];

export default chineseTexts; 