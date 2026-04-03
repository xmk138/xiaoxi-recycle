import { ArrowRight, ShieldCheck, Clock, BadgeDollarSign, Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 brand-gradient opacity-[0.06]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-red-400/10 rounded-full blur-3xl -translate-y-20 translate-x-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-orange-400/10 rounded-full blur-3xl translate-y-20 -translate-x-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              深圳华强北 · 香港地区 正规回收
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              手机回收
              <span className="text-brand-gradient block">高价收购</span>
              专业维修
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              小奚通讯专业回收 iPhone、安卓手机、平板电脑、相机等电子设备。
              <strong className="text-gray-800">现场估价，当场付款</strong>，同时提供
              <strong className="text-gray-800">手机屏幕、电池、后盖</strong>等维修服务，
              华强北实体店，信誉保障。
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo("recycle")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl brand-gradient text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:opacity-90 cursor-pointer"
              >
                立即估价
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("repair")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-base hover:border-red-300 hover:text-red-600 transition-all duration-200 cursor-pointer"
              >
                维修报价
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: BadgeDollarSign, label: "高价回收" },
                { icon: ShieldCheck, label: "信誉保障" },
                { icon: Clock, label: "当场付款" },
                { icon: Star, label: "5星好评" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "📱", title: "iPhone 回收", sub: "16 Pro Max 最高 ¥7,200", color: "from-red-500 to-red-700" },
                { emoji: "🤖", title: "安卓回收", sub: "三星/华为 高价收购", color: "from-rose-500 to-rose-700" },
                { emoji: "💻", title: "平板回收", sub: "iPad Pro 最高 ¥6,200", color: "from-orange-500 to-orange-700" },
                { emoji: "📷", title: "相机回收", sub: "Sony/Fuji 等品牌", color: "from-red-600 to-orange-600" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl card-hover`}
                >
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className="text-sm opacity-80 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="text-2xl font-black text-brand-gradient">3000+</div>
              <div className="text-xs text-gray-500 font-medium">满意客户</div>
            </div>
            <div className="absolute -bottom-4 left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500">Google 4.9 ★</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: "6年+", label: "经营经验" },
            { num: "3000+", label: "回收案例" },
            { num: "30分钟", label: "快速估价" },
            { num: "100%", label: "现金当场付" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-2xl font-black text-brand-gradient">{num}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
