import Banner from "./BannerComponent/banner";
import ShowBannerComtent from "./Content/bannerContent";
import CateShowHone from "./Content/category";
import SpBanChayHome from "./Content/spbanchay";
import SpHotShowHome from "./Content/sphot";
import TinTucHome from "./Content/tintuc";
export const metadata = {
  title: 'Trang chủ - Thời trang',
  description: 'Đây là trang chủ của website',
};
export default function Home() {
  return (
    <div>
      <Banner />
      <CateShowHone />
      <SpHotShowHome />
      <ShowBannerComtent />
      <SpBanChayHome />
      <TinTucHome />
    </div>
  );
}
