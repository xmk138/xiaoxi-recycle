import { useState } from "react";
import { ChevronDown, Info, Smartphone, Tablet, Camera, HardDrive } from "lucide-react";
import { iphoneModels, androidBrands, tabletBrands, cameraBrands } from "../data";
import type { DeviceModel, StorageOption } from "../data";

type TabType = "iphone" | "android" | "tablet" | "camera";

const tabs: { id: TabType; label: string; icon: typeof Smartphone }[] = [
  { id: "iphone", label: "苹果 iPhone", icon: Smartphone },
  { id: "android", label: "安卓手机", icon: Smartphone },
  { id: "tablet", label: "平板电脑", icon: Tablet },
  { id: "camera", label: "相机", icon: Camera },
];

const conditionList = [
  {
    key: "perfect" as const,
    label: "全新",
    desc: "屏幕完美无划痕",
    color: "border-green-400 bg-green-50 text-green-700",
    activeColor: "bg-green-500 text-white border-green-500",
    dot: "bg-green-500",
    priceColor: "text-green-600",
  },
  {
    key: "good" as const,
    label: "轻微痕迹",
    desc: "轻微划痕，功能正常",
    color: "border-blue-400 bg-blue-50 text-blue-700",
    activeColor: "bg-blue-500 text-white border-blue-500",
    dot: "bg-blue-500",
    priceColor: "text-blue-600",
  },
  {
    key: "fair" as const,
    label: "明显痕迹",
    desc: "有划痕或小磕碰",
    color: "border-orange-400 bg-orange-50 text-orange-700",
    activeColor: "bg-orange-500 text-white border-orange-500",
    dot: "bg-orange-500",
    priceColor: "text-orange-500",
  },
];

