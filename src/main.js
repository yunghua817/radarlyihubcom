const tracks = [
  {
    id: "fun",
    eyebrow: "Play",
    title: "最好玩的專案",
    short: "好玩",
    accent: "#225CFF",
    summary: "即時反饋、強互動、適合用一天做出能給朋友看的版本。",
  },
  {
    id: "useful",
    eyebrow: "Utility",
    title: "最好用的專案",
    short: "好用",
    accent: "#18A058",
    summary: "做完能進入日常工作流，優先解決資訊、文件、財務和個人知識管理。",
  },
  {
    id: "hardware",
    eyebrow: "Hardware",
    title: "最硬的專案",
    short: "最硬",
    nav: "最硬",
    accent: "#FF6A3D",
    summary: "小預算也能跑通，硬體反饋明確，適合從 ESP32 和 Raspberry Pi 起步。",
  },
];

const starTrack = {
  id: "stars",
  eyebrow: "GitHub",
  title: "增長最快的 GitHub 專案",
  short: "明星",
  nav: "明星專案",
  accent: "#111827",
  summary: "基於 GitHub Trending weekly 候選池，並按本週新增 stars 重新排序，追蹤正在冒頭的開源專案。",
};

const boardTabs = [...tracks, starTrack];
const skillRadarUrl = "/skills.html?v=weekly-refresh-20260619";
const codexUsesUrl = "/codex-uses.html?v=cross-nav-20260619";
const claudeUsesUrl = "/claude-uses.html?v=claude-use-cases-20260630";

const skillCatalog = {
  "openai-skills": {
    name: "OpenAI Skills Catalog",
    signal: "Codex 官方目錄",
    url: "https://github.com/openai/skills",
    description: "先從官方目錄理解 Skill 怎麼安裝、觸發和複用，適合作為所有專案的起點。",
  },
  "openai-docs": {
    name: "OpenAI Cookbook",
    signal: "模型/API 示例",
    url: "https://github.com/openai/openai-cookbook",
    description: "用於參考模型選擇、API 呼叫、流式輸出、工具呼叫和結構化輸出等示例。",
  },
  "agent-skills": {
    name: "Addy Osmani Agent Skills",
    signal: "工程 Skill",
    url: "https://github.com/addyosmani/agent-skills",
    description: "生產級 AI coding agent 工程 Skill，適合讓 Codex 更穩定地讀專案、改程式碼、跑驗收。",
  },
  "skillspector": {
    name: "NVIDIA SkillSpector",
    signal: "安全掃描",
    url: "https://github.com/NVIDIA/SkillSpector",
    description: "安裝第三方 Skill 前先掃描危險命令、可疑網路請求和高風險許可權。",
  },
  "frontend-design": {
    name: "Vercel Web Guidelines",
    signal: "UI 驗收規則",
    url: "https://github.com/vercel-labs/web-interface-guidelines",
    description: "用公開的 Web 介面準則檢查佈局、焦點態、移動端和可訪問性。",
  },
  "playwright-skill": {
    name: "Playwright Skill",
    signal: "真瀏覽器驗收",
    url: "https://github.com/lackeyjb/playwright-skill",
    description: "讓 AI 開啟頁面測試按鈕、表單、響應式和關鍵流程，避免 demo 只在想象裡可用。",
  },
  "vercel-deploy": {
    name: "Vercel Deploy Skills",
    signal: "公開連結",
    url: "https://github.com/vercel-labs/agent-skills",
    description: "做完網頁後生成預覽、部署公開連結，並檢查上線前的基礎問題。",
  },
  "shadcn-skill": {
    name: "shadcn/ui Skill",
    signal: "常用元件",
    url: "https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md",
    description: "快速把按鈕、表單、彈窗、表格等 Web App 常用元件接進專案。",
  },
  "figma-skills": {
    name: "Figma Skills",
    signal: "設計協作",
    url: "https://claude.com/skills",
    description: "把介面、元件庫和設計稿整理成 AI 能繼續執行的設計上下文。",
  },
  "canva-skills": {
    name: "Canva Skills",
    signal: "素材出圖",
    url: "https://claude.com/skills",
    description: "適合做封面、海報、社媒圖和視覺素材，不必先學複雜設計軟體。",
  },
  "guizang-ppt": {
    name: "歸藏 PPT Skill",
    signal: "中文爆款視覺",
    url: "https://github.com/op7418/guizang-ppt-skill",
    description: "適合把專案做成釋出會式網頁 PPT、長圖或可分享的視覺說明。",
  },
  "document-skills": {
    name: "Document Skills",
    signal: "文件表格",
    url: "https://github.com/anthropics/skills",
    description: "處理 Word、Excel、PPT、PDF 和資料整理類專案時最容易馬上見效。",
  },
  "opencli": {
    name: "OpenCLI",
    signal: "真實網頁操作",
    url: "https://github.com/jackwener/opencli",
    description: "把網頁、平臺和公開 API 變成 AI 可以穩定呼叫的命令列工具。",
  },
  "lark-cli": {
    name: "飛書 / Lark CLI",
    signal: "中文團隊工作流",
    url: "https://github.com/larksuite/cli",
    description: "適合會議紀要、文件、多維表格、日曆和任務流這類中文辦公專案。",
  },
  "github-cli": {
    name: "GitHub CLI",
    signal: "復現開源專案",
    url: "https://cli.github.com/",
    description: "讓 AI 更順地 clone、看 issue、開 PR、跑 release 和管理專案來源。",
  },
  "supabase-skills": {
    name: "Supabase Agent Skills",
    signal: "登入資料庫",
    url: "https://github.com/supabase/agent-skills",
    description: "新手做賬號、許可權、資料庫、即時資料時，用它減少後端卡點。",
  },
  "huggingface-skills": {
    name: "Hugging Face Skills",
    signal: "AI Demo",
    url: "https://github.com/huggingface/skills",
    description: "適合把模型、資料集、Gradio、Spaces 接進 AI 專案和演示頁面。",
  },
  "sentry-skills": {
    name: "Sentry Agent Skills",
    signal: "上線穩定性",
    url: "https://github.com/getsentry/skills",
    description: "公開專案上線後，用來定位錯誤、修 issue、維護監控接入。",
  },
};

const defaultSkillIds = {
  fun: ["github-cli", "playwright-skill", "frontend-design"],
  useful: ["github-cli", "shadcn-skill", "playwright-skill"],
  hardware: ["github-cli", "opencli"],
  stars: ["github-cli", "openai-skills"],
};

const projectSkillOverrides = {
  "AI 小鎮 / NPC 社交遊戲": ["github-cli", "openai-docs", "playwright-skill"],
  "手勢控制小遊戲 / 手勢樂器": ["github-cli", "playwright-skill", "frontend-design"],
  "節點式視覺實驗室": ["github-cli", "frontend-design", "playwright-skill"],
  "生成式海報 / 桌布工廠": ["canva-skills", "figma-skills", "frontend-design"],
  "產品釋出短片生成器": ["github-cli", "huggingface-skills", "canva-skills"],
  "手繪風白板 / 靈感草圖板": ["figma-skills", "frontend-design", "playwright-skill"],
  "24 小時人生撥盤": ["github-cli", "frontend-design", "playwright-skill"],
  "節點流程玩具": ["github-cli", "shadcn-skill", "playwright-skill"],
  "文本生成圖表魔法": ["github-cli", "openai-docs", "playwright-skill"],
  "資料視覺化玩具箱": ["github-cli", "frontend-design", "playwright-skill"],
  "WebGL 流體玩具": ["github-cli", "playwright-skill", "frontend-design"],
  "程式碼動畫課件": ["github-cli", "playwright-skill", "frontend-design"],
  "閃念備忘錄 / 個人微博": ["github-cli", "shadcn-skill", "playwright-skill"],
  "個人 AI 工作臺": ["openai-docs", "huggingface-skills", "document-skills"],
  "自動化工作流中樞": ["opencli", "github-cli", "shadcn-skill"],
  "資訊雷達 / 週報機器人": ["opencli", "document-skills", "github-cli"],
  "票據合同 OCR 文件庫": ["document-skills", "opencli", "github-cli"],
  "PDF 萬能工具箱": ["document-skills", "github-cli", "playwright-skill"],
  "私人知識問答庫": ["openai-docs", "huggingface-skills", "document-skills"],
  "AI 應用工作流平臺": ["openai-docs", "github-cli", "playwright-skill"],
  "網頁抓取 / 資料管道": ["opencli", "document-skills", "github-cli"],
  "服務健康監控面板": ["sentry-skills", "github-cli", "playwright-skill"],
  "私人元搜尋引擎": ["opencli", "github-cli", "playwright-skill"],
  "跨裝置檔案同步": ["github-cli", "opencli"],
  "Meshtastic 離線通訊節點": ["github-cli", "opencli"],
  "QMK 宏鍵盤 / 工作流控制台": ["github-cli", "opencli"],
  "智慧植物監測器": ["github-cli", "opencli"],
  "ESPHome 全屋感測器平臺": ["github-cli", "opencli"],
  "ratgdo 車庫門控制器": ["github-cli", "opencli"],
  "harry0703/MoneyPrinterTurbo": ["github-cli", "openai-docs", "huggingface-skills"],
  "Lum1104/Understand-Anything": ["github-cli", "openai-skills", "playwright-skill"],
  "microsoft/markitdown": ["document-skills", "github-cli", "opencli"],
  "Leonxlnx/taste-skill": ["openai-skills", "document-skills", "github-cli"],
  "colbymchenry/codegraph": ["github-cli", "openai-docs", "playwright-skill"],
  "affaan-m/ECC": ["openai-skills", "openai-docs", "github-cli"],
  "rohitg00/ai-engineering-from-scratch": ["github-cli", "huggingface-skills", "openai-docs"],
  "mukul975/Anthropic-Cybersecurity-Skills": ["openai-skills", "github-cli", "document-skills"],
  "hardikpandya/stop-slop": ["openai-skills", "document-skills", "github-cli"],
  "calesthio/OpenMontage": ["github-cli", "huggingface-skills", "canva-skills"],
  "google-labs-code/design.md": ["frontend-design", "figma-skills", "github-cli"],
  "topoteretes/cognee": ["openai-docs", "github-cli", "document-skills"],
  "JCodesMore/ai-website-cloner-template": ["github-cli", "frontend-design", "playwright-skill"],
  "ZhuLinsen/daily_stock_analysis": ["openai-docs", "github-cli", "document-skills"],
  "addyosmani/agent-skills": ["agent-skills", "github-cli", "playwright-skill"],
  "apple/container": ["github-cli", "openai-docs", "document-skills"],
  "chopratejas/headroom": ["openai-docs", "github-cli", "document-skills"],
  "phuryn/pm-skills": ["openai-skills", "document-skills", "github-cli"],
  "NVIDIA/SkillSpector": ["skillspector", "github-cli", "document-skills"],
  "anthropics/knowledge-work-plugins": ["document-skills", "openai-skills", "github-cli"],
  "EveryInc/compound-engineering-plugin": ["openai-skills", "github-cli", "document-skills"],
  "mvanhorn/last30days-skill": ["openai-skills", "opencli", "document-skills"],
  "DeusData/codebase-memory-mcp": ["github-cli", "openai-docs", "document-skills"],
  "NousResearch/hermes-agent": ["github-cli", "openai-docs", "document-skills"],
  "Panniantong/Agent-Reach": ["opencli", "github-cli", "playwright-skill"],
  "palmier-io/palmier-pro": ["github-cli", "canva-skills", "huggingface-skills"],
  "jamiepine/voicebox": ["github-cli", "huggingface-skills", "openai-docs"],
  "simplex-chat/simplex-chat": ["github-cli", "document-skills", "playwright-skill"],
  "Stirling-Tools/Stirling-PDF": ["document-skills", "github-cli", "playwright-skill"],
  "lfnovo/open-notebook": ["document-skills", "openai-docs", "github-cli"],
  "chatwoot/chatwoot": ["github-cli", "shadcn-skill", "playwright-skill"],
  "kenn-io/agentsview": ["github-cli", "openai-docs", "document-skills"],
  "microsoft/PowerToys": ["github-cli", "document-skills", "playwright-skill"],
  "PaddlePaddle/PaddleOCR": ["document-skills", "github-cli", "huggingface-skills"],
  "pbakaus/impeccable": ["frontend-design", "figma-skills", "playwright-skill"],
  "roboflow/supervision": ["huggingface-skills", "github-cli", "playwright-skill"],
  "Open-LLM-VTuber/Open-LLM-VTuber": ["openai-docs", "huggingface-skills", "github-cli"],
  "CopilotKit/CopilotKit": ["github-cli", "shadcn-skill", "playwright-skill"],
};

const projectSkillLimits = {
  "跨裝置檔案同步": 2,
  "ESP32 電子墨水日曆牌": 2,
  "Meshtastic 離線通訊節點": 2,
  "QMK 宏鍵盤 / 工作流控制台": 2,
  "智慧植物監測器": 2,
  "ESPHome 全屋感測器平臺": 2,
  "OpenMQTTGateway 萬能閘道器": 2,
  "Zigbee2MQTT 裝置橋": 2,
  "ESP32-CAM 口袋攝像頭": 2,
  "ESPresense 房間定位": 2,
  "Marlin 3D 印表機韌體": 2,
  "Klipper 高速列印控制器": 2,
  "ZMK 無線機械鍵盤": 2,
  "KMK CircuitPython 鍵盤": 2,
  "OpenSprinkler 智慧澆灌": 2,
  "OpenAstroTracker 星空追蹤器": 2,
  "SmartKnob 觸感旋鈕": 2,
  "ratgdo 車庫門控制器": 2,
  "OpenDTU 太陽能監控": 2,
  "rtl_433 無線感測器雷達": 2,
};

const projectSkillRules = [
  { tracks: ["fun", "stars"], match: /短片|短影片|影片|成片|分鏡|配音|字幕|tts|voice|movie|moneyprinter|remotion|ffmpeg/, skills: ["github-cli", "openai-docs", "huggingface-skills"] },
  { tracks: ["fun"], match: /海報|桌布|封面|字型|素材|視覺稿|typography|blotter/, skills: ["canva-skills", "figma-skills", "frontend-design"] },
  { tracks: ["fun"], match: /three|webgl|canvas|phaser|pixi|p5|kaplay|godot|matter|game|遊戲|白板|3d|視覺|動畫|音訊|音樂|合成器|視覺化|圖表|節點|流程|拖拽|房間|展廳|粒子|webxr|react three/, skills: ["github-cli", "playwright-skill", "frontend-design"] },
  { tracks: ["fun", "useful"], match: /ppt|網頁 ppt|演示稿|釋出頁|長圖|presentation|deck|幻燈/, skills: ["guizang-ppt", "canva-skills", "figma-skills"] },
  { tracks: ["useful", "stars"], match: /pdf|office|word|excel|ppt|markdown|ocr|文件|票據|合同|發票|週報|資料|知識工作|會議|skill file|技能清單/, skills: ["document-skills", "opencli", "github-cli"] },
  { tracks: ["useful", "stars"], match: /hugging face|gradio|spaces|資料集|dataset|model|模型|image search|object tags/, skills: ["huggingface-skills", "github-cli", "playwright-skill"] },
  { tracks: ["fun", "useful", "stars"], match: /\bai\b|rag|llm|問答|知識庫|agent|workflow|應用工作流|大模型|總結|提示詞/, skills: ["openai-docs", "github-cli", "playwright-skill"] },
  { tracks: ["useful"], match: /資料庫|crm|後臺|登入|許可權|表格|realtime|supabase|臺賬|內部工具|forms|automation/, skills: ["supabase-skills", "shadcn-skill", "playwright-skill"] },
  { tracks: ["useful"], match: /飛書|lark|微信|會議|多維表格/, skills: ["lark-cli", "opencli", "github-cli"] },
  { tracks: ["useful"], match: /自動化|webhook|opencli|抓取|搜尋|api|rss|crawler|元搜尋|資料管道/, skills: ["opencli", "github-cli", "document-skills"] },
  { tracks: ["useful"], match: /監控|狀態頁|報警|健康|uptime|錯誤|sentry/, skills: ["sentry-skills", "github-cli", "playwright-skill"] },
  { tracks: ["useful"], match: /看板|工作臺|儀表盤|表單|按鈕|頁面|pwa|wiki|知識庫|白板|表格|管理器|收件箱|檔案館/, skills: ["github-cli", "shadcn-skill", "playwright-skill"] },
  { tracks: ["hardware"], match: /\bai\b|語音|speech|mcp|coral|frigate|大模型/, skills: ["github-cli", "openai-docs", "opencli"] },
  { tracks: ["hardware"], match: /dashboard|儀表盤|控制台|面板|web ui|網頁|home assistant|magicmirror|pi-hole|tasmota|octoprint|mainsail|openhasp|airgradient|狀態|統計/, skills: ["github-cli", "opencli", "playwright-skill"] },
  { tracks: ["hardware"], match: /esp32|raspberry|home assistant|esphome|mqtt|zigbee|qmk|zmk|kmk|klipper|marlin|3d 列印|感測器|硬體|門鈴|燈帶|電子墨水|lora|sdr|firmware|韌體|keymap|arduino/, skills: ["github-cli", "opencli"] },
];

