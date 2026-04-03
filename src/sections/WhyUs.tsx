import { ShieldCheck, MapPin, Clock, BadgeDollarSign, Star, Users, ThumbsUp, Zap } from "lucide-react";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "价格透明、行情最优",
    desc: "实时参考市场行情，报价公开透明，同行可比，保证每一台设备都有最合理的价格。",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: ShieldCheck,
    title: "华强北实体店，信誉有保障",
    desc: "坐落深圳华强北华联发综合楼，实体门店经营，非中间商，不用担心被骗或跑路。",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Zap,
    title: "30分钟快速估价",
    desc: "专业验机团队，到店30分钟内完成验机估价，当场付款，不拖延不压价。",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Clock,
    title: "维修速度快，当天取机",
    desc: "换屏、换电池等常规维修最快1小时完成，急修可优先安排，当天取机不是问题。",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: MapPin,
    title: "服务深圳 + 香港两地",
    desc: "深圳华强北实体店，同时接受香港客户，港版机型均可估价，港币/人民币均可结算。",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: ThumbsUp,
    title: "90天维修质保",
    desc: "所有维修服务提供90天质保，换屏破屏包换，电池质量保证，售后无忧。",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const reviews = [
  {
    name: "张先生",
    city: "深圳",
    rating: 5,
    text: "换了iPhone 15 Pro的屏幕，价格比商场便宜很多，而且做工很好，完全看不出换过，推荐！",
  },
  {
    name: "陈小姐",
    city: "香港",
    rating: 5,
    text: "从香港过来卖iPhone 14 Pro Max，报价比网上平台高，现场验机付款，很专业很放心。",
  },
  {
    name: "林先生",
    city: "深圳福田",
    rating: 5,
    text: "卖了华为Mate 60 Pro，给的价格很满意，当场微信转账，没有任何套路，下次还会来。",
  },
];

export default function WhyUs() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            为什么选择我们
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            小奚通讯的优势
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            6年专注电子设备回收维修，深圳华强北地区客户首选
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${r.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Reviews */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">客户真实评价</h3>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-600 text-sm ml-2">综合评分 4.9 / 5.0（Google 地图）</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center text-white text-xs font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
