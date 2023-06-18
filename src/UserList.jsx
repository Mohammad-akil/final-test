import { useEffect, useState } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchusers } from "./fetchUsersSlice";

const UserList = () => {
  // const [users, setUsers] = useState([]);

  const [page, setpage] = useState(20);
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.userList);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `https://api.github.com/users?per_page=${page}`
  //   );
  //   const data = await response.json();
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [page]);

  useEffect(() => {
    dispatch(fetchusers(page));
  }, [page]);

  const handleLoadMore = () => {
    if (page <= 100) {
      setpage(page + 10);
    } else {
      setpage(100);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 p-3 gap-3">
        {users &&
          users.map((item) => {
            return <User key={item.id} data={item} add={"Add to booklist"} />;
          })}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-orange-700 text-2xl rounded-md px-2 py-1"
          onClick={handleLoadMore}
        >
          load more
        </button>
      </div>
    </>
  );
};

export default UserList;
