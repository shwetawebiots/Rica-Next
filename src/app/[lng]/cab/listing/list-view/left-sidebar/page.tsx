"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { getCabs } from "@/redux-toolkit/cab-api";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import Search from "@/components/cab/listing/list-view/common/search";
import GridView from "@/components/common/grid-page/grid/grid-view";

const LeftSidebar: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.cab);
  useEffect(() => {
    dispatch(getCabs());
  }, [dispatch]);

  return (
    <CustomLayout title="light_header" loader="pre" logo="dark" userBgClass="user user-light">
      <BannerCab title={"cab search"} />
      <Search />
      <GridView type={"cab"} topFilter={false} value={data} gridType="list-view" side="left" />
    </CustomLayout>
  );
};

export default LeftSidebar;