const projectGroups = {
  "fun": [
    {
      "name": "AI 小鎮 / NPC 社交遊戲",
      "tagline": "一張小地圖，幾個會記憶、聊天、行動的 AI 角色。",
      "stack": [
        "Next.js",
        "Convex",
        "LLM",
        "Canvas"
      ],
      "mvp": "先做 3 個角色、1 個場景、10 條記憶；角色每天自動生成一段小劇情。",
      "wow": 97,
      "useful": 66,
      "easy": 68,
      "source": "AI Town",
      "url": "https://github.com/a16z-infra/ai-town",
      "demoUrl": "https://www.convex.dev/ai-town"
    },
    {
      "name": "手勢控制小遊戲 / 手勢樂器",
      "tagline": "攝像頭識別手勢，用手掌控制遊戲、節奏和音效。",
      "stack": [
        "MediaPipe",
        "Tone.js",
        "Phaser"
      ],
      "mvp": "握拳暫停，張手發射，左右移動控制音高；5 分鐘就能感到魔法發生。",
      "wow": 94,
      "useful": 58,
      "easy": 74,
      "source": "Hand Tracking Demo",
      "url": "https://github.com/collidingScopes/threejs-handtracking-101",
      "demoUrl": "https://collidingscopes.github.io/threejs-handtracking-101/"
    },
    {
      "name": "節點式視覺實驗室",
      "tagline": "像搭積木一樣連節點，生成海報、動效和可互動圖形。",
      "stack": [
        "Graphite",
        "WASM",
        "Node Graph"
      ],
      "mvp": "先復刻一個節點畫布：形狀、顏色、噪聲和匯出四個節點能連起來。",
      "wow": 93,
      "useful": 70,
      "easy": 54,
      "source": "Graphite",
      "url": "https://github.com/GraphiteEditor/Graphite",
      "demoUrl": "https://graphite.art"
    },
    {
      "name": "瀏覽器裡的迷你音訊工作站",
      "tagline": "上傳一段音訊，剪下、變聲、迴圈取樣，直接匯出。",
      "stack": [
        "Web Audio",
        "Waveform",
        "IndexedDB"
      ],
      "mvp": "做波形預覽、片段裁切、三種效果器和本地儲存。",
      "wow": 91,
      "useful": 72,
      "easy": 62,
      "source": "AudioMass",
      "url": "https://github.com/pkalogiros/AudioMass",
      "demoUrl": "https://audiomass.co"
    },
    {
      "name": "物理沙盒 / 畫素鍊金術",
      "tagline": "沙子、水、火、植物互相反應，幾行規則就能長出一個小宇宙。",
      "stack": [
        "Rust/WASM",
        "Canvas",
        "Cellular"
      ],
      "mvp": "先做 8 種材料、畫筆、暫停/單步和分享種子。",
      "wow": 90,
      "useful": 45,
      "easy": 60,
      "source": "Sandspiel",
      "url": "https://github.com/MaxBittker/sandspiel",
      "demoUrl": "https://sandspiel.club"
    },
    {
      "name": "瀏覽器現場視覺合成器",
      "tagline": "輸入一行程式碼，畫面跟著音樂和節奏即時變形。",
      "stack": [
        "Hydra",
        "WebGL",
        "Web Audio"
      ],
      "mvp": "做 6 個 preset、BPM 控制、錄屏匯出和隨機視覺按鈕。",
      "wow": 89,
      "useful": 52,
      "easy": 57,
      "source": "Hydra",
      "url": "https://github.com/hydra-synth/hydra",
      "demoUrl": "https://hydra.ojack.xyz"
    },
    {
      "name": "生成式海報 / 桌布工廠",
      "tagline": "滑動幾個引數，就能生成一張有自己審美的海報。",
      "stack": [
        "p5.js",
        "Tweakpane",
        "Canvas"
      ],
      "mvp": "做 6 個引數、3 套版式、PNG 匯出和隨機種子復現。",
      "wow": 89,
      "useful": 61,
      "easy": 82,
      "source": "p5Catalyst Demo",
      "url": "https://multitude-amsterdam.github.io/p5Catalyst/"
    },
    {
      "name": "多人塗鴉白板遊戲",
      "tagline": "多人同時畫畫、投票、猜詞，適合朋友局和團隊破冰。",
      "stack": [
        "tldraw",
        "PartyKit",
        "Realtime"
      ],
      "mvp": "先做一個房間碼、即時畫布、倒計時和投票按鈕。",
      "wow": 86,
      "useful": 57,
      "easy": 70,
      "source": "tldraw",
      "url": "https://github.com/tldraw/tldraw",
      "demoUrl": "https://www.tldraw.com"
    },
    {
      "name": "24 小時人生撥盤",
      "tagline": "把一天做成一個可拖拽的圓盤，看見時間正在流向哪裡。",
      "stack": [
        "SVG",
        "LocalStorage",
        "Charts"
      ],
      "mvp": "拖拽分配睡眠、工作、娛樂和學習；自動生成日覆盤。",
      "wow": 82,
      "useful": 76,
      "easy": 80,
      "source": "Linear Clock Lab",
      "url": "https://github.com/jm5k/jm5k.github.io",
      "demoUrl": "https://linearclocklab.com/"
    },
    {
      "name": "產品釋出短片生成器",
      "tagline": "給截圖、指令碼和幾個鏡頭，讓程式碼代理自動合成釋出影片。",
      "stack": [
        "Remotion",
        "LLM",
        "Video"
      ],
      "mvp": "上傳 3 張截圖，自動生成字幕、鏡頭運動和 30 秒 MP4。",
      "wow": 84,
      "useful": 67,
      "easy": 46,
      "source": "Montage",
      "url": "https://github.com/simplexlabs/montage"
    },
    {
      "name": "手繪風白板 / 靈感草圖板",
      "tagline": "把流程、腦暴、路線圖畫成手繪質感，可分享也可協作。",
      "stack": [
        "Excalidraw",
        "SVG",
        "Realtime"
      ],
      "mvp": "做無限畫布、三種圖形、文本貼紙和一鍵分享連結。",
      "wow": 85,
      "useful": 75,
      "easy": 72,
      "source": "Excalidraw",
      "url": "https://github.com/excalidraw/excalidraw",
      "demoUrl": "https://excalidraw.com"
    },
    {
      "name": "3D 房間 / 作品集小宇宙",
      "tagline": "把個人主頁做成可走動的 3D 房間，每個物件都是一個連結。",
      "stack": [
        "Three.js",
        "GLTF",
        "Pointer"
      ],
      "mvp": "放 6 個模型、鍵盤移動、點選物件開啟專案卡。",
      "wow": 92,
      "useful": 64,
      "easy": 45,
      "source": "Room Portfolio",
      "url": "https://github.com/AT010303/Room_Portfolio"
    },
    {
      "name": "WebGL 流體玩具",
      "tagline": "滑鼠一劃就像墨水在水裡散開，適合做背景、封面和裝置。",
      "stack": [
        "WebGL",
        "Shaders",
        "Canvas"
      ],
      "mvp": "做流體畫布、顏色切換、截圖匯出和移動端觸控。",
      "wow": 88,
      "useful": 48,
      "easy": 56,
      "source": "WebGL Fluid",
      "url": "https://github.com/PavelDoGreat/WebGL-Fluid-Simulation",
      "demoUrl": "https://paveldogreat.github.io/WebGL-Fluid-Simulation/"
    },
    {
      "name": "演算法節奏樂隊",
      "tagline": "用短短幾行 pattern 生成鼓點、旋律和迴圈音樂。",
      "stack": [
        "Strudel",
        "Web Audio",
        "Live Coding"
      ],
      "mvp": "做四軌迴圈、BPM 控制、錄音和分享 pattern。",
      "wow": 87,
      "useful": 53,
      "easy": 61,
      "source": "Strudel REPL",
      "url": "https://strudel.cc/"
    },
    {
      "name": "瀏覽器合成器面板",
      "tagline": "旋鈕、鍵盤、波形和效果器都在網頁裡，調參就出聲。",
      "stack": [
        "Tone.js",
        "Web MIDI",
        "Canvas"
      ],
      "mvp": "做一個雙振盪器合成器，支援鍵盤彈奏、濾波和 delay。",
      "wow": 84,
      "useful": 62,
      "easy": 67,
      "source": "JSS-01 Synthesizer",
      "url": "https://github.com/michaelkolesidis/javascript-software-synthesizer",
      "demoUrl": "https://jss.michaelkolesidis.com"
    },
    {
      "name": "2D 闖關小遊戲",
      "tagline": "用地圖、角色、碰撞和道具做一關能玩的橫版小遊戲。",
      "stack": [
        "Phaser",
        "Tilemap",
        "Sprites"
      ],
      "mvp": "做一個地圖、一種敵人、三枚金幣和終點門。",
      "wow": 83,
      "useful": 49,
      "easy": 73,
      "source": "Phaser Platformer",
      "url": "https://github.com/remarkablegames/phaser-platformer",
      "demoUrl": "https://remarkablegames.org/phaser-platformer/"
    },
    {
      "name": "街機風小遊戲原型機",
      "tagline": "用更輕量的遊戲庫，快速做出彈幕、跳躍或收集類 demo。",
      "stack": [
        "KAPLAY",
        "JavaScript",
        "Sprites"
      ],
      "mvp": "做一個 60 秒挑戰關，支援分數、失敗和重新開始。",
      "wow": 82,
      "useful": 47,
      "easy": 78,
      "source": "KAPLAY",
      "url": "https://github.com/kaplayjs/kaplay"
    },
    {
      "name": "物理彈球 / 多米諾實驗",
      "tagline": "讓球、方塊、彈簧和重力自己演戲，特別適合做小遊戲機制。",
      "stack": [
        "Matter.js",
        "Canvas",
        "Physics"
      ],
      "mvp": "做一個彈球檯：擋板、碰撞音效、計分和重力滑桿。",
      "wow": 82,
      "useful": 50,
      "easy": 70,
      "source": "JavaScript Physics",
      "url": "https://github.com/lonekorean/javascript-physics",
      "demoUrl": "https://lonekorean.github.io/javascript-physics/"
    },
    {
      "name": "拖拽式海報編輯器",
      "tagline": "圖片、文字、貼紙、濾鏡都能拖拽擺放，最後匯出 PNG。",
      "stack": [
        "Fabric.js",
        "Canvas",
        "Export"
      ],
      "mvp": "做圖層、拖拽縮放、對齊線和一鍵匯出。",
      "wow": 80,
      "useful": 78,
      "easy": 64,
      "source": "vue-fabric-editor",
      "url": "https://github.com/ikuaitu/vue-fabric-editor",
      "demoUrl": "https://ikuaitu.github.io/doc/#/"
    },
    {
      "name": "程式碼動畫課件",
      "tagline": "用動畫框架和時間軸生成解釋課件，適合做技術影片和課程圖解。",
      "stack": [
        "Motion Canvas",
        "TypeScript",
        "Timeline"
      ],
      "mvp": "做一個排序演算法動畫，帶字幕、暫停點和匯出。",
      "wow": 81,
      "useful": 73,
      "easy": 52,
      "source": "Motion Canvas",
      "url": "https://github.com/motion-canvas/motion-canvas",
      "demoUrl": "https://motioncanvas.io"
    },
    {
      "name": "React 影片渲染工廠",
      "tagline": "用 React 影片框架把元件渲染成影片，自動生成開場、字幕和產品演示。",
      "stack": [
        "Remotion",
        "React",
        "FFmpeg"
      ],
      "mvp": "用資料生成 5 個鏡頭，匯出一支 15 秒產品短片。",
      "wow": 83,
      "useful": 74,
      "easy": 55,
      "source": "Remotion",
      "url": "https://github.com/remotion-dev/remotion",
      "demoUrl": "https://www.remotion.dev/"
    },
    {
      "name": "節點流程玩具",
      "tagline": "參考 React Flow 示例做拖線流程畫布，天然適合視覺化 AI agent。",
      "stack": [
        "React Flow",
        "Nodes",
        "Edges"
      ],
      "mvp": "實現輸入、處理、輸出三類節點，支援儲存和重放。",
      "wow": 78,
      "useful": 82,
      "easy": 68,
      "source": "React Flow Example Apps",
      "url": "https://github.com/xyflow/react-flow-example-apps",
      "demoUrl": "https://reactflow.dev/examples"
    },
    {
      "name": "文本生成圖表魔法",
      "tagline": "使用者寫幾行文字，就能生成流程圖、時序圖和專案路線圖。",
      "stack": [
        "Mermaid",
        "Markdown",
        "Export"
      ],
      "mvp": "做編輯器、即時預覽、主題切換和 PNG/SVG 匯出。",
      "wow": 76,
      "useful": 84,
      "easy": 78,
      "source": "Mermaid Live Editor",
      "url": "https://github.com/mermaid-js/mermaid-live-editor",
      "demoUrl": "https://mermaid.live"
    },
    {
      "name": "資料視覺化玩具箱",
      "tagline": "把 CSV 拖進視覺化工具，快速試氣泡圖、桑基圖、時間線和關係圖。",
      "stack": [
        "RAWGraphs",
        "CSV",
        "Charts"
      ],
      "mvp": "上傳一份表格，選 3 種圖表，調欄位對映並匯出 SVG/PNG。",
      "wow": 79,
      "useful": 81,
      "easy": 58,
      "source": "RAWGraphs",
      "url": "https://github.com/rawgraphs/rawgraphs-app",
      "demoUrl": "https://app.rawgraphs.io/"
    },
    {
      "name": "手繪風 UI 元件參考",
      "tagline": "一組手繪質感 Web 元件參考，適合快速做 wireframe、草稿原型和趣味控制元件。",
      "stack": [
        "Rough.js",
        "SVG",
        "Canvas"
      ],
      "mvp": "先挑按鈕、輸入框、卡片和開關四類元件，做成一個可複用的草稿風元件頁。",
      "wow": 75,
      "useful": 67,
      "easy": 80,
      "source": "Wired Elements",
      "url": "https://github.com/rough-stuff/wired-elements",
      "demoUrl": "https://wiredjs.com"
    },
    {
      "name": "瀏覽器 3D 小展廳 / A-Frame 示例",
      "tagline": "先用普通瀏覽器搭一個能走動的 3D 展廳，再把 WebXR 當作可選增強。",
      "stack": [
        "A-Frame",
        "Three.js",
        "3D Assets"
      ],
      "mvp": "做一間展廳、五件展品、說明牌和第一人稱漫遊；確認桌面端可見後再考慮手機 XR。",
      "wow": 84,
      "useful": 55,
      "easy": 66,
      "source": "A-Frame Examples",
      "url": "https://github.com/aframevr/aframe",
      "demoUrl": "https://aframe.io/examples/"
    },
    {
      "name": "畫素 / 粒子編輯器",
      "tagline": "用現成粒子編輯器調出火花、煙霧和畫素舞臺，再把配置接進自己的頁面。",
      "stack": [
        "PixiJS",
        "Particles",
        "Sprites"
      ],
      "mvp": "先用編輯器調出 3 個粒子 preset，再接入一個 PixiJS 畫布頁面。",
      "wow": 84,
      "useful": 56,
      "easy": 62,
      "source": "Pixi Particle Editor",
      "url": "https://userland.pixijs.io/particle-emitter-editor/"
    },
    {
      "name": "React 3D 產品模型參考",
      "tagline": "參考一個 React Three Fiber 產品模型原始碼，先做本地旋轉、熱點和動畫解釋。",
      "stack": [
        "React Three Fiber",
        "Three.js",
        "GLTF"
      ],
      "mvp": "先在本地展示一個模型，做 4 個熱點、光照切換和截圖按鈕。",
      "wow": 82,
      "useful": 76,
      "easy": 50,
      "source": "3D Product Configurator Source",
      "url": "https://github.com/Madewill/3d-product-configurator"
    },
    {
      "name": "字型扭曲效果庫",
      "tagline": "一個老牌 WebGL 字型效果庫參考，適合做標題封面、動態字效和海報靈感。",
      "stack": [
        "Blotter",
        "GLSL",
        "Typography"
      ],
      "mvp": "先復刻 3 種標題效果，支援改字、換色和截圖匯出。",
      "wow": 78,
      "useful": 61,
      "easy": 59,
      "source": "Blotter",
      "url": "https://github.com/bradley/Blotter",
      "demoUrl": "https://blotter.js.org"
    },
    {
      "name": "週末遊戲引擎原型",
      "tagline": "用 Godot 官方示例在本地引擎裡做一個可匯出網頁的 2D/3D 小遊戲切片。",
      "stack": [
        "Godot",
        "GDScript",
        "Web Export"
      ],
      "mvp": "做一個完整迴圈：開始、玩法、失敗、勝利、匯出網頁。",
      "wow": 80,
      "useful": 60,
      "easy": 57,
      "source": "Godot Demo Projects",
      "url": "https://github.com/godotengine/godot-demo-projects"
    }
  ],
  "useful": [
    {
      "name": "個人 AI 工作臺",
      "tagline": "統一聊天、檔案問答、網頁總結和日常工具呼叫。",
      "stack": [
        "Open WebUI",
        "RAG",
        "Local LLM"
      ],
      "mvp": "先接一個模型，支援上傳 PDF，回答時附來源片段。",
      "wow": 79,
      "useful": 98,
      "easy": 65,
      "source": "Open WebUI",
      "url": "https://github.com/open-webui/open-webui"
    },
    {
      "name": "自動化工作流中樞",
      "tagline": "把表單、郵件、表格、AI 總結和提醒串成一條自動流水線。",
      "stack": [
        "n8n",
        "Webhook",
        "AI Tools"
      ],
      "mvp": "先做一個「收到連結 → 摘要 → 寫進表格 → 發通知」流程。",
      "wow": 86,
      "useful": 97,
      "easy": 66,
      "source": "n8n",
      "url": "https://github.com/n8n-io/n8n"
    },
    {
      "name": "資訊雷達 / 週報機器人",
      "tagline": "自動掃描 Product Hunt、HN、GitHub 和 RSS，整理成可釋出週報。",
      "stack": [
        "Vercel Cron",
        "RSS",
        "LLM"
      ],
      "mvp": "每日抓 30 條連結，去重、打分、生成 5 條推薦。",
      "wow": 82,
      "useful": 96,
      "easy": 72,
      "source": "agents-radar",
      "url": "https://github.com/duanyytop/agents-radar"
    },
    {
      "name": "收藏夾 + AI 閱讀收件箱",
      "tagline": "網頁、PDF、影片連結統一收藏，自動歸檔、摘要和全文儲存。",
      "stack": [
        "Linkwarden",
        "Crawler",
        "RAG"
      ],
      "mvp": "瀏覽器擴充套件收藏連結，抓正文，生成一句摘要和三個標籤。",
      "wow": 77,
      "useful": 94,
      "easy": 70,
      "source": "Linkwarden",
      "url": "https://github.com/linkwarden/linkwarden"
    },
    {
      "name": "票據合同 OCR 文件庫",
      "tagline": "把合同、發票、截圖變成可搜尋、可標籤化的資料庫。",
      "stack": [
        "OCR",
        "Postgres",
        "Search"
      ],
      "mvp": "圖片/PDF 上傳、OCR 文本、標籤、全文搜尋。",
      "wow": 73,
      "useful": 94,
      "easy": 63,
      "source": "paperless-ngx",
      "url": "https://github.com/paperless-ngx/paperless-ngx"
    },
    {
      "name": "私人相簿 + AI 搜尋",
      "tagline": "找照片不再翻一年相簿，直接搜地點、人物、事件和畫面。",
      "stack": [
        "Image Search",
        "Object Tags",
        "Storage"
      ],
      "mvp": "本地上傳 200 張照片，自動生成標籤和按月瀏覽。",
      "wow": 76,
      "useful": 91,
      "easy": 59,
      "source": "Immich",
      "url": "https://github.com/immich-app/immich"
    },
    {
      "name": "個人財務 / 訂閱管理器",
      "tagline": "看清每月錢去了哪裡，自動提醒快到期的訂閱。",
      "stack": [
        "CSV Import",
        "Charts",
        "Reminders"
      ],
      "mvp": "匯入賬單 CSV，識別訂閱，生成月度支出圖。",
      "wow": 68,
      "useful": 90,
      "easy": 78,
      "source": "Actual Budget",
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "name": "PDF 萬能工具箱",
      "tagline": "合併、壓縮、簽名、OCR、轉圖片，所有 PDF 小活都在本地跑。",
      "stack": [
        "Stirling PDF",
        "Docker",
        "OCR"
      ],
      "mvp": "做一個上傳區，支援合併、壓縮、加水印和轉圖片四個按鈕。",
      "wow": 71,
      "useful": 89,
      "easy": 74,
      "source": "Stirling PDF",
      "url": "https://github.com/Stirling-Tools/Stirling-PDF"
    },
    {
      "name": "服務健康監控面板",
      "tagline": "把網站、介面、自動化指令碼都放進一個會報警的狀態頁。",
      "stack": [
        "Uptime Kuma",
        "Status Page",
        "Alerts"
      ],
      "mvp": "監控 5 個 URL，失敗時發郵件/Telegram，並生成公開狀態頁。",
      "wow": 69,
      "useful": 88,
      "easy": 79,
      "source": "Uptime Kuma",
      "url": "https://github.com/louislam/uptime-kuma"
    },
    {
      "name": "食譜 + 購物清單 + 冰箱庫存",
      "tagline": "複製菜譜連結，自動拆成採購清單，順手管理庫存。",
      "stack": [
        "Recipe Parser",
        "Checklist",
        "PWA"
      ],
      "mvp": "菜譜貼上、食材提取、購物清單勾選、常買項記憶。",
      "wow": 70,
      "useful": 87,
      "easy": 76,
      "source": "Mealie",
      "url": "https://github.com/mealie-recipes/mealie"
    },
    {
      "name": "閃念備忘錄 / 個人微博",
      "tagline": "像發微博一樣記錄想法、連結、截圖和今日碎片。",
      "stack": [
        "Memos",
        "Markdown",
        "Tags"
      ],
      "mvp": "做快速輸入、標籤、日曆檢視和全文搜尋。",
      "wow": 65,
      "useful": 86,
      "easy": 82,
      "source": "Memos",
      "url": "https://github.com/usememos/memos"
    },
    {
      "name": "Bookmark Everything 檔案館",
      "tagline": "連結、圖片、筆記全收藏，並用 AI 自動打標籤。",
      "stack": [
        "Karakeep",
        "AI Tags",
        "Full Text"
      ],
      "mvp": "瀏覽器收藏 50 條連結，自動抓取正文、截圖和標籤。",
      "wow": 73,
      "useful": 88,
      "easy": 69,
      "source": "Karakeep",
      "url": "https://github.com/karakeep-app/karakeep"
    },
    {
      "name": "本地 Notion 式工作臺",
      "tagline": "專案、文件、任務和資料庫放在一個可離線的工作空間。",
      "stack": [
        "AppFlowy",
        "Kanban",
        "Docs"
      ],
      "mvp": "做一個專案空間：文件、任務看板、資料庫和 AI 摘要。",
      "wow": 72,
      "useful": 88,
      "easy": 60,
      "source": "AppFlowy",
      "url": "https://github.com/AppFlowy-IO/AppFlowy"
    },
    {
      "name": "白板 + 知識庫混合空間",
      "tagline": "既能寫文件，也能用白板整理關係和思路。",
      "stack": [
        "AFFiNE",
        "Canvas",
        "Docs"
      ],
      "mvp": "做一個選題工作區：資料頁、白板、任務區互相引用。",
      "wow": 76,
      "useful": 86,
      "easy": 58,
      "source": "AFFiNE",
      "url": "https://github.com/toeverything/AFFiNE"
    },
    {
      "name": "雙鏈知識庫 / 學習卡片",
      "tagline": "把讀書筆記、會議紀要和靈感連成可回溯的知識網路。",
      "stack": [
        "Logseq",
        "Markdown",
        "Graph"
      ],
      "mvp": "做每日筆記、雙鏈引用、標籤圖譜和複習清單。",
      "wow": 68,
      "useful": 87,
      "easy": 67,
      "source": "Logseq",
      "url": "https://github.com/logseq/logseq"
    },
    {
      "name": "團隊 Wiki / SOP 中心",
      "tagline": "把流程、模板、賬號說明和 FAQ 整理成團隊知識庫。",
      "stack": [
        "Outline",
        "Markdown",
        "Search"
      ],
      "mvp": "搭一個空間，錄入 20 篇 SOP，支援許可權和搜尋。",
      "wow": 64,
      "useful": 89,
      "easy": 71,
      "source": "Outline",
      "url": "https://github.com/outline/outline"
    },
    {
      "name": "私人手冊站",
      "tagline": "像一本內部百科，把生活、專案和工具說明分層管理。",
      "stack": [
        "BookStack",
        "Pages",
        "Permissions"
      ],
      "mvp": "建立 3 本書、10 個章節、搜尋和公開分享。",
      "wow": 62,
      "useful": 86,
      "easy": 75,
      "source": "BookStack",
      "url": "https://github.com/BookStackApp/BookStack"
    },
    {
      "name": "開源文件協作站",
      "tagline": "給小團隊做一個輕量版 Confluence，寫需求、規範和覆盤。",
      "stack": [
        "Docmost",
        "Docs",
        "Realtime"
      ],
      "mvp": "做一個團隊空間、模板庫、評論和許可權。",
      "wow": 66,
      "useful": 88,
      "easy": 68,
      "source": "Docmost",
      "url": "https://github.com/docmost/docmost"
    },
    {
      "name": "無程式碼資料庫後臺",
      "tagline": "把表格變成資料庫和內部工具，適合做運營臺賬。",
      "stack": [
        "NocoDB",
        "Database",
        "Forms"
      ],
      "mvp": "把 CSV 匯入成資料庫，做表單、檢視和篩選。",
      "wow": 69,
      "useful": 90,
      "easy": 74,
      "source": "NocoDB",
      "url": "https://github.com/nocodb/nocodb"
    },
    {
      "name": "表格資料庫 / 小型 CRM",
      "tagline": "用 Airtable 式表格管理客戶、專案、報價和內容排期。",
      "stack": [
        "Baserow",
        "Tables",
        "Automation"
      ],
      "mvp": "搭 4 張表：客戶、專案、任務、報價，並加自動提醒。",
      "wow": 67,
      "useful": 88,
      "easy": 73,
      "source": "Baserow",
      "url": "https://github.com/baserow/baserow"
    },
    {
      "name": "內部工具搭建器",
      "tagline": "拖拽表格、按鈕、表單和自動化，做一個自己的運營後臺。",
      "stack": [
        "Budibase",
        "Forms",
        "Automations"
      ],
      "mvp": "做一個商單排期後臺，支援新建、篩選、狀態變更。",
      "wow": 70,
      "useful": 89,
      "easy": 65,
      "source": "Budibase",
      "url": "https://github.com/Budibase/budibase"
    },
    {
      "name": "私人知識問答庫",
      "tagline": "把本地檔案、網頁和筆記接入一個能追問的 AI 助手。",
      "stack": [
        "AnythingLLM",
        "RAG",
        "Workspaces"
      ],
      "mvp": "建立 3 個資料庫，上傳檔案並按空間回答問題。",
      "wow": 76,
      "useful": 91,
      "easy": 67,
      "source": "AnythingLLM",
      "url": "https://github.com/Mintplex-Labs/anything-llm"
    },
    {
      "name": "AI 應用工作流平臺",
      "tagline": "把提示詞、知識庫、工具呼叫和釋出入口做成可複用應用。",
      "stack": [
        "Dify",
        "Agents",
        "Workflow"
      ],
      "mvp": "做一個選題助手：輸入連結，輸出摘要、角度和標題。",
      "wow": 78,
      "useful": 92,
      "easy": 63,
      "source": "Dify",
      "url": "https://github.com/langgenius/dify"
    },
    {
      "name": "視覺化 Agent 編排器",
      "tagline": "用節點方式搭聊天機器人、檢索鏈和工具呼叫流程。",
      "stack": [
        "Flowise",
        "LangChain",
        "Nodes"
      ],
      "mvp": "拖一個 RAG 流程：輸入、檢索、LLM、輸出四個節點。",
      "wow": 75,
      "useful": 89,
      "easy": 66,
      "source": "Flowise",
      "url": "https://github.com/FlowiseAI/Flowise"
    },
    {
      "name": "深度 RAG 文件助手",
      "tagline": "給大量 PDF、網頁和表格做檢索增強問答。",
      "stack": [
        "RAGFlow",
        "OCR",
        "Agents"
      ],
      "mvp": "匯入 20 份 PDF，支援引用來源和多輪追問。",
      "wow": 73,
      "useful": 91,
      "easy": 54,
      "source": "RAGFlow",
      "url": "https://github.com/infiniflow/ragflow"
    },
    {
      "name": "網頁抓取 / 資料管道",
      "tagline": "把網頁變成乾淨 Markdown，供週報、知識庫和 AI 流程使用。",
      "stack": [
        "Firecrawl",
        "Markdown",
        "Crawler"
      ],
      "mvp": "輸入 URL 列表，抓正文、去重、轉摘要並匯出。",
      "wow": 72,
      "useful": 90,
      "easy": 62,
      "source": "Firecrawl",
      "url": "https://github.com/firecrawl/firecrawl"
    },
    {
      "name": "私人元搜尋引擎",
      "tagline": "聚合多個搜尋源，不追蹤、不廣告，適合當資料入口。",
      "stack": [
        "SearXNG",
        "Docker",
        "Search"
      ],
      "mvp": "部署搜尋頁，配置 5 個引擎，儲存常用查詢。",
      "wow": 66,
      "useful": 86,
      "easy": 70,
      "source": "SearXNG",
      "url": "https://github.com/searxng/searxng"
    },
    {
      "name": "跨裝置檔案同步",
      "tagline": "電腦、NAS、手機之間自動同步檔案，不依賴網盤。",
      "stack": [
        "Syncthing",
        "P2P",
        "Folders"
      ],
      "mvp": "同步兩個資料夾，設定忽略規則和衝突提示。",
      "wow": 64,
      "useful": 88,
      "easy": 73,
      "source": "Syncthing",
      "url": "https://github.com/syncthing/syncthing"
    },
    {
      "name": "家庭密碼庫",
      "tagline": "自託管密碼管理，給自己和家人統一儲存賬號。",
      "stack": [
        "Vaultwarden",
        "Bitwarden",
        "Docker"
      ],
      "mvp": "部署服務、建立家庭組織、匯入密碼並啟用 2FA。",
      "wow": 62,
      "useful": 92,
      "easy": 69,
      "source": "Vaultwarden",
      "url": "https://github.com/dani-garcia/vaultwarden"
    },
    {
      "name": "財務火控儀表盤",
      "tagline": "把賬戶、預算、賬單和財務規則做成更完整的個人系統。",
      "stack": [
        "Firefly III",
        "Budgets",
        "Rules"
      ],
      "mvp": "匯入賬單，自動分類，做預算、標籤和月報。",
      "wow": 63,
      "useful": 89,
      "easy": 58,
      "source": "Firefly III",
      "url": "https://github.com/firefly-iii/firefly-iii"
    }
  ],
  "hardware": [
    {
      "name": "ESP32 電子墨水日曆牌",
      "tagline": "一塊低功耗屏，放在桌面顯示日程、天氣、待辦和提醒。",
      "stack": [
        "ESP32",
        "E-paper",
        "ESPHome"
      ],
      "mvp": "每 30 分鐘重新整理一次天氣和今日待辦，晚上自動低功耗。",
      "wow": 90,
      "useful": 91,
      "easy": 73,
      "source": "LilyGo ESPHome Calendar",
      "url": "https://github.com/AppForce1/lilygo-t5-47-plus-esphome"
    },
    {
      "name": "WLED 音樂律動燈",
      "tagline": "用手機網頁控制燈帶，讓房間跟音樂一起動起來。",
      "stack": [
        "ESP32",
        "LED Strip",
        "WLED"
      ],
      "mvp": "三種氛圍場景、一個音樂模式、一個睡前暖光模式。",
      "wow": 92,
      "useful": 69,
      "easy": 80,
      "source": "WLED",
      "url": "https://github.com/wled/WLED"
    },
    {
      "name": "Magic Mirror 智慧鏡子",
      "tagline": "Raspberry Pi + 半透鏡，把鏡子變成家庭資訊面板。",
      "stack": [
        "Raspberry Pi",
        "MagicMirror",
        "Modules"
      ],
      "mvp": "天氣、日曆、新聞、倒計時四個模組先跑起來。",
      "wow": 93,
      "useful": 82,
      "easy": 61,
      "source": "MagicMirror",
      "url": "https://github.com/MagicMirrorOrg/MagicMirror"
    },
    {
      "name": "Meshtastic 離線通訊節點",
      "tagline": "兩塊 LoRa 小板就能組一個不用手機訊號的文字通訊網。",
      "stack": [
        "LoRa",
        "ESP32",
        "Meshtastic"
      ],
      "mvp": "兩臺裝置互發訊息，網頁地圖顯示節點位置，再加一個頻道名。",
      "wow": 91,
      "useful": 76,
      "easy": 62,
      "source": "Meshtastic",
      "url": "https://github.com/meshtastic/firmware"
    },
    {
      "name": "QMK 宏鍵盤 / 工作流控制台",
      "tagline": "幾顆按鍵完成截圖、發提示詞、開工具、切場景。",
      "stack": [
        "QMK",
        "USB HID",
        "3D Print"
      ],
      "mvp": "6 個鍵：截圖、錄音、開啟專案、切視窗、提交、部署。",
      "wow": 84,
      "useful": 88,
      "easy": 67,
      "source": "QMK",
      "url": "https://github.com/qmk/qmk_firmware"
    },
    {
      "name": "本地 AI 攝像頭門鈴",
      "tagline": "門口攝像頭本地識別人、車和包裹，只把重要事件推給你。",
      "stack": [
        "Frigate",
        "Coral TPU",
        "Home Assistant"
      ],
      "mvp": "先接一支攝像頭，識別人形事件，儲存 10 秒片段並推送。",
      "wow": 87,
      "useful": 89,
      "easy": 44,
      "source": "Frigate",
      "url": "https://github.com/blakeblackshear/frigate"
    },
    {
      "name": "小智 ESP32 AI 語音終端",
      "tagline": "一塊小板、一隻喇叭和麥克風，做成可對話的桌面 AI 夥伴。",
      "stack": [
        "ESP32",
        "MCP",
        "Speech"
      ],
      "mvp": "按鍵喚醒、語音問答、呼叫一個本地工具，再在螢幕上顯示回覆。",
      "wow": 89,
      "useful": 80,
      "easy": 52,
      "source": "xiaozhi-esp32",
      "url": "https://github.com/78/xiaozhi-esp32"
    },
    {
      "name": "Tasmota 家電控制台",
      "tagline": "把插座、燈、感測器刷成統一韌體，搭一個完全本地的控制面板。",
      "stack": [
        "Tasmota",
        "MQTT",
        "Web UI"
      ],
      "mvp": "先接一個智慧插座，網頁開關、定時規則和功耗曲線跑起來。",
      "wow": 78,
      "useful": 86,
      "easy": 63,
      "source": "Tasmota",
      "url": "https://github.com/arendst/Tasmota"
    },
    {
      "name": "Pi-hole 家庭網路護城河",
      "tagline": "一臺 Raspberry Pi 變成全家的廣告攔截、DNS 和網路統計中心。",
      "stack": [
        "Raspberry Pi",
        "Pi-hole",
        "DNS"
      ],
      "mvp": "接管家庭 DNS，顯示今日攔截數，再加常用域名白名單。",
      "wow": 74,
      "useful": 90,
      "easy": 71,
      "source": "Pi-hole",
      "url": "https://github.com/pi-hole/pi-hole"
    },
    {
      "name": "智慧植物監測器",
      "tagline": "溼度、溫度、光照和缺水提醒，讓桌面植物更容易活。",
      "stack": [
        "ESP32",
        "Sensors",
        "Home Assistant"
      ],
      "mvp": "土壤溼度低於閾值時亮燈，並推送一條提醒。",
      "wow": 78,
      "useful": 81,
      "easy": 77,
      "source": "Soil Moisture Sensor",
      "url": "https://github.com/bicycleboy/yet-another-soil-moisture-sensor"
    },
    {
      "name": "ESPHome 全屋感測器平臺",
      "tagline": "用 YAML 把溫溼度、人體、門磁和燈控接進家庭自動化。",
      "stack": [
        "ESPHome",
        "ESP32",
        "YAML"
      ],
      "mvp": "做一個溫溼度節點，接入 Home Assistant 並顯示歷史曲線。",
      "wow": 76,
      "useful": 90,
      "easy": 75,
      "source": "ESPHome",
      "url": "https://github.com/esphome/esphome"
    },
    {
      "name": "Home Assistant 家庭中樞",
      "tagline": "把燈、門鎖、感測器、攝像頭和自動化統一管理。",
      "stack": [
        "Home Assistant",
        "Integrations",
        "Dashboard"
      ],
      "mvp": "接入 5 個裝置，做一個早安/晚安自動化和手機面板。",
      "wow": 80,
      "useful": 94,
      "easy": 57,
      "source": "Home Assistant",
      "url": "https://github.com/home-assistant/core"
    },
    {
      "name": "OpenMQTTGateway 萬能閘道器",
      "tagline": "把藍牙、433MHz、紅外等裝置訊號轉換成 MQTT。",
      "stack": [
        "MQTT",
        "RF",
        "ESP32"
      ],
      "mvp": "讀取一個藍牙溫度計和一個 433 遙控器，釋出到 MQTT。",
      "wow": 77,
      "useful": 86,
      "easy": 56,
      "source": "OpenMQTTGateway",
      "url": "https://github.com/1technophile/OpenMQTTGateway"
    },
    {
      "name": "Zigbee2MQTT 裝置橋",
      "tagline": "讓 Zigbee 感測器不依賴廠商閘道器，直接接入本地系統。",
      "stack": [
        "Zigbee",
        "MQTT",
        "Coordinator"
      ],
      "mvp": "配對一個門磁和一個按鈕，觸發燈光或通知。",
      "wow": 76,
      "useful": 88,
      "easy": 54,
      "source": "Zigbee2MQTT",
      "url": "https://github.com/Koenkk/zigbee2mqtt"
    },
    {
      "name": "ESP32-CAM 口袋攝像頭",
      "tagline": "幾十塊錢的小板做延時攝影、門口觀察或寵物相機。",
      "stack": [
        "ESP32-CAM",
        "MJPEG",
        "Storage"
      ],
      "mvp": "網頁即時預覽，按按鈕拍照，並儲存最近 20 張。",
      "wow": 82,
      "useful": 75,
      "easy": 62,
      "source": "ESP32 Cam Webserver",
      "url": "https://github.com/easytarget/esp32-cam-webserver"
    },
    {
      "name": "ESPresense 房間定位",
      "tagline": "用藍牙訊號判斷人在客廳、臥室還是書房。",
      "stack": [
        "ESP32",
        "BLE",
        "Presence"
      ],
      "mvp": "部署兩個節點，識別手機/手環所在房間並觸發自動化。",
      "wow": 79,
      "useful": 84,
      "easy": 57,
      "source": "ESPresense",
      "url": "https://github.com/ESPresense/ESPresense"
    },
    {
      "name": "Marlin 3D 印表機韌體",
      "tagline": "給 3D 印表機刷開源韌體，理解溫控、步進和限位。",
      "stack": [
        "Marlin",
        "Firmware",
        "3D Printer"
      ],
      "mvp": "編譯韌體，配置主機板、熱床、噴頭和自動調平。",
      "wow": 76,
      "useful": 82,
      "easy": 43,
      "source": "Marlin",
      "url": "https://github.com/MarlinFirmware/Marlin"
    },
    {
      "name": "Klipper 高速列印控制器",
      "tagline": "Raspberry Pi 負責運動控制，讓 3D 列印更快更穩。",
      "stack": [
        "Klipper",
        "Raspberry Pi",
        "Printer"
      ],
      "mvp": "接入一臺印表機，完成校準、壓力提前和輸入整形。",
      "wow": 79,
      "useful": 84,
      "easy": 42,
      "source": "Klipper",
      "url": "https://github.com/Klipper3d/klipper"
    },
    {
      "name": "OctoPrint 印表機監控臺",
      "tagline": "遠端上傳模型、看攝像頭、暫停列印和檢視進度。",
      "stack": [
        "OctoPrint",
        "Raspberry Pi",
        "Webcam"
      ],
      "mvp": "網頁上傳 G-code，接攝像頭，做列印完成通知。",
      "wow": 73,
      "useful": 85,
      "easy": 66,
      "source": "OctoPrint",
      "url": "https://github.com/OctoPrint/OctoPrint"
    },
    {
      "name": "ZMK 無線機械鍵盤",
      "tagline": "低功耗藍牙鍵盤韌體，適合分體鍵盤和便攜鍵盤。",
      "stack": [
        "ZMK",
        "Bluetooth",
        "Keymap"
      ],
      "mvp": "配置 36 鍵佈局、藍牙配對、雙層快捷鍵。",
      "wow": 77,
      "useful": 83,
      "easy": 52,
      "source": "ZMK",
      "url": "https://github.com/zmkfirmware/zmk"
    },
    {
      "name": "KMK CircuitPython 鍵盤",
      "tagline": "用 Python 寫鍵盤韌體，更適合快速改鍵和實驗。",
      "stack": [
        "KMK",
        "CircuitPython",
        "HID"
      ],
      "mvp": "做一個 4 鍵小鍵盤，支援旋鈕、宏和層切換。",
      "wow": 75,
      "useful": 82,
      "easy": 66,
      "source": "KMK",
      "url": "https://github.com/KMKfw/kmk_firmware"
    },
    {
      "name": "OpenSprinkler 智慧澆灌",
      "tagline": "根據時間、天氣和溼度控制花園或陽臺澆水。",
      "stack": [
        "OpenSprinkler",
        "Valves",
        "Weather"
      ],
      "mvp": "控制一路水閥，設定日程和下雨跳過規則。",
      "wow": 74,
      "useful": 84,
      "easy": 49,
      "source": "OpenSprinkler",
      "url": "https://github.com/OpenSprinkler/OpenSprinkler-Firmware"
    },
    {
      "name": "OpenAstroTracker 星空追蹤器",
      "tagline": "自制赤道儀追蹤星空，拍更清楚的長曝光星野。",
      "stack": [
        "Stepper",
        "Arduino",
        "Astronomy"
      ],
      "mvp": "列印結構件，驅動一步進電機，完成基礎極軸校準。",
      "wow": 88,
      "useful": 68,
      "easy": 35,
      "source": "OpenAstroTracker",
      "url": "https://github.com/OpenAstroTech/OpenAstroTracker-Firmware"
    },
    {
      "name": "SmartKnob 觸感旋鈕",
      "tagline": "一個帶螢幕和力反饋的旋鈕，可以控制音量、燈光和時間線。",
      "stack": [
        "ESP32",
        "Motor",
        "Display"
      ],
      "mvp": "做音量旋鈕、模式切換、螢幕顯示和阻尼反饋。",
      "wow": 90,
      "useful": 78,
      "easy": 37,
      "source": "SmartKnob",
      "url": "https://github.com/scottbez1/smartknob"
    },
    {
      "name": "ratgdo 車庫門控制器",
      "tagline": "把車庫門狀態、本地控制和自動化接入 Home Assistant。",
      "stack": [
        "ESPHome",
        "Garage",
        "Home Assistant"
      ],
      "mvp": "讀取開關狀態，網頁控制開關，並設定離家提醒。",
      "wow": 72,
      "useful": 86,
      "easy": 50,
      "source": "ratgdo",
      "url": "https://github.com/ratgdo/esphome-ratgdo"
    },
    {
      "name": "AirGradient 空氣質量站",
      "tagline": "監測 PM2.5、CO2、溫溼度，做一塊家裡的空氣儀表盤。",
      "stack": [
        "AirGradient",
        "Sensors",
        "Dashboard"
      ],
      "mvp": "接入 CO2 和 PM2.5 感測器，顯示曲線和超標提醒。",
      "wow": 76,
      "useful": 88,
      "easy": 59,
      "source": "AirGradient",
      "url": "https://github.com/airgradienthq/arduino"
    },
    {
      "name": "OpenDTU 太陽能監控",
      "tagline": "讀取微型逆變器資料，看今天發了多少電。",
      "stack": [
        "ESP32",
        "Solar",
        "MQTT"
      ],
      "mvp": "讀取逆變器功率，展示即時曲線和日發電量。",
      "wow": 73,
      "useful": 87,
      "easy": 48,
      "source": "OpenDTU",
      "url": "https://github.com/tbnobody/OpenDTU"
    },
    {
      "name": "rtl_433 無線感測器雷達",
      "tagline": "用 SDR 接收溫度計、門鈴、輪胎壓力等 433MHz 訊號。",
      "stack": [
        "SDR",
        "rtl_433",
        "MQTT"
      ],
      "mvp": "識別一個無線溫度計，把資料寫入 Home Assistant。",
      "wow": 79,
      "useful": 81,
      "easy": 46,
      "source": "rtl_433",
      "url": "https://github.com/merbanan/rtl_433"
    },
    {
      "name": "openHASP 牆面控制屏",
      "tagline": "舊手機或小屏變成 Home Assistant 的牆面控制面板。",
      "stack": [
        "openHASP",
        "MQTT",
        "Touchscreen"
      ],
      "mvp": "做燈光、溫度、場景三個頁面，並支援觸控控制。",
      "wow": 77,
      "useful": 85,
      "easy": 55,
      "source": "openHASP",
      "url": "https://github.com/HASwitchPlate/openHASP"
    },
    {
      "name": "Mainsail 3D 列印儀表盤",
      "tagline": "給 Klipper 印表機配一個更漂亮的網頁控制台。",
      "stack": [
        "Mainsail",
        "Klipper",
        "Dashboard"
      ],
      "mvp": "顯示溫度、進度、檔案列表和攝像頭預覽。",
      "wow": 72,
      "useful": 84,
      "easy": 62,
      "source": "Mainsail",
      "url": "https://github.com/mainsail-crew/mainsail"
    }
  ]
};