function ModelCard({ model }: { model: DeviceModel }) {
  const [open, setOpen] = useState(false);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>(model.storageOptions[0]);
  const [selectedCondition, setSelectedCondition] = useState<"perfect" | "good" | "fair">("perfect");

  const currentPrice = selectedStorage[selectedCondition];
  const conditionInfo = conditionList.find((c) => c.key === selectedCondition)!;

  return (
    <div
      className={`border rounded-2xl mb-3 overflow-hidden bg-white transition-all duration-200 ${
        open ? "border-red-300 shadow-md" : "border-gray-100 hover:border-red-200 hover:shadow-sm"
      }`}
    >
      {/* Header Row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
          <span className="font-medium text-gray-800 text-sm sm:text-base text-left">{model.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-red-50 text-red-600 font-semibold px-2 py-0.5 rounded-full hidden sm:block">
            {model.storageOptions[0].perfect} 起
          </span>
          <div className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-red-400" />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {open && (
        <div className="border-t border-red-50 px-4 pb-5 pt-4 bg-red-50/20">
          {/* Step 1: Storage */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2.5">
              <HardDrive className="w-3.5 h-3.5 text-red-500" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">第一步：选择内存容量</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {model.storageOptions.map((opt) => (
                <button
                  key={opt.storage}
                  onClick={() => setSelectedStorage(opt)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold border-2 transition-all duration-150 cursor-pointer ${
                    selectedStorage.storage === opt.storage
                      ? "border-red-500 bg-red-500 text-white shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:border-red-300 hover:text-red-600"
                  }`}
                >
                  {opt.storage}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Condition */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-3.5 h-3.5 text-red-500 text-xs font-bold flex items-center justify-center">✦</span>
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">第二步：选择外观成色</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {conditionList.map((cond) => (
                <button
                  key={cond.key}
                  onClick={() => setSelectedCondition(cond.key)}
                  className={`rounded-xl border-2 py-2.5 px-2 text-center transition-all duration-150 cursor-pointer ${
                    selectedCondition === cond.key
                      ? cond.activeColor + " shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${selectedCondition === cond.key ? "bg-white" : cond.dot}`} />
                    <span className="text-xs font-bold">{cond.label}</span>
                  </div>
                  <div className={`text-[10px] ${selectedCondition === cond.key ? "opacity-80" : "text-gray-400"}`}>
                    {cond.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Result Price */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-4 flex items-center justify-between shadow-md">
            <div>
              <div className="text-white/80 text-xs mb-0.5">
                {model.name} · {selectedStorage.storage} · {conditionInfo.label}
              </div>
              <div className="text-white text-2xl font-black tracking-tight">{currentPrice}</div>
              <div className="text-white/70 text-[11px] mt-0.5">参考回收价 · 实际到店验机为准</div>
            </div>
            <a
              href="tel:18598264348"
              className="bg-white text-red-600 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap shadow-sm"
            >
              立即询价
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-3 flex items-start gap-1.5">
            <Info className="w-3 h-3 mt-0.5 flex-shrink-0 text-gray-400" />
            以上为市场参考价，受行情波动影响。如需精准报价请致电小奚：18598264348
          </p>
        </div>
      )}
    </div>
  );
}

interface BrandSectionProps {
  brand: string;
  models: DeviceModel[];
  isFolding?: boolean;
  defaultOpen?: boolean;
}

function BrandSection({ brand, models, isFolding, defaultOpen = false }: BrandSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-colors cursor-pointer mb-2 ${
          isFolding
            ? "bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 hover:from-red-100 hover:to-orange-100"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          {isFolding && <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">折叠屏</span>}
          <span className={`font-bold text-sm sm:text-base ${isFolding ? "text-red-700" : "text-gray-800"}`}>
            {brand.replace("🔥 ", "")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${isFolding ? "bg-red-100 text-red-600" : "bg-white text-gray-500"}`}>
            {models.length} 款
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""} ${isFolding ? "text-red-400" : "text-gray-400"}`} />
        </div>
      </button>
      {open && models.map((m, i) => <ModelCard key={i} model={m} />)}
    </div>
  );
}

export default function RecycleSection() {
  const [activeTab, setActiveTab] = useState<TabType>("iphone");

  const renderContent = () => {
    if (activeTab === "iphone") {
      return iphoneModels.map((m, i) => <ModelCard key={i} model={m} />);
    }
    if (activeTab === "android") {
      return androidBrands.map((b, i) => (
        <BrandSection key={i} brand={b.brand} models={b.models} isFolding={b.isFolding} defaultOpen={i === 0} />
      ));
    }
    if (activeTab === "tablet") {
      return tabletBrands.map((b, i) => (
        <BrandSection key={i} brand={b.brand} models={b.models} defaultOpen={i === 0} />
      ));
    }
    if (activeTab === "camera") {
      return cameraBrands.map((b, i) => (
        <BrandSection key={i} brand={b.brand} models={b.models} defaultOpen={i === 0} />
      ));
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-4">
            💰 实时报价参考
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            回收<span className="text-brand-gradient">参考报价</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            选择<strong className="text-gray-700">内存容量</strong>和<strong className="text-gray-700">外观成色</strong>，立即查看您的设备参考报价
          </p>
        </div>

        {/* Notice Banner */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <strong>温馨提示：</strong>以下价格为市场参考价，受二手市场行情波动影响。如需精准报价，欢迎携机到店或致电
            <a href="tel:18598264348" className="font-bold underline mx-1">18598264348</a>
            咨询小奚，深圳华强北地区可上门取机。
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-white border border-gray-100 shadow-sm p-1.5 rounded-2xl mb-8 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-200 cursor-pointer flex-1 justify-center ${
                activeTab === id
                  ? "tab-active"
                  : "text-gray-600 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>{renderContent()}</div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">找不到您的型号？联系小奚获取专属报价</p>
          <a
            href="tel:18598264348"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl brand-gradient text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:opacity-90"
          >
            📞 立即致电：18598264348
          </a>
        </div>
      </div>
    </div>
  );
}
