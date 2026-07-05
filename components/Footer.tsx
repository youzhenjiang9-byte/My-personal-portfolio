import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative h-[340px] w-full overflow-hidden">
        <img
          src="/images/footer/footer.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto grid h-full max-w-5xl grid-cols-4 gap-16 pt-16 text-[13px] leading-6">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/images/avatar.png"
                alt="Tochuan"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-cover"
              />

              <h3 className="text-3xl font-bold tracking-[-0.05em]">
                Tochuan.
              </h3>
            </div>

            <p className="max-w-[220px] text-white/75">
              浪潮中思考与判断力愈发不可替代，
              无比的想象力和执行力才是AI时代的核心。
            </p>
          </div>

          <div>
            <p className="mb-5 text-white/55">个人信息</p>
            <p className="text-white/45">身份</p>
            <p className="font-semibold">创意探索者</p>
            <br />
            <p className="text-white/45">方向</p>
            <p className="font-semibold">AI创意</p>
            <br />
            <p className="text-white/45">状态</p>
            <p className="font-semibold">AI时代探索中</p>
          </div>

          <div>
            <p className="mb-5 text-white/55">社媒主页</p>
            <p className="text-white/45">小红书</p>
            <p className="font-semibold">搜索“Tochuan”</p>
            <br />
            <p className="text-white/45">Design</p>
            <p className="font-semibold">暂无</p>
            <br />
            <p className="text-white/45">微博 / 抖音</p>
            <p className="font-semibold">暂无</p>
          </div>

          <div>
            <p className="mb-5 text-white/55">联系我</p>
            <p className="text-white/45">邮箱</p>
            <p className="font-semibold">1285292475@qq.com</p>
            <br />
            <p className="text-white/45">微信</p>
            <p className="font-semibold">a1285292475</p>
            <br />
            <p className="text-white/45">合作咨询</p>
            <p className="font-semibold">欢迎通过邮箱或社媒联系</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-24 max-w-5xl items-center justify-between text-xs text-white/25">
        <p>© 2026 Tochuan · Tochuan Design</p>

        <div className="flex gap-8">
          <span>小红书</span>
          <span>Design</span>
          <span>Github</span>
        </div>
      </div>
    </footer>
  );
}