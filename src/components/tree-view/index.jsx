import MenuList from "./menu-list";
import './styles.css'

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <h1>Tree View</h1>
      <p>Recursive Navigation</p>
      <MenuList list={menus} />
    </div>
  );
}