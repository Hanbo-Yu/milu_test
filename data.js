const testsData = [
    {
        id: 'sexual-preference',
        name: '麋鹿·性偏好测试',
        icon: '🦌',
        description: '你以为你了解自己的欲望吗？这份测试将揭示你在情感与性吸引中的真实取向。不论你偏向温柔、掌控、依恋还是逃避，答完之后，你会对自己的"偏好模式"有全新的理解。',
        questionCount: 68,
        estimatedTime: '约15分钟',
        category: '性心理'
    },
    {
        id: 'scl90',
        name: 'SCL-90 心理健康自评量表',
        icon: '🌹',
        description: '从十个维度全面评估心理健康状况，包括躯体化、抑郁、焦虑等',
        questionCount: 90,
        estimatedTime: '约15分钟',
        category: '心理健康'
    },
    {
        id: 'sexual-repression',
        name: '性压抑测试',
        icon: '❤',
        description: '评估您对性话题的态度和观念，了解是否存在性压抑倾向',
        questionCount: 35,
        estimatedTime: '约8分钟',
        category: '性心理'
    },
    {
        id: 'possessiveness',
        name: '恋爱占有欲指数测试',
        icon: '💕',
        description: '从四个维度评估您在恋爱关系中的占有欲表现，包括控制欲望、嫉妒强度等',
        questionCount: 40,
        estimatedTime: '约10分钟',
        category: '恋爱关系'
    },
    {
        id: 'yandere',
        name: '病娇体质测试',
        icon: '🩷',
        description: '围绕恋爱依附力、独占欲能量、情绪波动率、理智临界线四维评估',
        questionCount: 40,
        estimatedTime: '约10分钟',
        category: '恋爱关系'
    },
    {
        id: 'love-view',
        name: '恋爱观测试',
        icon: '🎆',
        description: '评估你的恋爱观维度：亲密需求、承诺倾向、独立边界、表达风格',
        questionCount: 40,
        estimatedTime: '约10分钟',
        category: '恋爱关系'
    },
    {
        id: 'bully-victim',
        name: '你有多容易被人欺负',
        icon: '🌃',
        description: '你是不是常常不好意思拒绝别人？明明不想，却又害怕让人失望？这份测试将带你看清——你的"善良"，到底是温柔的力量，还是被利用的开始。',
        questionCount: 35,
        estimatedTime: '约8分钟',
        category: '人格特质'
    },
    {
        id: 'mental-age',
        name: '心理年龄测试表',
        icon: '🧠',
        description: '评估个体的思维方式和行为表现是否与其实际年龄相符，帮助了解内心的成熟度或年轻心态，适用于所有年龄段的人群。',
        questionCount: 20,
        estimatedTime: '约2分钟',
        category: '人格特质'
    },
    {
        id: 'animal-archetype',
        name: '动物塑测试',
        icon: '🐾',
        description: '动物塑原型测试是一种基于隐喻和象征的人格分类工具。它通过一系列涉及行为偏好、情绪反应、思维模式及审美取向的问题，引导测试者找到一种或多种能与自身核心特质产生共鸣的动物形象。',
        questionCount: 50,
        estimatedTime: '约15分钟',
        category: '人格特质'
    },
    {
        id: 'talent',
        name: '天赋测试',
        icon: '✨',
        description: '这项测试基于五大维度全面分析用户的优势领域，包括创造力、人与交往能力、逻辑分析能力、艺术感知能力以及语言表达能力。使用户能够对自己的天赋有更清晰的认知，从而在学习、职业发展以及个人成长中发挥潜力，找到更适合自己的方向。',
        questionCount: 50,
        estimatedTime: '约15分钟',
        category: '自我认知'
    },
    {
        id: 'love-brain',
        name: '恋爱脑测试',
        icon: '💞',
        description: '你有没有在深夜emo时，反复查看TA的朋友圈点赞列表？你会不会为了一句"我很忙"整晚失眠，第二天还装作若无其事？你是不是总说"我没事"，但心里已经脑补了100种分手剧本？有人恋爱时依旧清醒如AI，有人却在爱情面前瞬间破防、情绪上头。恋爱脑不是贬义词，它只是一种你对感情投入的方式。通过这个测评，我们不看你"正常不正常"，只想带你看看：——你在爱情里的样子，究竟是哪种"可爱又疯批"的存在？',
        questionCount: 15,
        estimatedTime: '约3分钟',
        category: '恋爱关系'
    },
    {
        id: 'desire-ratio',
        name: '欲望比重测试',
        icon: '🎯',
        description: '探索你的核心驱动力与潜在动机。通过50个问题，从权力、食物、感情、外貌、名望、金钱、色欲等维度，全面分析你的欲望分布，了解你内心真正的驱动力是什么。',
        questionCount: 50,
        estimatedTime: '约15分钟',
        category: '自我认知'
    }
];

