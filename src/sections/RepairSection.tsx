import { useState } from "react";
import { Info, ChevronDown, ChevronUp, Wrench } from "lucide-react";
import { iphoneRepairPrices, androidRepairPrices } from "../data";
import type { RepairPrice } from "../data";

type TabType = "iphone" | "android";

function RepairRow({ item }: { item: RepairPrice }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl mb-2 overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-orange-400" />
          <span className="font-medium text-gray-800 text-sm sm:text-base">{item.model}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-orange-50 text-orange-600 border border-orange-100 px-2 py-1 rounded-lg hidden sm:block font-medium">
            换屏 {item.screen}
          </span>
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 bg-orange-50/30 border-t border-orange-50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            {[
              { label: "换屏幕", value: item.screen, color: "border-red-100 text-red-600", bg: "bg-red-50" },
              { label: "换电池", value: item.battery, color: "border-green-100 text-green-600", bg: "bg-green-50" },
              { label: "换后盖/后壳", value: item.backglass, color: "border-orange-100 text-orange-600", bg: "bg-orange-50" },
              { label: "充电口维修", value: item.charging || "¥68 - ¥128", color: "border-rose-100 text-rose-600", bg: "bg-rose-50" },
            ].map(({ label, value, color, bg }) => (
              <div key={label} className={`rounded-xl p-3 border ${color} ${bg} text-center`}>
                <div className="text-xs text-gray-500 mb-1.5">{label}</div>
                <div className={`text-sm font-bold ${color.split(" ")[1]}`}>{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-white rounded-lg border border-gray-100">
            <p className="text-xs text-gray-500 flex items-start gap-1.5">
              <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
              价格区间因配件品质（原厂/高仿/副厂）不同而有差异。维修提供 <strong>90天质保</strong>，换屏破屏包换。实际报价以到店检测为准。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RepairSection() {
  const [activeTab, setActiveTab] = useState<TabType>("iphone");

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
            <Wrench className="w-4 h-4" />
            专业维修报价
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">手机维修报价</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            专业维修 iPhone 及各大安卓品牌，原厂配件优先，90天质保
          </p>
        </div>

        {/* Services List */}
        <div className="grid sm:grid-cols-4 gap-4 mb-10">
          {[
            { icon: "🖥️", title: "换屏幕", desc: "原厂/高品质屏幕，显示完美" },
            { icon: "🔋", title: "换电池", desc: "容量恢复，续航如新" },
            { icon: "📱", title: "换后盖", desc: "玻璃/原壳更换，焕然一新" },
            { icon: "⚡", title: "充电口", desc: "接触不良、充不进电修复" },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-bold text-gray-800 text-sm mb-1">{s.title}</div>
              <div className="text-xs text-gray-500">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl mb-8">
          {[
            { id: "iphone" as const, label: "苹果 iPhone 维修" },
            { id: "android" as const, label: "安卓手机维修" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                activeTab === id
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Table Header */}
        <div className="flex items-center justify-between px-4 mb-3">
          <span className="text-sm font-semibold text-gray-500">设备型号</span>
          <span className="text-sm font-semibold text-gray-500 hidden sm:block">换屏参考价</span>
        </div>

        {/* Content */}
        <div>
          {activeTab === "iphone"
            ? iphoneRepairPrices.map((item, i) => <RepairRow key={i} item={item} />)
            : androidRepairPrices.map((item, i) => <RepairRow key={i} item={item} />)}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-white rounded-2xl border border-red-100 p-6 text-center shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">没有找到您的型号？</h3>
          <p className="text-gray-500 text-sm mb-4">
            我们维修几乎所有安卓和苹果机型，欢迎致电或来店咨询
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:18598264348"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-90"
            >
              📞 致电：18598264348
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-red-300 hover:text-red-600 transition-all duration-200"
            >
              微信咨询
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
