import { useEffect, useState } from "react";

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/allMenu`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Menu Data Fail to fetch From Menu Section");
        }
        return response.json();
      })
      .then((data) => {
        setMenus(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetch in menu Data of Menu Section ", error);
      });
  }, []);
  return [menus, loading];
};

export default useMenu;