const projects = tracks.flatMap((track) =>
  projectGroups[track.id].map((project, index) => ({
    id: `${track.id}-${index + 1}`,
    track: track.id,
    rank: index + 1,
    ...project,
  }))
);

const githubTrendingUpdatedAt = new Date("2026-06-29T18:52:00+08:00");

const githubStarProjects = [
  {
    repo: "calesthio/OpenMontage",
    name: "calesthio/OpenMontage",
    tagline: "開源 AI 影片製作系統，把 coding assistant 變成帶流水線、工具和 Skill 的影片工作室。",
    language: "Python",
    totalStars: 27908,
    weeklyStars: 18703,
    trendingRank: 1,
    mvp: "先跑通一個 30 秒短片：指令碼、素材、字幕和合成四步走完，再替換成自己的選題。",
    wow: 96,
    useful: 88,
    easy: 74,
    url: "https://github.com/calesthio/OpenMontage",
  },
  {
    repo: "DeusData/codebase-memory-mcp",
    name: "DeusData/codebase-memory-mcp",
    tagline: "高效能程式碼智慧 MCP，把程式碼庫索引成持久知識圖譜，讓 agent 少讀檔案也能理解專案。",
    language: "C",
    totalStars: 20687,
    weeklyStars: 8926,
    trendingRank: 2,
    mvp: "選一箇中型倉庫建索引，讓 Codex 回答入口檔案、模組關係和最短修改路徑。",
    wow: 86,
    useful: 93,
    easy: 68,
    url: "https://github.com/DeusData/codebase-memory-mcp",
  },
  {
    repo: "Panniantong/Agent-Reach",
    name: "Panniantong/Agent-Reach",
    tagline: "給 AI agent 一雙看見網際網路的眼睛：讀 Twitter、Reddit、YouTube、GitHub、小紅書等。",
    language: "Python",
    totalStars: 45136,
    weeklyStars: 7692,
    trendingRank: 10,
    mvp: "演示讓 agent 搜一個產品/技術話題，同時讀取 X、Reddit、YouTube、GitHub 和小紅書後生成證據摘要。",
    wow: 92,
    useful: 90,
    easy: 72,
    url: "https://github.com/Panniantong/Agent-Reach",
  },
  {
    repo: "ZhuLinsen/daily_stock_analysis",
    name: "ZhuLinsen/daily_stock_analysis",
    tagline: "LLM 驅動的多市場股票分析系統，整合行情、新聞、決策看板和自動推送。",
    language: "Python",
    totalStars: 51517,
    weeklyStars: 7045,
    trendingRank: 8,
    mvp: "先做一個只看 3 支股票的每日分析看板：行情、新聞摘要、風險提示和推送文案。",
    wow: 82,
    useful: 89,
    easy: 65,
    url: "https://github.com/ZhuLinsen/daily_stock_analysis",
  },
  {
    repo: "google-labs-code/design.md",
    name: "google-labs-code/design.md",
    tagline: "面向 coding agent 的設計身份說明格式，讓 AI 長期記住品牌、元件和視覺系統。",
    language: "TypeScript",
    totalStars: 23057,
    weeklyStars: 6728,
    trendingRank: 3,
    mvp: "給一個已有網頁寫 DESIGN.md，再讓 Codex 按同一視覺規則新增一個頁面。",
    wow: 85,
    useful: 92,
    easy: 84,
    url: "https://github.com/google-labs-code/design.md",
  },
  {
    repo: "topoteretes/cognee",
    name: "topoteretes/cognee",
    tagline: "開源 AI 記憶平臺，用自託管知識圖譜給 agent 持久長期記憶。",
    language: "Python",
    totalStars: 25268,
    weeklyStars: 6064,
    trendingRank: 16,
    mvp: "匯入一組專案筆記或 README，讓 agent 跨會話記住背景並回答後續問題。",
    wow: 86,
    useful: 94,
    easy: 70,
    url: "https://github.com/topoteretes/cognee",
  },
  {
    repo: "JCodesMore/ai-website-cloner-template",
    name: "JCodesMore/ai-website-cloner-template",
    tagline: "用 AI coding agent 一條命令克隆任意網站，適合學習頁面結構和復刻視覺風格。",
    language: "TypeScript",
    totalStars: 23257,
    weeklyStars: 5317,
    trendingRank: 6,
    mvp: "挑一個公開落地頁，生成可執行的復刻版，再把品牌、文案和配色換成自己的專案。",
    wow: 90,
    useful: 86,
    easy: 82,
    url: "https://github.com/JCodesMore/ai-website-cloner-template",
  },
  {
    repo: "mukul975/Anthropic-Cybersecurity-Skills",
    name: "mukul975/Anthropic-Cybersecurity-Skills",
    tagline: "817 個結構化網路安全 Skill，覆蓋攻防框架、AI 風險、安全審查和多平臺 agent 使用。",
    language: "Python",
    totalStars: 22871,
    weeklyStars: 5212,
    trendingRank: 12,
    mvp: "選一個本地小專案，讓 Codex 按安全 Skill 檢查暴露金鑰、危險依賴和許可權風險。",
    wow: 83,
    useful: 91,
    easy: 73,
    url: "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
  },
  {
    repo: "palmier-io/palmier-pro",
    name: "palmier-io/palmier-pro",
    tagline: "為 AI 而生的 macOS 影片編輯器，適合把剪輯、字幕、素材整理交給 agent 輔助。",
    language: "Swift",
    totalStars: 9430,
    weeklyStars: 5034,
    trendingRank: 13,
    mvp: "圍繞一個產品更新做 3 段素材、字幕和封面，驗證 AI 輔助剪輯流程是否順手。",
    wow: 88,
    useful: 84,
    easy: 69,
    url: "https://github.com/palmier-io/palmier-pro",
  },
  {
    repo: "jamiepine/voicebox",
    name: "jamiepine/voicebox",
    tagline: "開源 AI 語音工作室，支援克隆、聽寫和生成，適合做聲音類 demo。",
    language: "TypeScript",
    totalStars: 35652,
    weeklyStars: 3883,
    trendingRank: 20,
    mvp: "做一個 15 秒中文配音 demo：輸入文案、生成音訊、下載並對比不同聲音風格。",
    wow: 89,
    useful: 82,
    easy: 72,
    url: "https://github.com/jamiepine/voicebox",
  },
  {
    repo: "simplex-chat/simplex-chat",
    name: "simplex-chat/simplex-chat",
    tagline: "強調無使用者標識的隱私通訊網路，覆蓋 iOS、Android 和桌面客戶端。",
    language: "Haskell",
    totalStars: 15853,
    weeklyStars: 3218,
    trendingRank: 4,
    mvp: "不從零造聊天協議，先復刻一個隱私聊天產品頁：解釋無 ID 通訊、會話邀請和本地加密。",
    wow: 80,
    useful: 87,
    easy: 60,
    url: "https://github.com/simplex-chat/simplex-chat",
  },
  {
    repo: "Stirling-Tools/Stirling-PDF",
    name: "Stirling-Tools/Stirling-PDF",
    tagline: "GitHub 上很火的 PDF 工具箱，可在任意裝置上合併、轉換、編輯和 OCR PDF。",
    language: "Java",
    totalStars: 85086,
    weeklyStars: 3079,
    trendingRank: 18,
    mvp: "先跑通本地 PDF 合併、壓縮和轉圖片三件套，再加一箇中文操作入口。",
    wow: 76,
    useful: 95,
    easy: 74,
    url: "https://github.com/Stirling-Tools/Stirling-PDF",
  },
].map((project, index) => ({
  id: `stars-${index + 1}`,
  track: "stars",
  rank: index + 1,
  source: "GitHub",
  stack: [
    project.language,
    `+${formatCount(project.weeklyStars)} / week`,
    `Trending #${project.trendingRank}`,
  ],
  ...project,
}));

