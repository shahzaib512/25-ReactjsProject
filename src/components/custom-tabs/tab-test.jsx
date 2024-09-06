import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>
        This is content for Tab 1
        <h1>Hello World!</h1>
        <p>Some random content</p>
      </div>,
      
    },
    {
      label: "Tab 2",
      content: <div>
        This is content for Tab 2
        <h1>Hellow There!</h1>
        <p>Some random content</p>
      </div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}