const questionsData = {
    'sexual-preference': {
        questions: [
            {
                id: 1,
                type: 'single',
                question: '是否可以扔掉一切的自尊心换取更好的性体验？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 2,
                type: 'single',
                question: '是否愿意在性行为中施加轻微的疼痛或刺激？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 3,
                type: 'single',
                question: '是否喜欢在性关系中通过语言攻击或精神打压来获得满足？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 4,
                type: 'single',
                question: '是否喜欢在性关系中充当主导者的角色？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 5,
                type: 'single',
                question: '是否喜欢在性行为中主导节奏和方式？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 6,
                type: 'single',
                question: '在情感关系中，如果伴侣能够为自己做正确的选择，自己会表现得非常听话？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 7,
                type: 'single',
                question: '是否面对他人的痛苦感到无动于衷，甚至还有点享受？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 8,
                type: 'single',
                question: '是否会对伴侣的精神出轨表现出强烈的排斥和不能容忍？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 9,
                type: 'single',
                question: '面对自己喜欢的人是否会故意制造某些情景，寻求更多接触的机会？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 10,
                type: 'single',
                question: '是否对不同的性行为都会有浓厚的兴趣，并且愿意积极地去尝试实践？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 11,
                type: 'single',
                question: '是否常常会产生强烈的自我厌恶情绪？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 12,
                type: 'single',
                question: '是否会喜欢那种想反抗又无力反抗的性体验？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 13,
                type: 'single',
                question: '面对比自己弱的人，常常会产生优越感和看不起的态度？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 14,
                type: 'single',
                question: '是否常常会幻想与多人同时发生性关系？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 15,
                type: 'single',
                question: '是否感到自己心爱的东西或人被他人所占有而感到兴奋？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 16,
                type: 'single',
                question: '是否会喜欢与伴侣进行性别互换的体验？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 17,
                type: 'single',
                question: '是否并不太服从于规则或权威，总是会做一些违反规定的行为？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 18,
                type: 'single',
                question: '是否会喜欢拍摄一些自己露骨的照片，并会有分享给陌生人看的冲动？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 19,
                type: 'single',
                question: '在性关系中，是否会希望自己能够完全被束缚任由对方随便差遣？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 20,
                type: 'single',
                question: '在性幻想中，是否有时会把自己代入异性的身份和视角来获得快感？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 21,
                type: 'single',
                question: '是否会时刻想了解伴侣的行踪和人际关系？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 22,
                type: 'single',
                question: '在性生活中，是否会希望伴侣被迫服从于自己？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 23,
                type: 'single',
                question: '是否会认同性生活的精神上的共鸣比生理上的发泄重要很多？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 24,
                type: 'single',
                question: '是否感到自己并不抗拒与同性好友之间亲密的肢体接触，并且非常喜欢？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 25,
                type: 'single',
                question: '是否会把情感关系当成一种评估自身价值或段位的体现？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 26,
                type: 'single',
                question: '是否为了满足自己的需求和感受有时会变得不择手段？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 27,
                type: 'single',
                question: '是否对异性的身体和某些款式衣服会有羡慕或崇拜感，常常会幻想穿上它的样子？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 28,
                type: 'single',
                question: '是否会因为被他人察觉自己浪荡的一面而感到异常的兴奋？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 29,
                type: 'single',
                question: '是否会故意做一些恶作剧来吸引他人的注意和关注？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 30,
                type: 'single',
                question: '对异性的某些贴身衣物是否会特别情有独钟，看到会情不自禁地陷入幻想？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 31,
                type: 'single',
                question: '是否在某些情绪压力的刺激下会产生自我伤害的冲动？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 32,
                type: 'single',
                question: '在性生活中，伴侣的反抗会让自己更兴奋？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 33,
                type: 'single',
                question: '是否对极端暴力的行为有着特殊的迷恋？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 34,
                type: 'single',
                question: '相比平等的情感关系，是否会更喜欢崇拜或仰慕自己的伴侣？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 35,
                type: 'single',
                question: '有时某些生理的痛点会让自己产生愉悦感或兴奋感？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 36,
                type: 'single',
                question: '是否有时会幻想在公共场合尝试性活动？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 37,
                type: 'single',
                question: '假如自己无法满足伴侣的某些性需求，是否会支持让他人来满足？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 38,
                type: 'single',
                question: '是否有时会对某些同性产生特殊的情感和幻想？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
                id: 39,
                type: 'single',
                question: '在情感关系中，是否会常常在自尊心的驱使下故意说些违背自己意愿和感受的话？',
                options: [
                    { value: 'A', text: '非常不认同' },
                    { value: 'B', text: '比较不认同' },
                    { value: 'C', text: '中立' },
                    { value: 'D', text: '比较认同' },
                    { value: 'E', text: '非常认同' }
                ]
            },
            {
            id: 40,
            type: 'single',
            question: '是否会把某些特定的物品和性幻想联系在一起？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 41,
            type: 'single',
            question: '当面对某些情绪上头时总是变得非常暴躁，极度渴望通过暴力方式来宣泄？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 42,
            type: 'single',
            question: '有时嗅觉上的刺激相比于视觉上的刺激会更有吸引力？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 43,
            type: 'single',
            question: '是否希望和伴侣进行某些角色扮演来增加情趣？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 44,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣完全支配的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 45,
            type: 'single',
            question: '是否希望和伴侣一起探索一些非常规的性行为？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 46,
            type: 'single',
            question: '是否在亲密关系中，非常享受支配伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 47,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣羞辱的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 48,
            type: 'single',
            question: '是否在亲密关系中，非常享受羞辱伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 49,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣虐待的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 50,
            type: 'single',
            question: '是否在亲密关系中，非常享受虐待伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 51,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣强迫的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 52,
            type: 'single',
            question: '是否在亲密关系中，非常享受强迫伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 53,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣保护的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 54,
            type: 'single',
            question: '是否在亲密关系中，非常享受保护伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 55,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣征服的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 56,
            type: 'single',
            question: '是否在亲密关系中，非常享受征服伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 57,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣控制的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 58,
            type: 'single',
            question: '是否在亲密关系中，非常享受控制伴侣的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 59,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣臣服的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 60,
            type: 'single',
            question: '是否在亲密关系中，非常享受伴侣臣服的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 61,
            type: 'single',
            question: '是否在亲密关系中，非常享受被伴侣服从的感觉？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 62,
            type: 'single',
            question: '在性生活中，是否会特别注重前期的调情过程并实践？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 63,
            type: 'single',
            question: '如果伴侣足够优秀的话，是否会非常乐意充当弱势的一方，并臣服于对方？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 64,
            type: 'single',
            question: '是否会喜欢通过一些暗示性的行为或语言来诱导伴侣？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 65,
            type: 'single',
            question: '被完全束缚所带来的性满足是否会让自己减轻很多道德上的压力或人设包袱？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 66,
            type: 'single',
            question: '假如抛开道德和社会舆论的压力，是否会期待自己以异性的身份来生活？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 67,
            type: 'single',
            question: '是否容易被弱小可爱的动物或人所吸引，并且缺乏抵抗力？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        },
        {
            id: 68,
            type: 'single',
            question: '是否对没有情感基础的对象不会产生任何的生理性冲动？',
            options: [
                { value: 'A', text: '非常不认同' },
                { value: 'B', text: '比较不认同' },
                { value: 'C', text: '中立' },
                { value: 'D', text: '比较认同' },
                { value: 'E', text: '非常认同' }
            ]
        }
        ],
        results: {
            虐待: {
                title: '虐待',
                description: '低分：对施加疼痛或刺激没有兴趣，更倾向于温和的性体验。中分：具有一定的虐待倾向，可能偶尔在性关系中会有施加轻微疼痛或精神刺激的冲动，但这种欲望并不强烈或相对克制。可能只在特定情境下才会表现出来，并且能够根据伴侣的反应及时调整强度。更多是浅尝辄止的探索，而非核心性需求。高分：有强烈的虐待倾向，在性关系中喜欢施加疼痛或精神刺激，通过控制伴侣的痛苦来获得性满足。这种欲望强烈且明显，可能需要特定的场景或工具来实现。',
                low: '低分：对施加疼痛或刺激没有兴趣，更倾向于温和的性体验。',
                medium: '中分：具有一定的虐待倾向，可能偶尔在性关系中会有施加轻微疼痛或精神刺激的冲动，但这种欲望并不强烈或相对克制。可能只在特定情境下才会表现出来，并且能够根据伴侣的反应及时调整强度。更多是浅尝辄止的探索，而非核心性需求。',
                high: '高分：有强烈的虐待倾向，在性关系中喜欢施加疼痛或精神刺激，通过控制伴侣的痛苦来获得性满足。这种欲望强烈且明显，可能需要特定的场景或工具来实现。',
                warning: '⚠️ 重要提示： 即使是轻微的虐待行为也需要事前沟通和征得同意，注意观察伴侣的身体和心理反应。',
                note: '仅限自愿与安全边界内，严禁任何实质伤害。'
            },
            羞辱: {
                title: '羞辱',
                description: '低分：对精神羞辱没有兴趣，尊重伴侣的人格尊严。中分：具有一定的羞辱欲望，可能在性关系中喜欢通过语言攻击、精神打压和人身侵犯，以发泄自身的攻击性来获得精神上的满足。但欲望并不强烈或者相对克制。可能只是偶尔使用一些轻微的贬低性语言或调侃，而不会进行深度的人格羞辱。高分：有强烈的羞辱欲望，在性关系中喜欢通过语言攻击、精神打压和人身侵犯，以发泄自身的攻击性来获得精神上的满足。这种欲望强烈且明显，可能需要特定的场景或方式来实现。',
                low: '低分：对精神羞辱没有兴趣，尊重伴侣的人格尊严。',
                medium: '中分：具有一定的羞辱欲望，可能在性关系中喜欢通过语言攻击、精神打压和人身侵犯，以发泄自身的攻击性来获得精神上的满足。但欲望并不强烈或者相对克制。可能只是偶尔使用一些轻微的贬低性语言或调侃，而不会进行深度的人格羞辱。',
                high: '高分：有强烈的羞辱欲望，在性关系中喜欢通过语言攻击、精神打压和人身侵犯，以发泄自身的攻击性来获得精神上的满足。这种欲望强烈且明显，可能需要特定的场景或方式来实现。',
                warning: '⚠️ 重要提示： 要明白这种精神羞辱可能会给伴侣带来巨大身心的创伤，需要适当的克制和把握尺度。',
                note: '易致心理创伤，需停用词与事后修复。'
            },
            征服: {
                title: '征服',
                description: '低分：在关系中倾向于平等，不喜欢展示强势或优越感。中分：具有一定的征服欲望和潜质，可能在情感关系和性关系中会比较喜欢充当主导者的角色，可能喜欢居高临下的展现自己的强势和优越感，来满足自己的精神需求，通常可能具有一定的情感胜负欲，但欲望并不强烈或者相对比较克制。能够根据情境和伴侣的特点灵活调整自己的角色定位。高分：有强烈的征服欲望，在情感关系和性关系中喜欢充当主导者的角色，喜欢居高临下的展现自己的强势和优越感，来满足自己的精神需求，具有强烈的情感胜负欲。',
                low: '低分：在关系中倾向于平等，不喜欢展示强势或优越感。',
                medium: '中分：具有一定的征服欲望和潜质，可能在情感关系和性关系中会比较喜欢充当主导者的角色，可能喜欢居高临下的展现自己的强势和优越感，来满足自己的精神需求，通常可能具有一定的情感胜负欲，但欲望并不强烈或者相对比较克制。能够根据情境和伴侣的特点灵活调整自己的角色定位。',
                high: '高分：有强烈的征服欲望，在情感关系和性关系中喜欢充当主导者的角色，喜欢居高临下的展现自己的强势和优越感，来满足自己的精神需求，具有强烈的情感胜负欲。',
                warning: '⚠️ 重要提示： 抛开性关系后，也要给对方提供平等自由的空间，不适宜过度的干涉对方的生活和权力。',
                note: '场景外回到平等与尊重。'
            },
            控制: {
                title: '控制',
                description: '低分：不喜欢控制他人，倾向于自由和灵活的关系。中分：有一定的控制倾向，可能在特定场景（如性行为）中喜欢主导节奏和方式，但在日常生活中相对灵活。可能会对关系的某些方面（如性生活安排、约会计划）表现出控制欲，但不会延伸到伴侣的全部生活领域。能够根据伴侣的反馈适当调整控制程度。高分：有强烈的控制欲，希望在关系中全面掌控节奏和方式，不仅限于性行为，还可能延伸到生活的各个方面。',
                low: '低分：不喜欢控制他人，倾向于自由和灵活的关系。',
                medium: '中分：有一定的控制倾向，可能在特定场景（如性行为）中喜欢主导节奏和方式，但在日常生活中相对灵活。可能会对关系的某些方面（如性生活安排、约会计划）表现出控制欲，但不会延伸到伴侣的全部生活领域。能够根据伴侣的反馈适当调整控制程度。',
                high: '高分：有强烈的控制欲，希望在关系中全面掌控节奏和方式，不仅限于性行为，还可能延伸到生活的各个方面。',
                warning: '⚠️ 重要提示： 需要定期与伴侣沟通，确保控制行为在双方都舒适的范围内，避免越界。',
                note: ''
            },
            强迫: {
                title: '强迫',
                description: '低分：不喜欢强迫性行为，尊重伴侣的意愿。中分：有一定的强迫性幻想或倾向，但通常较为温和，可能只是在性行为中偶尔表现出主动进取或略带强势的态度，比如主导性爱的开始时间和方式，或者喜欢在伴侣"假装拒绝"的游戏中获得乐趣。能够很好地区分幻想与现实，不会真正做出违背伴侣意愿的行为。高分：有强烈的强迫性幻想或倾向，喜欢在性行为中表现出主动进取或强势的态度，主导性爱的开始时间和方式，在伴侣"假装拒绝"的游戏中获得乐趣。',
                low: '低分：不喜欢强迫性行为，尊重伴侣的意愿。',
                medium: '中分：有一定的强迫性幻想或倾向，但通常较为温和，可能只是在性行为中偶尔表现出主动进取或略带强势的态度，比如主导性爱的开始时间和方式，或者喜欢在伴侣"假装拒绝"的游戏中获得乐趣。能够很好地区分幻想与现实，不会真正做出违背伴侣意愿的行为。',
                high: '高分：有强烈的强迫性幻想或倾向，喜欢在性行为中表现出主动进取或强势的态度，主导性爱的开始时间和方式，在伴侣"假装拒绝"的游戏中获得乐趣。',
                warning: '⚠️ 重要提示： 即使是轻度的强迫性游戏也需要事前沟通和明确同意，随时关注伴侣的真实感受。',
                note: '仅限伪装置+安全词，绝不越界。'
            },
            保护: {
                title: '保护',
                description: '低分：对保护他人没有特别的欲望，更倾向于平等的关系。中分：具有一定的保护欲望，可能对弱小天真的人更容易产生兴趣和保护欲，同时愿意承担保护他们的责任，但欲望并不是压倒性的。可能在伴侣脆弱或需要帮助时表现出保护倾向，但不会主动寻求或依赖这种角色定位。能够在照顾者和平等伴侣之间切换角色。高分：有强烈的保护欲望，对弱小天真的人容易产生兴趣和保护欲，愿意承担保护他们的责任，在伴侣脆弱或需要帮助时表现出强烈的保护倾向。',
                low: '低分：对保护他人没有特别的欲望，更倾向于平等的关系。',
                medium: '中分：具有一定的保护欲望，可能对弱小天真的人更容易产生兴趣和保护欲，同时愿意承担保护他们的责任，但欲望并不是压倒性的。可能在伴侣脆弱或需要帮助时表现出保护倾向，但不会主动寻求或依赖这种角色定位。能够在照顾者和平等伴侣之间切换角色。',
                high: '高分：有强烈的保护欲望，对弱小天真的人容易产生兴趣和保护欲，愿意承担保护他们的责任，在伴侣脆弱或需要帮助时表现出强烈的保护倾向。',
                warning: '',
                note: ''
            },
            受虐: {
                title: '受虐',
                description: '低分：对被暴力对待没有兴趣，更倾向于温和的性体验。中分：具有一定的受虐倾向和潜质，可能在性行为中会比较喜欢被暴力对待，享受生理和精神上所带来的痛苦，但欲望并不强烈或相对比较克制。可能只能接受轻度的疼痛刺激（如拍打、轻咬），或者只在特定情绪状态下才享受这种感觉。疼痛是增味剂而非必需品。高分：有强烈的受虐倾向，在性行为中喜欢被暴力对待，享受生理和精神上所带来的痛苦，能够接受强烈的疼痛刺激，疼痛是性体验的重要组成部分。',
                low: '低分：对被暴力对待没有兴趣，更倾向于温和的性体验。',
                medium: '中分：具有一定的受虐倾向和潜质，可能在性行为中会比较喜欢被暴力对待，享受生理和精神上所带来的痛苦，但欲望并不强烈或相对比较克制。可能只能接受轻度的疼痛刺激（如拍打、轻咬），或者只在特定情绪状态下才享受这种感觉。疼痛是增味剂而非必需品。',
                high: '高分：有强烈的受虐倾向，在性行为中喜欢被暴力对待，享受生理和精神上所带来的痛苦，能够接受强烈的疼痛刺激，疼痛是性体验的重要组成部分。',
                warning: '⚠️ 重要提示： 前提是保证在与伴侣之间的绝对信任，且不会给自己的身体或心灵造成实质性的伤害下进行尝试。',
                note: '掌握安全知识：力度/位置/器具卫生/停用词。'
            },
            屈辱: {
                title: '屈辱',
                description: '低分：对被羞辱没有兴趣，维护自己的人格尊严。中分：具有一定的受辱欲望和潜质，可能在性关系中会喜欢被伴侣进行人格侮辱、语言攻击、精神打压，可能会喜欢被当成地位下等的动物和发泄工具，追求挫败感所带来的精神满足，但欲望并不强烈或者相对比较克制。可能只能接受轻度的语言羞辱或角色扮演中的地位差异。高分：有强烈的受辱欲望，在性关系中喜欢被伴侣进行人格侮辱、语言攻击、精神打压，喜欢被当成地位下等的动物和发泄工具，追求挫败感所带来的精神满足。',
                low: '低分：对被羞辱没有兴趣，维护自己的人格尊严。',
                medium: '中分：具有一定的受辱欲望和潜质，可能在性关系中会喜欢被伴侣进行人格侮辱、语言攻击、精神打压，可能会喜欢被当成地位下等的动物和发泄工具，追求挫败感所带来的精神满足，但欲望并不强烈或者相对比较克制。可能只能接受轻度的语言羞辱或角色扮演中的地位差异。',
                high: '高分：有强烈的受辱欲望，在性关系中喜欢被伴侣进行人格侮辱、语言攻击、精神打压，喜欢被当成地位下等的动物和发泄工具，追求挫败感所带来的精神满足。',
                warning: '⚠️ 重要提示： 前提是保证在与伴侣之间的绝对信任，且不会给自己的身心造成实质性的伤害下进行尝试。',
                note: '注意人格尊严与长期心理影响。'
            },
            臣服: {
                title: '臣服',
                description: '低分：在关系中倾向于平等，不喜欢处于弱势或卑微的地位。中分：具有一定的臣服欲望和潜质，可能在情感关系和性关系会喜欢处于弱势和卑微的地位，可能会比较喜欢以舔狗的方式仰慕和崇拜自己的伴侣，但欲望并不强烈或者相对比较克制。可能只在特定情境或对特定类型的伴侣才表现出臣服倾向，平时仍能保持相对平等的关系状态。高分：有强烈的臣服欲望，在情感关系和性关系喜欢处于弱势和卑微的地位，喜欢以舔狗的方式仰慕和崇拜自己的伴侣。',
                low: '低分：在关系中倾向于平等，不喜欢处于弱势或卑微的地位。',
                medium: '中分：具有一定的臣服欲望和潜质，可能在情感关系和性关系会喜欢处于弱势和卑微的地位，可能会比较喜欢以舔狗的方式仰慕和崇拜自己的伴侣，但欲望并不强烈或者相对比较克制。可能只在特定情境或对特定类型的伴侣才表现出臣服倾向，平时仍能保持相对平等的关系状态。',
                high: '高分：有强烈的臣服欲望，在情感关系和性关系喜欢处于弱势和卑微的地位，喜欢以舔狗的方式仰慕和崇拜自己的伴侣。',
                warning: '⚠️ 重要提示： 抛开性关系后，也要尊重自己应有的权力和隐私。',
                note: '性场景之外需尊重自身边界与隐私。'
            },
            服从: {
                title: '服从',
                description: '低分：不喜欢被支配或被管教，倾向于独立自主。中分：具有一定的服从欲望和潜质，可能在情感关系和性关系中喜欢被支配、被管教，通常在情感关系更愿意扮演弱小服从依赖的小孩角色，来满足自己的精神需求。但欲望不是特别强烈或者相对的比较戒备克制。能够在服从和独立之间找到平衡，只在感到安全时才展现服从倾向。高分：有强烈的服从欲望，在情感关系和性关系中喜欢被支配、被管教，在情感关系更愿意扮演弱小服从依赖的小孩角色，来满足自己的精神需求。',
                low: '低分：不喜欢被支配或被管教，倾向于独立自主。',
                medium: '中分：具有一定的服从欲望和潜质，可能在情感关系和性关系中喜欢被支配、被管教，通常在情感关系更愿意扮演弱小服从依赖的小孩角色，来满足自己的精神需求。但欲望不是特别强烈或者相对的比较戒备克制。能够在服从和独立之间找到平衡，只在感到安全时才展现服从倾向。',
                high: '高分：有强烈的服从欲望，在情感关系和性关系中喜欢被支配、被管教，在情感关系更愿意扮演弱小服从依赖的小孩角色，来满足自己的精神需求。',
                warning: '⚠️ 重要提示： 抛开性关系后，也要尊重自己的隐私和自由。',
                note: ''
            },
            被迫: {
                title: '被迫',
                description: '低分：不喜欢被强迫或被束缚，更喜欢自愿的性体验。中分：具有一定的被迫欲望和潜质，可能在性行为中通过模拟被束缚或被强迫的情节来获得性满足，以此来减轻自己在道德和人设的包袱和压力。但这种欲望相对温和，可能只是轻度的"被动接受"或"假装抵抗"的游戏，而非强烈的非自愿幻想。高分：有强烈的被迫欲望，在性行为中通过模拟被束缚或被强迫的情节来获得性满足，以此来减轻自己在道德和人设的包袱和压力。',
                low: '低分：不喜欢被强迫或被束缚，更喜欢自愿的性体验。',
                medium: '中分：具有一定的被迫欲望和潜质，可能在性行为中通过模拟被束缚或被强迫的情节来获得性满足，以此来减轻自己在道德和人设的包袱和压力。但这种欲望相对温和，可能只是轻度的"被动接受"或"假装抵抗"的游戏，而非强烈的非自愿幻想。',
                high: '高分：有强烈的被迫欲望，在性行为中通过模拟被束缚或被强迫的情节来获得性满足，以此来减轻自己在道德和人设的包袱和压力。',
                warning: '⚠️ 重要提示： 前提要保证在双方绝对信任的情况下进行尝试，避免给自己的身心造成不必要的伤害。',
                note: '仅限伪装置+明确同意。'
            },
            叛逆: {
                title: '叛逆',
                description: '低分：性格顺从，不喜欢违反规则或挑战权威。中分：具有一定的叛逆爱好和潜质，可能会在行为上表现出叛逆和不服从，通常不愿意轻易妥协，并且故意做出一些违反规则、恶作剧、言语刺激来诱导伴侣惩罚和关注，并且以此来获得精神上的满足。但欲望并不强烈或者相对的克制，可能只在某些情况下才表现出叛逆倾向。高分：有强烈的叛逆爱好，在行为上表现出叛逆和不服从，不愿意轻易妥协，故意做出一些违反规则、恶作剧、言语刺激来诱导伴侣惩罚和关注，以此来获得精神上的满足。',
                low: '低分：性格顺从，不喜欢违反规则或挑战权威。',
                medium: '中分：具有一定的叛逆爱好和潜质，可能会在行为上表现出叛逆和不服从，通常不愿意轻易妥协，并且故意做出一些违反规则、恶作剧、言语刺激来诱导伴侣惩罚和关注，并且以此来获得精神上的满足。但欲望并不强烈或者相对的克制，可能只在某些情况下才表现出叛逆倾向。',
                high: '高分：有强烈的叛逆爱好，在行为上表现出叛逆和不服从，不愿意轻易妥协，故意做出一些违反规则、恶作剧、言语刺激来诱导伴侣惩罚和关注，以此来获得精神上的满足。',
                warning: '',
                note: ''
            },
            放纵: {
                title: '放纵',
                description: '低分：性观念相对保守，对多样化的性体验持谨慎态度。中分：性观念相对开放，对多样化的性体验持接受态度，可能愿意在安全范围内尝试一些新鲜的性行为或有过多个性伴侣的经历。但仍保持一定的节制和选择性，不会完全放纵欲望，会考虑情感因素和道德边界。高分：性观念非常开放，对多样化的性体验持接受态度，愿意尝试各种新鲜的性行为，可能有多个性伴侣的经历，不会完全放纵欲望，会考虑情感因素和道德边界。',
                low: '低分：性观念相对保守，对多样化的性体验持谨慎态度。',
                medium: '中分：性观念相对开放，对多样化的性体验持接受态度，可能愿意在安全范围内尝试一些新鲜的性行为或有过多个性伴侣的经历。但仍保持一定的节制和选择性，不会完全放纵欲望，会考虑情感因素和道德边界。',
                high: '高分：性观念非常开放，对多样化的性体验持接受态度，愿意尝试各种新鲜的性行为，可能有多个性伴侣的经历，不会完全放纵欲望，会考虑情感因素和道德边界。',
                warning: '⚠️ 重要提示： 要在探索和自我保护之间找到平衡，确保所有行为都是在知情同意和安全的前提下进行。',
                note: '评估健康/法律/关系风险。'
            },
            暴露: {
                title: '暴露',
                description: '低分：不喜欢被观看或展示自己，注重隐私。中分：有一定的暴露倾向，可能在私密环境下喜欢被伴侣观看或欣赏自己的身体，或愿意在相对安全的情境下（如私人派对、特定社群）展示自己。但不会在公共场合或非自愿的观众面前暴露，能够把握合适的场合和边界。高分：有强烈的暴露倾向，喜欢在私密环境下被伴侣观看或欣赏自己的身体，愿意在相对安全的情境下（如私人派对、特定社群）展示自己。',
                low: '低分：不喜欢被观看或展示自己，注重隐私。',
                medium: '中分：有一定的暴露倾向，可能在私密环境下喜欢被伴侣观看或欣赏自己的身体，或愿意在相对安全的情境下（如私人派对、特定社群）展示自己。但不会在公共场合或非自愿的观众面前暴露，能够把握合适的场合和边界。',
                high: '高分：有强烈的暴露倾向，喜欢在私密环境下被伴侣观看或欣赏自己的身体，愿意在相对安全的情境下（如私人派对、特定社群）展示自己。',
                warning: '⚠️ 重要提示： 即使是私密环境，也要确保所有在场人员都同意和享受这种互动，尊重他人的界限。',
                note: '严禁违法拍摄与传播。'
            },
            群体: {
                title: '群体',
                description: '低分：对群体性行为没有兴趣，更倾向于一对一的性关系。中分：对群体性行为持开放或好奇态度，可能愿意在合适的情况下尝试，但不是核心的性需求。可能幻想过或有兴趣体验，但在实际行动上会比较谨慎和选择性。需要足够的安全感和信任基础才会考虑参与。高分：对群体性行为持开放或好奇态度，愿意在合适的情况下尝试，是核心的性需求，幻想过或有兴趣体验，在实际行动上会比较谨慎和选择性，需要足够的安全感和信任基础才会考虑参与。',
                low: '低分：对群体性行为没有兴趣，更倾向于一对一的性关系。',
                medium: '中分：对群体性行为持开放或好奇态度，可能愿意在合适的情况下尝试，但不是核心的性需求。可能幻想过或有兴趣体验，但在实际行动上会比较谨慎和选择性。需要足够的安全感和信任基础才会考虑参与。',
                high: '高分：对群体性行为持开放或好奇态度，愿意在合适的情况下尝试，是核心的性需求，幻想过或有兴趣体验，在实际行动上会比较谨慎和选择性，需要足够的安全感和信任基础才会考虑参与。',
                warning: '⚠️ 重要提示： 如果尝试，务必做好充分的沟通、设定边界、采取安全措施，并确保自己的情感能够承受这种体验。',
                note: '注意健康与关系风险，遵法守纪。'
            },
            跨性: {
                title: '跨性',
                description: '低分：对跨性别角色没有兴趣，按照生理性别表现。中分：有一定的跨性别兴趣或好奇心，可能偶尔喜欢在性关系中尝试不同的性别角色或权力位置（如女性主导、男性臣服），但这不是持续性或强烈的需求。可能对性别角色扮演持开放态度，愿意在私密环境下探索，但日常生活中仍按照生理性别表现。高分：有强烈的跨性别兴趣或好奇心，喜欢在性关系中尝试不同的性别角色或权力位置（如女性主导、男性臣服），这是持续性或强烈的需求，对性别角色扮演持开放态度，愿意在私密环境下探索。',
                low: '低分：对跨性别角色没有兴趣，按照生理性别表现。',
                medium: '中分：有一定的跨性别兴趣或好奇心，可能偶尔喜欢在性关系中尝试不同的性别角色或权力位置（如女性主导、男性臣服），但这不是持续性或强烈的需求。可能对性别角色扮演持开放态度，愿意在私密环境下探索，但日常生活中仍按照生理性别表现。',
                high: '高分：有强烈的跨性别兴趣或好奇心，喜欢在性关系中尝试不同的性别角色或权力位置（如女性主导、男性臣服），这是持续性或强烈的需求，对性别角色扮演持开放态度，愿意在私密环境下探索。',
                warning: '⚠️ 重要提示： 探索性别角色时要与伴侣充分沟通，确保双方都舒适和享受这种体验。',
                note: '尊重公共规范，避免冲突。'
            },
            同性: {
                title: '同性',
                description: '低分：对同性没有性吸引，只对异性产生兴趣。中分：对同性有一定程度的吸引或好奇，可能是双性恋倾向，既对异性也对同性产生性吸引和情感兴趣。可能在某些情况下或对某些特定的同性个体产生性冲动，但不如高分者那样明确和强烈。可能仍在探索自己的性取向。高分：对同性有强烈的吸引，可能是双性恋倾向，既对异性也对同性产生性吸引和情感兴趣，在某些情况下或对某些特定的同性个体产生性冲动，明确和强烈。',
                low: '低分：对同性没有性吸引，只对异性产生兴趣。',
                medium: '中分：对同性有一定程度的吸引或好奇，可能是双性恋倾向，既对异性也对同性产生性吸引和情感兴趣。可能在某些情况下或对某些特定的同性个体产生性冲动，但不如高分者那样明确和强烈。可能仍在探索自己的性取向。',
                high: '高分：对同性有强烈的吸引，可能是双性恋倾向，既对异性也对同性产生性吸引和情感兴趣，在某些情况下或对某些特定的同性个体产生性冲动，明确和强烈。',
                warning: '⚠️ 重要提示： 性取向是流动的，不必急于给自己贴标签。重要的是尊重自己真实的感受和吸引力。',
                note: ''
            },
            恋物: {
                title: '恋物',
                description: '低分：对特定物品没有特殊的性兴趣。中分：具有一定的恋物癖好和潜质，可能对异性的贴身衣物有着特殊癖好，例如对某种服装、鞋子、内衣等感兴趣，但欲望并不强烈或者相对比较克制。这些物品可以增加性兴奋，但不是必需品。可能只是觉得某些物品性感或有吸引力，而非产生强烈的迷恋。高分：有强烈的恋物癖好，对异性的贴身衣物有着特殊癖好，例如对某种服装、鞋子、内衣等感兴趣，这些物品可以增加性兴奋，是必需品，觉得某些物品性感或有吸引力，产生强烈的迷恋。',
                low: '低分：对特定物品没有特殊的性兴趣。',
                medium: '中分：具有一定的恋物癖好和潜质，可能对异性的贴身衣物有着特殊癖好，例如对某种服装、鞋子、内衣等感兴趣，但欲望并不强烈或者相对比较克制。这些物品可以增加性兴奋，但不是必需品。可能只是觉得某些物品性感或有吸引力，而非产生强烈的迷恋。',
                high: '高分：有强烈的恋物癖好，对异性的贴身衣物有着特殊癖好，例如对某种服装、鞋子、内衣等感兴趣，这些物品可以增加性兴奋，是必需品，觉得某些物品性感或有吸引力，产生强烈的迷恋。',
                warning: '⚠️ 重要提示： 同时要避免在他人不知情、不允许的情况进行冒犯的行为。',
                note: '避免未经允许的侵犯与拿取。'
            },
            NTR: {
                title: 'NTR',
                description: '低分：对被背叛没有兴趣，重视忠诚和专一。中分：具有一定的NTR癖好和潜质，NTR指的是一种绿帽癖好，喜欢被他人横刀夺爱后而享受这种精神上被绿的屈辱感。但欲望并不强烈或者相对比较克制。可能只是偶尔有这种幻想，或者在特定情境下（如角色扮演）才会产生这种兴奋，但不一定愿意真正实践。高分：有强烈的NTR癖好，NTR指的是一种绿帽癖好，喜欢被他人横刀夺爱后而享受这种精神上被绿的屈辱感，经常有这种幻想，或者在特定情境下（如角色扮演）会产生这种兴奋，愿意真正实践。',
                low: '低分：对被背叛没有兴趣，重视忠诚和专一。',
                medium: '中分：具有一定的NTR癖好和潜质，NTR指的是一种绿帽癖好，喜欢被他人横刀夺爱后而享受这种精神上被绿的屈辱感。但欲望并不强烈或者相对比较克制。可能只是偶尔有这种幻想，或者在特定情境下（如角色扮演）才会产生这种兴奋，但不一定愿意真正实践。',
                high: '高分：有强烈的NTR癖好，NTR指的是一种绿帽癖好，喜欢被他人横刀夺爱后而享受这种精神上被绿的屈辱感，经常有这种幻想，或者在特定情境下（如角色扮演）会产生这种兴奋，愿意真正实践。',
                warning: '⚠️ 重要提示： 幻想和现实是两回事，要谨慎区分。真实的背叛可能带来难以愈合的情感创伤。',
                note: ''
            },
            纯爱: {
                title: '纯爱',
                description: '低分：对纯爱没有特别的追求，可能接受没有爱的性关系。中分：具有一定的纯爱特质，可能更喜欢一种纯洁、真诚和深厚的爱情，它通常不涉及复杂的情感纠葛或背叛，而是基于彼此的尊重、信任。可能不太能接受没有爱的性关系，但也不会过分理想化或排斥所有非传统关系模式。在合适的情况下可能接受有情感基础的非排他性关系。高分：有强烈的纯爱特质，更喜欢一种纯洁、真诚和深厚的爱情，它通常不涉及复杂的情感纠葛或背叛，而是基于彼此的尊重、信任，不能接受没有爱的性关系，过分理想化或排斥所有非传统关系模式。',
                low: '低分：对纯爱没有特别的追求，可能接受没有爱的性关系。',
                medium: '中分：具有一定的纯爱特质，可能更喜欢一种纯洁、真诚和深厚的爱情，它通常不涉及复杂的情感纠葛或背叛，而是基于彼此的尊重、信任。可能不太能接受没有爱的性关系，但也不会过分理想化或排斥所有非传统关系模式。在合适的情况下可能接受有情感基础的非排他性关系。',
                high: '高分：有强烈的纯爱特质，更喜欢一种纯洁、真诚和深厚的爱情，它通常不涉及复杂的情感纠葛或背叛，而是基于彼此的尊重、信任，不能接受没有爱的性关系，过分理想化或排斥所有非传统关系模式。',
                warning: '',
                note: ''
            },
            诱导: {
                title: '诱导',
                description: '低分：不擅长展现性感或使用暗示行为，影响伴侣的能力较弱。中分：会有一定程度地展现性感和使用暗示行为言语，但可能在技巧和效果上稍逊一筹。在性关系方面，能一定程度上影响伴侣的决定，但不是特别得心应手。可能在熟悉的伴侣面前能够成功诱导，但面对新的对象时不够自信或熟练。高分：非常擅长展现性感和使用暗示行为言语，在技巧和效果上非常出色，在性关系方面，能够很大程度上影响伴侣的决定，非常得心应手，在熟悉的伴侣面前能够成功诱导，面对新的对象时也非常自信或熟练。',
                low: '低分：不擅长展现性感或使用暗示行为，影响伴侣的能力较弱。',
                medium: '中分：会有一定程度地展现性感和使用暗示行为言语，但可能在技巧和效果上稍逊一筹。在性关系方面，能一定程度上影响伴侣的决定，但不是特别得心应手。可能在熟悉的伴侣面前能够成功诱导，但面对新的对象时不够自信或熟练。',
                high: '高分：非常擅长展现性感和使用暗示行为言语，在技巧和效果上非常出色，在性关系方面，能够很大程度上影响伴侣的决定，非常得心应手，在熟悉的伴侣面前能够成功诱导，面对新的对象时也非常自信或熟练。',
                warning: '',
                note: ''
            },
            情调: {
                title: '情调',
                description: '低分：不太注重浪漫和调情，性关系比较直接。中分：有一定的浪漫意识和调情能力，会尝试进行一些浪漫的举动来为性关系增添情调，但可能在深度和广度上不如高分者。能与伴侣有一定程度的共鸣，但不是每次都能达到理想状态。可能会记得重要日子、准备小惊喜，但不够持续或创意不足。高分：有很强的浪漫意识和调情能力，会尝试进行一些浪漫的举动来为性关系增添情调，在深度和广度上非常出色，能与伴侣有很高程度的共鸣，每次都能达到理想状态，会记得重要日子、准备小惊喜，非常持续或创意充足。',
                low: '低分：不太注重浪漫和调情，性关系比较直接。',
                medium: '中分：有一定的浪漫意识和调情能力，会尝试进行一些浪漫的举动来为性关系增添情调，但可能在深度和广度上不如高分者。能与伴侣有一定程度的共鸣，但不是每次都能达到理想状态。可能会记得重要日子、准备小惊喜，但不够持续或创意不足。',
                high: '高分：有很强的浪漫意识和调情能力，会尝试进行一些浪漫的举动来为性关系增添情调，在深度和广度上非常出色，能与伴侣有很高程度的共鸣，每次都能达到理想状态，会记得重要日子、准备小惊喜，非常持续或创意充足。',
                warning: '',
                note: ''
            }
        }
    },
    'love-brain': {
        questions: [
            {
                id: 1,
                type: 'single',
                question: '当你给对方发消息后，多久会开始焦虑？',
                options: [
                    { value: 'A', text: '从不焦虑，该干嘛干嘛', score: 0 },
                    { value: 'B', text: '等了1小时还没回就开始胡思乱想', score: 2 },
                    { value: 'C', text: '等了5分钟就开始盯着手机', score: 3 }
                ]
            },
            {
                id: 2,
                type: 'single',
                question: '对方说"我很忙"，你的第一反应是？',
                options: [
                    { value: 'A', text: '好的，那我先忙自己的事', score: 0 },
                    { value: 'B', text: '是不是在和别人聊天？', score: 2 },
                    { value: 'C', text: '整晚失眠，脑补分手剧本', score: 3 }
                ]
            },
            {
                id: 3,
                type: 'single',
                question: '你会反复查看对方的朋友圈点赞列表吗？',
                options: [
                    { value: 'A', text: '不会，那有什么好看的', score: 0 },
                    { value: 'B', text: '偶尔会看看', score: 2 },
                    { value: 'C', text: '每天都要看好几遍，分析每个点赞的人', score: 3 }
                ]
            },
            {
                id: 4,
                type: 'single',
                question: '对方没有秒回你，你会？',
                options: [
                    { value: 'A', text: '正常，大家都很忙', score: 0 },
                    { value: 'B', text: '有点失落，但能理解', score: 2 },
                    { value: 'C', text: '疯狂追问"你在干嘛""为什么不回我"', score: 3 }
                ]
            },
            {
                id: 5,
                type: 'single',
                question: '恋爱后，你的生活重心是？',
                options: [
                    { value: 'A', text: '工作学习为主，恋爱是调味剂', score: 0 },
                    { value: 'B', text: '恋爱和工作学习各占一半', score: 2 },
                    { value: 'C', text: '恋爱就是全部，其他都不重要', score: 3 }
                ]
            }
        ],
        results: {
            low: {
                title: '清醒理智型',
                description: '你在爱情中保持清醒，不会被情感冲昏头脑。你有自己的生活重心，恋爱只是生活的一部分。你能够理性处理感情问题，不会过度焦虑或患得患失。这种状态让你在关系中保持独立和自主。'
            },
            medium: {
                title: '适度投入型',
                description: '你在爱情中有适度的投入，既不会过于冷漠，也不会过度沉迷。你重视感情，但也能保持一定的理性。偶尔会因为对方的行为而情绪波动，但总体上能够控制自己的情绪。这是一种比较健康的恋爱状态。'
            },
            high: {
                title: '恋爱脑型',
                description: '你在爱情中完全投入，甚至有些"疯批"。你的情绪完全被对方掌控，对方的一举一动都能让你情绪起伏。你可能会过度解读对方的行为，容易焦虑和患得患失。虽然这显示你对感情的投入，但也要注意保持自我，不要完全迷失在爱情中。'
            }
        }
    },
    'mental-age': {
        questions: [
            {
                id: 1,
                type: 'single',
                question: '周末你会怎么度过？',
                options: [
                    { value: 'A', text: '睡懒觉、打游戏、追剧', score: 1 },
                    { value: 'B', text: '和朋友聚会、外出活动', score: 2 },
                    { value: 'C', text: '学习、工作、规划下周', score: 3 }
                ]
            },
            {
                id: 2,
                type: 'single',
                question: '遇到困难时，你会？',
                options: [
                    { value: 'A', text: '先抱怨一通再说', score: 1 },
                    { value: 'B', text: '寻求帮助，一起解决', score: 2 },
                    { value: 'C', text: '冷静分析，制定解决方案', score: 3 }
                ]
            },
            {
                id: 3,
                type: 'single',
                question: '你对未来的规划是？',
                options: [
                    { value: 'A', text: '没想过，活在当下', score: 1 },
                    { value: 'B', text: '有一些想法，但还没具体计划', score: 2 },
                    { value: 'C', text: '有清晰的短期和长期目标', score: 3 }
                ]
            },
            {
                id: 4,
                type: 'single',
                question: '你更喜欢什么样的娱乐方式？',
                options: [
                    { value: 'A', text: '刺激、新奇的游戏和活动', score: 1 },
                    { value: 'B', text: '和朋友一起的社交活动', score: 2 },
                    { value: 'C', text: '阅读、思考、深度交流', score: 3 }
                ]
            },
            {
                id: 5,
                type: 'single',
                question: '面对批评，你会？',
                options: [
                    { value: 'A', text: '生气、反驳、不服气', score: 1 },
                    { value: 'B', text: '有点不舒服，但会反思', score: 2 },
                    { value: 'C', text: '虚心接受，认真改进', score: 3 }
                ]
            }
        ],
        results: {
            young: {
                title: '心理年龄：儿童期（5-12岁）',
                description: '你的心理年龄还处于儿童期，性格天真烂漫，喜欢新鲜刺激的事物。你情绪化，容易冲动，但也很真诚可爱。虽然有时候显得不够成熟，但你的纯真和热情是很多人羡慕的。'
            },
            adolescent: {
                title: '心理年龄：青少年期（13-19岁）',
                description: '你的心理年龄处于青少年期，充满活力和好奇心。你重视社交和人际关系，渴望独立但有时又依赖他人。你正在成长的过程中，会经历各种情绪波动，但这也是青春的必经之路。'
            },
            adult: {
                title: '心理年龄：成年期（20-35岁）',
                description: '你的心理年龄与实际年龄相符，你是一个成熟的成年人。你能够理性处理问题，有清晰的规划和目标。你既重视感情，也能保持独立，在工作和生活中都能找到平衡。'
            },
            mature: {
                title: '心理年龄：成熟期（36岁以上）',
                description: '你的心理年龄非常成熟，超越了你的实际年龄。你有着丰富的人生阅历和深刻的思考能力。你能够从容面对各种挑战，对生活有深刻的理解。你的智慧和稳重让人敬佩。'
            }
        }
    }
};
