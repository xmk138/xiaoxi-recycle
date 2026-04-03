// ============================================================
// 小奚通讯 - 数据配置（支持内存/外观选择）
// 报价基准：爱回收 2026-04-03 · 网站报价约高50-100元
// 爱回收参考 ≈ 数码回收网靓机价 - 400（平台检测+利润空间）
// ============================================================

export interface StorageOption {
  storage: string;
  perfect: string; // 全新/无划痕
  good: string;    // 轻微使用痕迹
  fair: string;    // 明显使用痕迹
}

export interface DeviceModel {
  name: string;
  storageOptions: StorageOption[];
}

export interface RepairPrice {
  model: string;
  screen: string;
  battery: string;
  backglass: string;
  charging?: string;
}

// ──────────────────────────────────────────────
// 苹果 iPhone 回收报价
// 基准：数码回收网 2026-04-03 靓机价 + 官方首发折价参考
// 爱回收参考 ≈ 靓机价 - 400（平台检测+利润）
// 网站报价 ≈ 爱回收 + 50~100 ≈ 靓机价 - 300
// 17系列为新发布机型，报价参考官价-400~600
// ──────────────────────────────────────────────
export const iphoneModels: DeviceModel[] = [
  {
    name: "iPhone 17 Pro Max",
    storageOptions: [
      { storage: "256GB", perfect: "¥9,500", good: "¥9,000", fair: "¥7,800" },
      { storage: "512GB", perfect: "¥10,500", good: "¥9,900", fair: "¥8,600" },
      { storage: "1TB",   perfect: "¥11,800", good: "¥11,100", fair: "¥9,600" },
      { storage: "2TB",   perfect: "¥13,200", good: "¥12,400", fair: "¥10,800" },
    ],
  },
  {
    name: "iPhone 17 Pro",
    storageOptions: [
      { storage: "256GB", perfect: "¥8,500", good: "¥8,000", fair: "¥6,900" },
      { storage: "512GB", perfect: "¥9,500", good: "¥8,900", fair: "¥7,700" },
      { storage: "1TB",   perfect: "¥10,800", good: "¥10,100", fair: "¥8,800" },
    ],
  },
  {
    name: "iPhone 17 Air",
    storageOptions: [
      { storage: "256GB", perfect: "¥7,500", good: "¥7,000", fair: "¥6,000" },
      { storage: "512GB", perfect: "¥8,500", good: "¥7,900", fair: "¥6,800" },
      { storage: "1TB",   perfect: "¥9,800", good: "¥9,200", fair: "¥7,900" },
    ],
  },
  {
    name: "iPhone 17 Plus",
    storageOptions: [
      { storage: "256GB", perfect: "¥5,500", good: "¥5,100", fair: "¥4,300" },
      { storage: "512GB", perfect: "¥6,200", good: "¥5,800", fair: "¥4,900" },
    ],
  },
  {
    name: "iPhone 17",
    storageOptions: [
      { storage: "256GB", perfect: "¥5,000", good: "¥4,600", fair: "¥3,900" },
      { storage: "512GB", perfect: "¥5,700", good: "¥5,300", fair: "¥4,500" },
    ],
  },
  {
    name: "iPhone 16 Pro Max",
    storageOptions: [
      { storage: "256GB", perfect: "¥6,800", good: "¥6,400", fair: "¥5,400" },
      { storage: "512GB", perfect: "¥7,400", good: "¥6,900", fair: "¥5,900" },
      { storage: "1TB",   perfect: "¥8,000", good: "¥7,400", fair: "¥6,400" },
    ],
  },
  {
    name: "iPhone 16 Pro",
    storageOptions: [
      { storage: "128GB", perfect: "¥5,000", good: "¥4,600", fair: "¥3,800" },
      { storage: "256GB", perfect: "¥5,400", good: "¥5,000", fair: "¥4,200" },
      { storage: "512GB", perfect: "¥6,000", good: "¥5,500", fair: "¥4,600" },
      { storage: "1TB",   perfect: "¥6,600", good: "¥6,000", fair: "¥5,100" },
    ],
  },
  {
    name: "iPhone 16 Plus",
    storageOptions: [
      { storage: "128GB", perfect: "¥4,250", good: "¥3,950", fair: "¥3,300" },
      { storage: "256GB", perfect: "¥4,650", good: "¥4,300", fair: "¥3,600" },
      { storage: "512GB", perfect: "¥5,100", good: "¥4,700", fair: "¥3,900" },
    ],
  },
  {
    name: "iPhone 16",
    storageOptions: [
      { storage: "128GB", perfect: "¥3,900", good: "¥3,650", fair: "¥3,000" },
      { storage: "256GB", perfect: "¥4,300", good: "¥4,000", fair: "¥3,350" },
      { storage: "512GB", perfect: "¥4,700", good: "¥4,350", fair: "¥3,650" },
    ],
  },
  {
    name: "iPhone 16e",
    storageOptions: [
      { storage: "128GB", perfect: "¥2,800", good: "¥2,550", fair: "¥2,100" },
      { storage: "256GB", perfect: "¥3,100", good: "¥2,850", fair: "¥2,350" },
    ],
  },
  {
    name: "iPhone 15 Pro Max",
    storageOptions: [
      { storage: "256GB", perfect: "¥5,050", good: "¥4,700", fair: "¥3,800" },
      { storage: "512GB", perfect: "¥5,500", good: "¥5,150", fair: "¥4,200" },
      { storage: "1TB",   perfect: "¥6,000", good: "¥5,600", fair: "¥4,600" },
    ],
  },
  {
    name: "iPhone 15 Pro",
    storageOptions: [
      { storage: "128GB", perfect: "¥4,350", good: "¥4,050", fair: "¥3,300" },
      { storage: "256GB", perfect: "¥4,700", good: "¥4,400", fair: "¥3,600" },
      { storage: "512GB", perfect: "¥5,200", good: "¥4,800", fair: "¥4,000" },
      { storage: "1TB",   perfect: "¥5,700", good: "¥5,200", fair: "¥4,300" },
    ],
  },
  {
    name: "iPhone 15 Plus",
    storageOptions: [
      { storage: "128GB", perfect: "¥2,950", good: "¥2,650", fair: "¥2,100" },
      { storage: "256GB", perfect: "¥3,300", good: "¥3,000", fair: "¥2,450" },
      { storage: "512GB", perfect: "¥3,650", good: "¥3,350", fair: "¥2,750" },
    ],
  },
  {
    name: "iPhone 15",
    storageOptions: [
      { storage: "128GB", perfect: "¥2,750", good: "¥2,500", fair: "¥2,050" },
      { storage: "256GB", perfect: "¥3,100", good: "¥2,800", fair: "¥2,300" },
      { storage: "512GB", perfect: "¥3,400", good: "¥3,100", fair: "¥2,550" },
    ],
  },
  {
    name: "iPhone 14 Pro Max",
    storageOptions: [
      { storage: "128GB", perfect: "¥3,750", good: "¥3,500", fair: "¥2,800" },
      { storage: "256GB", perfect: "¥4,100", good: "¥3,800", fair: "¥3,100" },
      { storage: "512GB", perfect: "¥4,500", good: "¥4,150", fair: "¥3,400" },
      { storage: "1TB",   perfect: "¥5,000", good: "¥4,600", fair: "¥3,800" },
    ],
  },
  {
    name: "iPhone 14 Pro",
    storageOptions: [
      { storage: "128GB", perfect: "¥3,200", good: "¥2,950", fair: "¥2,400" },
      { storage: "256GB", perfect: "¥3,500", good: "¥3,200", fair: "¥2,600" },
      { storage: "512GB", perfect: "¥3,900", good: "¥3,550", fair: "¥2,900" },
      { storage: "1TB",   perfect: "¥4,300", good: "¥3,900", fair: "¥3,200" },
    ],
  },
  {
    name: "iPhone 14 Plus",
    storageOptions: [
      { storage: "128GB", perfect: "¥2,000", good: "¥1,750", fair: "¥1,350" },
      { storage: "256GB", perfect: "¥2,300", good: "¥2,050", fair: "¥1,600" },
      { storage: "512GB", perfect: "¥2,550", good: "¥2,300", fair: "¥1,800" },
    ],
  },
  {
    name: "iPhone 14",
    storageOptions: [
      { storage: "128GB", perfect: "¥1,750", good: "¥1,550", fair: "¥1,250" },
      { storage: "256GB", perfect: "¥2,000", good: "¥1,800", fair: "¥1,450" },
      { storage: "512GB", perfect: "¥2,300", good: "¥2,050", fair: "¥1,700" },
    ],
  },
  {
    name: "iPhone 13 Pro Max",
    storageOptions: [
      { storage: "128GB", perfect: "¥2,700", good: "¥2,450", fair: "¥1,950" },
      { storage: "256GB", perfect: "¥2,900", good: "¥2,650", fair: "¥2,100" },
      { storage: "512GB", perfect: "¥3,200", good: "¥2,900", fair: "¥2,350" },
      { storage: "1TB",   perfect: "¥3,500", good: "¥3,200", fair: "¥2,600" },
    ],
  },
  {
    name: "iPhone 13 Pro",
    storageOptions: [
      { storage: "128GB", perfect: "¥2,200", good: "¥1,950", fair: "¥1,500" },
      { storage: "256GB", perfect: "¥2,400", good: "¥2,150", fair: "¥1,700" },
      { storage: "512GB", perfect: "¥2,700", good: "¥2,400", fair: "¥1,950" },
      { storage: "1TB",   perfect: "¥3,000", good: "¥2,650", fair: "¥2,150" },
    ],
  },
  {
    name: "iPhone 13",
    storageOptions: [
      { storage: "128GB", perfect: "¥1,350", good: "¥1,200", fair: "¥950" },
      { storage: "256GB", perfect: "¥1,550", good: "¥1,380", fair: "¥1,100" },
      { storage: "512GB", perfect: "¥1,800", good: "¥1,600", fair: "¥1,300" },
    ],
  },
  {
    name: "iPhone 13 mini",
    storageOptions: [
      { storage: "128GB", perfect: "¥1,300", good: "¥1,150", fair: "¥900" },
      { storage: "256GB", perfect: "¥1,500", good: "¥1,350", fair: "¥1,050" },
      { storage: "512GB", perfect: "¥1,700", good: "¥1,500", fair: "¥1,200" },
    ],
  },
  {
    name: "iPhone 12 Pro Max",
    storageOptions: [
      { storage: "128GB", perfect: "¥1,700", good: "¥1,500", fair: "¥1,150" },
      { storage: "256GB", perfect: "¥1,900", good: "¥1,700", fair: "¥1,300" },
      { storage: "512GB", perfect: "¥2,100", good: "¥1,900", fair: "¥1,500" },
    ],
  },
  {
    name: "iPhone 12",
    storageOptions: [
      { storage: "64GB",  perfect: "¥800",  good: "¥700",  fair: "¥550" },
      { storage: "128GB", perfect: "¥950",  good: "¥830",  fair: "¥650" },
      { storage: "256GB", perfect: "¥1,100", good: "¥970",  fair: "¥780" },
    ],
  },
  {
    name: "iPhone 11 Pro Max",
    storageOptions: [
      { storage: "64GB",  perfect: "¥950",  good: "¥850",  fair: "¥680" },
      { storage: "256GB", perfect: "¥1,150", good: "¥1,000", fair: "¥800" },
      { storage: "512GB", perfect: "¥1,300", good: "¥1,150", fair: "¥920" },
    ],
  },
  {
    name: "iPhone 11",
    storageOptions: [
      { storage: "64GB",  perfect: "¥600",  good: "¥520",  fair: "¥400" },
      { storage: "128GB", perfect: "¥700",  good: "¥620",  fair: "¥480" },
      { storage: "256GB", perfect: "¥800",  good: "¥700",  fair: "¥550" },
    ],
  },
];

