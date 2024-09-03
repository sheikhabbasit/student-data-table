import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WorkIcon from "@mui/icons-material/Work";

class MenuPath {
  constructor(
    title,
    icon,
    hasChildren = false,
    childrenMenu = [],
    alias = null
  ) {
    this.title = title;
    this.icon = icon;
    this.hasChildren = hasChildren;
    this.childrenMenu = childrenMenu;
    this.alias = alias || title.replace(" ", "_").toLowerCase();
  }
}

export const DashboardMenus = [
  new MenuPath("Home", HomeIcon),
  new MenuPath("Students", PersonIcon, false),
  new MenuPath("Blog Page", RssFeedIcon, true, [{ title: "All Blogs" }]),
  new MenuPath("Careers Page", WorkIcon, true, [
    {
      title: "All Job Postings",
      hasChildren: false,
    },
    {
      title: "Add a New Job",
      hasChildren: false,
    },
  ]),
];
