import NavigationMenu from "./NavigationMenu"

const HeaderLayout = ({open, rotate} : {open: boolean, rotate: () => void}) => {
 return (<>
    <NavigationMenu open={open} rotate={rotate} />
  </>)
}

export default HeaderLayout;