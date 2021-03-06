import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as SpotifyLogo } from "../../assets/sp_logo.svg";
import { useStateValue } from "../../store/stateProvider";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./sidebar.scss";

function Sidebar() {
  const [{ playlists }]: any = useStateValue();

  return (
    <div className="sidebar">
      <SpotifyLogo className="sidebar__logo" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists.map((item: any) => {
        return <SidebarOption key={item.id} title={item.name} />;
      })}
    </div>
  );
}

export default Sidebar;