// ──────────────────────────────────────────────
// 安卓手机回收报价
// 基准：爱回收参考价 · 网站约高50-100元
// 安卓折价较快，报价按爱回收同级+50-100元
// ──────────────────────────────────────────────
export interface AndroidBrand {
  brand: string;
  isFolding?: boolean;
  models: DeviceModel[];
}

export const androidBrands: AndroidBrand[] = [
  {
    brand: "华为 Huawei",
    models: [
      {
        name: "Mate 80 RS 非凡大师",
        storageOptions: [
          { storage: "512GB", perfect: "¥12,200", good: "¥11,500", fair: "¥8,500" },
          { storage: "1TB",   perfect: "¥12,800", good: "¥12,000", fair: "¥8,800" },
        ],
      },
      {
        name: "Mate 80 Pro+",
        storageOptions: [
          { storage: "256GB", perfect: "¥5,500", good: "¥5,000", fair: "¥4,200" },
          { storage: "512GB", perfect: "¥6,000", good: "¥5,500", fair: "¥4,600" },
          { storage: "1TB",   perfect: "¥6,600", good: "¥6,000", fair: "¥5,100" },
        ],
      },
      {
        name: "Mate 80 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,500", good: "¥4,100", fair: "¥3,400" },
          { storage: "512GB", perfect: "¥5,000", good: "¥4,500", fair: "¥3,800" },
          { storage: "1TB",   perfect: "¥5,600", good: "¥5,100", fair: "¥4,300" },
        ],
      },
      {
        name: "Mate 80",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,500", good: "¥3,200", fair: "¥2,600" },
          { storage: "512GB", perfect: "¥3,900", good: "¥3,500", fair: "¥2,900" },
        ],
      },
      {
        name: "Pura 80 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,200", good: "¥3,800", fair: "¥3,200" },
          { storage: "512GB", perfect: "¥4,700", good: "¥4,200", fair: "¥3,500" },
          { storage: "1TB",   perfect: "¥5,200", good: "¥4,700", fair: "¥3,900" },
        ],
      },
      {
        name: "Pura 80 Pro+",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,600", good: "¥3,300", fair: "¥2,700" },
          { storage: "512GB", perfect: "¥4,000", good: "¥3,600", fair: "¥3,000" },
        ],
      },
      {
        name: "Pura 80 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,200", good: "¥2,900", fair: "¥2,400" },
          { storage: "512GB", perfect: "¥3,600", good: "¥3,200", fair: "¥2,700" },
        ],
      },
      {
        name: "Pura 80",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,800", good: "¥2,500", fair: "¥2,100" },
          { storage: "512GB", perfect: "¥3,200", good: "¥2,800", fair: "¥2,400" },
        ],
      },
      {
        name: "Mate XT 非凡大师（三折叠）",
        storageOptions: [
          { storage: "256GB", perfect: "¥9,500", good: "¥8,800", fair: "¥7,500" },
          { storage: "512GB", perfect: "¥11,000", good: "¥10,200", fair: "¥8,700" },
          { storage: "1TB",   perfect: "¥12,500", good: "¥11,600", fair: "¥9,900" },
        ],
      },
      {
        name: "Mate X7（折叠屏）",
        storageOptions: [
          { storage: "256GB", perfect: "¥13,000", good: "¥12,100", fair: "¥10,300" },
          { storage: "512GB", perfect: "¥14,500", good: "¥13,500", fair: "¥11,500" },
          { storage: "1TB",   perfect: "¥16,000", good: "¥14,900", fair: "¥12,700" },
        ],
      },
      {
        name: "Mate X6",
        storageOptions: [
          { storage: "256GB", perfect: "¥7,200", good: "¥6,600", fair: "¥5,500" },
          { storage: "512GB", perfect: "¥7,800", good: "¥7,200", fair: "¥6,100" },
          { storage: "1TB",   perfect: "¥8,500", good: "¥7,800", fair: "¥6,600" },
        ],
      },
      {
        name: "Mate X5",
        storageOptions: [
          { storage: "256GB", perfect: "¥5,200", good: "¥4,700", fair: "¥3,900" },
          { storage: "512GB", perfect: "¥5,800", good: "¥5,300", fair: "¥4,400" },
          { storage: "1TB",   perfect: "¥6,400", good: "¥5,800", fair: "¥4,900" },
        ],
      },
      {
        name: "Mate 70 Pro+",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,200", good: "¥3,800", fair: "¥3,200" },
          { storage: "512GB", perfect: "¥4,700", good: "¥4,200", fair: "¥3,600" },
          { storage: "1TB",   perfect: "¥5,200", good: "¥4,700", fair: "¥4,000" },
        ],
      },
      {
        name: "Mate 70 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,400", good: "¥3,100", fair: "¥2,500" },
          { storage: "512GB", perfect: "¥3,900", good: "¥3,500", fair: "¥2,900" },
          { storage: "1TB",   perfect: "¥4,400", good: "¥4,000", fair: "¥3,300" },
        ],
      },
      {
        name: "Pura 70 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,800", good: "¥3,500", fair: "¥2,900" },
          { storage: "512GB", perfect: "¥4,200", good: "¥3,800", fair: "¥3,200" },
        ],
      },
      {
        name: "Mate 60 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,100", good: "¥1,900", fair: "¥1,500" },
          { storage: "512GB", perfect: "¥2,500", good: "¥2,200", fair: "¥1,800" },
          { storage: "1TB",   perfect: "¥2,900", good: "¥2,600", fair: "¥2,200" },
        ],
      },
    ],
  },
  {
    brand: "三星 Galaxy S 系列",
    models: [
      {
        name: "Galaxy S26 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥7,800", good: "¥7,200", fair: "¥6,100" },
          { storage: "512GB", perfect: "¥8,500", good: "¥7,900", fair: "¥6,700" },
          { storage: "1TB",   perfect: "¥9,300", good: "¥8,600", fair: "¥7,300" },
        ],
      },
      {
        name: "Galaxy S26+",
        storageOptions: [
          { storage: "256GB", perfect: "¥5,800", good: "¥5,300", fair: "¥4,500" },
          { storage: "512GB", perfect: "¥6,400", good: "¥5,900", fair: "¥5,000" },
        ],
      },
      {
        name: "Galaxy S26",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,800", good: "¥4,400", fair: "¥3,700" },
          { storage: "512GB", perfect: "¥5,300", good: "¥4,900", fair: "¥4,100" },
        ],
      },
      {
        name: "Galaxy S25 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥5,600", good: "¥5,200", fair: "¥4,300" },
          { storage: "512GB", perfect: "¥6,100", good: "¥5,600", fair: "¥4,700" },
          { storage: "1TB",   perfect: "¥6,800", good: "¥6,200", fair: "¥5,300" },
        ],
      },
      {
        name: "Galaxy S25+",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,300", good: "¥3,900", fair: "¥3,300" },
          { storage: "512GB", perfect: "¥4,800", good: "¥4,400", fair: "¥3,700" },
        ],
      },
      {
        name: "Galaxy S25",
        storageOptions: [
          { storage: "128GB", perfect: "¥3,500", good: "¥3,200", fair: "¥2,600" },
          { storage: "256GB", perfect: "¥3,900", good: "¥3,600", fair: "¥3,000" },
        ],
      },
      {
        name: "Galaxy S24 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,300", good: "¥3,900", fair: "¥3,200" },
          { storage: "512GB", perfect: "¥4,800", good: "¥4,400", fair: "¥3,600" },
          { storage: "1TB",   perfect: "¥5,300", good: "¥4,800", fair: "¥4,000" },
        ],
      },
    ],
  },
  {
    brand: "🔥 三星折叠屏 Z Fold / Z Flip",
    isFolding: true,
    models: [
      {
        name: "Galaxy Z Fold 6",
        storageOptions: [
          { storage: "256GB", perfect: "¥5,000", good: "¥4,500", fair: "¥3,800" },
          { storage: "512GB", perfect: "¥5,600", good: "¥5,000", fair: "¥4,300" },
          { storage: "1TB",   perfect: "¥6,300", good: "¥5,600", fair: "¥4,800" },
        ],
      },
      {
        name: "Galaxy Z Fold 5",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,400", good: "¥3,000", fair: "¥2,500" },
          { storage: "512GB", perfect: "¥3,900", good: "¥3,400", fair: "¥2,800" },
          { storage: "1TB",   perfect: "¥4,500", good: "¥3,900", fair: "¥3,300" },
        ],
      },
      {
        name: "Galaxy Z Fold 4",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,400", good: "¥2,100", fair: "¥1,700" },
          { storage: "512GB", perfect: "¥2,700", good: "¥2,400", fair: "¥1,950" },
          { storage: "1TB",   perfect: "¥3,200", good: "¥2,800", fair: "¥2,350" },
        ],
      },
      {
        name: "Galaxy Z Fold 3",
        storageOptions: [
          { storage: "256GB", perfect: "¥1,600", good: "¥1,400", fair: "¥1,100" },
          { storage: "512GB", perfect: "¥1,900", good: "¥1,700", fair: "¥1,350" },
        ],
      },
      {
        name: "Galaxy Z Flip 6",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,200", good: "¥1,900", fair: "¥1,550" },
          { storage: "512GB", perfect: "¥2,600", good: "¥2,300", fair: "¥1,900" },
        ],
      },
      {
        name: "Galaxy Z Flip 5",
        storageOptions: [
          { storage: "256GB", perfect: "¥1,500", good: "¥1,300", fair: "¥1,050" },
          { storage: "512GB", perfect: "¥1,800", good: "¥1,600", fair: "¥1,300" },
        ],
      },
      {
        name: "Galaxy Z Flip 4",
        storageOptions: [
          { storage: "128GB", perfect: "¥1,200", good: "¥1,050", fair: "¥850" },
          { storage: "256GB", perfect: "¥1,400", good: "¥1,250", fair: "¥1,050" },
          { storage: "512GB", perfect: "¥1,600", good: "¥1,400", fair: "¥1,150" },
        ],
      },
      {
        name: "Galaxy Z Flip 3",
        storageOptions: [
          { storage: "128GB", perfect: "¥800",  good: "¥700",  fair: "¥550" },
          { storage: "256GB", perfect: "¥950",  good: "¥830",  fair: "¥660" },
        ],
      },
    ],
  },
  {
    brand: "小米 Xiaomi",
    models: [
      {
        name: "Xiaomi 15 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,600", good: "¥4,200", fair: "¥3,400" },
          { storage: "512GB", perfect: "¥5,100", good: "¥4,600", fair: "¥3,800" },
          { storage: "1TB",   perfect: "¥5,600", good: "¥5,000", fair: "¥4,200" },
        ],
      },
      {
        name: "Xiaomi 15 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,800", good: "¥3,400", fair: "¥2,800" },
          { storage: "512GB", perfect: "¥4,200", good: "¥3,800", fair: "¥3,100" },
          { storage: "1TB",   perfect: "¥4,600", good: "¥4,100", fair: "¥3,400" },
        ],
      },
      {
        name: "Xiaomi 14 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,500", good: "¥3,100", fair: "¥2,600" },
          { storage: "512GB", perfect: "¥3,900", good: "¥3,500", fair: "¥2,900" },
          { storage: "1TB",   perfect: "¥4,300", good: "¥3,800", fair: "¥3,200" },
        ],
      },
      {
        name: "Redmi K80 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,000", good: "¥1,750", fair: "¥1,400" },
          { storage: "512GB", perfect: "¥2,300", good: "¥2,000", fair: "¥1,650" },
        ],
      },
    ],
  },
  {
    brand: "OPPO / OnePlus",
    models: [
      {
        name: "OnePlus 13",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,200", good: "¥2,900", fair: "¥2,400" },
          { storage: "512GB", perfect: "¥3,600", good: "¥3,200", fair: "¥2,700" },
          { storage: "1TB",   perfect: "¥4,000", good: "¥3,600", fair: "¥3,000" },
        ],
      },
      {
        name: "OPPO Find X8 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,600", good: "¥3,200", fair: "¥2,600" },
          { storage: "512GB", perfect: "¥4,000", good: "¥3,600", fair: "¥3,000" },
        ],
      },
      {
        name: "OPPO Reno 13 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥1,600", good: "¥1,400", fair: "¥1,100" },
          { storage: "512GB", perfect: "¥1,800", good: "¥1,550", fair: "¥1,250" },
        ],
      },
    ],
  },
  {
    brand: "vivo / iQOO",
    models: [
      {
        name: "vivo X200 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,800", good: "¥3,400", fair: "¥2,800" },
          { storage: "512GB", perfect: "¥4,200", good: "¥3,800", fair: "¥3,100" },
          { storage: "1TB",   perfect: "¥4,600", good: "¥4,100", fair: "¥3,400" },
        ],
      },
      {
        name: "vivo X200",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,800", good: "¥2,500", fair: "¥2,050" },
          { storage: "512GB", perfect: "¥3,200", good: "¥2,800", fair: "¥2,300" },
        ],
      },
      {
        name: "iQOO 13 Pro",
        storageOptions: [
          { storage: "256GB", perfect: "¥2,500", good: "¥2,200", fair: "¥1,800" },
          { storage: "512GB", perfect: "¥2,800", good: "¥2,500", fair: "¥2,050" },
        ],
      },
    ],
  },
];

