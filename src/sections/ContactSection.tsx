import { MapPin, Phone, Clock, Navigation, MessageCircle, ChevronRight, Video } from "lucide-react";

const storeImages = [
  {
    src: "/images/store-poster.jpg",
    alt: "小奚通讯 - 深圳上门回收手机",
    caption: "预约上门 · 免拆验机 · 当面打款",
  },
  {
    src: "/images/store-entrance.jpg",
    alt: "华联发综合楼入口",
    caption: "从这个门进来 → 乘电梯上4楼",
  },
  {
    src: "/images/store-floor4.jpg",
    alt: "4楼走廊导航",
    caption: "4F 沿通道一直走 → 右手边 423",
  },
  {
    src: "/images/store-location.jpg",
    alt: "门店位置全景",
    caption: "华联发综合楼 4楼 423 小奚通讯",
  },
];

const steps = [
  { num: "1", icon: "🚪", title: "找到华联发综合楼", desc: "深圳华强北，远望数码商城旁" },
  { num: "2", icon: "🛗", title: "乘电梯或走楼梯上4楼", desc: "进入大门后，右手边有电梯，左手边可走楼梯" },
  { num: "3", icon: "➡️", title: "沿走廊一直走到底", desc: "4楼走廊直走，最后一间右手边" },
  { num: "4", icon: "📍", title: "到达 423 小奚通讯", desc: "看到「小奚通讯 Xiaoxi Communication」招牌就到了" },
];

export default function ContactSection() {
  return (
    <div className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-4">
            📍 门店位置
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            找到<span className="text-brand-gradient">小奚通讯</span>
          </h2>
          <p className="text-gray-500 text-lg">深圳华强北 · 华联发综合楼 4楼 423</p>
        </div>

        {/* Store Photo Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {storeImages.map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium leading-tight">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Store Route Video */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <Video className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">门店路线视频</h3>
                <p className="text-gray-500 text-[11px]">实地拍摄，跟着视频轻松找到我们</p>
              </div>
            </div>
            <video
              src="/videos/store-route.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/images/store-entrance.jpg"
              className="w-full rounded-xl shadow-md"
            >
              您的浏览器不支持视频播放
            </video>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Navigation Steps */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-red-500" />
              导航指引
            </h3>
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-sm">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="font-bold text-gray-800 text-sm flex items-center gap-2">
                      <span>{step.icon}</span>
                      {step.title}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{step.desc}</div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-4 pt-2 flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-gray-300 rotate-90 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Subway */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🚇</span>
                <span className="font-bold text-blue-800 text-sm">地铁指引</span>
              </div>
              <p className="text-blue-700 text-xs leading-relaxed">
                地铁 <strong>2号线 / 7号线</strong> 华强北站，<strong>B出口</strong>出站步行约 <strong>3分钟</strong> 即达华联发综合楼。
              </p>
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="space-y-4">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base mb-1">门店地址</div>
                  <div className="text-gray-700 text-sm leading-relaxed">
                    广东省深圳市福田区华强北街道<br />
                    华联发综合楼 <strong className="text-red-600">4楼 423</strong>
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">小奚通讯</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-2">英文：4F, Room 423, Hualianfa Building, Huaqiangbei</div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base">联系小奚</div>
                  <div className="text-gray-500 text-xs">电话 / WhatsApp / 微信同号</div>
                </div>
              </div>
              <a
                href="tel:18598264348"
                className="flex items-center justify-between w-full px-4 py-3 brand-gradient rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
              >
                <span className="text-lg">📞 18598264348</span>
                <span className="text-white/80 text-sm">点击拨打</span>
              </a>
              <a
                href="https://wa.me/8618598264348"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 mt-2 bg-green-500 rounded-xl text-white font-bold hover:bg-green-600 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp 联系
                </span>
                <span className="text-white/80 text-sm">香港客户首选</span>
              </a>
            </div>

            {/* Hours + WeChat */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span className="font-bold text-gray-800 text-sm">营业时间</span>
                </div>
                <div className="text-gray-600 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>周一至周日</span>
                    <span className="font-semibold text-gray-800">11:00 - 22:00</span>
                  </div>
                  <div className="text-green-600 font-medium">● 节假日正常营业</div>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col items-center">
                <span className="font-bold text-gray-800 text-sm mb-2">微信扫码联系</span>
                <img
                  src="/images/wechat-qr.jpg"
                  alt="小奚通讯微信二维码"
                  className="w-20 h-20 object-contain rounded-xl border border-gray-100"
                />
              </div>
            </div>

            {/* Hong Kong note */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <div className="text-blue-800 text-sm">
                <strong>🇭🇰 香港客户：</strong>可通过 WhatsApp 或微信提前约好，带机到深圳华强北门店，或安排专人上门取机（可议）。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