const starterOptions = {
  time: [
    { id: "quick", label: "今天 2 小時", description: "優先推薦馬上能跑起來的輕量專案。" },
    { id: "weekend", label: "週末 1-2 天", description: "平衡完成度和驚喜感。" },
    { id: "week", label: "一週慢慢做", description: "允許更多整合、部署和打磨。" },
  ],
  goal: [
    { id: "fun", label: "給朋友演示", description: "偏好互動、視覺、遊戲和 wow moment。" },
    { id: "useful", label: "自己日常用", description: "偏好工作流、資料整理和效率工具。" },
    { id: "hardware", label: "動手搓裝置", description: "偏好有真實裝置反饋的硬體專案。" },
    { id: "frontier", label: "追前沿動態", description: "偏好本週增長最快的新鮮 GitHub 專案。" },
  ],
  skill: [
    { id: "beginner", label: "剛開始", description: "更看重友好度、步驟清晰和少踩坑。" },
    { id: "builder", label: "會一點", description: "可以接受前端、指令碼和 API 整合。" },
    { id: "tinkerer", label: "願意折騰", description: "願意調環境、接硬體或做複雜流程。" },
  ],
  hardware: [
    { id: "none", label: "不買硬體", description: "只推薦網頁、軟體和本地工具。" },
    { id: "small", label: "幾十塊可以", description: "可以接受 ESP32、感測器和小屏。" },
    { id: "ready", label: "已經有裝置", description: "可以推薦樹莓派、印表機、智慧家居。" },
  ],
};

