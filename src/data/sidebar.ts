interface NavigationItem {
  label: string
  href: string
}

interface SideBarType {
  guides: Array<NavigationItem>
  projects?: Array<NavigationItem>
  workshops?: Array<NavigationItem>
}
const SIDEBAR:SideBarType = {
    'guides': [

    ]
}
