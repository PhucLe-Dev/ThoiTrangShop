import Banner from "./BannerComponent/banner";
import CateShowHone from "./Content/category";
export const metadata = {
  title: 'Trang chủ - Thời trang',
  description: 'Đây là trang chủ của website',
};
export default function Home() {
  return (
    <div>
      <Banner />
      <CateShowHone />
    </div>
  );
}
