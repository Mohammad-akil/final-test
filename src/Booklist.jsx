import { useDispatch, useSelector } from "react-redux";

import { remove } from "./usersSlice";

const Booklist = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  if (users.length === 0) {
    return <h1>Empty Booklist</h1>;
  }
  return (
    <div className=" mt-2 gap-2  grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
      {users &&
        users.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <img
              className="rounded-full w-28 h-28 items-center"
              src={data.avatar_url}
              alt="image.."
            />
            <p className="text-xl text-center">{data?.login}</p>
            <button
              className="bg-blue-600 rounded-md p-1 px-2 hover:bg-blue-500"
              onClick={() => handleRemove(data.id)}
            >
              remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default Booklist;