// ──────────────────────────────────────────────
// 平板电脑回收报价
// 基准：爱回收参考价 · 网站约高50-100元
// ──────────────────────────────────────────────
export interface TabletBrand {
  brand: string;
  models: DeviceModel[];
}

export const tabletBrands: TabletBrand[] = [
  {
    brand: "iPad (Apple)",
    models: [
      {
        name: 'iPad Pro 13" M4 (2024)',
        storageOptions: [
          { storage: "256GB", perfect: "¥5,600", good: "¥5,000", fair: "¥4,200" },
          { storage: "512GB", perfect: "¥6,300", good: "¥5,600", fair: "¥4,700" },
          { storage: "1TB",   perfect: "¥7,000", good: "¥6,300", fair: "¥5,300" },
          { storage: "2TB",   perfect: "¥7,600", good: "¥6,800", fair: "¥5,800" },
        ],
      },
      {
        name: 'iPad Pro 11" M4 (2024)',
        storageOptions: [
          { storage: "256GB", perfect: "¥4,300", good: "¥3,800", fair: "¥3,200" },
          { storage: "512GB", perfect: "¥4,900", good: "¥4,300", fair: "¥3,600" },
          { storage: "1TB",   perfect: "¥5,400", good: "¥4,800", fair: "¥4,000" },
          { storage: "2TB",   perfect: "¥6,100", good: "¥5,400", fair: "¥4,600" },
        ],
      },
      {
        name: 'iPad Air 13" M2 (2024)',
        storageOptions: [
          { storage: "128GB", perfect: "¥3,300", good: "¥2,900", fair: "¥2,400" },
          { storage: "256GB", perfect: "¥3,600", good: "¥3,200", fair: "¥2,600" },
          { storage: "512GB", perfect: "¥4,000", good: "¥3,500", fair: "¥2,900" },
          { storage: "1TB",   perfect: "¥4,400", good: "¥3,900", fair: "¥3,300" },
        ],
      },
      {
        name: 'iPad Air 11" M2 (2024)',
        storageOptions: [
          { storage: "128GB", perfect: "¥2,600", good: "¥2,300", fair: "¥1,900" },
          { storage: "256GB", perfect: "¥2,900", good: "¥2,500", fair: "¥2,100" },
          { storage: "512GB", perfect: "¥3,200", good: "¥2,800", fair: "¥2,300" },
          { storage: "1TB",   perfect: "¥3,600", good: "¥3,200", fair: "¥2,600" },
        ],
      },
      {
        name: "iPad mini 7 (2024)",
        storageOptions: [
          { storage: "128GB", perfect: "¥2,400", good: "¥2,100", fair: "¥1,700" },
          { storage: "256GB", perfect: "¥2,700", good: "¥2,400", fair: "¥2,000" },
          { storage: "512GB", perfect: "¥3,000", good: "¥2,600", fair: "¥2,200" },
        ],
      },
      {
        name: "iPad (第10代)",
        storageOptions: [
          { storage: "64GB",  perfect: "¥1,500", good: "¥1,300", fair: "¥1,050" },
          { storage: "256GB", perfect: "¥1,800", good: "¥1,550", fair: "¥1,280" },
        ],
      },
    ],
  },
  {
    brand: "三星平板",
    models: [
      {
        name: "Galaxy Tab S10 Ultra",
        storageOptions: [
          { storage: "256GB", perfect: "¥4,200", good: "¥3,700", fair: "¥3,100" },
          { storage: "512GB", perfect: "¥4,700", good: "¥4,200", fair: "¥3,500" },
          { storage: "1TB",   perfect: "¥5,300", good: "¥4,700", fair: "¥4,000" },
        ],
      },
      {
        name: "Galaxy Tab S10+",
        storageOptions: [
          { storage: "256GB", perfect: "¥3,200", good: "¥2,800", fair: "¥2,300" },
          { storage: "512GB", perfect: "¥3,600", good: "¥3,200", fair: "¥2,600" },
        ],
      },
      {
        name: "Galaxy Tab S9 FE",
        storageOptions: [
          { storage: "128GB", perfect: "¥1,500", good: "¥1,300", fair: "¥1,050" },
          { storage: "256GB", perfect: "¥1,700", good: "¥1,450", fair: "¥1,200" },
        ],
      },
    ],
  },
  {
    brand: "华为平板",
    models: [
      {
        name: 'MatePad Pro 13.2"',
        storageOptions: [
          { storage: "256GB", perfect: "¥3,400", good: "¥3,000", fair: "¥2,500" },
          { storage: "512GB", perfect: "¥3,800", good: "¥3,300", fair: "¥2,800" },
        ],
      },
      {
        name: 'MatePad Pro 11"',
        storageOptions: [
          { storage: "128GB", perfect: "¥2,400", good: "¥2,100", fair: "¥1,700" },
          { storage: "256GB", perfect: "¥2,700", good: "¥2,300", fair: "¥1,900" },
        ],
      },
      {
        name: 'MatePad 11.5"',
        storageOptions: [
          { storage: "128GB", perfect: "¥1,100", good: "¥950",  fair: "¥750" },
          { storage: "256GB", perfect: "¥1,300", good: "¥1,100", fair: "¥900" },
        ],
      },
    ],
  },
];