const starterGroupLabels = {
  time: "時間",
  goal: "目標",
  skill: "熟練度",
  hardware: "硬體",
};

const starterGroupHints = {
  time: "這次準備投入多久",
  goal: "做出來主要給誰用",
  skill: "你願意折騰到哪一步",
  hardware: "是否接受買點小東西",
};

const starterGroupStyles = {
  time: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#225CFF",
    label: { x: 50, y: 31 },
    positions: [
      { x: 27, y: 23 },
      { x: 52, y: 18 },
      { x: 76, y: 26 },
    ],
  },
  goal: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#18A058",
    label: { x: 30, y: 55 },
    positions: [
      { x: 22, y: 38 },
      { x: 14, y: 53 },
      { x: 24, y: 68 },
      { x: 49, y: 72 },
    ],
  },
  skill: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#FF6A3D",
    label: { x: 70, y: 55 },
    positions: [
      { x: 77, y: 38 },
      { x: 86, y: 53 },
      { x: 72, y: 67 },
    ],
  },
  hardware: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#111827",
    label: { x: 50, y: 71 },
    positions: [
      { x: 29, y: 88 },
      { x: 54, y: 90 },
      { x: 77, y: 86 },
    ],
  },
};

const starterLabels = Object.fromEntries(
  Object.entries(starterOptions).map(([key, options]) => [
    key,
    Object.fromEntries(options.map((option) => [option.id, option.label])),
  ])
);

const starterState = {
  time: "weekend",
  goal: "fun",
  skill: "beginner",
  hardware: "none",
};

const state = {
  track: "all",
  metric: "wow",
  query: "",
};

const boardThemes = {
  all: {
    primary: "#111827",
    soft: "#f8fafc",
    shadow: "rgba(17, 24, 39, 0.08)",
  },
  fun: {
    primary: "#225CFF",
    soft: "#eef4ff",
    shadow: "#d9f85d",
  },
  useful: {
    primary: "#18A058",
    soft: "#ecfdf3",
    shadow: "#b8f7d4",
  },
  hardware: {
    primary: "#FF6A3D",
    soft: "#fff3ea",
    shadow: "#ffe08a",
  },
  stars: {
    primary: "#111827",
    soft: "#f4f6f8",
    shadow: "#d9f85d",
  },
};

const focusHeaderNotes = {
  fun: ["互動反饋優先", "一天內可演示", "適合做給朋友看"],
  useful: ["日常工作流優先", "做完馬上能用", "適合長期迭代"],
  hardware: ["真實裝置反饋", "桌面可見成果", "適合邊買邊做"],
  stars: ["本週增長優先", "GitHub Trending 候選", "適合追前沿動態"],
};

const focusPalettes = {
  fun: ["#225CFF", "#4B7BFF", "#0EA5E9"],
  useful: ["#18A058", "#0F766E", "#65A30D"],
  hardware: ["#FF6A3D", "#F59E0B", "#B45309"],
  stars: ["#111827", "#225CFF", "#D9F85D"],
};

const app = document.querySelector("#app");
let stopRadar = null;
let planKeyHandler = null;
let isSearchComposing = false;
let searchRenderTimer = null;

function scheduleSearchRender(delay = 320) {
  if (searchRenderTimer) {
    window.clearTimeout(searchRenderTimer);
  }
  searchRenderTimer = window.setTimeout(() => {
    searchRenderTimer = null;
    if (isSearchComposing) return;
    syncUrlState();
    render({ preserveFocus: true });
  }, delay);
}

function cancelPendingSearchRender() {
  if (!searchRenderTimer) return;
  window.clearTimeout(searchRenderTimer);
  searchRenderTimer = null;
}

function hydrateStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const track = params.get("track");
  const metric = params.get("metric");
  const query = params.get("q");
  if (track === "all" || boardTabs.some((item) => item.id === track)) state.track = track;
  if (["wow", "useful", "easy"].includes(metric)) state.metric = metric;
  if (query) state.query = query;
}

function syncUrlState() {
  const params = new URLSearchParams();
  if (state.track !== "all") params.set("track", state.track);
  if (state.metric !== "wow") params.set("metric", state.metric);
  if (state.query.trim()) params.set("q", state.query.trim());
  const query = params.toString();
  const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState(null, "", nextUrl);
}

function scoreLabel(project) {
  if (project.track === "stars") return "HOT";
  return "開工包";
}

function projectStack(project) {
  return Array.isArray(project.stack) ? project.stack : [];
}

