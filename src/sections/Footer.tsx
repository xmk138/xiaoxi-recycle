import { Smartphone, Phone, MapPin, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "回收服务",
    links: [
      { label: "iPhone 回收报价", id: "recycle" },
      { label: "安卓手机回收", id: "recycle" },
      { label: "平板电脑回收", id: "recycle" },
      { label: "相机回收", id: "recycle" },
    ],
  },
  {
    title: "维修服务",
    links: [
      { label: "iPhone 维修报价", id: "repair" },
      { label: "安卓维修报价", id: "repair" },
      { label: "屏幕维修更换", id: "repair" },
      { label: "电池更换", id: "repair" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "为什么选我们", id: "why-us" },
      { label: "门店信息", id: "contact" },
      { label: "联系方式", id: "contact" },
      { label: "香港客户指引", id: "contact" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center shadow-md">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">小奚通讯</div>
                <div className="text-[10px] text-gray-400 -mt-0.5">回收 · 维修 · 深圳&香港</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              专注电子设备回收与维修6年，深圳华强北实体店，服务深圳及香港地区客户。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:18598264348" className="hover:text-white transition-colors">185 9826 4348</a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>深圳福田华强北华联发综合楼 4楼423</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>微信：小奚通讯（客服3号）</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 小奚通讯. All rights reserved. 深圳市福田区华强北华联发综合楼 4楼423
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>服务深圳 · 香港</span>
            <span>·</span>
            <a href="tel:18598264348" className="hover:text-gray-300 transition-colors">185-9826-4348</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
