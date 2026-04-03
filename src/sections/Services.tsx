import { Smartphone, Tablet, Camera, Wrench, RefreshCw, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "苹果手机回收",
    desc: "iPhone 全系列高价收购，16 / 15 / 14 / 13 系列均可估价，现场验机当场付款。",
    tag: "立即估价",
    color: "bg-red-50 text-red-600 border-red-100",
    iconBg: "bg-red-100",
  },
  {
    icon: Smartphone,
    title: "安卓手机回收",
    desc: "华为、三星、小米、OPPO、vivo 等主流品牌全系收购，三星折叠屏高价专收。",
    tag: "立即估价",
    color: "bg-rose-50 text-rose-600 border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: Tablet,
    title: "平板电脑回收",
    desc: "iPad 全系、三星 Galaxy Tab、华为 MatePad 等，高价回收，支持港版/国行。",
    tag: "立即估价",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: Camera,
    title: "相机回收",
    desc: "索尼、佳能、富士、大疆等品牌相机及镜头，高价收购，支持港版正品。",
    tag: "立即估价",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: Wrench,
    title: "手机维修",
    desc: "专业维修手机屏幕、电池更换、后盖维修、充电口故障等，原厂配件优先。",
    tag: "查看报价",
    color: "bg-red-50 text-red-700 border-red-200",
    iconBg: "bg-red-100",
  },
  {
    icon: ShieldCheck,
    title: "质保服务",
    desc: "所有维修提供90天质保，换屏保固包换，客户满意为第一原则。",
    tag: "了解更多",
    color: "bg-green-50 text-green-600 border-green-100",
    iconBg: "bg-green-100",
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-medium mb-4">
            <RefreshCw className="w-4 h-4" />
            全品类服务
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            我们提供的服务
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            覆盖苹果、安卓、平板、相机的专业回收与维修服务，服务深圳华强北及香港地区
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 border ${service.color} card-hover`}
                onClick={() => scrollTo(i < 4 ? "recycle" : "repair")}
              >
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full border">
                  {service.tag} →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