// ──────────────────────────────────────────────
// 相机回收报价
// 基准：爱回收参考价 · 网站约高50-100元
// ──────────────────────────────────────────────
export interface CameraBrand {
  brand: string;
  models: DeviceModel[];
}

export const cameraBrands: CameraBrand[] = [
  {
    brand: "Sony 索尼",
    models: [
      {
        name: "Sony A7C II",
        storageOptions: [{ storage: "机身", perfect: "¥10,000", good: "¥8,900", fair: "¥7,700" }],
      },
      {
        name: "Sony A6700",
        storageOptions: [{ storage: "机身", perfect: "¥6,500", good: "¥5,900", fair: "¥5,200" }],
      },
      {
        name: "Sony ZV-E10 II",
        storageOptions: [{ storage: "机身", perfect: "¥4,000", good: "¥3,500", fair: "¥3,000" }],
      },
      {
        name: "Sony ZV-1 II",
        storageOptions: [{ storage: "机身", perfect: "¥2,400", good: "¥2,100", fair: "¥1,750" }],
      },
    ],
  },
  {
    brand: "Canon 佳能",
    models: [
      {
        name: "Canon EOS R8",
        storageOptions: [{ storage: "机身", perfect: "¥7,000", good: "¥6,300", fair: "¥5,500" }],
      },
      {
        name: "Canon EOS R50",
        storageOptions: [{ storage: "机身", perfect: "¥4,200", good: "¥3,700", fair: "¥3,100" }],
      },
      {
        name: "Canon G7X Mark III",
        storageOptions: [{ storage: "机身", perfect: "¥2,700", good: "¥2,300", fair: "¥1,900" }],
      },
    ],
  },
  {
    brand: "Fujifilm 富士",
    models: [
      {
        name: "Fujifilm X-T5",
        storageOptions: [{ storage: "机身", perfect: "¥8,700", good: "¥7,800", fair: "¥6,700" }],
      },
      {
        name: "Fujifilm X100VI",
        storageOptions: [{ storage: "机身", perfect: "¥8,000", good: "¥7,000", fair: "¥6,100" }],
      },
      {
        name: "Fujifilm X-S20",
        storageOptions: [{ storage: "机身", perfect: "¥5,700", good: "¥5,000", fair: "¥4,300" }],
      },
    ],
  },
  {
    brand: "DJI 大疆",
    models: [
      {
        name: "DJI Osmo Pocket 3",
        storageOptions: [
          { storage: "标准版", perfect: "¥2,100", good: "¥1,800", fair: "¥1,500" },
          { storage: "创作者套装", perfect: "¥2,400", good: "¥2,100", fair: "¥1,750" },
        ],
      },
      {
        name: "DJI Action 5 Pro",
        storageOptions: [
          { storage: "标准版", perfect: "¥2,400", good: "¥2,100", fair: "¥1,800" },
          { storage: "冒险套装", perfect: "¥2,800", good: "¥2,400", fair: "¥2,100" },
        ],
      },
    ],
  },
];