function projectText(project) {
  return [
    project.name,
    project.tagline,
    project.mvp,
    project.source,
    project.repo ?? "",
    project.language ?? "",
    projectStack(project).join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function recommendedSkillIds(project, limit = 3) {
  const ids = [];
  const resultLimit = Math.min(limit, projectSkillLimits[project.name] ?? limit);
  const push = (skillId) => {
    if (skillCatalog[skillId] && !ids.includes(skillId)) ids.push(skillId);
  };

  (projectSkillOverrides[project.name] ?? []).forEach(push);

  const text = projectText(project);
  projectSkillRules.forEach((rule) => {
    if (rule.tracks && !rule.tracks.includes(project.track)) return;
    if (rule.match.test(text)) rule.skills.forEach(push);
  });

  (defaultSkillIds[project.track] ?? defaultSkillIds.fun).forEach(push);

  return ids.slice(0, resultLimit);
}

function recommendedSkills(project, limit = 3) {
  return recommendedSkillIds(project, limit).map((skillId) => ({
    id: skillId,
    ...skillCatalog[skillId],
  }));
}

function skillUseReason(project, skill) {
  const sourceName = project.source || project.repo || project.name;
  const useCases = {
    "github-cli": `用來 clone / fork「${sourceName}」、檢視 README、issue 和 release，優先把原專案或最小示例跑起來。`,
    "agent-skills": "用來給 Codex 補一套工程化執行流程，適合需要穩定讀程式碼、改程式碼、跑驗收的開源專案復現。",
    "skillspector": "用來在安裝或複用第三方 Skill 前先掃一遍風險，避免把危險命令和可疑許可權直接交給 AI 執行。",
    "opencli": "用來抓取專案文件、配置教程、網頁控制台或公開 API，把分散資料變成 AI 可執行的步驟。",
    "playwright-skill": `用來開啟瀏覽器驗收「${project.mvp}」裡的關鍵按鈕、上傳、匯出、移動端和重試流程。`,
    "vercel-deploy": "用來把網頁 demo 部署成可分享預覽連結，並檢查構建、環境變數和上線後的基礎狀態。",
    "frontend-design": "用來按介面準則檢查佈局、文字溢位、移動端、焦點態和可訪問性，讓 demo 不只“能跑”也能交給別人用。",
    "shadcn-skill": "用來快速搭出表單、彈窗、設定面板、資料表格等常見 Web App 控制元件，減少手寫低質量 UI。",
    "figma-skills": "用來整理介面結構、元件狀態和設計上下文，適合需要設計稿、元件庫或視覺對齊的專案。",
    "canva-skills": "用來快速產出封面、海報、社媒圖和展示素材，適合視覺成果型專案。",
    "guizang-ppt": "用來把專案結果包裝成網頁 PPT、釋出頁或長圖說明，適合需要一眼展示效果的專案。",
    "document-skills": "用來處理 PDF、Office、Markdown、OCR、表格和匯出檔案，適合資料、文件、報表類專案。",
    "supabase-skills": "用來處理登入、資料庫表、許可權、即時資料和儲存，讓需要後端狀態的應用更快跑通。",
    "huggingface-skills": "用來處理模型、資料集、Gradio 或 Spaces demo，適合需要 AI 模型能力的專案。",
    "sentry-skills": "用來接入錯誤監控、定位線上異常和修復 issue，適合已經準備公開發布的專案。",
    "lark-cli": "用來把飛書文件、多維表格、會議紀要、日曆和任務接進自動化，適合中文團隊工作流專案。",
    "openai-skills": "用來查官方 Skill 安裝與觸發方式，給 Codex 補工具能力；它不是專案依賴，而是開工前的能力目錄。",
    "openai-docs": "用來參考模型呼叫、流式輸出、工具呼叫和結構化輸出示例，適合需要接入 LLM 的專案。",
  };
  return useCases[skill.id] ?? skill.description;
}

function projectScale(project) {
  const text = projectText(project);
  let score = 1;

  if (project.easy < 52) score += 1.55;
  else if (project.easy < 65) score += 1.05;
  else if (project.easy < 78) score += 0.55;

  if (project.track === "hardware") score += 1.15;
  if (project.track === "stars") score += 0.45;
  if (/docker|compose|k8s|kubernetes|資料庫|database|postgres|mysql|redis|supabase|auth|許可權|登入/.test(text)) score += 0.65;
  if (/llm|rag|agent|openai|模型|gradio|hugging face|tts|voice|語音|大模型/.test(text)) score += 0.55;
  if (/gpu|cuda|本地模型|stable diffusion|vtuber|webxr|frigate|coral/.test(text)) score += 0.95;
  if (/esp32|raspberry|mqtt|zigbee|韌體|燒錄|感測器|硬體|3d 列印|lora|sdr/.test(text)) score += 0.75;
  if (/webgl|three|canvas|phaser|pixi|p5|音訊|音樂|即時|攝像頭|hand tracking/.test(text)) score += 0.35;
  if (project.easy >= 82) score -= 0.25;

  const value = Math.max(1, Math.min(5, Math.round(score * 2) / 2));
  const label = value <= 1.5 ? "輕鬆跑" : value <= 2.5 ? "有點折騰" : value <= 3.5 ? "需要耐心" : "新手慎入";
  const hint =
    value <= 1.5
      ? "適合直接丟給 AI 開始做，先跑一個最小 demo。"
      : value <= 2.5
        ? "適合新手嘗試，但開工前要先確認依賴和賬號。"
        : value <= 3.5
          ? "建議讓 AI 先做體檢，再按最短路徑跑通示例。"
          : "先別盲目 clone，最好讓 AI 把環境、配置和風險講清楚再動手。";

  return { value, label, hint };
}

function projectVerdict(project) {
  const scale = projectScale(project);
  if (project.easy >= 76 && scale.value <= 2.5) {
    return {
      label: "推薦搓",
      tone: "good",
      reason: `這個專案反饋比較直接，適合先做出「${project.mvp}」這樣的可展示 demo。`,
    };
  }
  if (scale.value >= 4 || project.easy <= 50) {
    return {
      label: "新手慎入",
      tone: "warn",
      reason: "它很有吸引力，但開工前最好先讓 AI 查清依賴、配置和替代方案。",
    };
  }
  return {
    label: "可以試試",
    tone: "ok",
    reason: "適合用 AI 帶著跑，但不要一上來做完整版，先收窄成一個最小可執行效果。",
  };
}

function projectPrepItems(project) {
  const text = projectText(project);
  const items = ["專案連結", "一臺電腦"];

  if (/llm|rag|agent|openai|模型|大模型|copilot|chat/.test(text)) items.push("API Key 或模型服務");
  if (/docker|compose|open webui|dify|flowise|ragflow|n8n|paperless|immich/.test(text)) items.push("Docker");
  if (/資料庫|database|postgres|mysql|redis|supabase|auth|登入|許可權/.test(text)) items.push("資料庫/賬號配置");
  if (/pdf|office|word|excel|ppt|ocr|markdown|文件|票據|合同|發票/.test(text)) items.push("真實檔案樣本");
  if (/webgl|three|canvas|phaser|pixi|p5|白板|圖表|視覺化|音訊|音樂|攝像頭/.test(text)) items.push("現代瀏覽器");
  if (/esp32|raspberry|mqtt|zigbee|韌體|燒錄|感測器|硬體|3d 列印|lora|sdr/.test(text)) items.push("硬體配件和資料線");
  if (/網頁抓取|crawler|搜尋|opencli|飛書|微信|平臺|api|rss/.test(text)) items.push("網路/平臺賬號");
  if (project.track === "stars") items.push("先讀 README");

  return [...new Set(items)].slice(0, 5);
}

function projectRiskItems(project) {
  const text = projectText(project);
  const risks = [];

  if (project.easy < 58) risks.push("不要直接做完整版，先讓 AI 找到最小可執行入口。");
  if (/llm|rag|agent|openai|模型|大模型|tts|voice|語音/.test(text)) risks.push("可能會卡在 API Key、模型選擇或網路訪問上。");
  if (/docker|compose|資料庫|database|postgres|mysql|redis|supabase/.test(text)) risks.push("可能會卡在環境變數、埠或資料庫連線上。");
  if (/esp32|raspberry|mqtt|zigbee|韌體|燒錄|感測器|硬體|3d 列印|lora|sdr/.test(text)) risks.push("可能會卡在接線、燒錄、裝置型號或驅動上。");
  if (/webgl|three|canvas|phaser|pixi|p5|webxr|攝像頭|音訊|音樂/.test(text)) risks.push("可能會卡在瀏覽器許可權、素材路徑或即時效能上。");
  if (/pdf|office|ocr|文件|票據|合同|發票|markdown/.test(text)) risks.push("最好準備真實樣本，不然 demo 容易只剩空介面。");
  if (!risks.length) risks.push("先跑通原專案或官方示例，再決定要不要二次開發。");

  return [...new Set(risks)].slice(0, 3);
}

function renderSkillKit(project, options = {}) {
  const skills = recommendedSkills(project, options.compact ? 2 : 3);
  return `
    <div class="skill-kit">
      <div class="skill-kit-head">
        <span>推薦開工 Skill</span>
        <a class="skill-kit-radar-link" href="${skillRadarUrl}">完整榜單</a>
      </div>
      <div class="skill-chip-list">
        ${skills
          .map(
            (skill) => `
              <a class="skill-chip" href="${skill.url}" target="_blank" rel="noreferrer">
                <strong>${escapeHtml(skill.name)}</strong>
                <em>${escapeHtml(skill.signal)}</em>
              </a>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function formatCount(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatUpdatedDate(date) {
  return new Intl.DateTimeFormat("zh-Hant", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function recommendationPool() {
  return [...projects, ...githubStarProjects];
}

function projectById(id) {
  return recommendationPool().find((project) => project.id === id);
}

function starterRecommendations() {
  const scored = recommendationPool()
    .map((project) => ({
      project,
      score: starterScore(project),
    }))
    .sort((a, b) => b.score - a.score || a.project.rank - b.project.rank);

  const picked = [];
  const trackCounts = {};
  for (const item of scored) {
    const track = item.project.track;
    if ((trackCounts[track] ?? 0) >= 2) continue;
    picked.push(item);
    trackCounts[track] = (trackCounts[track] ?? 0) + 1;
    if (picked.length === 3) break;
  }
  return picked;
}

function starterScore(project) {
  let score = project.easy * 1.05 + project.wow * 0.45 + project.useful * 0.45;

  if (starterState.time === "quick") score += project.easy * 0.85;
  if (starterState.time === "weekend") score += (project.easy + project.wow) * 0.35;
  if (starterState.time === "week") score += project.useful * 0.55 + project.wow * 0.25;

  if (starterState.goal === "fun") score += project.wow * 1.05 + (project.track === "fun" ? 40 : 0);
  if (starterState.goal === "useful") {
    score += project.useful * 1.05 + (project.track === "useful" ? 42 : 0);
  }
  if (starterState.goal === "hardware") {
    score += project.track === "hardware" ? 90 : -35;
  }
  if (starterState.goal === "frontier") {
    score += project.track === "stars" ? 96 : 0;
    score += project.weeklyStars ? Math.min(46, project.weeklyStars / 420) : 0;
  }

  if (starterState.skill === "beginner") score += project.easy * 0.75;
  if (starterState.skill === "builder") score += project.useful * 0.35 + project.wow * 0.25;
  if (starterState.skill === "tinkerer") score += project.wow * 0.45 + (project.track === "hardware" ? 26 : 0);

  if (starterState.hardware === "none" && project.track === "hardware") score -= 140;
  if (starterState.hardware === "small" && project.track === "hardware") score += 28;
  if (starterState.hardware === "ready" && project.track === "hardware") score += 62;
  if (starterState.hardware !== "none" && starterState.goal !== "hardware" && project.track === "hardware") {
    score += 12;
  }

  score += Math.max(0, 31 - project.rank) * 0.35;
  return score;
}

function starterReason(project) {
  const track = trackById(project.track);
  const timeText = starterLabels.time[starterState.time];
  const goalText = starterLabels.goal[starterState.goal];
  if (project.track === "stars") {
    return `適合想“${goalText}”的新手：本週增長 +${formatCount(project.weeklyStars)} stars，先復刻一個最小使用場景就能摸到前沿脈搏。`;
  }
  if (project.track === "hardware") {
    return `適合“${timeText}”動手：反饋來自真實裝置，按 MVP 做出一個可見/可測的小結果。`;
  }
  return `適合“${timeText}”開工：${track.short}方向匹配“${goalText}”，先把 MVP 做成可演示版本。`;
}

const projectTagOverrides = {
  "AI 小鎮 / NPC 社交遊戲": ["AI 角色實驗", "角色記憶", "小地圖劇情"],
  "手勢控制小遊戲 / 手勢樂器": ["攝像頭手勢", "體感控制", "音效反饋"],
  "節點式視覺實驗室": ["節點編排", "引數畫布", "匯出海報"],
  "瀏覽器裡的迷你音訊工作站": ["波形剪輯", "變聲取樣", "本地匯出"],
  "物理沙盒 / 畫素鍊金術": ["畫素沙盒", "材料反應", "規則湧現"],
  "瀏覽器現場視覺合成器": ["即時視覺", "程式碼演出", "節奏變形"],
  "生成式海報 / 桌布工廠": ["引數海報", "隨機種子", "PNG 匯出"],
  "多人塗鴉白板遊戲": ["房間碼協作", "塗鴉投票", "破冰遊戲"],
  "24 小時人生撥盤": ["拖拽時間盤", "日覆盤", "習慣分配"],
  "產品釋出短片生成器": ["截圖成片", "自動字幕", "釋出短片"],
  "手繪風白板 / 靈感草圖板": ["手繪流程", "無限畫布", "分享草圖"],
  "3D 房間 / 作品集小宇宙": ["3D 房間", "物件連結", "漫遊主頁"],
  "WebGL 流體玩具": ["流體墨水", "觸控塗抹", "截圖背景"],
  "演算法節奏樂隊": ["程式碼作曲", "四軌迴圈", "Pattern 分享"],
  "瀏覽器合成器面板": ["網頁合成器", "旋鈕調音", "MIDI 彈奏"],
  "2D 闖關小遊戲": ["橫版關卡", "金幣敵人", "完整迴圈"],
  "街機風小遊戲原型機": ["街機挑戰", "計分重開", "快速原型"],
  "物理彈球 / 多米諾實驗": ["碰撞物理", "彈球計分", "重力滑桿"],
  "拖拽式海報編輯器": ["拖拽排版", "圖層編輯", "PNG 匯出"],
  "程式碼動畫課件": ["程式碼動畫", "時間軸", "課程圖解"],
  "React 影片渲染工廠": ["元件轉影片", "資料鏡頭", "MP4 匯出"],
  "節點流程玩具": ["拖線流程", "節點重放", "Agent 畫布"],
  "文本生成圖表魔法": ["文本出圖", "即時預覽", "SVG 匯出"],
  "資料視覺化玩具箱": ["CSV 探索", "關係氣泡圖", "Hover 詳情"],
  "手繪風 UI 元件參考": ["手繪元件", "草稿質感", "原型視覺化"],
  "瀏覽器 3D 小展廳 / A-Frame 示例": ["3D 展廳", "五件展品", "漫遊說明牌"],
  "畫素 / 粒子編輯器": ["粒子編輯器", "配置匯出", "PixiJS 畫布"],
  "React 3D 產品模型參考": ["原始碼參考", "互動熱點", "旋轉截圖"],
  "字型扭曲效果庫": ["字型扭曲", "GLSL 標題", "封面效果"],
  "週末遊戲引擎原型": ["遊戲切片", "Web 匯出", "勝負迴圈"],
  "個人 AI 工作臺": ["檔案問答", "來源引用", "私人 AI 工作臺"],
  "自動化工作流中樞": ["連結到表格", "Webhook 自動化", "AI 通知"],
  "資訊雷達 / 週報機器人": ["多源掃描", "去重打分", "週報生成"],
  "收藏夾 + AI 閱讀收件箱": ["連結歸檔", "正文抓取", "AI 標籤"],
  "票據合同 OCR 文件庫": ["OCR 歸檔", "合同發票", "全文搜尋"],
  "私人相簿 + AI 搜尋": ["相簿 AI 搜尋", "人物地點", "家庭照片庫"],
  "個人財務 / 訂閱管理器": ["訂閱識別", "月度預算", "支出圖表"],
  "PDF 萬能工具箱": ["PDF 合併", "本地 OCR", "文件工具箱"],
  "服務健康監控面板": ["URL 監控", "故障報警", "公開狀態頁"],
  "食譜 + 購物清單 + 冰箱庫存": ["菜譜拆解", "購物清單", "冰箱庫存"],
  "閃念備忘錄 / 個人微博": ["閃念輸入", "日曆回看", "全文搜尋"],
  "Bookmark Everything 檔案館": ["截圖收藏", "AI 標籤", "連結檔案"],
  "本地 Notion 式工作臺": ["離線工作臺", "任務看板", "資料庫空間"],
  "白板 + 知識庫混合空間": ["文件白板", "資料互鏈", "選題工作區"],
  "雙鏈知識庫 / 學習卡片": ["雙鏈筆記", "標籤圖譜", "複習清單"],
  "團隊 Wiki / SOP 中心": ["團隊 SOP", "許可權搜尋", "模板文件"],
  "私人手冊站": ["分層手冊", "公開分享", "生活百科"],
  "開源文件協作站": ["輕量 Confluence", "評論許可權", "團隊模板"],
  "無程式碼資料庫後臺": ["CSV 變後臺", "表單檢視", "運營臺賬"],
  "表格資料庫 / 小型 CRM": ["小型 CRM", "報價排期", "自動提醒"],
  "內部工具搭建器": ["拖拽後臺", "狀態變更", "商單排期"],
  "私人知識問答庫": ["空間問答", "檔案檢索", "私人資料庫"],
  "AI 應用工作流平臺": ["提示詞應用", "工具呼叫", "選題助手"],
  "視覺化 Agent 編排器": ["RAG 節點", "視覺化編排", "檢索鏈"],
  "深度 RAG 文件助手": ["深度文件問答", "PDF OCR", "引用追問"],
  "網頁抓取 / 資料管道": ["網頁轉 Markdown", "乾淨正文", "資料管道"],
  "私人元搜尋引擎": ["元搜尋", "無廣告", "資料入口"],
  "跨裝置檔案同步": ["跨裝置同步", "P2P 資料夾", "衝突提示"],
  "家庭密碼庫": ["家庭密碼庫", "2FA 匯入", "自託管賬號"],
  "財務火控儀表盤": ["賬單規則", "預算標籤", "月度財務"],
  "ESP32 電子墨水日曆牌": ["桌面日曆牌", "低功耗重新整理", "天氣待辦"],
  "WLED 音樂律動燈": ["燈帶律動", "氛圍場景", "手機控制"],
  "Magic Mirror 智慧鏡子": ["智慧鏡面", "家庭資訊面板", "模組化螢幕"],
  "Meshtastic 離線通訊節點": ["LoRa 離線通訊", "節點地圖", "頻道訊息"],
  "QMK 宏鍵盤 / 工作流控制台": ["宏鍵控制台", "HID 快捷鍵", "工作流按鍵"],
  "本地 AI 攝像頭門鈴": ["本地 AI 識別", "門鈴事件", "片段推送"],
  "小智 ESP32 AI 語音終端": ["語音終端", "按鍵喚醒", "工具呼叫"],
  "Tasmota 家電控制台": ["插座控制", "MQTT 規則", "功耗曲線"],
  "Pi-hole 家庭網路護城河": ["DNS 攔截", "家庭網路", "攔截統計"],
  "智慧植物監測器": ["土壤溼度", "缺水提醒", "植物看護"],
  "ESPHome 全屋感測器平臺": ["YAML 感測器", "HA 曲線", "溫溼度節點"],
  "Home Assistant 家庭中樞": ["全屋中樞", "早晚自動化", "手機面板"],
  "OpenMQTTGateway 萬能閘道器": ["藍牙 433 閘道器", "MQTT 橋接", "訊號轉換"],
  "Zigbee2MQTT 裝置橋": ["Zigbee 本地橋", "門磁按鈕", "廠商解綁"],
  "ESP32-CAM 口袋攝像頭": ["即時預覽", "延時攝影", "小板相機"],
  "ESPresense 房間定位": ["BLE 房間定位", "人在何處", "自動化觸發"],
  "Marlin 3D 印表機韌體": ["列印韌體", "溫控步進", "自動調平"],
  "Klipper 高速列印控制器": ["高速列印", "輸入整形", "樹莓派控制"],
  "OctoPrint 印表機監控臺": ["G-code 上傳", "攝像頭監控", "完成通知"],
  "ZMK 無線機械鍵盤": ["藍牙鍵盤", "分體佈局", "雙層快捷鍵"],
  "KMK CircuitPython 鍵盤": ["Python 鍵盤", "旋鈕宏", "層切換"],
  "OpenSprinkler 智慧澆灌": ["智慧澆灌", "下雨跳過", "水閥日程"],
  "OpenAstroTracker 星空追蹤器": ["星空追蹤", "步進赤道儀", "長曝光"],
  "SmartKnob 觸感旋鈕": ["力反饋旋鈕", "螢幕模式", "阻尼手感"],
  "ratgdo 車庫門控制器": ["車庫門狀態", "本地控制", "離家提醒"],
  "AirGradient 空氣質量站": ["CO2/PM 監測", "空氣曲線", "超標提醒"],
  "OpenDTU 太陽能監控": ["太陽能監控", "即時功率", "日發電量"],
  "rtl_433 無線感測器雷達": ["SDR 監聽", "433 訊號", "感測器雷達"],
  "openHASP 牆面控制屏": ["牆面觸屏", "場景面板", "MQTT 頁面"],
  "Mainsail 3D 列印儀表盤": ["Klipper 儀表盤", "溫度進度", "檔案預覽"],
  "harry0703/MoneyPrinterTurbo": ["短影片流水線", "本週爆發", "指令碼到成片"],
  "Lum1104/Understand-Anything": ["程式碼圖譜", "倉庫問答", "模組關係"],
  "microsoft/markitdown": ["檔案轉 Markdown", "AI 閱讀入口", "Office 處理"],
  "Leonxlnx/taste-skill": ["去模板味", "審美增強", "輸出對比"],
  "colbymchenry/codegraph": ["本地圖譜", "少用 Token", "架構問答"],
  "affaan-m/ECC": ["代理最佳化", "記憶流程", "開發環境增強"],
  "rohitg00/ai-engineering-from-scratch": ["AI 工程路線", "Notebook 實踐", "學習進度板"],
  "mukul975/Anthropic-Cybersecurity-Skills": ["安全技能庫", "框架對映", "審查流程"],
  "hardikpandya/stop-slop": ["去 AI 味", "自然改寫", "Skill 檔案"],
  "calesthio/OpenMontage": ["AI 影片工廠", "指令碼到成片", "本週爆發"],
  "google-labs-code/design.md": ["設計記憶", "AI 視覺規範", "DESIGN.md"],
  "topoteretes/cognee": ["長期記憶", "知識圖譜", "Agent 記住上下文"],
  "JCodesMore/ai-website-cloner-template": ["網頁克隆", "視覺復刻", "一條命令"],
  "ZhuLinsen/daily_stock_analysis": ["行情看板", "新聞摘要", "自動推送"],
  "chopratejas/headroom": ["Token 壓縮", "長日誌救星", "RAG 節省"],
  "DeusData/codebase-memory-mcp": ["程式碼庫記憶", "少用 Token", "MCP 索引"],
  "Panniantong/Agent-Reach": ["全網搜尋", "零 API 費", "多平臺證據"],
  "palmier-io/palmier-pro": ["AI 影片編輯", "macOS 剪輯", "字幕素材"],
  "jamiepine/voicebox": ["AI 語音工作室", "聲音克隆", "配音生成"],
  "simplex-chat/simplex-chat": ["隱私聊天", "無使用者 ID", "端到端通訊"],
  "Stirling-Tools/Stirling-PDF": ["PDF 工具箱", "本地處理", "OCR 轉換"],
  "anthropics/knowledge-work-plugins": ["知識工作外掛", "資料整理", "會議準備"],
  "EveryInc/compound-engineering-plugin": ["工程拆解", "任務切片", "可執行 Prompt"],
};

const projectTagRules = [
  { match: /ai town|npc|小鎮|角色每天|角色.*記憶/, tags: ["AI 角色實驗", "角色記憶", "小地圖劇情"] },
  { match: /手勢|gesture|mediapipe|張手|握拳|手掌/, tags: ["攝像頭手勢", "體感控制", "即時反饋"] },
  { match: /節點式|node graph|graphite|react flow|flowise|拖線|視覺化 agent/, tags: ["節點編排", "拖拽搭建", "流程視覺化"] },
  { match: /waveform|audiomass|音訊工作站|剪下|取樣/, tags: ["波形編輯", "聲音實驗", "本地儲存"] },
  { match: /沙子|sandspiel|畫素鍊金|cellular|材料/, tags: ["規則湧現", "畫素沙盒", "引數玩具"] },
  { match: /hydra|流體|fluid|shader|視覺合成|粒子舞臺/, tags: ["即時視覺", "滑鼠即反饋", "舞臺背景"] },
  { match: /海報|桌布|poster|fabric|rough|blotter|字型|封面|貼紙/, tags: ["可匯出作品", "設計玩具", "封面生成"] },
  { match: /tldraw|excalidraw|手繪風白板|塗鴉|猜詞|破冰|無限畫布/, tags: ["多人協作", "破冰玩法", "畫布分享"] },
  { match: /24 小時|撥盤|時間|習慣|覆盤|okr/, tags: ["自我覆盤", "拖拽規劃", "日常可用"] },
  { match: /remotion|motion canvas|montage|影片|短片|字幕|分鏡|配音/, tags: ["釋出短片", "自動分鏡", "可匯出影片"] },
  { match: /3d 房間|three|r3f|react three|webxr|a-frame|gltf|展廳|產品模型|模型放進網頁/, tags: ["沉浸展示", "3D 作品集", "熱點互動"] },
  { match: /phaser|kaplay|godot|matter\.js|闖關|彈球|街機|敵人|金幣|橫版|挑戰關/, tags: ["完整遊戲迴圈", "關卡原型", "失敗重開"] },
  { match: /tone|strudel|合成器|節奏|音樂|樂器|bpm|旋鈕|midi/, tags: ["調參即出聲", "節奏迴圈", "聲音反饋"] },
  { match: /mermaid|d3|csv|圖表|流程圖|時序圖|關係圖|時間線|資料視覺化/, tags: ["一鍵圖解", "資料探索", "視覺化表達"] },
  { match: /open webui|anythingllm|ragflow|rag|檔案問答|知識問答|引用來源/, tags: ["檔案問答", "引用來源", "私人知識庫"] },
  { match: /dify|agent|workflow|提示詞|工具呼叫|應用工作流/, tags: ["AI 應用編排", "工具呼叫", "可釋出應用"] },
  { match: /n8n|webhook|自動化|流水線|提醒|表格/, tags: ["自動流水線", "少手工操作", "工作流串聯"] },
  { match: /product hunt|hacker news|hn|rss|週報|資訊雷達|github 和 rss/, tags: ["資訊雷達", "每週更新", "可發週報"] },
  { match: /linkwarden|karakeep|bookmark|收藏|閱讀收件箱|連結/, tags: ["收藏歸檔", "自動摘要", "資料入口"] },
  { match: /paperless|ocr|票據|合同|發票|報銷/, tags: ["票據合同整理", "全文搜尋", "省心歸檔"] },
  { match: /immich|相簿|照片|人物|地點/, tags: ["相簿搜尋", "畫面標籤", "家庭資料庫"] },
  { match: /actual|firefly|財務|預算|訂閱|賬單/, tags: ["預算看板", "訂閱提醒", "錢流可見"] },
  { match: /stirling|markitdown|pdf|office|markdown|文件轉換/, tags: ["文件轉換", "本地工具箱", "AI 閱讀入口"] },
  { match: /uptime|狀態頁|監控|報警|服務健康/, tags: ["服務報警", "公開狀態頁", "運維看板"] },
  { match: /mealie|食譜|購物清單|冰箱/, tags: ["購物清單", "菜譜拆解", "家庭流程"] },
  { match: /memos|logseq|appflowy|affine|outline|bookstack|docmost|wiki|sop|筆記|知識庫/, tags: ["知識沉澱", "雙鏈整理", "團隊 SOP"] },
  { match: /nocodb|baserow|budibase|crm|資料庫|運營後臺|表單/, tags: ["運營後臺", "表格變應用", "客戶臺賬"] },
  { match: /firecrawl|crawler|抓取|searxng|搜尋引擎|元搜尋/, tags: ["資料管道", "搜尋入口", "乾淨正文"] },
  { match: /syncthing|同步|檔案同步/, tags: ["跨裝置同步", "不靠網盤", "檔案保險"] },
  { match: /vaultwarden|密碼|bitwarden/, tags: ["家庭密碼庫", "賬號保險", "自託管"] },
  { match: /moneyprinter|短影片自動生成/, tags: ["短影片流水線", "AI 變現感", "指令碼到成片"] },
  { match: /understand-anything|codegraph|程式碼圖譜|倉庫|模組關係/, tags: ["程式碼圖譜", "倉庫問答", "模組關係"] },
  { match: /taste-skill|stop-slop|ai 文風|文風痕跡|審美 skill|減少無聊/, tags: ["去 AI 味", "審美增強", "文案改造"] },
  { match: /headroom|token|壓縮|日誌/, tags: ["Token 壓縮", "長日誌救星", "省上下文"] },
  { match: /claude code|codex|cursor|代理|engineering|compound|skills|外掛|學習路線|安全/, tags: ["工程方法", "技能庫", "可複用流程"] },
  { match: /電子墨水|e-paper|日曆牌|低功耗/, tags: ["桌面資訊牌", "低功耗顯示", "日程天氣"] },
  { match: /wled|燈帶|led|律動燈|音樂模式|氛圍/, tags: ["房間氛圍燈", "音樂律動", "手機控制"] },
  { match: /mirror|鏡子|半透鏡/, tags: ["家庭資訊鏡", "一眼檢視", "客廳裝置"] },
  { match: /meshtastic|lora|離線通訊/, tags: ["離線通訊", "節點地圖", "戶外可玩"] },
  { match: /qmk|zmk|kmk|鍵盤|宏鍵盤|快捷鍵|hid/, tags: ["工作流按鍵", "快捷鍵控制台", "可天天用"] },
  { match: /frigate|門鈴|攝像頭|人形|包裹|安防/, tags: ["本地識別", "安防提醒", "事件片段"] },
  { match: /xiaozhi|語音終端|speech|麥克風|喇叭/, tags: ["桌面語音終端", "按鍵喚醒", "本地工具呼叫"] },
  { match: /tasmota|home assistant|esphome|openmqtt|zigbee|mqtt|智慧家居|門磁|感測器/, tags: ["本地智慧家居", "裝置聯動", "自動化場景"] },
  { match: /pi-hole|dns|廣告攔截|網路統計/, tags: ["家庭網路淨化", "攔截統計", "全家可用"] },
  { match: /智慧植物|植物監測|澆灌|sprinkler|土壤溼度|缺水提醒|水閥/, tags: ["植物看護", "自動澆水", "感測提醒"] },
  { match: /3d 列印|marlin|klipper|octoprint|mainsail|印表機/, tags: ["印表機調校", "遠端監控", "進度可見"] },
  { match: /astro|星空|赤道儀|長曝光/, tags: ["星空追蹤", "機械結構", "攝影增強"] },
  { match: /smartknob|力反饋|旋鈕|motor|阻尼/, tags: ["力反饋旋鈕", "實體手感", "桌面控制"] },
  { match: /airgradient|空氣|co2|pm2.5/, tags: ["空氣儀表盤", "超標提醒", "家庭健康"] },
  { match: /opendtu|太陽能|逆變器|發電/, tags: ["發電監控", "即時功率", "能源看板"] },
  { match: /rtl_433|sdr|433mhz|無線訊號/, tags: ["無線訊號雷達", "感測器監聽", "頻譜探索"] },
  { match: /openhasp|牆面|觸控控制屏/, tags: ["牆面控制屏", "場景面板", "舊屏復活"] },
];

function projectExperienceTags(project, limit = 4) {
  const text = projectText(project);
  const overrideTags = projectTagOverrides[project.name] ?? [];
  const tags = [...overrideTags];

  if (!overrideTags.length) {
    projectTagRules.forEach((rule) => {
      if (rule.match.test(text)) tags.push(...rule.tags);
    });
  }

  if (project.weeklyStars) tags.push(`本週 +${formatCount(project.weeklyStars)}`);

  if (tags.length < 2 && project.track === "fun") tags.push("互動 Demo");
  if (tags.length < 2 && project.track === "useful") tags.push("真實工作流");
  if (tags.length < 2 && project.track === "hardware") tags.push("實體反饋");
  if (tags.length < 2 && project.track === "stars") tags.push("前沿增長");

  if (project.wow >= 90) tags.push("強演示");
  else if (project.wow >= 82) tags.push("效果直觀");
  if (project.useful >= 90) tags.push("能進日常");
  else if (project.useful >= 84) tags.push("長期可用");
  if (project.easy >= 78) tags.push("新手友好");
  else if (project.easy <= 55) tags.push("進階挑戰");

  return [...new Set(tags)].slice(0, limit);
}

function buildStarterPlan(project) {
  const track = trackById(project.track);
  const estimate = project.easy >= 78 ? "2-4 小時" : project.easy >= 62 ? "1-2 天" : "3-7 天";
  const sourceName = project.source || project.repo || project.name;
  const sourceUrl = project.url || "#";
  const demoUrl = project.demoUrl || "";
  const primaryUrl = demoUrl || sourceUrl;
  const sourceType = sourceUrl.includes("github.com") ? "GitHub 專案" : "參考專案/官方文件";
  const skills = recommendedSkills(project);
  const scale = projectScale(project);
  const verdict = projectVerdict(project);
  const prepItems = projectPrepItems(project);
  const risks = projectRiskItems(project);
  const skillPromptLines = skills
    .map((skill, index) => `${index + 1}. ${skill.name}：${skill.url}\n   什麼時候用：${skillUseReason(project, skill)}`)
    .join("\n");
  const codexPrompt = [
    "你是 Codex，請幫我判斷並復現一個 GitHub / 開源專案。",
    "",
    `專案名稱：${project.name}`,
    `專案方向：${track.title}`,
    `專案連結：${sourceUrl}`,
    demoUrl ? `演示入口：${demoUrl}` : "",
    `參考來源：${sourceName}`,
    `我想先做出的效果：${project.mvp}`,
    "",
    "請先不要急著寫程式碼，先做一次專案體檢：",
    `1. 閱讀這個${sourceType}的 README、安裝說明、示例和依賴檔案。`,
    "2. 基於專案文件和實際依賴，評估它對新手是否值得搓、難度大概在哪裡、開工前需要準備什麼。",
    "3. 找出最可能卡住的地方，例如 API Key、Docker、資料庫、模型、硬體、瀏覽器許可權或網路問題。",
    "4. 如果適合繼續，請用最短路徑幫我跑通一個可展示的 demo。",
    "5. 如果原專案太複雜，請抽取最有趣/最實用的核心體驗，做一個輕量可執行版本。",
    "6. 遇到報錯時，請先定位原因，再給出修復方案，不要盲目重灌。",
    "",
    "可參考的 Skill / 工具連結：",
    skillPromptLines,
  ].join("\n");

  return {
    estimate,
    sourceName,
    sourceUrl,
    demoUrl,
    primaryUrl,
    skills,
    scale,
    verdict,
    prepItems,
    risks,
    codexPrompt,
  };
}

function projectPrimaryUrl(project) {
  return project.demoUrl || project.url || "#";
}

function projectPrimaryActionLabel(project) {
  return project.demoUrl ? "看演示" : "看來源";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function filteredProjects() {
  if (state.track === "stars") {
    return githubStarProjects.filter(matchesQuery).sort((a, b) => a.rank - b.rank);
  }

  return projects
    .filter((project) => state.track === "all" || project.track === state.track)
    .filter(matchesQuery)
    .sort((a, b) => {
      if (state.track !== "all") return a.rank - b.rank;
      return trackOrder(a.track) - trackOrder(b.track) || a.rank - b.rank;
    });
}

function matchesQuery(project) {
  const haystack = [
    project.name,
    project.tagline,
    projectStack(project).join(" "),
    project.mvp,
    project.source,
    project.repo ?? "",
    project.language ?? "",
    project.weeklyStars ? String(project.weeklyStars) : "",
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(state.query.toLowerCase().trim());
}

function trackOrder(id) {
  return tracks.findIndex((track) => track.id === id);
}

function projectsForTrack(trackId) {
  return projects
    .filter((project) => project.track === trackId)
    .filter(matchesQuery)
    .sort((a, b) => a.rank - b.rank);
}

function trackById(id) {
  return boardTabs.find((track) => track.id === id);
}

function activeTheme() {
  return boardThemes[state.track] ?? boardThemes.all;
}

function render(options = {}) {
  const activeId = options.preserveFocus ? document.activeElement?.id : null;
  const selectionStart =
    options.preserveFocus && document.activeElement?.selectionStart !== undefined
      ? document.activeElement.selectionStart
      : null;
  const visible = filteredProjects();
  const theme = activeTheme();
  const isFocusedBoard = state.track !== "all";
  if (stopRadar) {
    stopRadar();
    stopRadar = null;
  }
  app.innerHTML = `
    <section class="hero">
      <canvas class="radar-canvas" id="radarCanvas" aria-hidden="true"></canvas>
      <div class="hero-shell">
        <header class="topbar">
          <a class="brand" href="#top" aria-label="Vibe Coding 星圖">
            <span class="brand-mark"></span>
            <span>Vibe Coding 星圖</span>
          </a>
          <nav class="topnav" aria-label="榜單分組">
            ${boardTabs
              .map(
                (track) =>
                  `<button class="nav-pill ${state.track === track.id ? "active" : ""}" data-track="${track.id}">${track.nav ?? track.short}</button>`
              )
              .join("")}
            <a class="nav-pill nav-pill-link nav-pill-skill" href="${skillRadarUrl}">必裝 Skill</a>
            <a class="nav-pill nav-pill-link nav-pill-skill" href="${codexUsesUrl}">Codex 用法</a>
            <a class="nav-pill nav-pill-link nav-pill-skill" href="${claudeUsesUrl}">Claude 用法</a>
          </nav>
        </header>

        <div class="hero-grid" id="top">
          <div class="hero-copy">
            <p class="kicker">Beginner-friendly project board · 更新 ${formatUpdatedDate(githubTrendingUpdatedAt)}</p>
            <h1>
              <span>Vibe Coding</span>
              <span>星圖</span>
            </h1>
            <p class="hero-lede">
              給剛開始 Coding 的新手，把好玩、好用、最硬三條路線整理成一張 90 項可分享榜單：
              每個專案都有 MVP、體驗標籤、參考來源和三維評分。現在還能按時間、目標和經驗生成適合你的開工清單。
            </p>
            <div class="update-schedule" aria-label="更新時間">
              <span>每週五 12:00 更新</span>
              <strong>趣味專案庫清單</strong>
              <strong>必裝 Skill</strong>
            </div>
            <div class="hero-actions">
              <a class="primary-link" href="#starter">適合我的專案</a>
              <a class="secondary-link" href="#board">檢視榜單</a>
              <a class="secondary-link" href="#star-projects">明星專案</a>
              <a class="secondary-link" href="${skillRadarUrl}">必裝 Skill</a>
              <a class="secondary-link" href="${codexUsesUrl}">Codex 用法</a>
              <a class="secondary-link" href="${claudeUsesUrl}">Claude 用法</a>
            </div>
          </div>
          
          <div class="hero-side">
            <figure class="hero-story-figure" aria-hidden="true">
              <img src="/src/assets/storybook-traveler.svg" alt="" />
            </figure>
            <aside class="hero-panel" aria-label="榜單概覽">
              <div class="panel-head">
                <span>Selection Index</span>
                <strong>${projects.length}</strong>
              </div>
              <div class="metric-grid">
                <div>
                  <span>Tracks</span>
                  <strong>3+1</strong>
                </div>
                <div>
                  <span>Top score</span>
                  <strong>98</strong>
                </div>
                <div>
                  <span>MVP span</span>
                  <strong>1-7d</strong>
                </div>
                <div>
                  <span>Rising</span>
                  <strong>${githubStarProjects.length}</strong>
                </div>
              </div>
              <div class="priority-strip">
                <span style="--size: 97%"></span>
                <span style="--size: 91%"></span>
                <span style="--size: 88%"></span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    ${renderStarShowcase()}

    ${renderStarterAdvisor()}

    <section
      class="section-shell board-shell ${isFocusedBoard ? `board-focus board-${state.track}` : "board-all"}"
      id="board"
      style="--mode-primary: ${theme.primary}; --mode-soft: ${theme.soft}; --mode-shadow: ${theme.shadow};"
    >
      <div class="control-row">
        <div>
          <p class="section-kicker">Project Board</p>
          <h2>按你的目標挑專案</h2>
        </div>
        <div class="controls" aria-label="榜單篩選">
          <div class="segmented" role="tablist" aria-label="分組">
            <button data-filter="all" class="${state.track === "all" ? "active" : ""}">全部</button>
            ${boardTabs
              .map(
                (track) =>
                  `<button data-filter="${track.id}" class="${state.track === track.id ? "active" : ""}">${track.nav ?? track.short}</button>`
              )
              .join("")}
          </div>
          <label class="search-field">
            <span>Search</span>
            <input id="searchInput" name="project-search" autocomplete="off" type="search" value="${state.query}" placeholder="搜 AI、ESP32、財務…" />
          </label>
          ${
            state.track === "all"
              ? `<div class="rank-mode" aria-label="全品類分列">
                  <span>Layout</span>
                  <strong>三列分榜</strong>
                </div>`
              : `<div class="rank-mode" aria-label="當前榜單順序">
                  <span>Order</span>
                  <strong>1 → ${visible.length}</strong>
                </div>`
          }
        </div>
      </div>

      ${
        isFocusedBoard
          ? renderFocusHeader(trackById(state.track), visible.length)
          : renderAllOverview()
      }

      ${
        state.track === "all"
          ? renderTrackColumns()
          : `<div class="project-grid" aria-live="polite">
              ${visible.map((project, index) => projectCard(project, index)).join("")}
            </div>`
      }
    </section>

    <section class="section-shell source-section" id="sources">
      <div>
        <p class="section-kicker">Reference</p>
        <h2>發現渠道</h2>
      </div>
      <div class="source-grid">
        <a href="https://github.com/topics/creative-coding" target="_blank" rel="noreferrer">GitHub · creative-coding topic</a>
        <a href="https://github.com/topics/game-development" target="_blank" rel="noreferrer">GitHub · game-development topic</a>
        <a href="https://github.com/topics/webgl" target="_blank" rel="noreferrer">GitHub · WebGL topic</a>
        <a href="https://github.com/topics/canvas" target="_blank" rel="noreferrer">GitHub · Canvas topic</a>
        <a href="https://github.com/topics/web-audio" target="_blank" rel="noreferrer">GitHub · Web Audio topic</a>
        <a href="https://github.com/topics/self-hosted" target="_blank" rel="noreferrer">GitHub · self-hosted topic</a>
        <a href="https://github.com/topics/ai-agents" target="_blank" rel="noreferrer">GitHub · AI agents topic</a>
        <a href="https://github.com/topics/rag" target="_blank" rel="noreferrer">GitHub · RAG topic</a>
        <a href="https://github.com/topics/esp32" target="_blank" rel="noreferrer">GitHub · ESP32 topic</a>
        <a href="https://github.com/topics/raspberry-pi" target="_blank" rel="noreferrer">GitHub · Raspberry Pi topic</a>
        <a href="https://github.com/topics/home-automation" target="_blank" rel="noreferrer">GitHub · home-automation topic</a>
        <a href="https://github.com/topics/3d-printing" target="_blank" rel="noreferrer">GitHub · 3D printing topic</a>
        <a href="https://github.com/topics/home-assistant" target="_blank" rel="noreferrer">GitHub · Home Assistant topic</a>
        <a href="https://github.com/awesome-selfhosted/awesome-selfhosted" target="_blank" rel="noreferrer">Awesome · self-hosted list</a>
        <a href="https://github.com/trending?since=weekly" target="_blank" rel="noreferrer">GitHub · Trending weekly</a>
      </div>
    </section>

    <footer class="site-footer" aria-label="網站備案資訊"><span>Vibe Coding 星圖</span>
    </footer>
  `;

  wireEvents();
  stopRadar = startRadar();
  if (activeId) {
    const activeElement = document.querySelector(`#${activeId}`);
    activeElement?.focus();
    if (selectionStart !== null && activeElement?.setSelectionRange) {
      activeElement.setSelectionRange(selectionStart, selectionStart);
    }
  }
}

function renderStarShowcase() {
  const lead = githubStarProjects[0];
  const rest = githubStarProjects.slice(1, 6);
  return `
    <section class="star-band" id="star-projects">
      <div class="section-shell star-shell">
        <div class="star-showcase-head">
          <div>
            <p class="section-kicker">Rising This Week</p>
            <h2>明星專案</h2>
            <p>
              本週增長最快的 GitHub 專案，來自 GitHub Trending weekly 候選池，並按 “stars this week” 重新排序。
            </p>
          </div>
          <div class="star-actions">
            <button class="star-tab-button" type="button" data-filter="stars">增長最快的 GitHub 專案</button>
            <a href="https://github.com/trending?since=weekly" target="_blank" rel="noreferrer">檢視 GitHub 源</a>
          </div>
        </div>
        <div class="star-showcase-grid" aria-label="明星專案展示">
          ${starShowcaseCard(lead, { lead: true })}
          <div class="star-mini-grid">
            ${rest.map((project) => starShowcaseCard(project)).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function starShowcaseCard(project, options = {}) {
  return `
    <a class="star-card ${options.lead ? "star-card-lead" : ""}" href="${project.url}" target="_blank" rel="noreferrer">
      <div class="star-card-top">
        <span>#${project.rank}</span>
        <em>+${formatCount(project.weeklyStars)} / week</em>
      </div>
      <strong>${project.name}</strong>
      <p>${project.tagline}</p>
      <div class="star-card-meta">
        ${projectExperienceTags(project, 3).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </a>
  `;
}

function renderStarterAdvisor() {
  const recommendations = starterRecommendations();
  return `
    <section class="section-shell starter-section" id="starter">
      <div class="starter-head">
        <div>
          <p class="section-kicker">Starter Picker</p>
          <h2>先挑 3 個最適合你開工的專案</h2>
        </div>
        <p>
          選一下時間、目標和硬體意願，星圖會從 ${recommendationPool().length} 個候選裡給出 3 個更適合現在動手的專案。
        </p>
      </div>
      <div class="starter-layout">
        <div class="starter-picker" aria-label="新手專案選擇器">
          ${renderStarterOrb()}
        </div>
        <div class="starter-results" aria-live="polite">
          ${recommendations
            .map(({ project, score }, index) => renderStarterResult(project, score, index))
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderStarterOrb() {
  return `
    <div class="starter-orb-wrap">
      <div class="starter-orb" role="group" aria-label="氣泡標籤選擇器">
        <div class="starter-orb-core">
          <span>4 組氣泡</span>
          <strong>即時推薦</strong>
        </div>
        ${Object.entries(starterOptions)
          .map(([key, options], groupIndex) => renderStarterGroup(key, options, groupIndex))
          .join("")}
      </div>
      <div class="starter-active-tags" aria-label="已選標籤">
        ${Object.entries(starterState)
          .map(
            ([key, value]) => `
              <span>
                <em>${starterGroupLabels[key]}</em>
                <strong>${starterLabels[key][value]}</strong>
              </span>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderStarterGroup(key, options, groupIndex) {
  const style = starterGroupStyles[key];
  return `
    <section
      class="starter-tag-zone starter-tag-zone-${key}"
      style="--zone-x: ${style.x}%; --zone-y: ${style.y}%; --zone-width: ${style.width}%; --zone-height: ${style.height}%; --head-x: ${style.label.x}%; --head-y: ${style.label.y}%; --zone-tone: ${style.tone}; --zone-delay: ${groupIndex * -0.8}s;"
      aria-label="${starterGroupLabels[key]}選項"
    >
      <div class="starter-zone-head">
        <strong>${starterGroupLabels[key]}</strong>
        <span>${starterGroupHints[key]}</span>
      </div>
      ${options.map((option, index) => renderStarterTag(key, option, index, groupIndex)).join("")}
    </section>
  `;
}

function renderStarterTag(key, option, index, groupIndex) {
  const active = starterState[key] === option.id;
  const position = starterGroupStyles[key].positions[index % starterGroupStyles[key].positions.length];
  const drift = 3 + ((index + groupIndex) % 3);
  const delay = -0.4 * index - 0.7 * groupIndex;
  return `
    <button
      type="button"
      class="starter-tag ${active ? "active" : ""}"
      style="--tag-x: ${position.x}%; --tag-y: ${position.y}%; --tag-tone: ${starterGroupStyles[key].tone}; --drift: ${drift}px; --delay: ${delay}s;"
      data-starter-key="${key}"
      data-starter-option="${option.id}"
      aria-pressed="${active}"
      aria-label="${starterGroupLabels[key]}：${option.label}。${option.description}"
    >
      <span class="starter-tag-bubble">
        <strong>${option.label}</strong>
      </span>
    </button>
  `;
}

function renderStarterResult(project, score, index) {
  const track = trackById(project.track);
  return `
    <article class="starter-result-card" style="--track: ${track.accent}">
      <div class="starter-result-top">
        <span>#${index + 1}</span>
        <em>${track.title}</em>
        <strong>${Math.round(score)}</strong>
      </div>
      <h3>${project.name}</h3>
      <p>${starterReason(project)}</p>
      <div class="feature-list">
        ${projectExperienceTags(project, 3).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
        <div class="starter-result-actions">
          <button type="button" class="plan-button action-tile" data-plan-id="${project.id}">
          <span>能不能搓</span>
          <em>體檢 + Prompt</em>
          </button>
          <a class="source-link action-tile" href="${project.url}" target="_blank" rel="noreferrer">
            <span>看來源</span>
            <em>${project.source}</em>
        </a>
      </div>
    </article>
  `;
}

function renderAllOverview() {
  return `
    <div class="track-overview-head" aria-label="分類導覽">
      ${tracks
        .map((track, index) => {
          const count = projectsForTrack(track.id).length;
          return `
            <section class="track-overview-head-cell" style="--track: ${track.accent}" aria-label="${track.title}">
              <div class="track-overview-meta">
                <span class="track-index">0${index + 1}</span>
                <span class="track-eyebrow">${track.eyebrow}</span>
                <em>#1 → #${count}</em>
              </div>
              <strong>${track.title}</strong>
              <p>${track.summary}</p>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTrackColumns() {
  return `
    <div class="project-columns" aria-live="polite">
      ${tracks
        .map((track) => {
          const columnProjects = projectsForTrack(track.id);
          return `
            <section class="project-column" style="--track: ${track.accent}" aria-label="${track.title}">
              <div class="project-column-head">
                <span>${track.eyebrow}</span>
                <strong>${track.title}</strong>
                <em>#1 → #${columnProjects.length}</em>
              </div>
              <div class="project-column-list">
                ${
                  columnProjects.length
                    ? columnProjects
                        .map((project, index) =>
                          projectCard(project, index, { compact: true, displayRank: project.rank })
                        )
                        .join("")
                    : `<div class="empty-column">暫無匹配專案</div>`
                }
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderFocusHeader(track, count) {
  return `
    <div class="track-focus-head" style="--track: ${track.accent}">
      <div class="focus-mark">
        <span>${track.eyebrow}</span>
        <strong>${track.short}</strong>
      </div>
      <div class="focus-copy">
        <h3>${track.title}</h3>
        <p>${track.summary}</p>
      </div>
      <div class="focus-notes">
        ${focusHeaderNotes[track.id].map((note) => `<span>${note}</span>`).join("")}
      </div>
      <div class="focus-count" aria-label="當前榜單順序">
        <span>Order</span>
        <strong>#1 → #${count}</strong>
      </div>
    </div>
  `;
}

function projectCard(project, index, options = {}) {
  const track = trackById(project.track);
  const displayRank = options.displayRank ?? (state.track === "all" ? project.rank : index + 1);
  const skillCount = recommendedSkills(project, options.compact ? 2 : 3).length;
  const footerLabel = project.track === "stars" ? "Weekly" : "Skills";
  const footerValue =
    project.track === "stars" ? `+${formatCount(project.weeklyStars)}` : `${skillCount} 個`;
  return `
    <article class="project-card ${options.compact ? "project-card-compact" : ""} ${project.track === "stars" ? "project-card-star" : ""}" style="--track: ${track.accent}">
      <div class="card-topline">
        <span class="rank">#${displayRank}</span>
        <span class="track-label">${track.title}</span>
        <span class="grade">${scoreLabel(project)}</span>
      </div>
      <h3>${project.name}</h3>
      <p class="tagline">${project.tagline}</p>
      <div class="feature-list">
        ${projectExperienceTags(project, options.compact ? 3 : 5)
          .map((tag) => `<span>${tag}</span>`)
          .join("")}
      </div>
      <div class="mvp">
        <span>${options.compact ? "演示" : "MVP"}</span>
        <p>${project.mvp}</p>
      </div>
      ${renderSkillKit(project, options)}
      <footer class="card-footer">
        <div class="card-stat">
          <span>${footerLabel}</span>
          <strong>${footerValue}</strong>
        </div>
        <div class="card-actions">
          <button type="button" class="plan-button action-tile" data-plan-id="${project.id}">
            <span>一鍵開工</span>
            <em>體檢 + Prompt</em>
          </button>
          <a class="source-link action-tile" href="${projectPrimaryUrl(project)}" target="_blank" rel="noreferrer">
            <span>${projectPrimaryActionLabel(project)}</span>
            <em>${project.source}</em>
          </a>
        </div>
      </footer>
    </article>
  `;
}

function renderPlanDialog(project) {
  const track = trackById(project.track);
  const plan = buildStarterPlan(project);
  const scalePercent = Math.round((plan.scale.value / 5) * 100);
  return `
    <div class="plan-dialog-shell">
      <div class="plan-backdrop" data-close-plan></div>
      <section class="plan-dialog" role="dialog" aria-modal="true" aria-labelledby="planTitle" tabindex="-1" style="--track: ${track.accent}">
        <header class="plan-dialog-head">
          <div>
            <p class="section-kicker">Project Checkup</p>
            <h2 id="planTitle">${escapeHtml(project.name)}</h2>
            <p>${escapeHtml(project.tagline)} 先看它能不能搓，再把提示詞交給 AI 開工。</p>
            <div class="plan-dialog-actions">
              <button type="button" class="copy-plan" data-copy-plan>複製開工提示詞</button>
              <a class="plan-header-source" href="${escapeHtml(plan.primaryUrl)}" target="_blank" rel="noreferrer">${plan.demoUrl ? "開啟演示入口" : "開啟專案來源"}</a>
            </div>
          </div>
          <button type="button" class="plan-close" data-close-plan aria-label="關閉開工計劃">×</button>
        </header>

        <div class="plan-diagnosis">
          <section class="plan-verdict-card plan-verdict-${plan.verdict.tone}">
            <span>值不值得搓</span>
            <strong>${escapeHtml(plan.verdict.label)}</strong>
            <p>${escapeHtml(plan.verdict.reason)}</p>
          </section>
          <section class="plan-scale-card">
            <div>
              <span>難不難</span>
              <strong>Scale ${plan.scale.value}/5</strong>
            </div>
            <div class="plan-scale-meter" aria-label="專案難度 Scale ${plan.scale.value}/5">
              <i style="width: ${scalePercent}%"></i>
            </div>
            <p>${escapeHtml(plan.scale.label)}：${escapeHtml(plan.scale.hint)}</p>
          </section>
          <section class="plan-prep-card">
            <span>先準備什麼</span>
            <div class="plan-prep-list">
              ${plan.prepItems.map((item) => `<em>${escapeHtml(item)}</em>`).join("")}
            </div>
          </section>
        </div>

        <div class="plan-grid plan-grid-simple">
          <section class="plan-block plan-demo-block">
            <h3>先做這個效果</h3>
            <p>${escapeHtml(project.mvp)}</p>
          </section>
          <section class="plan-block plan-risk-block">
            <h3>可能會卡在這裡</h3>
            <ul class="plan-list">
              ${plan.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}
            </ul>
          </section>
          <a class="plan-source-card" href="${escapeHtml(plan.sourceUrl)}" target="_blank" rel="noreferrer">
            <span>專案來源</span>
            <strong>${escapeHtml(plan.sourceName)}</strong>
            <em>${escapeHtml(plan.sourceUrl)}</em>
          </a>
          ${
            plan.demoUrl
              ? `<a class="plan-source-card" href="${escapeHtml(plan.demoUrl)}" target="_blank" rel="noreferrer">
                  <span>演示入口</span>
                  <strong>先看能不能跑出效果</strong>
                  <em>${escapeHtml(plan.demoUrl)}</em>
                </a>`
              : ""
          }
          <details class="plan-block plan-skill-block">
            <summary>
              <span>用得上的 Skill / 工具</span>
              <em>可選展開</em>
            </summary>
            <p>這些不是必須先學的技術棧，只是可以和專案連結一起交給 AI 的參考工具。</p>
            <div class="plan-skill-list">
              ${plan.skills
                .map(
                  (skill) => `
                    <a href="${escapeHtml(skill.url)}" target="_blank" rel="noreferrer">
                      <strong>${escapeHtml(skill.name)}</strong>
                      <span>${escapeHtml(skillUseReason(project, skill))}</span>
                    </a>
                  `
                )
                .join("")}
            </div>
            <a class="skill-radar-button" href="${skillRadarUrl}">看完整必裝 Skill 榜</a>
          </details>
          <section class="plan-block plan-prompt-block">
            <div class="plan-block-head">
              <h3>複製給 Codex 的開工提示詞</h3>
              <button type="button" class="copy-plan" data-copy-plan>複製提示詞</button>
            </div>
            <pre id="planPrompt">${escapeHtml(plan.codexPrompt)}</pre>
          </section>
        </div>
      </section>
    </div>
  `;
}

function wireEvents() {
  document.querySelectorAll("[data-plan-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openPlanDialog(button.dataset.planId);
    });
  });

  document.querySelectorAll("[data-starter-option]").forEach((button) => {
    button.addEventListener("click", () => {
      starterState[button.dataset.starterKey] = button.dataset.starterOption;
      render();
      document.querySelector("#starter")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.track = button.dataset.filter;
      syncUrlState();
      render();
      document.querySelector("#board")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-track]").forEach((button) => {
    button.addEventListener("click", () => {
      state.track = button.dataset.track;
      syncUrlState();
      render();
      document.querySelector("#board")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const searchInput = document.querySelector("#searchInput");
  if (searchInput) {
    const holdSearchRenderForIme = () => {
      isSearchComposing = true;
      cancelPendingSearchRender();
    };

    searchInput.addEventListener("keydown", (event) => {
      if (event.isComposing || event.key === "Process" || event.keyCode === 229) {
        holdSearchRenderForIme();
      }
    });

    searchInput.addEventListener("beforeinput", (event) => {
      if (event.isComposing || event.inputType === "insertCompositionText") {
        holdSearchRenderForIme();
      }
    });

    searchInput.addEventListener("compositionstart", () => {
      holdSearchRenderForIme();
    });

    searchInput.addEventListener("compositionend", (event) => {
      isSearchComposing = false;
      state.query = event.target.value;
      scheduleSearchRender(120);
    });

    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      if (isSearchComposing || event.isComposing || event.inputType === "insertCompositionText") {
        return;
      }
      scheduleSearchRender();
    });
  }

  document.querySelector("#metricSelect")?.addEventListener("change", (event) => {
    state.metric = event.target.value;
    syncUrlState();
    render();
  });
}

function openPlanDialog(projectId) {
  const project = projectById(projectId);
  if (!project) return;
  closePlanDialog();
  document.body.insertAdjacentHTML("beforeend", renderPlanDialog(project));
  document.querySelector(".plan-dialog")?.focus();

  document.querySelectorAll("[data-close-plan]").forEach((element) => {
    element.addEventListener("click", closePlanDialog);
  });

  document.querySelectorAll("[data-copy-plan]").forEach((button) => {
    button.addEventListener("click", copyPlanPrompt);
  });
  document.querySelector("[data-download-skills]")?.addEventListener("click", () => {
    downloadSkillBundle(project);
  });

  planKeyHandler = (event) => {
    if (event.key === "Escape") closePlanDialog();
  };
  document.addEventListener("keydown", planKeyHandler);
}

function closePlanDialog() {
  document.querySelector(".plan-dialog-shell")?.remove();
  if (planKeyHandler) {
    document.removeEventListener("keydown", planKeyHandler);
    planKeyHandler = null;
  }
}

async function copyPlanPrompt(event) {
  const prompt = document.querySelector("#planPrompt")?.textContent ?? "";
  const defaultLabel = event.currentTarget.dataset.defaultLabel || event.currentTarget.textContent;
  event.currentTarget.dataset.defaultLabel = defaultLabel;
  event.currentTarget.textContent = "已複製";
  try {
    await navigator.clipboard.writeText(prompt);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = prompt;
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
  window.setTimeout(() => {
    event.currentTarget.textContent = defaultLabel;
  }, 1600);
}

function skillBundleMarkdown(project) {
  const plan = buildStarterPlan(project);
  const skillLines = plan.skills
    .map(
      (skill, index) =>
        `${index + 1}. [${skill.name}](${skill.url})\n   - 在這個專案裡的用法：${skillUseReason(project, skill)}\n   - 推薦理由：${skill.signal}`
    )
    .join("\n");

  return [
    `# ${project.name} · Skill 開工清單`,
    "",
    `專案來源：${plan.sourceName}`,
    `專案連結：${plan.sourceUrl}`,
    plan.demoUrl ? `演示入口：${plan.demoUrl}` : "",
    `預計用時：${plan.estimate}`,
    "",
    "## 推薦使用的 Skill",
    skillLines,
    "",
    "## 複製給 Codex 的 Prompt",
    "",
    "```text",
    plan.codexPrompt,
    "```",
    "",
    "## 使用方式",
    "1. 先開啟專案連結，確認 README、示例和依賴是否適合直接復現。",
    "2. 把上面的 Skill 連結和 Prompt 一起交給 Codex、Claude Code 或 Cursor。",
    "3. 如果當前環境不能安裝某個 Skill，就讓 AI 閱讀對應連結後模擬同樣的工作流執行。",
  ].join("\n");
}

function safeDownloadName(value) {
  return String(value)
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "-")
    .slice(0, 72);
}

function downloadSkillBundle(project) {
  const markdown = skillBundleMarkdown(project);
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeDownloadName(project.name)}-skill-kit.md`;
  document.body.append(link);
  link.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(url);
    link.remove();
  }, 0);
}

function startRadar() {
  const canvas = document.querySelector("#radarCanvas");
  if (!canvas) return null;
  const context = canvas.getContext("2d");
  const colors = ["#225CFF", "#18A058", "#FF6A3D", "#111827"];
  let frame = 0;
  let width = 0;
  let height = 0;
  let points = [];
  let frameId = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.max(22, Math.floor(width / 45)) }, (_, index) => ({
      x: (index * 97) % Math.max(width, 1),
      y: 80 + ((index * 139) % Math.max(height - 120, 1)),
      r: 2 + (index % 5),
      c: colors[index % colors.length],
      speed: 0.25 + (index % 4) * 0.08,
    }));
  }

  function draw() {
    frame += 0.012;
    context.clearRect(0, 0, width, height);

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(255,255,255,0.92)");
    gradient.addColorStop(0.45, "rgba(242,247,255,0.82)");
    gradient.addColorStop(1, "rgba(246,248,251,0.96)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(20, 29, 45, 0.07)";
    context.lineWidth = 1;
    for (let x = 0; x < width; x += 52) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = 0; y < height; y += 52) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }

    const moved = points.map((point, index) => ({
      ...point,
      x: (point.x + Math.cos(frame + index) * 16 + width) % width,
      y: point.y + Math.sin(frame * point.speed + index * 0.8) * 18,
    }));

    moved.forEach((a, index) => {
      moved.slice(index + 1, index + 4).forEach((b) => {
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 210) {
          context.globalAlpha = 0.16;
          context.strokeStyle = a.c;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      });
    });

    context.globalAlpha = 1;
    moved.forEach((point) => {
      context.fillStyle = point.c;
      context.beginPath();
      context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "rgba(255,255,255,0.8)";
      context.stroke();
    });

    if (!reduceMotion) {
      frameId = requestAnimationFrame(draw);
    }
  }

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resize);
  };
}

hydrateStateFromUrl();
render();