// ──────────────────────────────────────────────
// 手机维修报价
// ──────────────────────────────────────────────
export const iphoneRepairPrices: RepairPrice[] = [
  { model: "iPhone 16 Pro Max", screen: "¥830 - ¥1,030", battery: "¥268", backglass: "¥450", charging: "¥128" },
  { model: "iPhone 16 Pro", screen: "¥730 - ¥930", battery: "¥268", backglass: "¥390", charging: "¥128" },
  { model: "iPhone 16 Plus", screen: "¥630 - ¥830", battery: "¥248", backglass: "¥350", charging: "¥118" },
  { model: "iPhone 16", screen: "¥570 - ¥770", battery: "¥248", backglass: "¥330", charging: "¥118" },
  { model: "iPhone 15 Pro Max", screen: "¥730 - ¥930", battery: "¥248", backglass: "¥420", charging: "¥118" },
  { model: "iPhone 15 Pro", screen: "¥630 - ¥830", battery: "¥248", backglass: "¥370", charging: "¥118" },
  { model: "iPhone 15 Plus", screen: "¥530 - ¥730", battery: "¥228", backglass: "¥330", charging: "¥108" },
  { model: "iPhone 15", screen: "¥480 - ¥670", battery: "¥228", backglass: "¥310", charging: "¥108" },
  { model: "iPhone 14 Pro Max", screen: "¥630 - ¥830", battery: "¥228", backglass: "¥390", charging: "¥108" },
  { model: "iPhone 14 Pro", screen: "¥570 - ¥770", battery: "¥228", backglass: "¥350", charging: "¥108" },
  { model: "iPhone 14 Plus", screen: "¥470 - ¥630", battery: "¥208", backglass: "¥310", charging: "¥98" },
  { model: "iPhone 14", screen: "¥430 - ¥570", battery: "¥208", backglass: "¥290", charging: "¥98" },
  { model: "iPhone 13 Pro Max", screen: "¥530 - ¥730", battery: "¥208", backglass: "¥370", charging: "¥98" },
  { model: "iPhone 13 Pro", screen: "¥470 - ¥630", battery: "¥208", backglass: "¥330", charging: "¥98" },
  { model: "iPhone 13", screen: "¥410 - ¥530", battery: "¥188", backglass: "¥290", charging: "¥88" },
  { model: "iPhone 12 Pro Max", screen: "¥450 - ¥600", battery: "¥188", backglass: "¥330", charging: "¥88" },
  { model: "iPhone 12", screen: "¥370 - ¥470", battery: "¥168", backglass: "¥270", charging: "¥88" },
  { model: "iPhone 11 Pro Max", screen: "¥430 - ¥570", battery: "¥168", backglass: "¥290", charging: "¥88" },
  { model: "iPhone 11", screen: "¥330 - ¥430", battery: "¥158", backglass: "¥250", charging: "¥78" },
];

export const androidRepairPrices: RepairPrice[] = [
  { model: "华为 Mate 70 Pro", screen: "¥830 - ¥1,130", battery: "¥268", backglass: "¥390", charging: "¥128" },
  { model: "华为 Mate 60 Pro", screen: "¥730 - ¥1,030", battery: "¥248", backglass: "¥350", charging: "¥118" },
  { model: "三星 S25 Ultra", screen: "¥930 - ¥1,350", battery: "¥298", backglass: "¥450", charging: "¥138" },
  { model: "三星 Z Fold 6（内屏）", screen: "¥1,350 - ¥1,950", battery: "¥338", backglass: "¥520", charging: "¥158" },
  { model: "三星 Z Fold 5（内屏）", screen: "¥1,150 - ¥1,750", battery: "¥318", backglass: "¥490", charging: "¥148" },
  { model: "三星 Z Flip 6（内屏）", screen: "¥1,130 - ¥1,550", battery: "¥298", backglass: "¥450", charging: "¥138" },
  { model: "三星 Z Flip 5（内屏）", screen: "¥1,030 - ¥1,350", battery: "¥278", backglass: "¥420", charging: "¥128" },
  { model: "小米 15 Ultra", screen: "¥630 - ¥930", battery: "¥228", backglass: "¥330", charging: "¥118" },
  { model: "OPPO Find X8 Pro", screen: "¥670 - ¥970", battery: "¥238", backglass: "¥350", charging: "¥118" },
  { model: "vivo X200 Pro", screen: "¥630 - ¥930", battery: "¥228", backglass: "¥330", charging: "¥118" },
];
